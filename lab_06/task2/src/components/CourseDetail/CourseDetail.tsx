import { useParams, useLoaderData } from "react-router-dom";
import { Course } from "../../data/data";

const CourseDetail = () => {
  const { id } = useParams(); // Получаем :id из URL [cite: 13, 176, 314]
  const { course } = useLoaderData() as { course: Course }; // Данные из лоадера [cite: 17, 177, 314]

  return (
    <div>
      <h1>{course.title}</h1>
      <p>Instructor: {course.instructor}</p>
      <p>{course.description}</p>
      <small>Course ID: {id}</small>
    </div>
  );
};

export default CourseDetail;