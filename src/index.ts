import { Amount, Units } from "uom";
import round from 'lodash.round'

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

// This should be deprecated, use 'PremiumTier'
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
  Distance = "distance",
  Freeform = "freeform"
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

export const enum ActivityStatus {
  Draft = "draft",
  Published = "published",
  Archived = "archived"
}

export const enum VisibilityStatus {
  Public = "public",
  Follower = "follower",
  Private = "private",
  Archived = "archived"
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
  Warmup = "warmup",
  Mobility = "mobility",
  Stability = "stability",
  Plyometric = "plyometric",
  Power = "power",
  Strength = "strength",
  Movement = "movement",
  Condition = "condition",
  SportSpecific = "sport-specific",
  Technique = "technique",
  Wellness = "wellness"
}
export interface Phase_Response_V1 {
  id: string;
  title?: string;
  numberOfWeeks: number;
  revisionDate: Date;
  order: number;
  creationDate: Date;
  fullDescription?: string;

  // deprecated
  mainImageUrl?: string;

  mainImagePhotoId?: string;
  workoutTemplates: Workout_Template_Response_V1[];
}

// Deprecated
export interface ICreate_Workout_Template_Dto_V1 {
  type: string;
  day: number;
}

export interface CreateWorkoutTemplateDTO {
  workoutTypeId: string;
}

export interface Workout_Template_Response_V1 {
  id: string;
  title: string;

  // deprecated 4/18
  type: string;
  owner?: Professional_Response_V1
  workoutType?: WorkoutTemplateTypeResponse;
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
  blockOrder: number;
  sectionOrder: number;
  priority: number;
  goalTitle: string;
  goalSlug: string;
  sets: number;
  expectedDifficulty: string;
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
  workouts: IWorkout_Response_V1[];
  journeyTemplateId: string;
  premiumTier: string
  visibilityStatus: VisibilityStatus
  startDate?: Date;
  endDate?: Date;
  athlete?: IAthlete_Response_V1;
}

export interface IExercise_Response_V1 {
  id: string;
  creationDate: Date;
  revisionDate: Date;
  title: string;
  exerciseTemplateId: string;
  sectionOrder?: number;
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
  id: string;
  creationDate: Date;
  revisionDate: Date;
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
  profilePhoto?: IPhotoResponse_V1
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

export interface IFetch_Definitions_Response_v1 {
  definitions: Exercise_Definition_Response_V1[];
  total: number;
}

export interface TrainingPlansResponse_V1 {
  plans: Journey_Template_Response_V1[];
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
  visibilityStatus: string

  // deprecated 10/31/19
  demoVideo?: IVideoAsset_Response_V1;

  demoVideoId?: string
  video?: IVideoResponse_V1
  owner?: Professional_Response_V1
  clonedFrom?: Exercise_Definition_Response_V1
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
  planType: string
  mainImageUrl?: string;
  mainImagePhotoId?: string;
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
  privacyStatus: string;
  currentOffer?: PlanOfferResponse_V1
  offers?: PlanOfferResponse_V1[]
}

export interface Professional_Response_V1 {
  id: string;
  name: string;
  athleteUserId?: string;
  shortDescription: string;
  fullDescription?: string;
  title?: string;
  pictureUrl: string; // deprecated
  primaryColor: string;
  secondaryColor: string;
  profilePhotoId?: string;
  creationDate: Date;
  revisionDate: Date;
  youtubeUrl?: string
  websiteUrl?: string
  instagramUrl?: string
  twitterUrl?: string
  journeyTemplates?: Journey_Template_Response_V1[];
  workoutTemplates?: Workout_Template_Response_V1[];
  workoutTemplateTypes?: WorkoutTemplateTypeResponse[]
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

export const enum Gender {
  Male = "male",
  Female = "female",
  Neutral = "neutral"
}

export interface ICreatePhaseDto {
  title: string;
  numberOfWeeks: number;
  order: number;
}

export const enum Difficulty {
  easy = "easy",
  good = "good",
  challenging = "challenging",
  veryHard = "veryHard",
  maxEffort = "maxEffort"
}
2
export interface ICreate_Plan_Pass_DTO_V1 {
  journeyTemplateId: string;
  planOfferId?: string;
  purchaseSource: string;
  appleReceiptData?: string
  appleTransactionId?: string;
  appleProductId?: string;
  stripeTransactionId?: string; // payment intent
  notes?: string;
}

export interface IJourney_Template_Pass_Response_V1 {
  id: string;
  revisionDate: Date;
  creationDate: Date;
  journeyTemplateId: string;
  planOfferId?: string
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
  planPassPurchase = "planPassPurchase",
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

export interface ISaveVideo_DTO_V1 {
  masterUrl: string;
}

export interface ISavePhoto_DTO_V1 {
  masterUrl: string;
  filePath: string;
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
  availablePlans: IRemotePlan[]
  features: string[]
}

export interface IRemotePlan {
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
  isFreePlan: boolean,
  isHobbyPlan: boolean,
  isProPlan: boolean,
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

export interface SelectRemotePlanCheckout {
  setupIntentSecret?: string
  plan: IRemotePlan
}

export interface SelectTrainingPlanCheckout {
  setupIntentSecret?: string
}

export interface IProPublicInfo {
  name: string
  title: string
  userId: string
  shortDescription: string
  primaryColor: string;
  secondaryColor: string;
  pictureUrl?: string
  profilePhotoId?: string
  youtubeUrl?: string
  websiteUrl?: string
  instagramUrl?: string
  twitterUrl?: string
  facebookUrl?: string,
  bioPage?: BioPage_Response
}

export interface IAthletePublicInfo {
  username: string
  nickname?: string
  proProfile?: IProPublicInfo
  proPhotoUrl?: string
}

export interface IPlanPublicInfo {
  id: string
  mainImagePhotoId?: string;
  publishDate?: Date;
  title: string;
  shortDescription?: string;
  fullDescription?: string;
  sport: string;
  level: string;
  planType: string;
  owner?: IProPublicInfo
  phases?: Phase_Response_V1[];
  planOffer?: PlanOfferResponse_V1,
  planPhotoUrl?: string
}

export interface IPlanAndProPublicInfo {
  proInfo: IProPublicInfo
  planInfo: IPlanPublicInfo
}

export interface IPlanAndUsernameInfo {
  planInfo: IPlanPublicInfo
  username: string
}

export interface FinalizeConnectDTO {
  authCode: string;
}

export interface IVideoResponse_V1 {
  id: string;
  masterUrl: string;
  thumbnailUrl?: string;
  creationDate: Date;
  revisionDate: Date;
  muxPlaybackId?: string
  muxAssetId?: string
  originDescription?: string
}

export interface IPhotoResponse_V1 {
  id: string;
  masterUrl: string;
  filePath?: string
  creationDate: Date;
  revisionDate: Date;
  originDescription?: string
}

export interface IUploadPhotoDTO_V1 {
  masterUrl: string
  filePath: string
  originDescription: string
}

export interface IUploadVideoDTO_V1 {
  masterUrl: string
  thumbnailUrl?: string
  originDescription: string
}

export interface ISyncWorkoutsDTO_V1 {
  workoutIds: string[]
  dirtyWorkouts?: IWorkout_Response_V1[]
  dirtyExercises?: IExercise_Response_V1[]
  dirtySets?: IExercise_Set_Response_V1[]
}

export interface ICoachingPlan_Response_V1 {
  client: IAthlete_Response_V1
  coach: IAthlete_Response_V1
  trainingPlan: IJourney_Response_V1
  stripePaymentIntentId: string
  firebaseCoachingPlanId?: string
  planOfferId?: string
}

// deprecated, use IPurchaseCoachingPlanDTO_V1 2/15/20
export interface IStartCoachingPlanDTO_V1 {
  createJourneyDto: IStartPlanDTO_V1
  paymentMethodId: string
}

export interface IPurchaseCoachingPlanDTO_V1 {
  planOfferId: string,
  createJourneyDto: IStartPlanDTO_V1;
  paymentMethodId: string;
}

export interface IPurchaseTrainingPlanDTO_V1 {
  planId: string;
  planOfferId: string;
}

export interface IStartPlanDTO_V1 {
  username: string;
  currentBodyweight: number;
  catalogSeriesId: string;
  preferredDaysOfWeek: string;
}

export interface CreatePlanOfferDTO_V1 {
  trainingPlanPrice?: number;
  remoteCoachingPrice?: number;
  offerStartDate: Date
  promoPrice?: number
  promoEndDate?: Date
  offerEndDate?: Date
}

export interface CreatePlanItemDTO_V1 {
  trainingPlan: Journey_Template_Response_V1
  featureTitle?: string
  featureDescription?: string
}

export interface CreateFeatureSectionDTO_V1 {
  title: string;
  description?: string;
}

export interface PlanOfferResponse_V1 {
  id: string;
  creationDate: Date;
  revisionDate: Date;
  internalTitle?: string
  remoteCoachingPrice?: number;
  trainingPlanPrice?: number;
  promoPrice?: number
  promoEndDate?: Date
  offerStartDate: Date
  offerEndDate?: Date
}

export interface FeatureItemResponse_V1 {
  id: string;
  creationDate: Date;
  revisionDate: Date;
  trainingPlan?: Journey_Template_Response_V1
  featureTitle?: string
  featureDescription?: string
  featureOffer?: PlanOfferResponse_V1
}

export interface FeatureSectionResponse_V1 {
  id: string;
  creation_date: Date;
  revision_date: Date;
  title: string;
  description?: string;
  photoImageId?: string;
  iconImageId?: string;
  featureItems: FeatureItemResponse_V1[];
}

export interface CurrentPlanResponse_V1 {
  currentPlan?: IJourney_Response_V1;
}

export interface ArchiveDefinitionDTO_V1 {
  algoliaId?: string
  definitionId: string
}

export class PlanUtils {
  public static experienceLevelText(planInfo: IPlanPublicInfo): string {
    switch (planInfo.level.toLowerCase()) {
      case Level.Beginner:
        return "Perfect for all fitness levels"
      case Level.Intermediate:
        return "Some training experience preferred"
      case Level.Advanced:
        return "Advanced fitness experience preferred"
      case Level.Pro:
        return "Advanced movement and strength experience required"
      default:
        return "Some training experience preferred"
    }
  }

  public static trainingPlanTemplateTotalWeeks(planInfo: IPlanPublicInfo): number {
    if (!planInfo.phases) {
      return 0
    }

    return planInfo.phases.map(x => x.numberOfWeeks).reduce((a, b) => a + b)
  }
}

export interface BioPage_Response {
  id: string;
  creationDate: Date;
  revisionDate: Date;
  introText?: string;
  shouldHighlightText: boolean;
  bioBackgroundColor: string;
  bioBackgroundPhotoId?: string;
  bioBackgroundPhotoDim: number;
  linksBackgroundColor: string;
  linksTextColor: string;
  linksBorderColor: string;
  linksBorderRadius: number;
  linksBorderWidth: number;
  linksJson: string;
}

export interface BioLink {
  title: string
  link: string
}

export interface WorkoutTemplateTypeResponse {
  id: string;
  creationDate: Date;
  revisionDate: Date;
  title: string;
  visibilityStatus: string;
  internalTitle?: string;
  photoId?: string;
  sectionOneTitle: string;
  sectionTwoTitle: string;
  sectionThreeTitle: string;
  sectionFourTitle: string;
  sectionFiveTitle: string;
  sectionOneColor?: string;
  sectionTwoColor?: string;
  sectionThreeColor?: string;
  sectionFourColor?: string;
  sectionFiveColor?: string;
  difficultyOneRest?: number;
  difficultyTwoRest?: number;
  difficultyThreeRest?: number;
  difficultyFourRest?: number;
  difficultyFiveRest?: number;
  workoutTemplates?: Workout_Template_Response_V1[];
  owner?: Professional_Response_V1
}

export interface WorkoutSectionResponse {
  title: string
  order: number
  colorDescription?: string
}

export const enum PlanType {
  Plan = "plan",
  Class = "class"
}

export class TrainingLevelManager {
  allLevels(): string[] {
    return [
      Level.Beginner,
      Level.Intermediate,
      Level.Advanced,
      Level.Pro
    ];
  }

  title(type: string): string | undefined {
    switch (type) {
      case Level.Beginner:
        return "Perfect For All Levels";
      case Level.Intermediate:
        return "General Fitness Preferred";
      case Level.Advanced:
        return "Athletic Fitness Preferred";
      case Level.Pro:
        return "Athletic Fitness Required";
      default:
        return undefined;
    }
  }

  imageUrl(type: string): string | undefined {
    switch (type) {
      case Level.Beginner:
        return "https://superfit.nyc3.cdn.digitaloceanspaces.com/assets/easy.png";
      case Level.Intermediate:
        return "https://superfit.nyc3.cdn.digitaloceanspaces.com/assets/medium.png";
      case Level.Advanced:
        return "https://superfit.nyc3.cdn.digitaloceanspaces.com/assets/medium.png";
      case Level.Pro:
        return "https://superfit.nyc3.cdn.digitaloceanspaces.com/assets/hard.png";
      default:
        return "https://superfit.nyc3.cdn.digitaloceanspaces.com/assets/easy.png";
    }
  }
}

export class ALGExercise {
  objectID: string // document id
  ownerId: string
  version: number
  title?: string
  category?: string
  isBodyweight?: boolean
  unilateral?: boolean
  youtubeLink?: string
  customVideo?: FIRVideo
  visibilityStatus: string
  ownerDisplayName?: string
  instructionPresets?: { [key: string]: InstructionPreset }

  constructor(objectID: string, data: { [field: string]: any }) {
    this.objectID = objectID
    this.title = data.title
    this.category = data.title
    this.ownerId = data.ownerId
    this.version = data.version
    this.isBodyweight = data.isBodyweight
    this.unilateral = data.unilateral
    this.youtubeLink = data.youtubeLink
    this.customVideo = data.customVideo
    this.visibilityStatus = data.visibilityStatus
    this.ownerDisplayName = data.ownerDisplayName
    this.instructionPresets = data.instructionPresets
  }
}

export interface FIRExercise {
  created?: any
  version?: number
  title?: string
  ownerId?: string
  ownerDisplayName?: string
  category?: string
  isBodyweight?: boolean
  unilateral?: boolean
  youtubeLink?: string
  customVideo?: FIRVideo
  visibilityStatus: string
  instructionPresets?: { [key: string]: InstructionPreset }
}

export interface FIRVideo {
  masterUrl: string
  storageFilePath: string
  muxPlaybackId?: string
  muxAssetId?: string
  videoAspectRatio?: number
}
export interface FIRUser {
  userId: string
  email: string
  username: string
  migratedProData?: boolean
  billingInfo?: FIRBillingInfo
  activeSchedules?: { [key: string]: ActiveScheduleInfo }
}

export interface ScheduleEmailInvite {
  created: any
  email: string
}

export interface SignInDTO {
  email: string
  migratedUsername?: string,
  migratedBillingInfo?: FIRBillingInfo
}

export declare const enum PhotoType {
  Unsplash = "unsplash",
  Custom = "custom"
}

export declare const enum DistanceUnit {
  meters = "meters",
  feet = "feet",
  kilometers = "kilometers",
  miles = "miles"
}

export declare const enum DurationUnit {
  minute = "minute",
  second = "second"
}

export interface PhotoInfo {
  type: PhotoType
  unsplashThumbUrl?: string
  unsplashRegularUrl?: string
  customPhotoFirPath?: string,
  customPhotoUrl?: string
}

export declare const enum ScheduleSignUpType {
  anyoneCanSignUp = "anyoneCanSignUp",
  inviteOnly = "inviteOnly"
}

export interface ShowFIRSchedule {
  title: string
  created: any
  color: string
  photo?: PhotoInfo
  visibilityStatus?: string
  ownerDisplayName?: string
  profile?: ScheduleProfile
  enableSubscription?: boolean
  stripeProductId?: string
  stripeCurrentMonthlyPrice?: StripePrice
  stripeCurrentYearlyPrice?: StripePrice
  payToJoin?: boolean
  signupType?: string
}

export interface StripePrice {
  priceId: string
  priceDisplayName: string
}

export interface FIRInstructionSet {

  id?: string
  created?: any
  ownerId: string
  activityId?: string
  instructionBlocks?: {
    [blockId: string]: InstructionBlock
  }
}

export interface InstructionBlock {

  uniqueId: string
  order: number
  instructions?: { [instructionId: string]: Instruction }
  repeatCount?: number
  customVideo?: FIRVideo
  groupInstruction?: Instruction // exists but may be empty
}

export interface Instruction {
  uniqueId: string
  order: number
  prompt?: string
  exercise?: ALGExercise
  primaryInput: String
  reps?: string
  weight?: string
  duration?: string
  distance?: string
  massUnit?: string
  distanceUnit?: string
  durationUnit?: string
  displayedDistanceUnit?: string
}

export interface FIRSchedule {
  title: string
  color: string
  created: any
  ownerId: string
  photo?: PhotoInfo
  visibilityStatus?: string
  ownerDisplayName?: string
  roles: { [userId: string]: string }
  profile?: ScheduleProfile
  pendingEmailInvites?: { [userId: string]: ScheduleEmailInvite }
  stripeProductId?: string
  stripeCurrentMonthlyPrice?: StripePrice
  stripeCurrentYearlyPrice?: StripePrice
  stripeConnectWebhookId?: string
  enableSubscription?: boolean
  payToJoin?: boolean
  signupType?: string
}

export interface FIRActivity {
  id?: string
  created: any
  status: string
  title: string
  ownerId: string
  description?: string
  photo?: PhotoInfo
  scheduleInfo?: ScheduleInfo
  scheduledDate?: any
  allDay?: boolean
  type?: string
  instructionSetId?: string
}

export interface ScheduleInfo {
  id: string
  title: string
  color?: string
}

export interface ScheduleProfile {
  about?: string
  twitterUrl?: string
  facebookUrl?: string
  instagramUrl?: string
  youtubeUrl?: string
  websiteUrl?: string
  primaryColor?: string
  secondaryColor: string
  backgroundColor?: string
  linksTextColor?: string
  linksBackgroundColor?: string
  linksBorderColor?: string
  linksBorderWidth?: number
  linksBorderRadius?: number
  links?: { [uniqueId: string]: WebLink }
}

export interface WebLink {
  title: string
  url: string
  order: number
  uniqueId: string
}

export interface CreateScheduleDTO {
  title: string
  photo?: PhotoInfo
}

// similar to FIRScheduleMember, but on the user
// must be small payload.
export interface ActiveScheduleInfo {
  scheduleId: string
  joined: any
  role: string
}

export declare const enum ScheduleRole {
  Member = "member",
  Owner = "owner"
}

export declare const enum DocumentRole {
  Admin = "admin"
}

// Subcollection
export interface FIRScheduleMember {
  scheduleTitle: string
  memberRole: string
  scheduleId: string
  joined: any
  userId: string
  username: string
  subscriptionId?: string
  subscriptionStatus?: string
}

export interface StripeBillingInfo {
  customerId?: string
  connectId?: string
  connectCustomerIds?: { [key: string]: string }
  superfitSubscriptionId?: string
  superfitSubscriptionEndedAt?: number
  commerceSubscriptionId?: string
  commerceSubscriptionEndedAt?: number
}

export interface AppleBillingInfo {
  appleProductId?: string
  appleTransactionId?: string
  endedAt?: number
}

export interface FIRBillingInfo {
  apple?: AppleBillingInfo
  stripe?: StripeBillingInfo
  connectProducts: {
    [productId: string]: ConnectProduct
  }
}

export interface ConnectProduct {
  productId: string
  subscriptionStatus?: string
  invoiceStatus?: string
  subscriptionEndedAt?: number
  ownerConnectId: string
  priceId: string
  subscriptionId?: string
}

export interface FIRSubscription {
  platform: boolean
  email: string,
  ownerId: string,
  status: string
  endedAt: number
  subscriptionId: string
}

export interface IProductPriceInfo {
  priceId: string
  productId: string
  unitAmountDecimal?: string
  interval?: string
  type?: string
  intervalCount?: number
  productName: string
}

export interface FIRUserProfile {
  ownerId: string
  created?: any
  name?: string
  bio?: string
  twitterUrl?: string
  facebookUrl?: string
  instagramUrl?: string
  youtubeUrl?: string
  websiteUrl?: string
  primaryColor?: string
  secondaryColor: String
  backgroundColor?: string
  linksTextColor?: string
  linksBackgroundColor?: string
  linksBorderColor?: string
  linkdBorderRadius?: number
  linksJson?: string
}

export interface InstructionPreset {
  uniqueId: string
  order: number
  prompt?: string
  primaryInput: string
  repeatCount: number
  reps?: string
  weight?: string
  duration?: string
  distance?: string
  massUnit?: string
  distanceUnit?: string
  durationUnit?: string
  displayedDistanceUnit?: string
}
