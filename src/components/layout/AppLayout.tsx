import { useState, type ReactNode } from 'react';
import type { CourseManifest, FlattenedLesson } from '../../types/course';
import { ProgressHeader } from './ProgressHeader';
import { Sidebar } from './Sidebar';
import { PrevNextNav } from '../navigation/PrevNextNav';

type AppLayoutProps = {
  manifest: CourseManifest;
  currentLesson: FlattenedLesson;
  previousLesson?: FlattenedLesson;
  nextLesson?: FlattenedLesson;
  children: ReactNode;
};

export function AppLayout({
  manifest,
  currentLesson,
  previousLesson,
  nextLesson,
  children,
}: AppLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-grain text-ink-900">
      <div className="mx-auto flex min-h-screen max-w-[1680px]">
        <Sidebar
          manifest={manifest}
          currentLesson={currentLesson}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <div className="flex min-h-screen min-w-0 flex-1 flex-col">
          <ProgressHeader
            manifest={manifest}
            currentLesson={currentLesson}
            onOpenSidebar={() => setIsSidebarOpen(true)}
          />

          <main className="flex-1 px-4 pb-8 pt-4 sm:px-6 lg:px-10">
            <div className="mx-auto w-full max-w-5xl">{children}</div>
          </main>

          <div className="px-4 pb-6 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-5xl">
              <PrevNextNav
                previousLesson={previousLesson}
                nextLesson={nextLesson}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
