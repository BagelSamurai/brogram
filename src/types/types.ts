export type Set = {
  name: string;
  sets: number;
  reps: number;
};

export type WorkoutProgram = {
  [day: number]: {
    warmup: Set[];
    workout: Set[];
  };
};

export type WorkoutDescription = {
  [exerciseName: string]: string;
};
