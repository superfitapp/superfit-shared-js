import ActiveExerciseInput from './ActiveExerciseInput';

class ExerciseGoal {
  slug: string;
  title: string;
  inputs: [ActiveExerciseInput];
  primaryInput: ActiveExerciseInput;
}

export default ExerciseGoal