import { Amount, Units } from "uom";
import round from 'lodash.round'

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
export const enum ContentAccessLevel {
  Pro = "pro",
  Free = "free"
}
export const enum ExerciseBlock {
  Warmup = "warmup",
  Drills = "drills",
  Cooldown = "cooldown",
  PowerStrength = "powerstrength",
  Conditioning = "conditioning"
}
export const enum WorkoutType {
  Addon = "addon",
  PowerStrength = "powerstrength",
  Conditioning = "conditioning"
}
export const enum MassUnit {
  Pound = "pound",
  Kilogram = "kilogram"
}

export const enum LengthUnit {
  Yard = "yard",
  Meter = "meter"
}

export const enum Season {
  OffSeason = "offseason",
  InSeason = "inseason",
  PostSeason = "postseason",
  AllSeason = "allseason"
}
export const enum Level {
  Beginner = "beginner",
  Intermediate = "intermediate",
  Advanced = "advanced",
  Pro = "pro"
}
export const enum ExerciseInput {
  Reps = "reps",
  Weight = "weight",
  Duration = "duration",
  Distance = "distance"
}
export const enum MovementType {
  Static = "static",
  Dynamic = "dynamic",
  HPush = "hpush",
  HPull = "hpull",
  LBPush = "lbpush",
  LBPull = "lbpull",
  LPushPull = "lpushpull",
  HPushPull = "hpushpull",
  VPull = "vpull",
  VPush = "vpush"
}

export interface ISignInDTO_V1 {
  email: string;
  analyticsId: string;
  preferredMassUnit?: string;
  preferredLengthUnit?: string;
}

export const enum MovementPlane {
  Saggital = "saggital",
  Transverse = "transverse",
  Frontal = "frontal",
  Multi = "multi"
}

export const enum MovementCategory {
  Mobility = "mobility",
  Stability = "stability",
  Plyometric = "plyometric",
  Power = "power",
  Strength = "strength",
  Movement = "movement",
  Condition = "condition",
  SportSpecific = "sport-specific"
}
export interface Phase_Response_V1 {
  id: string;
  title?: string;
  numberOfWeeks: number;
  revisionDate: Date;
  order: number;
  creationDate: Date;
  fullDescription?: string;
  mainImageUrl?: string;
  workoutTemplates: Workout_Template_Response_V1[];
}

export interface ICreate_Workout_Template_Dto_V1 {
  type: string;
  day: number;
}

export interface Workout_Template_Response_V1 {
  id: string;
  title: string;
  type: string;
  publishDate?: Date;
  revisionDate: Date;
  creationDate: Date;
  phase?: Phase_Response_V1;
  exerciseTemplates: Exercise_Template_Response_V1[];
  day: number;
}
export interface Exercise_Template_Response_V1 {
  id: string;
  title?: string;
  block: string;
  goalTitle: string;
  goalSlug: string;
  sets: number;
  expectedDifficulty: string;
  blockOrder: number;
  priority: number;
  definition: Exercise_Definition_Response_V1;
  reps?: number;
  repUnit?: string;
  manualWeight?: number;
  percentBodyweight?: number;
  percentMaxWeight?: number;
  duration?: number;
  distance?: number;
  primaryInput: string;
  secondaryInput?: string;
  workout_template?: Workout_Template_Response_V1;
}

export interface IJourney_Response_V1 {
  startDate?: Date;
  endDate?: Date;
  athlete?: IAthlete_Response_V1;
  workouts: IWorkout_Response_V1[];
  journeyTemplateId: string;
}

export interface IExercise_Response_V1 {
  title: string;
  exerciseTemplateId: string;
  blockOrder: number;
  priority: number;
  block: string;
  sets: IExercise_Set_Response_V1[];
  weightedEquipmentName?: string;
  weightedEquipmentNumber?: number;
  numberOfSides: number;
  user_notes?: string;
}

export interface IExercise_Set_Response_V1 {
  title: string;
  repUnit: string;
  status: string;
  rpe: number;
  setOrder: number;
  reps?: number;
  difficulty?: string;
  duration?: number;
  weight?: number;
  distance?: number;
  customResistance?: string;
  primaryInput: string;
  secondaryInput?: string;
}

export interface IWorkout_Response_V1 {
  id: string;
  name: string;
  type: string;
  creationDate: Date;
  revisionDate: Date;
  workoutTemplateId: string;
  finishDate?: Date;
  startDate?: Date;
  scheduledDate: Date;
  exercises: IExercise_Response_V1[];
}

export interface IAthlete_Response_V1 {
  id: string;
  email: string;
  userId: string;
  analyticsId: string;
  username: string;
  creationDate: Date;
  revisionDate: Date;
  currentJourney?: IJourney_Response_V1;
  bodyweights?: IBodyweight_Response_V1[];
  preferredMassUnit?: string;
  preferredLengthUnit?: MeasurementSystem;
  currentSubscription?: IAthlete_Subscription_V1;
  journeyPasses?: IJourney_Template_Pass_V1[];
  primarySport?: string;
  journeys?: IJourney_Response_V1[];
  workouts?: IWorkout_Response_V1[];
  gender?: string;
  firstName?: string;
  lastName?: string;
  profileImageUrl?: string;
  subscriptionEndDate?: Date;
  subscriptionTier?: string;
}

export interface IAthlete_Subscription_V1 {
  id: string;
  creationDate: Date;
  revisionDate: Date;
  latestSubscriptionEndDate?: string;
  latestAppleProProductId?: string;
  latestAppleProTransactionId?: string;
  latestStripeProProductId?: string;
  latestStripeProSubscriptionId?: string;
  latestStripeCoachEndDate?: Date;
  latestStripeCoachSubscriptionId?: string;
  notes?: string;
}

export interface IJourney_Template_Pass_V1 {
  id: string;
  creationDate: Date;
  revisionDate: Date;
  appleTransactionId?: string;
  appleProductId?: string;
  stripeTransactionId?: string;
  stripeProductId?: string;
  purchaseSource: string;
  notes?: string;
}

export interface IBodyweight_Response_V1 {
  id: string;
  creationDate: Date;
  revisionDate: Date;
  weight: number;
  date: Date;
}

export interface JSONDict {
  [key: string]: any;
}
export const enum ExerciseGoalType {
  MoreWeight = "more-weight",

  // deprecated
  LessWeight = "less-weight",
  MoreReps = "more-reps",

  // deprecated
  LessReps = "less-reps",

  // deprecated
  MorePower = "more-power",

  SpeedQuickness = "speed-and-quickness",

  // deprecated
  DynamicMobility = "dynamic-mobility",


  DynamicStability = "dynamic-stability",

  // deprecated
  AMGRAP = "amgrap",

  LongerDuration = "longer-duration",

  // deprecated
  ShorterDuration = "shorter-duration",

  // deprecated
  SlowerPace = "slower-pace",

  FasterPace = "faster-pace",

  // deprecated
  StaticMobility = "static-mobility",

  // deprecated -> Flexibility
  StaticStability = "static-stability",

  // Technique
  Technique = "technique",

  Flexibility = "flexibility",

  GameTime = "winning-time",

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

export interface IFetch_Definitions_Response_v1 {
  definitions: Exercise_Definition_Response_V1[];
  total: number;
}

export interface Exercise_Definition_Response_V1 {
  id: string;
  title: string;
  category: string;
  creationDate: Date;
  revisionDate: Date;
  definitionEquipment?: Definition_Equipment_Response_V1[];
  movementType?: string;
  plane?: string;
  publishDate?: Date;
  isBodyweight: boolean;
  athleticIndex?: number;
  demoPlaybackUrl?: string;
  infoUrl?: string;
  youtubeId?: string;
  unilateral: boolean;
  primaryWeightedEquipment?: Equipment_Response_V1;
  weightedEquipmentCount?: number;
}

export interface Definition_Equipment_Response_V1 {
  id: string;
  creationDate: Date;
  revisionDate: Date;
  equipment?: Equipment_Response_V1;
  definition?: Equipment_Response_V1;
}

export interface ICreate_Exercise_Definition_Dto_V1 {
  title: string;
  movementType: string;
  category: string;
  plane: string;
  isBodyweight: boolean;
  unilateral: boolean;
  primaryWeightedEquipment?: Equipment_Response_V1;
  weightedEquipmentCount?: number;
}
export interface Equipment_Response_V1 {
  id: string;
  creationDate: Date;
  revisionDate: Date;
  title: string;
  description: string;
  mininumWeight?: number;
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
  publishDate?: Date;
  title: string;
  isLive: boolean;
  phases?: Phase_Response_V1[];
  owner?: Professional_Response_V1;
  shortDescription?: string;
  fullDescription?: string;
  sport: string;
  level: string;
  accessLevel: string;
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
  author: Professional_Response_V1;
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
export interface Professional_Response_V1 {
  id: string;
  name: string;
  athleteUserId?: string;
  shortDescription: string;
  fullDescription?: string;
  title?: string;
  pictureUrl: string;
  creationDate: Date;
  revisionDate: Date;
  journeyTemplates?: Journey_Template_Response_V1[];
  workoutTemplates?: Workout_Template_Response_V1[];
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
  definition: Exercise_Definition_Response_V1;
}

export interface IAthlete_Bodyweight_Response_V1 {
  weight: number;
  date: Date;
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

export const enum Gender {
  Male = "male",
  Female = "female",
  Neutral = "neutral"
}

export interface ICreatePhaseDto {
  title: string;
  numberOfWeeks: number;
  order: number;
  mainImageUrl?: string;
}

export const enum Difficulty {
  easy = "easy",
  good = "good",
  challenging = "challenging",
  veryHard = "veryHard",
  maxEffort = "maxEffort"
}

export interface ICreate_Journey_Template_Pass_DTO_V1 {
  journeyTemplateId: string;
  purchaseSource: string;
  appleTransactionId?: string;
  appleProductId?: string;
  stripeTransactionId?: string;
  stripeProductId?: string;
  notes?: string;
}

export interface IJourney_Template_Pass_Response_V1 {
  id: string;
  revisionDate: Date;
  creationDate: Date;
  journeyTemplateId: string;
  purchaseSource: string;
  appleTransactionId?: string;
  appleProductId?: string;
  stripeTransactionId?: string;
  stripeProductId?: string;
  notes?: string;
}

export const enum PurchaseSource {
  Apple = "apple",
  Website = "website",
  T3Website = "t3",
  Admin = "admin"
}

export const enum ExerciseSetStatus {
  complete = 'complete',
  incomplete = 'incomplete',
  skipped = 'skipped',
}

export const enum MeasurementSystem {
  metric = "metric",
  imperial = "imperial"
}

export const convertedWeight = (
  unitToConvertFrom: string,
  unitToConvertTo: string,
  weight?: number,
  levelsOfPrecision: number = 1
): number | null => {
  if (!weight) {
    return null
  }

  const unit = (unitToConvertFrom == MassUnit.Kilogram ? Units.Kilogram : Units.PoundLb)
  const amount = Amount.create(weight, unit)
  if (unitToConvertTo == MassUnit.Kilogram) {
    const toKilos = Amount.valueAs(Units.Kilogram, amount);
    return round(toKilos, levelsOfPrecision)
  } else {
    const toPounds = Amount.valueAs(Units.PoundLb, amount);
    return round(toPounds, levelsOfPrecision)
  }
}
