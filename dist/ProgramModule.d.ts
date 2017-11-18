import BaseExerciseDefinition from './BaseExerciseDefinition';
import ExerciseBlock from './ExerciseBlock';
import ExerciseGoal from './ExerciseGoal';
import WorkoutType from './WorkoutType';
import Level from './Level';
import BaseCoach from './BaseCoach';
export declare class BaseProgramCatalog {
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
    workoutCatalogs: BaseProgramCatalog[];
    getLevel(): Level;
    setLevel(level: Level): void;
}
export declare class BaseWorkoutCatalog {
    id: number;
    slug: string;
    title: string;
    protected type: string;
    programCatalog?: BaseProgramCatalog;
    exerciseCatalogs: BaseExerciseCatalog[];
    getType(): WorkoutType;
    setType(type: WorkoutType): void;
}
export declare class BaseExerciseCatalog {
    id: number;
    protected block: string;
    getBlock(): ExerciseBlock;
    setBlock(block: ExerciseBlock): void;
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
