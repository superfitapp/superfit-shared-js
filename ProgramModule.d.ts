import { MovementType, MovementPlane, MovementCategory } from './MovementModule';
import ExerciseBlock from './ExerciseBlock';
import ExerciseGoal from './ExerciseGoal';
import WorkoutType from './WorkoutType';
import Level from './Level';
import BaseCoach from './BaseCoach';
export declare class IProgramCatalog {
    id: number;
    title: string;
    sport: string;
    summary: string;
    numberOfWeeks: number;
    tagline: string;
    level: string;
    revisionDate: Date;
    publishDate: Date;
    isLive: boolean;
    creationDate: Date;
    seriesOrder: number;
    slug: string;
    version: number;
    coach: BaseCoach;
    workoutCatalogs: IWorkoutCatalog[];
    getLevel(): Level;
    setLevel(level: Level): void;
}
export declare class BaseProgramCatalog {
    id: number;
    title: string;
    sport: string;
    summary: string;
    numberOfWeeks: number;
    tagline: string;
    level: string;
    revisionDate: Date;
    publishDate: Date;
    isLive: boolean;
    creationDate: Date;
    seriesOrder: number;
    slug: string;
    version: number;
    coach: BaseCoach;
    workoutCatalogs: IWorkoutCatalog[];
    getLevel(): Level;
    setLevel(level: Level): void;
}
export interface IWorkoutCatalog {
    id: number;
    slug: string;
    title: string;
    type: string;
    programCatalog?: IProgramCatalog;
    exerciseCatalogs: IExerciseCatalog[];
}
export declare class BaseWorkoutCatalog {
    id: number;
    slug: string;
    title: string;
    type: string;
    programCatalog?: IProgramCatalog;
    exerciseCatalogs: IExerciseCatalog[];
    getType(): WorkoutType;
    setType(type: WorkoutType): void;
}
export interface IExerciseCatalog {
    id: number;
    block: string;
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
    workoutCatalog: IWorkoutCatalog;
    definition: IExerciseDefinition;
}
export declare class BaseExerciseCatalog {
    id: number;
    block: string;
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
    workoutCatalog: IWorkoutCatalog;
    definition: IExerciseDefinition;
}
export interface IExerciseDefinition {
    id: number;
    title: string;
    slug: string;
    movementType: string;
    category: string;
    plane: string;
    isBodyweight: boolean;
    athleticIndex: number;
    demoUrl: string;
    unilateral: boolean;
}
export declare class BaseExerciseDefinition {
    id: number;
    title: string;
    slug: string;
    movementType: string;
    category: string;
    plane: string;
    isBodyweight: boolean;
    athleticIndex: number;
    demoUrl: string;
    unilateral: boolean;
    getBlock(): MovementType;
    setBlock(movementType: MovementType): void;
    getPlane(): MovementPlane;
    setPlane(plane: MovementPlane): void;
    getCategory(): MovementCategory;
    setCategory(category: MovementCategory): void;
}
