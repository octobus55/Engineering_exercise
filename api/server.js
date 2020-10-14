import express from 'express';
import jsonGraphqlExpress from 'json-graphql-server';

import courseData from './db/courses.js'

const PORT = 4000;
const app = express();

app.use('/graphql', jsonGraphqlExpress.default (courseData));
app.listen(PORT);