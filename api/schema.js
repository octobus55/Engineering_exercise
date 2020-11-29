const { courses } = require("./db/courses.json");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType,
  GraphQLBoolean,
} = require("graphql");

const CourseType = new GraphQLObjectType({
  name: "Course",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    image: { type: GraphQLString },
    start_date: { type: GraphQLString },
    end_date: { type: GraphQLString },
    age_from: { type: GraphQLInt },
    age_to: { type: GraphQLInt },
    type: { type: GraphQLString },
    level: { type: GraphQLString },
    active: { type: GraphQLBoolean },
  }),
});

const CourseInputTypes = new GraphQLInputObjectType({
  name: "CourseInput",
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    course: {
      type: CourseType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve(parentValue, args) {
        for (let i = 0; i < courses.length; i++) {
          if (courses[i].id === args.id) {
            return courses[i];
          }
        }
      },
    },
    courses: {
      type: new GraphQLList(CourseType),
      args: {
        type: { type: GraphQLString },
        title: { type: GraphQLString },
        level: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        let filteredCourses = [...courses];
        if (args.title) {
          filteredCourses = filteredCourses.filter((course) =>
            course.title.includes(args.title)
          );
        }
        if (args.type) {
          filteredCourses = filteredCourses.filter(
            (course) => course.type === args.type
          );
        }
        if (args.level) {
          filteredCourses = filteredCourses.filter(
            (course) => course.level === args.level
          );
        }
        return filteredCourses;
      },
    },
  },
});

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  fields: {
    addCourse: {
      type: CourseType,
      args: {
        data: {
          name: "data",
          type: new GraphQLNonNull(CourseInputTypes),
        },
      },
      resolve(root, params, options) {
        const data = { ...params.data };
        data.id = courses.length + 1;
        courses.push(data);
        return data;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
