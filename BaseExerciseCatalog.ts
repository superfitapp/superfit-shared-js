import BaseWorkoutCatalog from './BaseWorkoutCatalog';
import BaseExerciseDefinition from './BaseExerciseDefinition';
import ExerciseBlock from './ExerciseBlock';
import ExerciseGoal from './ExerciseGoal';

export class BaseExerciseCatalog {
  id: number;
  protected block: string;
  getBlock(): ExerciseBlock {
    return ExerciseBlock[this.block]
  }
  setBlock(block: ExerciseBlock) {
    this.block = ExerciseBlock[block]
  }

  goal: ExerciseGoal;
  sets: number;
  rpe: number;
  blockOrder: number;
  priority: number;
  reps?: number;
  manualWeight?: number;
  percentBodyweight?: number;
  percentMaxWeight: number;
  duration?: number;
  workoutCatalog: BaseWorkoutCatalog;
  definition: BaseExerciseDefinition;
}