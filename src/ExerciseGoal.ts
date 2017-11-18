import ActiveExerciseInput from './active-exercise-input';

class ExerciseGoal {
  slug: string;
  title: string;
  inputs: [ActiveExerciseInput];
  primaryInput: ActiveExerciseInput;
}

export default ExerciseGoal