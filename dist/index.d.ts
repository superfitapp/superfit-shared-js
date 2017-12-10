export declare class BaseCoach {
    id: number;
    name: string;
    shortDescription: string;
    fullDescription: string;
    title: string;
    revisionDate: Date;
    slug: string;
}
export declare enum ExerciseBlock {
    Warmup = "Warmup",
    Drills = "Drills",
    Cooldown = "Cooldown",
    PowerStrength = "PowerStrength",
    Conditioning = "Conditioning",
}
export declare enum WorkoutType {
    Addon = "Addon",
    PowerStrength = "PowerStrength",
    Conditioning = "Conditioning",
}
export declare enum Season {
    OffSeason = "OffSeason",
    InSeason = "InSeason",
    PostSeason = "PostSeason",
    AllSeason = "AllSeason",
}
export declare class ExerciseGoal {
    slug: string;
    title: string;
    inputs: [ActiveExerciseInput];
    primaryInput: ActiveExerciseInput;
}
export declare enum Level {
    Beginner = "Beginner",
    Intermediate = "Intermediate",
    Advanced = "Advanced",
    Pro = "Pro",
}
export declare enum ActiveExerciseInput {
    Reps = "Reps",
    Weight = "Weight",
    Duration = "Duration",
}
export declare enum MovementType {
    Static = "Static",
    Dynamic = "Dynamic",
    HPush = "HPush",
    HPull = "HPull",
    LBPush = "LBPush",
    LBPull = "LBPull",
    LPushPull = "LPushPull",
    HPushPull = "HPushPull",
    VPull = "VPull",
    VPush = "VPush",
}
export declare enum MovementPlane {
    Saggital = "Saggital",
    Transverse = "Transverse",
    Frontal = "Frontal",
    Multi = "Multi",
}
export declare enum MovementCategory {
    Mobility = "Mobility",
    Stability = "Stability",
    Plyometric = "Plyometric",
    Power = "Power",
    Strength = "Strength",
    Movement = "Movement",
    Condition = "Condition",
}
export interface IProgramCatalog {
    id: number;
    title: string;
    sport: string;
    summary: string;
    numberOfWeeks: number;
    tagline: string;
    level: string;
    season: string;
    revisionDate: Date;
    publishDate?: Date;
    creationDate: Date;
    isLive: boolean;
    seriesOrder: number;
    slug: string;
    version: number;
    coach: BaseCoach;
    workoutCatalogs: IWorkoutCatalog[];
}
export declare class BaseProgramCatalog implements IProgramCatalog {
    id: number;
    title: string;
    sport: string;
    summary: string;
    numberOfWeeks: number;
    tagline: string;
    level: string;
    season: string;
    revisionDate: Date;
    publishDate?: Date;
    creationDate: Date;
    isLive: boolean;
    seriesOrder: number;
    slug: string;
    version: number;
    coach: BaseCoach;
    workoutCatalogs: IWorkoutCatalog[];
    getLevel(): Level;
    setLevel(level: Level): void;
    static fromJson(json: JSONDict): BaseProgramCatalog;
}
export declare abstract class IWorkoutCatalog {
    id: number;
    slug: string;
    title: string;
    type: string;
    publishDate?: Date;
    revisionDate: Date;
    creationDate: Date;
    version: number;
    programCatalog?: IProgramCatalog;
    exerciseCatalogs: IExerciseCatalog[];
}
export declare class BaseWorkoutCatalog implements IWorkoutCatalog {
    id: number;
    slug: string;
    title: string;
    type: string;
    publishDate?: Date;
    revisionDate: Date;
    creationDate: Date;
    version: number;
    programCatalog?: IProgramCatalog;
    exerciseCatalogs: IExerciseCatalog[];
    getType(): WorkoutType;
    setType(type: WorkoutType): void;
    static fromJson(json: JSONDict): BaseWorkoutCatalog;
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
    exerciseDefinitionSlug: string;
    workoutCatalog: IWorkoutCatalog;
    definition: IExerciseDefinition;
}
export declare class BaseExerciseCatalog implements IExerciseCatalog {
    block: string;
    id: number;
    exerciseDefinitionSlug: string;
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
    getBlock(): ExerciseBlock;
    setBlock(block: ExerciseBlock): void;
    static fromJson(json: JSONDict): BaseExerciseCatalog;
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
export declare class BaseExerciseDefinition implements IExerciseDefinition {
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
    getMovementType(): MovementType;
    setMovementType(movementType: MovementType): void;
    getPlane(): MovementPlane;
    setPlane(plane: MovementPlane): void;
    getCategory(): MovementCategory;
    setCategory(category: MovementCategory): void;
    static fromJson(json: JSONDict): BaseExerciseDefinition;
}
export interface JSONDict {
    [key: string]: any;
}
export declare enum ExerciseGoalType {
    MoreWeight = "more-weight",
    LessWeight = "less-weight",
    MoreReps = "more-reps",
    LessReps = "less-reps",
    MorePower = "more-power",
    SpeedQuickness = "speed-and-quickness",
    DynamicMobility = "dynamic-mobility",
    DynamicStability = "dynamic-stability",
    AMGRAP = "amgrap",
    LongerDuration = "longer-duration",
    ShorterDuration = "shorter-duration",
    SlowerPace = "slower-pace",
    FasterPace = "faster-pace",
    StaticMobility = "static-mobility",
    StaticStability = "static-stability",
    Technique = "technique",
    Custom = "custom",
}
