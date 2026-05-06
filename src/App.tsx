import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { LessonViewer } from './components/viewers/LessonViewer';
import { courseManifest } from './content/courseManifest';
import {
  getFirstLessonPath,
  getLessonNeighbors,
} from './utils/course';

function LessonRoute() {
  const { moduleId, lessonId } = useParams();
  const { previous, current, next } = getLessonNeighbors(
    courseManifest,
    moduleId,
    lessonId,
  );

  if (!current) {
    return <Navigate to={getFirstLessonPath(courseManifest)} replace />;
  }

  return (
    <AppLayout
      manifest={courseManifest}
      currentLesson={current}
      previousLesson={previous}
      nextLesson={next}
    >
      <LessonViewer lessonEntry={current} />
    </AppLayout>
  );
}

export default function App() {
  const firstLessonPath = getFirstLessonPath(courseManifest);

  return (
    <Routes>
      <Route path="/" element={<Navigate to={firstLessonPath} replace />} />
      <Route
        path="/modules/:moduleId/lessons/:lessonId"
        element={<LessonRoute />}
      />
      <Route path="*" element={<Navigate to={firstLessonPath} replace />} />
    </Routes>
  );
}
