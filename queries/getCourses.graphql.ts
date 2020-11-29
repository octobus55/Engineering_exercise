export const handleCoursesQuery = (title, level, type) => `
{
    courses(type: "${type}", title:" ${title}", level: "${level}") {
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
