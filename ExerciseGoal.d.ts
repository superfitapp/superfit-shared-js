import ActiveExerciseInput from './active-exercise-input';
declare class ExerciseGoal {
    slug: string;
    title: string;
    inputs: [ActiveExerciseInput];
    primaryInput: ActiveExerciseInput;
}
export default ExerciseGoal;
