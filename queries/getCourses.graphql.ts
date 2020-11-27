export const getCoursesQuery = `
{
    courses(type: "", title: "", level: "") {
      id
      title
      image
      start_date
      end_date
      age_from
      age_to
      type
      level
      active
    }
  }
`;
