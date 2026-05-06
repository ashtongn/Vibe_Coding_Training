import { useEffect, useMemo, useState } from 'react';
import type { VideoLesson as VideoLessonType } from '../../types/course';
import { isValidYouTubeId } from '../../utils/course';

type VideoLessonProps = {
  lesson: VideoLessonType;
};

export function VideoLesson({ lesson }: VideoLessonProps) {
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>(
    'loading',
  );

  const embedUrl = useMemo(
    () =>
      `https://www.youtube-nocookie.com/embed/${lesson.youtubeId}?rel=0&modestbranding=1`,
    [lesson.youtubeId],
  );

  useEffect(() => {
    if (!isValidYouTubeId(lesson.youtubeId)) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    const probe = new Image();
    probe.onload = () => setStatus('ready');
    probe.onerror = () => setStatus('error');
    probe.src = `https://img.youtube.com/vi/${lesson.youtubeId}/hqdefault.jpg`;

    return () => {
      probe.onload = null;
      probe.onerror = null;
    };
  }, [lesson.youtubeId]);

  return (
    <section className="rounded-[2rem] border border-white/70 bg-white/90 p-4 shadow-panel sm:p-6">
      <div className="mb-5">
        <p className="text-sm leading-7 text-ink-600">{lesson.description}</p>
      </div>

      {status === 'loading' && (
        <div className="flex aspect-video items-center justify-center rounded-[1.5rem] border border-dashed border-ink-200 bg-ink-50 text-sm font-medium text-ink-500">
          Loading video lesson...
        </div>
      )}

      {status === 'error' && (
        <div className="flex aspect-video flex-col items-center justify-center rounded-[1.5rem] border border-rose-200 bg-rose-50 px-6 text-center">
          <p className="text-lg font-bold text-rose-700">Video unavailable</p>
          <p className="mt-2 max-w-lg text-sm leading-6 text-rose-600">
            The configured YouTube ID is missing or invalid. Update the lesson
            manifest entry to a valid 11-character YouTube video ID.
          </p>
        </div>
      )}

      {status === 'ready' && (
        <div className="overflow-hidden rounded-[1.5rem] border border-ink-200 bg-ink-950">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src={embedUrl}
              title={lesson.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
