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
export declare abstract class ProgramCatalogType {
    id: number;
    title: string;
    sport: string;
    summary: string;
    numberOfWeeks: number;
    tagline: string;
    protected level: string;
    season: string;
    revisionDate: Date;
    publishDate: Date;
    isLive: boolean;
    creationDate: Date;
    seriesOrder: number;
    slug: string;
    version: number;
    coach: BaseCoach;
    workoutCatalogs: WorkoutCatalogType[];
    getLevel(): Level;
    setLevel(level: Level): void;
}
export declare class BaseProgramCatalog extends ProgramCatalogType {
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
    workoutCatalogs: WorkoutCatalogType[];
    static fromJson(json: JSONDict): BaseProgramCatalog;
}
export declare abstract class WorkoutCatalogType {
    id: number;
    slug: string;
    title: string;
    type: string;
    programCatalog?: ProgramCatalogType;
    exerciseCatalogs: ExerciseCatalogType[];
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
export declare class BaseWorkoutCatalog extends WorkoutCatalogType {
    id: number;
    slug: string;
    title: string;
    type: string;
    programCatalog?: ProgramCatalogType;
    exerciseCatalogs: ExerciseCatalogType[];
    getType(): WorkoutType;
    setType(type: WorkoutType): void;
}
export declare abstract class ExerciseCatalogType {
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
    workoutCatalog: WorkoutCatalogType;
    definition: ExerciseDefinitionType;
}
export declare class BaseExerciseCatalog extends ExerciseCatalogType {
    id: number;
    protected block: string;
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
    workoutCatalog: WorkoutCatalogType;
    definition: ExerciseDefinitionType;
}
export declare abstract class ExerciseDefinitionType {
    constructor();
    id: number;
    title: string;
    slug: string;
    protected movementType: string;
    protected category: string;
    protected plane: string;
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
}
export declare class BaseExerciseDefinition extends ExerciseDefinitionType {
    id: number;
    title: string;
    slug: string;
    protected movementType: string;
    protected category: string;
    protected plane: string;
    isBodyweight: boolean;
    athleticIndex: number;
    demoUrl: string;
    unilateral: boolean;
    static fromJson(json: JSONDict): BaseExerciseDefinition;
}
export interface JSONDict {
    [key: string]: any;
}
