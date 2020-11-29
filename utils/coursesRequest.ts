import { handleCoursesQuery } from "../queries/getCourses.graphql";

export const coursesRequest = async (title, level, type) => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: `application/json`,
      },
      body: JSON.stringify({
        query: handleCoursesQuery(title, level, type),
      }),
    })
      .then((res) => res.json())
      .then((res) => resolve(res.data.courses))
      .catch((err) => reject(err));
  });
};
