import type { CourseManifest, FlattenedLesson, Lesson } from '../types/course';

export function flattenLessons(manifest: CourseManifest): FlattenedLesson[] {
  return manifest.modules.flatMap((module, moduleIndex) =>
    module.lessons.map((lesson, lessonIndex) => ({
      module,
      lesson,
      moduleIndex,
      lessonIndex,
      flatIndex: 0,
    })),
  ).map((entry, flatIndex) => ({ ...entry, flatIndex }));
}

export function getFirstLessonPath(manifest: CourseManifest): string {
  const firstModule = manifest.modules[0];
  const firstLesson = firstModule?.lessons[0];

  if (!firstModule || !firstLesson) {
    return '/';
  }

  return buildLessonPath(firstModule.id, firstLesson.id);
}

export function buildLessonPath(moduleId: string, lessonId: string): string {
  return `/modules/${moduleId}/lessons/${lessonId}`;
}

export function resolvePublicAssetPath(assetPath: string): string {
  const normalizedAssetPath = assetPath.replace(/^\/+/, '');
  const baseUrl = import.meta.env.BASE_URL || '/';

  return `${baseUrl}${normalizedAssetPath}`.replace(/([^:]\/)\/+/g, '$1');
}

export function getFlattenedLessonByRoute(
  manifest: CourseManifest,
  moduleId: string | undefined,
  lessonId: string | undefined,
): FlattenedLesson | undefined {
  return flattenLessons(manifest).find(
    ({ module, lesson }) => module.id === moduleId && lesson.id === lessonId,
  );
}

export function getLessonNeighbors(
  manifest: CourseManifest,
  moduleId: string | undefined,
  lessonId: string | undefined,
): {
  previous?: FlattenedLesson;
  current?: FlattenedLesson;
  next?: FlattenedLesson;
} {
  const lessons = flattenLessons(manifest);
  const current = lessons.find(
    ({ module, lesson }) => module.id === moduleId && lesson.id === lessonId,
  );

  if (!current) {
    return {};
  }

  return {
    previous: lessons[current.flatIndex - 1],
    current,
    next: lessons[current.flatIndex + 1],
  };
}

export function getLessonTypeLabel(lesson: Lesson): string {
  if (lesson.type === 'pdf') {
    return 'PDF';
  }

  if (lesson.type === 'video') {
    return 'Video';
  }

  return 'Reading';
}

export function getCourseProgress(
  manifest: CourseManifest,
  currentFlatIndex: number,
): {
  currentLessonNumber: number;
  totalLessons: number;
  percentComplete: number;
} {
  const totalLessons = flattenLessons(manifest).length;
  const currentLessonNumber = currentFlatIndex + 1;
  const percentComplete = totalLessons
    ? Math.round((currentLessonNumber / totalLessons) * 100)
    : 0;

  return {
    currentLessonNumber,
    totalLessons,
    percentComplete,
  };
}

export function isValidYouTubeId(youtubeId: string): boolean {
  return /^[a-zA-Z0-9_-]{11}$/.test(youtubeId);
}
