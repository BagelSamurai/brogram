export type Exercise = {
  name: string;
  sets: number;
  reps: number;
};

export type WorkoutProgram = {
  [day: number]: {
    warmup: Exercise[];
    workout: Exercise[];
  };
};

export type WorkoutDescription = {
  [exerciseName: string]: string;
};
