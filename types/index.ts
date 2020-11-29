export interface ICourse {
  id: number;
  name: string;
  email: string;
  title: string;
  image: string;
  start_date: string;
  end_date: string;
  age_from: number;
  age_to: number;
  type: string;
  level: string;
  active: boolean;
}

export interface IFilterFormState {
  title: string;
  type: string;
  level: string;
}

export enum CourseLevel {
  intermediate = "INTERMEDIATE",
  advanced = "ADVANCED",
  beginner = "BEGINNER",
}

export enum CourseType {
  studio = "STUDIO",
  online = "ONLINE",
}
