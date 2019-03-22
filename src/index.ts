export interface IProgram {
  name: string;
  catalogId: string;
  startDate: Date;
  programId: string;
  markedDeleted: Boolean;
  revisionDate: Date;
  finishDate?: Date;
  coverImage?: string;
  athlete?: IAthlete;
  workouts: IWorkout[];
}
export interface IExerciseGoal {
  inputs: string[];
  primaryInput: string;
  title: string;
  slug: string;
}
export interface IExerciseSet {
  status: string;
  rpe: Number;
  setNumber: Number;
  reps?: Number;
  duration?: Number;
  weight?: Number;
  percentBodyweight?: Number;
  percentMaxWeight?: Number;
}
export interface IExercise {
  block: string;
  blockOrder: Number;
  goal: IExerciseGoal;
  name: string;
  catalogId: string;
  sets: IExerciseSet[];
  priority?: Number;
}
export interface IWorkout {
  id: string;
  revisionDate: Date;
  type: string;
  name: string;
  day: Number;
  week: Number;
  startDate?: Date;
  finishDate?: Date;
  exercises: IExercise[];
}
export interface IAthleteWeight {
  weight: number;
  unit: string;
  date: Date;
  id: string;
  markedDeleted: Boolean;
  revisionDate: Date;
}
export interface IAthlete {
  id: string;
  email: string;
  userId?: string;
  username: string;
  revisionDate: Date;
  profileImageUrl?: string;
  facebookId?: string;
  subscriptionEndDate?: Date;
  subscriptionTier?: string;
  preferredMassUnit: string;
  primarySport: string;
  gender: string;
  currentProgramId?: string;
  firstName: string;
  lastName?: string;
  programs?: [IProgram];
  workouts?: [IWorkout];
  bodyweights?: [IAthleteWeight];
}
export interface IProfessional {
  id: string;
  name: string;
  short_description: string;
  full_description: string;
  title: string;
  picture_url: string;
  revision_date: Date;
}
export declare enum ProgramCatalogAvailability {
  Pro = "pro",
  Free = "free"
}
export declare enum ExerciseBlock {
  Warmup = "warmup",
  Drills = "drills",
  Cooldown = "cooldown",
  PowerStrength = "powerstrength",
  Conditioning = "conditioning"
}
export declare enum WorkoutType {
  Addon = "addon",
  PowerStrength = "powerstrength",
  Conditioning = "conditioning"
}
export class MassUnit {
  static Pound = "pound";
  static Kilogram = "kilogram";
}
export declare enum Season {
  OffSeason = "offseason",
  InSeason = "inseason",
  PostSeason = "postseason",
  AllSeason = "allseason"
}
export class Level {
  static Beginner = "beginner";
  static Intermediate = "intermediate";
  static Advanced = "advanced";
  static Pro = "pro";
}
export declare enum ExerciseInput {
  Reps = "reps",
  Weight = "weight",
  Duration = "duration",
  Distance = "distance"
}
export class MovementType {
  static Static = "static";
  static Dynamic = "dynamic";
  static HPush = "hpush";
  static HPull = "hpull";
  static LBPush = "lbpush";
  static LBPull = "lbpull";
  static LPushPull = "lpushpull";
  static HPushPull = "hpushpull";
  static VPull = "vpull";
  static VPush = "vpush";
}
// export const enum MovementType {
//   Static = "static",
//   Dynamic = "dynamic",
//   HPush = "hpush",
//   HPull = "hpull",
//   LBPush = "lbpush",
//   LBPull = "lbpull",
//   LPushPull = "lpushpull",
//   HPushPull = "hpushpull",
//   VPull = "vpull",
//   VPush = "vpush"
// }
export declare enum MovementPlane {
  Saggital = "saggital",
  Transverse = "transverse",
  Frontal = "frontal",
  Multi = "multi"
}
export declare enum MovementCategory {
  Mobility = "mobility",
  Stability = "stability",
  Plyometric = "plyometric",
  Power = "power",
  Strength = "strength",
  Movement = "movement",
  Condition = "condition"
}
export interface Phase_Response_V1 {
  title?: string;
  numberOfWeeks: number;
  revisionDate: Date;
  order: number;
  creationDate: Date;
  mainImageUrl?: string;
  workoutTemplates: Workout_Template_Response_V1[];
}
export interface Workout_Template_Response_V1 {
  id: string;
  title: string;
  type: string;
  publishDate?: Date;
  revisionDate: Date;
  creationDate: Date;
  version: number;
  phase?: Phase_Response_V1;
  exerciseTemplates: Exercise_Template_Response_V1[];
  dayOfWeek?: number;
}
export interface Exercise_Template_Response_V1 {
  id: string;
  title: string;
  block: string;
  goal: IExerciseGoal;
  sets: number;
  rpe: number;
  blockOrder: number;
  priority: number;
  reps?: number;
  massUnit: string;
  repUnit?: string;
  manualWeight?: number;
  percentBodyweight?: number;
  percentMaxWeight?: number;
  duration?: number;
  definition: ExerciseDefinition_Response;
  workout_template?: Workout_Template_Response_V1;
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
  Custom = "custom"
}
export interface MongoAthlete {
  email: string;
  userId?: string;
  username: string;
  revisionDate: Date;
  profileImageUrl?: string;
  facebookId?: string;
  subscriptionEndDate?: Date;
  subscriptionTier?: string;
  programs: MongoProgram[];
  weightUnit: string;
  primarySport: string;
  gender: string;
  currentProgramId?: string;
  firstName: string;
  lastName: string;
  bodyweights: MongoAthleteWeight[];
}
export interface MongoProgram {
  name: string;
  catalogId: string;
  startDate: Date;
  programId: string;
  markedDeleted: Boolean;
  revisionDate: Date;
  finishDate?: Date;
  coverImage?: string;
  athlete?: MongoAthlete;
  workouts: MongoWorkout[];
}
export interface MongoWorkout {
  id: string;
  revisionDate: Date;
  type: string;
  name: string;
  day: number;
  week: number;
  startDate?: Date;
  finishDate?: Date;
  exercises: MongoExercise[];
}
export interface MongoExercise {
  name: string;
  goal: MongoGoal;
  blockOrder: number;
  catalogId: string;
  block: string;
  priority: number;
  sets: MongoSet[];
}
export interface MongoSet {
  rpe: number;
  status: string;
  setNumber: number;
  weight?: number;
  reps: number;
  duration?: number;
}
export interface MongoGoal {
  primaryInput: string;
  title: string;
  slug: string;
  inputs: string[];
}
export interface MongoAthleteWeight {
  weight: number;
  unit: string;
  date: Date;
  id: string;
  markedDeleted: Boolean;
  revisionDate: Date;
}
export interface ExerciseDefinition_Response {
  id: number;
  title: string;
  slug: string;
  movementType: string;
  category: string;
  plane: string;
  isBodyweight: boolean;
  athleticIndex: number;
  demoUrl: string;
  demoPreviewUrl?: string;
  demoYoutubeUrl?: string;
  unilateral: boolean;
  primaryWeightedEquipment?: Equipment_Response;
  weightedEquipmentCount?: number;
}
export interface Equipment_Response {
  id: string;
  creationDate: Date;
  revisionDate: Date;
  title: string;
  description: string;
}
export interface Create_Journey_Templates_Section_DTO {
  title: string;
  description: string;
  isLive: boolean;
  badgeImageUrl: string;
  mainImageUrl: string;
}
export interface Journey_Templates_Section_Response {
  id: string;
  creationDate: Date;
  revisionDate: Date;
  title: string;
  description: string;
  isLive: boolean;
  badgeImageUrl: string;
  mainImageUrl: string;
  journeyTemplates: Journey_Template_Response_V1[];
}
export interface Journey_Template_Response_V1 {
  id: string;
  mainImageUrl?: string;
  creationDate: Date;
  revisionDate: Date;
  title: string;
  phases: Phase_Response_V1[];
  author?: Professional_Response;
  shortDescription?: string;
  fullDescription?: string;
  sport: string;
  level: string;
  availability: string;
}
export interface ProgramCatalog_Response {
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
  author: Professional_Response;
  workoutCatalogs: WorkoutCatalog_Response[];
}
export interface ProgramCatalogCatalogSeries_Response_V1 {
  id: string;
  order: number;
  creationDate: Date;
  revisionDate: Date;
  programCatalog: ProgramCatalog_Response;
  catalogSeries: Journey_Template_Response_V1;
}
export interface Professional_Response {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  title: string;
  pictureUrl: string;
  revisionDate: Date;
}
export interface ExerciseCatalog_Response {
  title: string;
  block: string;
  externalId: string;
  goal: ExerciseGoal_Response;
  sets: number;
  rpe: number;
  blockOrder: number;
  priority: number;
  reps?: number;
  mass_unit: string;
  rep_unit?: string;
  manualWeight?: number;
  percentBodyweight?: number;
  percentMaxWeight?: number;
  duration?: number;
  definition: ExerciseDefinition_Response;
}
export interface ExerciseGoal_Response {
  inputs: [string];
  primaryInput: string;
  title: string;
  slug: string;
}
export interface WorkoutCatalog_Response {
  slug: string;
  title: string;
  type: string;
  publishDate?: Date;
  revisionDate: Date;
  creationDate: Date;
  version: number;
  exerciseCatalogs: ExerciseCatalog_Response[];
}
export interface ISignInDTO_V1 {
  email: string;
  userId: string;
  preferredMassUnit: string;
}

export declare enum Gender {
  Male = "male",
  Female = "female",
  Neutral = "neutral"
}
