import BaseExerciseDefinition from './BaseExerciseDefinition';
import ExerciseBlock from './ExerciseBlock';
import ExerciseGoal from './ExerciseGoal';
import WorkoutType from './WorkoutType'
import Level from './Level'
import BaseCoach from './BaseCoach'

export class BaseProgramCatalog {
  id: number;
  title: string;
  sport: string;
  summary: string;
  numberOfWeeks: number;
  tagline: string;
  protected level: string;
  revisionDate: Date;
  publishDate: Date;
  isLive: boolean;
  creationDate: Date;
  seriesOrder: number;
  slug: string;
  version: number;
  coach: BaseCoach;
  workoutCatalogs: BaseProgramCatalog[]

  getLevel(): Level {
    return Level[this.level]
  }
  setLevel(level: Level) {
    this.level = Level[level]
  }
}

export class BaseWorkoutCatalog {
  id: number;
  slug: string;
  title: string;
  protected type: string;
  programCatalog?: BaseProgramCatalog;
  exerciseCatalogs: BaseExerciseCatalog[]

  getType(): WorkoutType {
    return WorkoutType[this.type]
  }

  setType(type: WorkoutType) {
    this.type = WorkoutType[type]
  }
}

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