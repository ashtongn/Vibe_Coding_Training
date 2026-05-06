import type { CourseManifest, FlattenedLesson } from '../../types/course';
import {
  getCourseProgress,
  getLessonTypeLabel,
} from '../../utils/course';

type ProgressHeaderProps = {
  manifest: CourseManifest;
  currentLesson: FlattenedLesson;
  onOpenSidebar: () => void;
};

export function ProgressHeader({
  manifest,
  currentLesson,
  onOpenSidebar,
}: ProgressHeaderProps) {
  const progress = getCourseProgress(manifest, currentLesson.flatIndex);

  return (
    <header className="sticky top-0 z-20 border-b border-white/60 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-0">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={onOpenSidebar}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-ink-200 bg-white text-ink-700 shadow-sm transition hover:border-ink-300 hover:text-ink-900 lg:hidden"
            aria-label="Open course navigation"
          >
            <span className="text-xl">≡</span>
          </button>

          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-signal-700">
              {currentLesson.module.title}
            </p>
            <h1 className="truncate text-lg font-extrabold text-ink-900 sm:text-2xl">
              {currentLesson.lesson.title}
            </h1>
          </div>
        </div>

        <div className="hidden min-w-[240px] max-w-[320px] flex-1 lg:block">
          <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
            <span>{getLessonTypeLabel(currentLesson.lesson)}</span>
            <span>
              Lesson {progress.currentLessonNumber} of {progress.totalLessons}
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-ink-100">
            <div
              className="h-full rounded-full bg-signal-500 transition-all"
              style={{ width: `${progress.percentComplete}%` }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
