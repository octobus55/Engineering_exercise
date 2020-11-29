import { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import debounce from "lodash.debounce";
import CourseCard from "../components/CourseCard";
import Filter from "../components/filter";
import { ICourse, IFilterFormState } from "../types";
import { coursesRequest } from "../utils/coursesRequest";

export default function Courses() {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [form, setForm] = useState<IFilterFormState>({
    title: "",
    type: "",
    level: "",
  });
  const history = useHistory();

  const debouncedCallback = useCallback(
    debounce((title, level, type) => {
      coursesRequest(title, level, type).then((courses: ICourse[]) =>
        setCourses(courses)
      );
    }, 500),
    []
  );

  useEffect(() => {
    debouncedCallback(form.title, form.level, form.type);
  }, [form.title, form.level, form.type]);

  const handleSelectChange = (
    event: React.ChangeEvent<{ value: unknown; name: string }>
  ) => {
    setForm((prevForm) => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }));
  };

  const handleTitleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      title: value,
    }));
  };

  const onMediaClick = (id: number) => {
    history.push(`/courses/${id}`);
  };

  return (
    <div className="container">
      <Filter
        onSelectChange={handleSelectChange}
        onTitleChange={handleTitleChange}
        level={form.level}
        title={form.title}
        type={form.type}
      />
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
