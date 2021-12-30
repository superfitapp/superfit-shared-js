export declare enum PrivacyStatus {
    unlisted = "unlisted",
    public = "public",
    private = "private"
}
export declare enum ActivityType {
    event = "event",
    workout = "workout",
    meeting = "meeting"
}
export declare class ActivityTypeHelper {
    static title(type: string): string;
    static shortTitle(type: string): string;
}
export declare enum MassUnit {
    Pound = "pound",
    Kilogram = "kilogram"
}
export declare enum LengthUnit {
    Yard = "yard",
    Meter = "meter"
}
export declare enum ExerciseInput {
    Reps = "reps",
    Weight = "weight",
    Duration = "duration",
    Distance = "distance",
    Freeform = "freeform"
}
export declare enum ActivityStatus {
    Draft = "draft",
    Published = "published",
    Archived = "archived"
}
export declare enum VisibilityStatus {
    Public = "public",
    Private = "private",
    Archived = "archived"
}
export interface ISignInDTO_V1 {
    email: string;
    analyticsId: string;
    preferredMassUnit?: string;
    preferredLengthUnit?: string;
}
export declare enum MovementCategory {
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
export declare enum AccessLevel {
    all = "all",
    members = "members",
    paidMembers = "paidMembers",
    oneTimePurchase = "oneTimePurchase"
}
export declare const convertedWeight: (unitToConvertFrom: string, unitToConvertTo: string, weight?: number | undefined, levelsOfPrecision?: number) => number | null;
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
export interface ArchiveDefinitionDTO_V1 {
    algoliaId?: string;
    definitionId: string;
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
    title: string;
    link: string;
}
export declare class ALGExercise {
    objectID: string;
    ownerId: string;
    version: number;
    title?: string;
    category?: string;
    isBodyweight?: boolean;
    unilateral?: boolean;
    youtubeLink?: string;
    customVideo?: FIRVideo;
    visibilityStatus: string;
    ownerDisplayName?: string;
    instructionPresets?: {
        [key: string]: InstructionPreset;
    };
    constructor(objectID: string, data: {
        [field: string]: any;
    });
}
export interface FIRExercise {
    created?: any;
    version?: number;
    title?: string;
    ownerId?: string;
    ownerDisplayName?: string;
    category?: string;
    isBodyweight?: boolean;
    unilateral?: boolean;
    youtubeLink?: string;
    customVideo?: FIRVideo;
    visibilityStatus: string;
    instructionPresets?: {
        [key: string]: InstructionPreset;
    };
}
export interface FIRVideo {
    masterUrl: string;
    storageFilePath: string;
    muxPlaybackId?: string;
    muxAssetId?: string;
    videoAspectRatio?: number;
}
export interface FIRUser {
    userId: string;
    createdAt?: number;
    email: string;
    username: string;
    name?: string;
    migratedProData?: boolean;
    billingInfo?: FIRBillingInfo;
    activeSchedules?: {
        [key: string]: ActiveScheduleInfo;
    };
}
export interface ScheduleEmailInvite {
    created: any;
    invitedAt: number;
    email: string;
}
export declare enum ScheduleInviteType {
    Invite = "invite",
    Request = "request"
}
export declare enum InviteStatus {
    Pending = "pending",
    Accepted = "accepted",
    Rejected = "rejected"
}
export interface FIRScheduleInvite {
    scheduleInfo: ScheduleInfo;
    type: ScheduleInviteType;
    note?: string;
    recipientId: string;
    senderId: string;
    status: InviteStatus;
    nonMemberDisplayName?: string;
    invitedAt: number;
}
export interface SignInDTO {
    email: string;
    migratedUsername?: string;
    migratedBillingInfo?: FIRBillingInfo;
}
export declare enum PhotoType {
    Unsplash = "unsplash",
    Custom = "custom"
}
export declare enum DistanceUnit {
    meters = "meters",
    feet = "feet",
    kilometers = "kilometers",
    miles = "miles"
}
export declare enum DurationUnit {
    minute = "minute",
    second = "second"
}
export interface PhotoInfo {
    type: PhotoType;
    unsplashThumbUrl?: string;
    unsplashRegularUrl?: string;
    customPhotoFirPath?: string;
    customPhotoUrl?: string;
}
export declare enum ScheduleSignUpType {
    anyoneCanSignUp = "anyoneCanSignUp",
    inviteOnly = "inviteOnly"
}
export interface ShowFIRSchedule {
    title: string;
    created: any;
    createdAt?: number;
    color: string;
    secondaryColor?: string;
    photo?: PhotoInfo;
    visibilityStatus?: string;
    ownerDisplayName?: string;
    profile?: ScheduleProfile;
    enableSubscription?: boolean;
    stripeProductId?: string;
    stripeCurrentOneTimePrice?: StripePrice;
    stripeCurrentMonthlyPrice?: StripePrice;
    stripeCurrentYearlyPrice?: StripePrice;
    payToJoin?: boolean;
    signupType?: string;
}
export interface StripePrice {
    priceId: string;
    priceDisplayName: string;
}
export interface FIRInstructionSet {
    id?: string;
    created?: any;
    ownerId: string;
    activityId?: string;
    instructionBlocks?: {
        [blockId: string]: InstructionBlock;
    };
}
export interface InstructionBlock {
    uniqueId: string;
    order: number;
    instructions?: {
        [instructionId: string]: Instruction;
    };
    repeatCount?: number;
    customVideo?: FIRVideo;
    groupInstruction?: Instruction;
}
export interface Instruction {
    uniqueId: string;
    order: number;
    prompt?: string;
    exercise?: ALGExercise;
    primaryInput: String;
    reps?: string;
    weight?: string;
    duration?: string;
    distance?: string;
    massUnit?: string;
    distanceUnit?: string;
    durationUnit?: string;
    displayedDistanceUnit?: string;
}
export interface FIRSchedule {
    id?: string;
    title: string;
    color: string;
    created: any;
    createdAt?: number;
    ownerId: string;
    photo?: PhotoInfo;
    visibilityStatus?: string;
    ownerDisplayName?: string;
    roles: {
        [userId: string]: string;
    };
    profile?: ScheduleProfile;
    pendingEmailInvites?: {
        [userId: string]: ScheduleEmailInvite;
    };
    stripeProductId?: string;
    stripeCurrentOneTimePrice?: StripePrice;
    stripeCurrentMonthlyPrice?: StripePrice;
    stripeCurrentYearlyPrice?: StripePrice;
    stripeConnectWebhookId?: string;
    enableSubscription?: boolean;
    payToJoin?: boolean;
    signupType?: string;
}
export interface FIRProgressLog {
    id?: string;
    created: any;
    createdAt?: number;
    activityId: string;
    activityShortId?: string;
    activityTitle?: string;
    email: string;
    ownerId?: string;
    activityScheduledDate?: any;
    activityCompletionDate?: any;
    activityCompleted: boolean;
    signupInfo?: SignUpInfo;
    userInfo?: UserInfo;
    guest?: boolean;
}
export interface StripePaymentInfo {
    createdAt: number;
    paymentIntentId: string;
    customerId: string;
    amount?: number;
    currency?: string;
    receiptUrl?: string;
}
export interface SignUpInfo {
    signedUp: boolean;
    accessCode: string;
    redeemed?: boolean;
    type?: SignupType;
    redemptionStatus?: RedemptionStatus;
    stripe?: StripePaymentInfo;
}
export interface UserInfo {
    name?: string;
    username?: string;
}
export interface SignupConfig {
    priceAmount?: number;
    priceCurrency?: string;
}
export interface TipConfig {
    tipEnabled?: boolean;
    venmoUsername?: string;
}
export declare class IActivity {
    id?: string;
    shortId?: string;
    created: any;
    status: string;
    title: string;
    ownerId: string;
    photo?: PhotoInfo;
    scheduleInfo?: ScheduleInfo;
    signupConfig?: SignupConfig;
    customVideo?: FIRVideo;
    scheduledDate?: any;
    type?: string;
    instructionSetId?: string;
    youtubeLink?: string;
    access?: string;
    tags?: string;
    constructor(id: string, data: {
        [field: string]: any;
    });
}
export declare class ALGActivity implements IActivity {
    readonly id: string | undefined;
    shortId?: string;
    objectID: string;
    created: any;
    status: string;
    title: string;
    ownerId: string;
    photo?: PhotoInfo;
    scheduleInfo?: ScheduleInfo;
    signupConfig?: SignupConfig;
    customVideo?: FIRVideo;
    scheduledDate?: any;
    type?: string;
    instructionSetId?: string;
    youtubeLink?: string;
    access?: string;
    tags?: string;
    constructor(objectID: string, data: {
        [field: string]: any;
    });
}
export interface FIRActivity extends IActivity {
    id?: string;
    shortId?: string;
    created: any;
    status: string;
    title: string;
    ownerId: string;
    description?: string;
    photo?: PhotoInfo;
    scheduleInfo?: ScheduleInfo;
    signupConfig?: SignupConfig;
    tipConfig?: TipConfig;
    customVideo?: FIRVideo;
    scheduledDate?: any;
    allDay?: boolean;
    type?: string;
    instructionSetId?: string;
    youtubeLink?: string;
    access?: string;
    tags?: string;
}
export interface ScheduleInfo {
    id: string;
    title: string;
    color?: string;
    ownerDisplayName?: string;
}
export interface ScheduleProfile {
    about?: string;
    email?: string;
    facebookUsername?: string;
    twitterUsername?: string;
    instagramUsername?: string;
    linkedinUsername?: string;
    tiktokUsername?: string;
    youtubeUrl?: string;
    websiteUrl?: string;
    backgroundColor?: string;
    linksTextColor?: string;
    linksBackgroundColor?: string;
    linksBorderColor?: string;
    linksBorderWidth?: number;
    linksBorderRadius?: number;
    links?: {
        [uniqueId: string]: WebLink;
    };
}
export interface WebLink {
    title: string;
    url: string;
    order: number;
    uniqueId: string;
}
export interface CreateScheduleDTO {
    title: string;
    photo?: PhotoInfo;
}
export interface ActiveScheduleInfo {
    scheduleId: string;
    joined: any;
    role: string;
}
export declare enum ScheduleRole {
    Member = "member",
    Owner = "owner"
}
export declare enum DocumentRole {
    Admin = "admin"
}
export interface FIRScheduleMember {
    scheduleTitle: string;
    memberRole: string;
    scheduleId: string;
    joined: any;
    joinedAt?: number;
    userId: string;
    username: string;
    name?: string;
    status?: MemberStatus;
    membershipInfo?: ConnectMembershipInfo;
    subscriptionId?: string;
    subscriptionStatus?: string;
}
export declare enum MemberStatus {
    Active = "active",
    Inactive = "inactive",
    Removed = "removed",
    Blocked = "blocked"
}
export interface StripeBillingInfo {
    customerId?: string;
    connectId?: string;
    detailsSubmitted?: boolean;
    chargesEnabled?: boolean;
    connectCustomerIds?: {
        [key: string]: string;
    };
    superfitSubscriptionId?: string;
    superfitSubscriptionEndedAt?: number;
    commerceSubscriptionId?: string;
    commerceSubscriptionEndedAt?: number;
}
export interface AppleBillingInfo {
    appleProductId?: string;
    appleTransactionId?: string;
    endedAt?: number;
}
export interface FIRBillingInfo {
    apple?: AppleBillingInfo;
    stripe?: StripeBillingInfo;
    connectProducts?: {
        [productId: string]: ConnectMembershipInfo;
    };
}
export interface ConnectMembershipInfo {
    productId: string;
    subscriptionStatus?: string;
    invoiceStatus?: string;
    subscriptionEndedAt?: number;
    subscriptionCancelAt?: number;
    ownerConnectId: string;
    priceId: string;
    subscriptionId?: string;
}
export interface FIRSubscription {
    platform: boolean;
    email: string;
    ownerId: string;
    status: string;
    endedAt: number;
    subscriptionId: string;
}
export interface IProductPriceInfo {
    priceId: string;
    productId: string;
    unitAmountDecimal?: string;
    interval?: string;
    type?: string;
    intervalCount?: number;
    productName: string;
}
export interface FIRUserProfile {
    ownerId: string;
    created?: any;
    name?: string;
    bio?: string;
    twitterUrl?: string;
    facebookUrl?: string;
    instagramUrl?: string;
    youtubeUrl?: string;
    websiteUrl?: string;
    primaryColor?: string;
    secondaryColor: String;
    backgroundColor?: string;
    linksTextColor?: string;
    linksBackgroundColor?: string;
    linksBorderColor?: string;
    linkdBorderRadius?: number;
    linksJson?: string;
}
export interface InstructionPreset {
    uniqueId: string;
    order: number;
    prompt?: string;
    primaryInput: string;
    repeatCount: number;
    reps?: string;
    weight?: string;
    duration?: string;
    distance?: string;
    massUnit?: string;
    distanceUnit?: string;
    durationUnit?: string;
    displayedDistanceUnit?: string;
}
export declare enum SubscriptionStatus {
    active = "active",
    past_due = "past_due",
    unpaid = "unpaid",
    canceled = "canceled",
    incomplete = "incomplete",
    incomplete_expired = "incomplete_expired",
    trialing = "trialing"
}
export declare enum RedemptionStatus {
    redeemed = "redeemed",
    unredeemed = "unredeemed",
    rejected = "rejected"
}
export declare enum SignupType {
    purchase = "purchase",
    gift = "gift"
}
