export interface IProfessional {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  title: string;
  pictureUrl: string;
  revision_date: Date;
}

export enum ProgramCatalogAvailability {
  Pro = "pro",
  Free = "free"
}

export enum ExerciseBlock {
  Warmup = "Warmup",
  Drills = "Drills",
  Cooldown = "Cooldown",
  PowerStrength = "PowerStrength",
  Conditioning = "Conditioning"
}

export enum WorkoutType {
  Addon = "Addon",
  PowerStrength = "PowerStrength",
  Conditioning = "Conditioning"
}

export enum Season {
  OffSeason = "OffSeason",
  InSeason = "InSeason",
  PostSeason = "PostSeason",
  AllSeason = "AllSeason"
}

export class ExerciseGoal {
  slug: string;
  title: string;
  revisionDate: number;
  inputs: [ActiveExerciseInput];
  primaryInput: ActiveExerciseInput;
}
export enum Level {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
  Pro = "Pro"
}

export enum ActiveExerciseInput {
  Reps = "Reps",
  Weight = "Weight",
  Duration = "Duration"
}

export enum MovementType {
  Static = "Static",
  Dynamic = "Dynamic",
  HPush = "HPush",
  HPull = "HPull",
  LBPush = "LBPush",
  LBPull = "LBPull",
  LPushPull = "LPushPull",
  HPushPull = "HPushPull",
  VPull = "VPull",
  VPush = "VPush"
}

export enum MovementPlane {
  Saggital = "Saggital",
  Transverse = "Transverse",
  Frontal = "Frontal",
  Multi = "Multi"
}

export enum MovementCategory {
  Mobility = "Mobility",
  Stability = "Stability",
  Plyometric = "Plyometric",
  Power = "Power",
  Strength = "Strength",
  Movement = "Movement",
  Condition = "Condition"
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
  author: IProfessional;
  workoutCatalogs: IWorkoutCatalog[]
}

export interface IWorkoutCatalog {
  slug: string;
  title: string;
  type: string;
  publishDate?: Date;
  revisionDate: Date;
  creationDate: Date;
  version: number;
  programCatalog?: IProgramCatalog;
  exerciseCatalogs: IExerciseCatalog[]
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
  exerciseDefinitionSlug: string
  workoutCatalog?: IWorkoutCatalog;
}

export interface IExerciseDefinition {
  id: number;
  title: string;
  slug: string;
  movementType: string
  category: string;
  plane: string;
  isBodyweight: boolean;
  athleticIndex: number;
  demoUrl: string;
  demo_preview_url?: string;
  demo_youtube_id?: string;
  unilateral: boolean;
}

export interface JSONDict {
  [key: string]: any
}

export enum ExerciseGoalType {
  MoreWeight = "more-weight",
  LessWeight = 'less-weight',
  MoreReps = 'more-reps',
  LessReps = 'less-reps',
  MorePower = 'more-power',
  SpeedQuickness = 'speed-and-quickness',
  DynamicMobility = 'dynamic-mobility',
  DynamicStability = 'dynamic-stability',
  AMGRAP = 'amgrap',
  LongerDuration = 'longer-duration',
  ShorterDuration = 'shorter-duration',
  SlowerPace = 'slower-pace',
  FasterPace = 'faster-pace',
  StaticMobility = 'static-mobility',
  StaticStability = 'static-stability',
  Technique = 'technique',
  Custom = 'custom'
}

export interface IProgramCatalogCatalogSeries {
  id: string;
  order: number;
  creation_date: Date;
  revision_date: Date;
  program_catalog: IProgramCatalog
  catalog_series: ICatalogSeries
}

export interface ICatalogSeries {
  id: string;
  main_image_url: string;
  creation_date: Date;
  revision_date: Date;
  title: string;
  catalog_section?: ICatalogSection;
  description: string;
  program_catalog_catalog_series: IProgramCatalogCatalogSeries[];
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