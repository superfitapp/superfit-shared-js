import { Amount, Units } from "uom";
import round from 'lodash.round'

// export interface IExerciseGoal {
//   inputs: string[];
//   primaryInput: string;
//   title: string;
//   slug: string;
// }
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

export interface IAthleteWeight {
  weight: number;
  unit: string;
  date: Date;
  id: string;
  markedDeleted: Boolean;
  revisionDate: Date;
}

export const enum ContentAccessLevel {
  Pro = "pro",
  Free = "free"
}

export const enum PrivacyStatus {
  unlisted = "unlisted",
  public = "public",
  private = "private"
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
  author?: Professional_Response_V1;
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
  premiumTier: string
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
  primaryWeightedEquipment?: string
  weightedEquipmentCount?: number;
  eachSide: boolean;
  userNotes?: string;
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
  premiumTier: string;
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
  preferredMassUnit?: MassUnit;
  preferredLengthUnit?: MeasurementSystem;
  currentSubscription?: IAthlete_Subscription_V1;
  primarySport?: string;
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
  stripeCustomerId?: string;
  stripeConnectId?: string;
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

export interface MongoSet {
  rpe: number;
  status: string;
  setNumber: number;
  weight?: number;
  reps: number;
  duration?: number;
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
  demoVideo?: IVideoAsset_Response_V1;
  owner?: Professional_Response_V1
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
  privacyStatus: string
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
// export interface WorkoutCatalog_Response {
//   slug: string;
//   title: string;
//   type: string;
//   publishDate?: Date;
//   revisionDate: Date;
//   creationDate: Date;
//   version: number;
//   exerciseCatalogs: ExerciseCatalog_Response[];
// }

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
2
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

export const enum PremiumTier {
  free = "free",
  pro = "pro",
  sponsored = "sponsored",
  coaching = "coaching"
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

export interface ISaveDemo_Dto_V1 {
  masterUrl: string;
}

export interface IVideoAsset_Response_V1 {
  id: string;
  revisionDate: Date;
  creationDate: Date;
  masterUrl: string
  muxPlaybackId?: string
  muxAssetId?: string
}

export interface IProduct {
  stripeProductId: string
  title: string
  availablePlans: IPlan[]
  features: string[]
}

export interface IPlan {
  nickname: string;
  stripePlanId: string;
  stripeProductId: string;
  price: number;
  priceWithCurrency: string;
  currency: string;
  interval: string;
}

export interface IRemoteSubscription {
  planNickname: string
  stripeProductId: string
  stripePlanId: string
  privateSessionsLimit: number
  isFreePlan: boolean
}

export interface StripeSessionResponse_V1 {
  stripeCustomerId: string
  stripeSessionId: string
}

export interface CurrentRemotePlanDto {
  planId: string
}

export interface StripePaymentMethodDTO {
  paymentMethod: string
}

export interface SelectPlanDataResponse_V1 {
  setupIntentSecret?: string
  plan: IPlan
}

export interface IProPublicInfo {
  name: string
  title: string
  description: string
  pictureUrl: string
  youtubeUrl?: string
  websiteUrl?: string
  instagramUrl?: string
}

export interface IAthletePublicInfo {
  username: string
  nickname?: string
  proProfile?: IProPublicInfo
}

export interface FinalizeConnectDTO {
  authCode: string;
}