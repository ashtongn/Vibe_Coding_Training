import { Link } from 'react-router-dom';
import type { FlattenedLesson } from '../../types/course';
import { buildLessonPath, getLessonTypeLabel } from '../../utils/course';

type PrevNextNavProps = {
  previousLesson?: FlattenedLesson;
  nextLesson?: FlattenedLesson;
};

function LessonNavCard({
  lessonEntry,
  direction,
}: {
  lessonEntry: FlattenedLesson;
  direction: 'Previous' | 'Next';
}) {
  return (
    <Link
      to={buildLessonPath(lessonEntry.module.id, lessonEntry.lesson.id)}
      className="flex min-w-0 flex-1 rounded-3xl border border-white/70 bg-white/90 p-5 shadow-panel transition hover:-translate-y-0.5 hover:border-ink-200 hover:bg-white"
    >
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
          {direction}
        </p>
        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-signal-700">
          {getLessonTypeLabel(lessonEntry.lesson)} • {lessonEntry.module.title}
        </p>
        <p className="mt-2 truncate text-base font-bold text-ink-900">
          {lessonEntry.lesson.title}
        </p>
      </div>
    </Link>
  );
}

export function PrevNextNav({
  previousLesson,
  nextLesson,
}: PrevNextNavProps) {
  return (
    <nav
      aria-label="Lesson navigation"
      className="flex flex-col gap-4 md:flex-row"
    >
      {previousLesson ? (
        <LessonNavCard lessonEntry={previousLesson} direction="Previous" />
      ) : (
        <div className="flex-1 rounded-3xl border border-dashed border-ink-200 bg-white/50 p-5 text-sm text-ink-400">
          You are at the beginning of the course.
        </div>
      )}

      {nextLesson ? (
        <LessonNavCard lessonEntry={nextLesson} direction="Next" />
      ) : (
        <div className="flex-1 rounded-3xl border border-dashed border-ink-200 bg-white/50 p-5 text-sm text-ink-400">
          You have reached the final lesson.
        </div>
      )}
    </nav>
  );
}
