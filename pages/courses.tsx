import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import { getCoursesQuery } from "../queries/getCourses.graphql";
import { ICourse } from "../types";

export default function Courses() {
  const [courses, setCourses] = useState<ICourse[]>([]);
  useEffect(() => {
    fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: `application/json`,
      },
      body: JSON.stringify({
        query: getCoursesQuery,
        variables: { title: "", level: "", type: "" },
      }),
    })
      .then((res) => res.json())
      .then((res) => setCourses(res.data.courses));
  }, []);
  return (
    <div className="container">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          end_date={course.end_date}
          image={course.image}
          level={course.level}
          start_date={course.start_date}
          title={course.title}
        />
      ))}
    </div>
  );
}
