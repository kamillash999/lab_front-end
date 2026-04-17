const Courses = () => {
  const courseList = ["Web Development", "Database Systems", "UI/UX Design"];

  return (
    <div>
      <h2>Available Courses</h2>
      <ul>
        {courseList.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;