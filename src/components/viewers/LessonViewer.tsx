import { Suspense, lazy } from 'react';
import type { FlattenedLesson } from '../../types/course';

const MarkdownLesson = lazy(async () => {
  const module = await import('./MarkdownLesson');
  return { default: module.MarkdownLesson };
});

const PdfLesson = lazy(async () => {
  const module = await import('./PdfLesson');
  return { default: module.PdfLesson };
});

const VideoLesson = lazy(async () => {
  const module = await import('./VideoLesson');
  return { default: module.VideoLesson };
});

type LessonViewerProps = {
  lessonEntry: FlattenedLesson;
};

export function LessonViewer({ lessonEntry }: LessonViewerProps) {
  const { lesson } = lessonEntry;

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-panel sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-signal-700">
          {lessonEntry.module.title}
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
          {lesson.title}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-ink-600">
          {lesson.description}
        </p>
      </section>

      <Suspense
        fallback={
          <section className="rounded-[2rem] border border-white/70 bg-white/90 p-8 shadow-panel">
            <div className="flex min-h-[280px] items-center justify-center rounded-[1.5rem] border border-dashed border-ink-200 bg-ink-50 text-sm font-medium text-ink-500">
              Loading lesson content...
            </div>
          </section>
        }
      >
        {lesson.type === 'markdown' && <MarkdownLesson lesson={lesson} />}
        {lesson.type === 'pdf' && <PdfLesson lesson={lesson} />}
        {lesson.type === 'video' && <VideoLesson lesson={lesson} />}
      </Suspense>
    </div>
  );
}
