import { NavLink } from 'react-router-dom';
import type { CourseManifest, FlattenedLesson } from '../../types/course';
import { buildLessonPath, getLessonTypeLabel } from '../../utils/course';

type SidebarProps = {
  manifest: CourseManifest;
  currentLesson: FlattenedLesson;
  isOpen: boolean;
  onClose: () => void;
};

export function Sidebar({
  manifest,
  currentLesson,
  isOpen,
  onClose,
}: SidebarProps) {
  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-ink-900/35 backdrop-blur-sm transition lg:hidden ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[320px] max-w-[85vw] flex-col border-r border-white/70 bg-ink-900 text-white shadow-2xl transition-transform lg:static lg:z-0 lg:max-w-none lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="border-b border-white/10 px-6 py-6">
          <div className="mb-2 flex items-center justify-between lg:block">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amberglass">
                Course
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight">
                {manifest.title}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-white/15 px-3 py-2 text-sm font-medium text-white/80 transition hover:border-white/30 hover:text-white lg:hidden"
            >
              Close
            </button>
          </div>

          <p className="mt-3 text-sm leading-6 text-white/70">
            {manifest.description}
          </p>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-5">
          <nav className="space-y-6">
            {manifest.modules.map((module, moduleIndex) => (
              <section key={module.id}>
                <div className="px-2 pb-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                    Module {moduleIndex + 1}
                  </p>
                  <h3 className="mt-1 text-sm font-bold text-white">
                    {module.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-white/55">
                    {module.description}
                  </p>
                </div>

                <div className="space-y-1">
                  {module.lessons.map((lesson, lessonIndex) => {
                    const to = buildLessonPath(module.id, lesson.id);
                    const isCurrent =
                      currentLesson.module.id === module.id &&
                      currentLesson.lesson.id === lesson.id;
                    const iconClasses = isCurrent
                      ? 'bg-signal-100 text-signal-700'
                      : 'bg-white/10 text-white/82';

                    return (
                      <NavLink
                        key={lesson.id}
                        to={to}
                        onClick={onClose}
                        className={({ isActive }) =>
                          [
                            'group flex rounded-2xl border px-3 py-3 transition',
                            isActive || isCurrent
                              ? 'border-signal-300 bg-white text-ink-900 shadow-panel'
                              : 'border-transparent bg-white/5 text-white/82 hover:border-white/10 hover:bg-white/10',
                          ].join(' ')
                        }
                      >
                        <div
                          className={[
                            'mr-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold',
                            iconClasses,
                          ].join(' ')}
                        >
                          {lessonIndex + 1}
                        </div>
                        <div className="min-w-0">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-signal-500">
                            {getLessonTypeLabel(lesson)}
                          </p>
                          <p className="truncate text-sm font-semibold">
                            {lesson.title}
                          </p>
                          <p className="mt-1 line-clamp-2 text-xs leading-5 opacity-70">
                            {lesson.description}
                          </p>
                        </div>
                      </NavLink>
                    );
                  })}
                </div>
              </section>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
