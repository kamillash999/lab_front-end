import { Link, useSearchParams } from "react-router-dom";
import { courses } from "../../data/data";

const Courses = () => {
  const [searchParams, setSearchParams] = useSearchParams(); // [cite: 15, 319]
  const sort = searchParams.get("sort") || "asc";

  const sorted = [...courses].sort((a, b) => 
    sort === "desc" ? b.title.localeCompare(a.title) : a.title.localeCompare(b.title)
  );

  return (
    <div>
      <h2>Course List</h2>
      <button onClick={() => setSearchParams({ sort: sort === "asc" ? "desc" : "asc" })}>
        Sort: {sort.toUpperCase()}
      </button>
      <ul>
        {sorted.map(c => (
          <li key={c.id}>
            <Link to={`/courses/${c.id}`}>{c.title}</Link> {/* [cite: 197, 205, 331] */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;