import ReactMarkdown from 'react-markdown';
import type { MarkdownLesson as MarkdownLessonType } from '../../types/course';

type MarkdownLessonProps = {
  lesson: MarkdownLessonType;
};

export function MarkdownLesson({ lesson }: MarkdownLessonProps) {
  return (
    <article className="rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-panel sm:p-8">
      <div className="prose prose-slate max-w-none prose-headings:font-extrabold prose-a:text-signal-700 prose-strong:text-ink-900">
        <ReactMarkdown>{lesson.content}</ReactMarkdown>
      </div>
    </article>
  );
}
