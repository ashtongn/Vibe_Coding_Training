import { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import type { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';
import type { PdfLesson as PdfLessonType } from '../../types/course';
import { resolvePublicAssetPath } from '../../utils/course';

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

type PdfLessonProps = {
  lesson: PdfLessonType;
};

export function PdfLesson({ lesson }: PdfLessonProps) {
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>(
    'loading',
  );
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    let isMounted = true;
    let pdfDocument: PDFDocumentProxy | null = null;
    const canvasContainer = canvasContainerRef.current;

    async function renderPdf() {
      if (!canvasContainer) {
        return;
      }

      setStatus('loading');
      setPageCount(0);
      canvasContainer.innerHTML = '';

      try {
        pdfDocument = await pdfjsLib.getDocument(
          resolvePublicAssetPath(lesson.pdfPath),
        ).promise;

        if (!isMounted) {
          return;
        }

        setPageCount(pdfDocument.numPages);

        for (let pageNumber = 1; pageNumber <= pdfDocument.numPages; pageNumber += 1) {
          const page = await pdfDocument.getPage(pageNumber);
          const viewport = page.getViewport({ scale: 1.2 });
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');

          if (!context) {
            throw new Error('Canvas rendering is not supported.');
          }

          canvas.width = viewport.width;
          canvas.height = viewport.height;
          canvas.className =
            'w-full rounded-2xl border border-ink-200 bg-white shadow-sm';

          canvasContainer.appendChild(canvas);

          await page.render({
            canvasContext: context,
            viewport,
          }).promise;
        }

        if (isMounted) {
          setStatus('ready');
        }
      } catch (_error) {
        if (isMounted) {
          setStatus('error');
        }
      }
    }

    void renderPdf();

    return () => {
      isMounted = false;
      if (pdfDocument) {
        void pdfDocument.destroy();
      }
    };
  }, [lesson.pdfPath]);

  return (
    <section className="rounded-[2rem] border border-white/70 bg-white/90 p-4 shadow-panel sm:p-6">
      <div className="mb-5 flex flex-col gap-2 border-b border-ink-100 pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm leading-7 text-ink-600">{lesson.description}</p>
        </div>
        {pageCount > 0 && (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
            {pageCount} page{pageCount === 1 ? '' : 's'}
          </p>
        )}
      </div>

      {status === 'loading' && (
        <div className="mb-5 flex min-h-[320px] items-center justify-center rounded-[1.5rem] border border-dashed border-ink-200 bg-ink-50 text-sm font-medium text-ink-500">
          Loading PDF lesson...
        </div>
      )}

      {status === 'error' && (
        <div className="flex min-h-[320px] flex-col items-center justify-center rounded-[1.5rem] border border-rose-200 bg-rose-50 px-6 text-center">
          <p className="text-lg font-bold text-rose-700">PDF unavailable</p>
          <p className="mt-2 max-w-lg text-sm leading-6 text-rose-600">
            The PDF could not be loaded. Confirm the file exists in
            `public/pdfs` and the manifest path matches the public URL.
          </p>
        </div>
      )}

      <div
        ref={canvasContainerRef}
        className={`space-y-5 ${status === 'ready' ? 'block' : 'hidden'}`}
      />
    </section>
  );
}
