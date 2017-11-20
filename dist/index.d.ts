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
export declare class IProgramCatalog {
    id: number;
    title: string;
    sport: string;
    summary: string;
    numberOfWeeks: number;
    tagline: string;
    level: string;
    season: string;
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
    season: string;
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
    hi(): void;
    static hi(): void;
    static fromJson(json: JSONDict): BaseProgramCatalog;
}
export interface IWorkoutCatalog {
    id: number;
    slug: string;
    title: string;
    type: string;
    programCatalog?: IProgramCatalog;
    exerciseCatalogs: IExerciseCatalog[];
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
    protected movementType: string;
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
    static fromJson(json: JSONDict): BaseExerciseDefinition;
}
export interface JSONDict {
    [key: string]: any;
}
