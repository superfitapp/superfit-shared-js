export declare class BaseCoach {
    id: string;
    name: string;
    shortDescription: string;
    fullDescription: string;
    title: string;
    revisionDate: Date;
    slug: string;
}
export declare enum ProgramCatalogAvailability {
    Pro = "pro",
    Free = "free",
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
    revisionDate: number;
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
    title: string;
    sport: string;
    summary: string;
    availability: string;
    numberOfWeeks: number;
    tagline: string;
    level: string;
    season: string;
    revisionDate: Date;
    publishDate?: Date;
    creationDate: Date;
    main_image_url?: string;
    isLive: boolean;
    slug: string;
    version: number;
    coach: BaseCoach;
    workoutCatalogs: IWorkoutCatalog[];
}
export declare class BaseProgramCatalog implements IProgramCatalog {
    title: string;
    sport: string;
    summary: string;
    availability: string;
    numberOfWeeks: number;
    main_image_url?: string;
    tagline: string;
    level: string;
    season: string;
    revisionDate: Date;
    publishDate?: Date;
    creationDate: Date;
    isLive: boolean;
    slug: string;
    version: number;
    coach: BaseCoach;
    workoutCatalogs: IWorkoutCatalog[];
    getLevel(): Level;
    setLevel(level: Level): void;
    static fromJson(json: JSONDict): BaseProgramCatalog;
}
export declare abstract class IWorkoutCatalog {
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
    block: string;
    external_id?: string;
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
    workoutCatalog?: IWorkoutCatalog;
}
export declare class BaseExerciseCatalog implements IExerciseCatalog {
    block: string;
    external_id: string;
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
    demo_preview_url?: string;
    demo_youtube_id?: string;
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
    demo_preview_url?: string;
    demo_youtube_id?: string;
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
export interface IProgramCatalogCatalogSeries {
    id: string;
    order: number;
    creation_date: Date;
    revision_date: Date;
    program_catalog: IProgramCatalog;
    catalog_series: ICatalogSeries;
}
export interface ICatalogSeries {
    id: string;
    main_image_url: string;
    creation_date: Date;
    revision_date: Date;
    title: string;
    description: string;
    program_catalog_catalog_series: IProgramCatalogCatalogSeries[];
    coach: BaseCoach;
}
export interface ICatalogSection {
    id: string;
    creation_date: Date;
    revision_date: Date;
    title: string;
    description: string;
    is_live: boolean;
    main_image_url: string;
    badge_image_url: string;
    catalog_series: ICatalogSeries[];
}
