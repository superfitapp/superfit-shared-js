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
export declare const enum ContentAccessLevel {
    Pro = "pro",
    Free = "free"
}
export declare const enum PrivacyStatus {
    unlisted = "unlisted",
    public = "public",
    private = "private"
}
export declare const enum ExerciseBlock {
    Warmup = "warmup",
    Drills = "drills",
    Cooldown = "cooldown",
    PowerStrength = "powerstrength",
    Conditioning = "conditioning"
}
export declare const enum WorkoutType {
    Addon = "addon",
    PowerStrength = "powerstrength",
    Conditioning = "conditioning"
}
export declare const enum MassUnit {
    Pound = "pound",
    Kilogram = "kilogram"
}
export declare const enum LengthUnit {
    Yard = "yard",
    Meter = "meter"
}
export declare const enum Level {
    Beginner = "beginner",
    Intermediate = "intermediate",
    Advanced = "advanced",
    Pro = "pro"
}
export declare const enum ExerciseInput {
    Reps = "reps",
    Weight = "weight",
    Duration = "duration",
    Distance = "distance",
    Freeform = "freeform"
}
export declare const enum MovementType {
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
export declare const enum VisibilityStatus {
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
export declare const enum MovementPlane {
    Saggital = "saggital",
    Transverse = "transverse",
    Frontal = "frontal",
    Multi = "multi"
}
export declare const enum MovementCategory {
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
export interface PhasePesponse_V1 {
    id: string;
    title?: string;
    numberOfWeeks: number;
    revisionDate: Date;
    order: number;
    creationDate: Date;
    fullDescription?: string;
    mainImageUrl?: string;
    mainImagePhotoId?: string;
    workoutTemplates: WorkoutTemplatePesponse_V1[];
}
export interface ICreate_WorkoutTemplate_Dto_V1 {
    type: string;
    day: number;
}
export interface WorkoutTemplatePesponse_V1 {
    id: string;
    title: string;
    type: string;
    publishDate?: Date;
    revisionDate: Date;
    creationDate: Date;
    phase?: PhasePesponse_V1;
    exerciseTemplates: ExerciseTemplatePesponse_V1[];
    author?: ProfessionalPesponse_V1;
    day: number;
}
export interface ExerciseTemplatePesponse_V1 {
    id: string;
    title?: string;
    block: string;
    goalTitle: string;
    goalSlug: string;
    sets: number;
    expectedDifficulty: string;
    blockOrder: number;
    priority: number;
    definition: Exercise_DefinitionPesponse_V1;
    reps?: number;
    repUnit?: string;
    manualWeight?: number;
    percentBodyweight?: number;
    percentMaxWeight?: number;
    duration?: number;
    distance?: number;
    primaryInput: string;
    secondaryInput?: string;
    workoutTemplate?: WorkoutTemplatePesponse_V1;
}
export interface IJourneyPesponse_V1 {
    startDate?: Date;
    endDate?: Date;
    athlete?: IAthletePesponse_V1;
    workouts: IWorkoutPesponse_V1[];
    journeyTemplateId: string;
    premiumTier: string;
}
export interface IExercisePesponse_V1 {
    id: string;
    creationDate: Date;
    revisionDate: Date;
    title: string;
    exerciseTemplateId: string;
    blockOrder: number;
    priority: number;
    block: string;
    sets: IExercise_SetPesponse_V1[];
    weightedEquipmentName?: string;
    weightedEquipmentNumber?: number;
    primaryWeightedEquipment?: string;
    weightedEquipmentCount?: number;
    eachSide: boolean;
    userNotes?: string;
}
export interface IExercise_SetPesponse_V1 {
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
export interface IWorkoutPesponse_V1 {
    id: string;
    name: string;
    type: string;
    creationDate: Date;
    revisionDate: Date;
    workoutTemplateId: string;
    finishDate?: Date;
    startDate?: Date;
    scheduledDate: Date;
    exercises: IExercisePesponse_V1[];
    premiumTier: string;
}
export interface IAthletePesponse_V1 {
    id: string;
    email: string;
    userId: string;
    analyticsId: string;
    username: string;
    creationDate: Date;
    revisionDate: Date;
    currentJourney?: IJourneyPesponse_V1;
    preferredMassUnit?: MassUnit;
    preferredLengthUnit?: MeasurementSystem;
    currentSubscription?: IAthlete_Subscription_V1;
    primarySport?: string;
    gender?: string;
    firstName?: string;
    lastName?: string;
    profileImageUrl?: string;
    profilePhoto?: IPhotoResponse_V1;
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
export interface IBodyweightPesponse_V1 {
    id: string;
    creationDate: Date;
    revisionDate: Date;
    weight: number;
    date: Date;
}
export interface JSONDict {
    [key: string]: any;
}
export declare const enum ExerciseGoalType {
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
    Flexibility = "flexibility",
    GameTime = "winning-time",
    Custom = "custom"
}
export interface IFetch_DefinitionsPesponse_v1 {
    definitions: Exercise_DefinitionPesponse_V1[];
    total: number;
}
export interface TrainingPlansResponse_V1 {
    plans: JourneyTemplatePesponse_V1[];
    total: number;
}
export interface Exercise_DefinitionPesponse_V1 {
    id: string;
    title: string;
    category: string;
    creationDate: Date;
    revisionDate: Date;
    definitionEquipment?: Definition_EquipmentPesponse_V1[];
    movementType?: string;
    plane?: string;
    publishDate?: Date;
    isBodyweight: boolean;
    athleticIndex?: number;
    demoPlaybackUrl?: string;
    infoUrl?: string;
    youtubeId?: string;
    unilateral: boolean;
    primaryWeightedEquipment?: EquipmentPesponse_V1;
    weightedEquipmentCount?: number;
    visibilityStatus: string;
    demoVideo?: IVideoAssetPesponse_V1;
    demoVideoId?: string;
    video?: IVideoResponse_V1;
    owner?: ProfessionalPesponse_V1;
    clonedFrom?: Exercise_DefinitionPesponse_V1;
}
export interface Definition_EquipmentPesponse_V1 {
    id: string;
    creationDate: Date;
    revisionDate: Date;
    equipment?: EquipmentPesponse_V1;
    definition?: EquipmentPesponse_V1;
}
export interface ICreate_Exercise_Definition_Dto_V1 {
    title: string;
    movementType: string;
    category: string;
    plane: string;
    isBodyweight: boolean;
    unilateral: boolean;
    primaryWeightedEquipment?: EquipmentPesponse_V1;
    weightedEquipmentCount?: number;
}
export interface EquipmentPesponse_V1 {
    id: string;
    creationDate: Date;
    revisionDate: Date;
    title: string;
    description: string;
    mininumWeight?: number;
}
export interface Create_JourneyTemplates_Section_DTO {
    title: string;
    description: string;
    isLive: boolean;
    badgeImageUrl: string;
    mainImageUrl: string;
}
export interface JourneyTemplates_SectionPesponse {
    id: string;
    creationDate: Date;
    revisionDate: Date;
    title: string;
    description: string;
    isLive: boolean;
    badgeImageUrl: string;
    mainImageUrl: string;
    journeyTemplates: JourneyTemplatePesponse_V1[];
}
export interface JourneyTemplatePesponse_V1 {
    id: string;
    mainImageUrl?: string;
    mainImagePhotoId?: string;
    creationDate: Date;
    revisionDate: Date;
    publishDate?: Date;
    title: string;
    isLive: boolean;
    phases?: PhasePesponse_V1[];
    owner?: ProfessionalPesponse_V1;
    shortDescription?: string;
    fullDescription?: string;
    sport: string;
    level: string;
    accessLevel: string;
    privacyStatus: string;
    currentOffer?: PlanOfferResponse_V1;
    offers?: PlanOfferResponse_V1[];
}
export interface ProfessionalPesponse_V1 {
    id: string;
    name: string;
    athleteUserId?: string;
    shortDescription: string;
    fullDescription?: string;
    title?: string;
    pictureUrl: string;
    profilePhotoId?: string;
    creationDate: Date;
    revisionDate: Date;
    youtubeUrl?: string;
    websiteUrl?: string;
    instagramUrl?: string;
    twitterUrl?: string;
    journeyTemplates?: JourneyTemplatePesponse_V1[];
    workoutTemplates?: WorkoutTemplatePesponse_V1[];
}
export interface ExerciseCatalogPesponse {
    title: string;
    block: string;
    externalId: string;
    goal: ExerciseGoalPesponse;
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
    definition: Exercise_DefinitionPesponse_V1;
}
export interface IAthlete_BodyweightPesponse_V1 {
    weight: number;
    date: Date;
}
export interface ExerciseGoalPesponse {
    inputs: [string];
    primaryInput: string;
    title: string;
    slug: string;
}
export declare const enum Gender {
    Male = "male",
    Female = "female",
    Neutral = "neutral"
}
export interface ICreatePhaseDto {
    title: string;
    numberOfWeeks: number;
    order: number;
}
export declare const enum Difficulty {
    easy = "easy",
    good = "good",
    challenging = "challenging",
    veryHard = "veryHard",
    maxEffort = "maxEffort"
}
export interface ICreate_Plan_Pass_DTO_V1 {
    journeyTemplateId: string;
    planOfferId?: string;
    purchaseSource: string;
    appleReceiptData?: string;
    appleTransactionId?: string;
    appleProductId?: string;
    stripeTransactionId?: string;
    notes?: string;
}
export interface IJourneyTemplate_PassPesponse_V1 {
    id: string;
    revisionDate: Date;
    creationDate: Date;
    journeyTemplateId: string;
    planOfferId?: string;
    purchaseSource: string;
    appleTransactionId?: string;
    appleProductId?: string;
    stripeTransactionId?: string;
    stripeProductId?: string;
    notes?: string;
}
export declare const enum PurchaseSource {
    Apple = "apple",
    Website = "website",
    T3Website = "t3",
    Admin = "admin"
}
export declare const enum ExerciseSetStatus {
    complete = "complete",
    incomplete = "incomplete",
    skipped = "skipped"
}
export declare const enum MeasurementSystem {
    metric = "metric",
    imperial = "imperial"
}
export declare const enum PremiumTier {
    free = "free",
    pro = "pro",
    planPassPurchase = "planPassPurchase",
    sponsored = "sponsored",
    coaching = "coaching"
}
export declare const convertedWeight: (unitToConvertFrom: string, unitToConvertTo: string, weight?: number | undefined, levelsOfPrecision?: number) => number | null;
export interface ISaveVideo_DTO_V1 {
    masterUrl: string;
}
export interface ISavePhoto_DTO_V1 {
    masterUrl: string;
    filePath: string;
}
export interface IVideoAssetPesponse_V1 {
    id: string;
    revisionDate: Date;
    creationDate: Date;
    masterUrl: string;
    muxPlaybackId?: string;
    muxAssetId?: string;
}
export interface IProduct {
    stripeProductId: string;
    title: string;
    availablePlans: IRemotePlan[];
    features: string[];
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
    planNickname: string;
    stripeProductId: string;
    stripePlanId: string;
    privateSessionsLimit: number;
    isFreePlan: boolean;
    isHobbyPlan: boolean;
    isProPlan: boolean;
}
export interface StripeSessionResponse_V1 {
    stripeCustomerId: string;
    stripeSessionId: string;
}
export interface CurrentRemotePlanDto {
    planId: string;
}
export interface StripePaymentMethodDTO {
    paymentMethod: string;
}
export interface SelectRemotePlanCheckout {
    setupIntentSecret?: string;
    plan: IRemotePlan;
}
export interface SelectTrainingPlanCheckout {
    setupIntentSecret?: string;
}
export interface IProPublicInfo {
    name: string;
    title: string;
    userId: string;
    shortDescription: string;
    pictureUrl?: string;
    profilePhotoId?: string;
    youtubeUrl?: string;
    websiteUrl?: string;
    instagramUrl?: string;
    twitterUrl?: string;
    facebookUrl?: string;
}
export interface IAthletePublicInfo {
    username: string;
    nickname?: string;
    proProfile?: IProPublicInfo;
}
export interface IPlanPublicInfo {
    id: string;
    mainImagePhotoId?: string;
    publishDate?: Date;
    title: string;
    shortDescription?: string;
    fullDescription?: string;
    sport: string;
    level: string;
    owner?: IProPublicInfo;
    phases?: PhasePesponse_V1[];
    planOffer?: PlanOfferResponse_V1;
}
export interface IPlanAndProPublicInfo {
    proInfo: IProPublicInfo;
    planInfo: IPlanPublicInfo;
}
export interface IPlanAndUsernameInfo {
    planInfo: IPlanPublicInfo;
    username: string;
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
    muxPlaybackId?: string;
    muxAssetId?: string;
    originDescription?: string;
}
export interface IPhotoResponse_V1 {
    id: string;
    masterUrl: string;
    filePath?: string;
    creationDate: Date;
    revisionDate: Date;
    originDescription?: string;
}
export interface IUploadPhotoDTO_V1 {
    masterUrl: string;
    filePath: string;
    originDescription: string;
}
export interface IUploadVideoDTO_V1 {
    masterUrl: string;
    thumbnailUrl?: string;
    originDescription: string;
}
export interface ISyncWorkoutsDTO_V1 {
    workoutIds: string[];
    dirtyWorkouts?: IWorkoutPesponse_V1[];
    dirtyExercises?: IExercisePesponse_V1[];
    dirtySets?: IExercise_SetPesponse_V1[];
}
export interface ICoachingPlanPesponse_V1 {
    client: IAthletePesponse_V1;
    coach: IAthletePesponse_V1;
    trainingPlan: IJourneyPesponse_V1;
    stripePaymentIntentId: string;
    firebaseCoachingPlanId?: string;
    planOfferId?: string;
}
export interface IStartCoachingPlanDTO_V1 {
    createJourneyDto: IStartPlanDTO_V1;
    paymentMethodId: string;
}
export interface IPurchaseCoachingPlanDTO_V1 {
    planOfferId: string;
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
    offerStartDate: Date;
    promoPrice?: number;
    promoEndDate?: Date;
    offerEndDate?: Date;
}
export interface CreatePlanItemDTO_V1 {
    trainingPlan: JourneyTemplatePesponse_V1;
    featureTitle?: string;
    featureDescription?: string;
}
export interface CreateFeatureSectionDTO_V1 {
    title: string;
    description?: string;
}
export interface PlanOfferResponse_V1 {
    id: string;
    creationDate: Date;
    revisionDate: Date;
    internalTitle?: string;
    remoteCoachingPrice?: number;
    trainingPlanPrice?: number;
    promoPrice?: number;
    promoEndDate?: Date;
    offerStartDate: Date;
    offerEndDate?: Date;
}
export interface FeatureItemResponse_V1 {
    id: string;
    creationDate: Date;
    revisionDate: Date;
    trainingPlan?: JourneyTemplatePesponse_V1;
    featureTitle?: string;
    featureDescription?: string;
    featureOffer?: PlanOfferResponse_V1;
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
    currentPlan?: IJourneyPesponse_V1;
}
export interface ArchiveDefinitionDTO_V1 {
    algoliaId?: string;
    definitionId: string;
}
export declare class PlanUtils {
    static experienceLevelText(planInfo: IPlanPublicInfo): string;
    static trainingPlanTemplateTotalWeeks(planInfo: IPlanPublicInfo): number;
}
export interface WorkoutTemplatePresetResponse {
    id: string;
    creationDate: Date;
    revisionDate: Date;
    categoryTitle: string;
    internalTitle?: string;
    categoryPhotoId?: string;
    status: string;
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
    workoutTemplates?: WorkoutTemplatePesponse_V1[];
}
