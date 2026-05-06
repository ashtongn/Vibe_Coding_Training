export type LessonType = 'pdf' | 'video' | 'markdown';

type LessonBase = {
  id: string;
  title: string;
  description: string;
  type: LessonType;
};

export type VideoLesson = LessonBase & {
  type: 'video';
  youtubeId: string;
};

export type PdfLesson = LessonBase & {
  type: 'pdf';
  pdfPath: string;
};

export type MarkdownLesson = LessonBase & {
  type: 'markdown';
  content: string;
};

export type Lesson = VideoLesson | PdfLesson | MarkdownLesson;

export type CourseModule = {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
};

export type CourseManifest = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  modules: CourseModule[];
};

export type FlattenedLesson = {
  module: CourseModule;
  lesson: Lesson;
  moduleIndex: number;
  lessonIndex: number;
  flatIndex: number;
};
