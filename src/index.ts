import { Amount, Units } from "uom";
import round from "lodash.round";

export enum PrivacyStatus {
  unlisted = "unlisted",
  public = "public",
  private = "private",
}

export enum ActivityType {
  event = "event",
  workout = "workout",
  meeting = "meeting",
}

export class ActivityTypeHelper {
  static title(type: string): string {
    switch (type) {
      case ActivityType.event:
        return "In-Person Class/Session";
      case ActivityType.workout:
        return "Virtual On-Demand";
      case ActivityType.meeting:
        return "Meeting/Zoom";
      default:
        return "Activity";
    }
  }

  static shortTitle(type: string): string {
    switch (type) {
      case ActivityType.event:
        return "In-Person";
      case ActivityType.workout:
        return "Virtual";
      case ActivityType.meeting:
        return "Meeting";
      default:
        return "Activity";
    }
  }
}

export enum MassUnit {
  Pound = "pound",
  Kilogram = "kilogram",
}

export enum LengthUnit {
  Yard = "yard",
  Meter = "meter",
}

export enum ExerciseInput {
  Reps = "reps",
  Weight = "weight",
  Duration = "duration",
  Distance = "distance",
  Freeform = "freeform",
}

export enum ActivityStatus {
  Draft = "draft",
  Published = "published",
  Archived = "archived",
}

export enum VisibilityStatus {
  Public = "public",
  Private = "private",
  Archived = "archived",
}

export interface ISignInDTO_V1 {
  email: string;
  analyticsId: string;
  preferredMassUnit?: string;
  preferredLengthUnit?: string;
}

export enum MovementCategory {
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
  Wellness = "wellness",
}

export enum AccessLevel {
  all = "all",
  members = "members",
  paidMembers = "paidMembers",
  oneTimePurchase = "oneTimePurchase",
}

export const convertedWeight = (
  unitToConvertFrom: string,
  unitToConvertTo: string,
  weight?: number,
  levelsOfPrecision: number = 1
): number | null => {
  if (!weight) {
    return null;
  }

  const unit =
    unitToConvertFrom == MassUnit.Kilogram ? Units.Kilogram : Units.PoundLb;
  const amount = Amount.create(weight, unit);
  if (unitToConvertTo == MassUnit.Kilogram) {
    const toKilos = Amount.valueAs(Units.Kilogram, amount);

    return round(toKilos, levelsOfPrecision);
  } else {
    const toPounds = Amount.valueAs(Units.PoundLb, amount);
    return round(toPounds, levelsOfPrecision);
  }
};

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

export class ALGExercise {
  objectID: string; // document id
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
  instructionPresets?: { [key: string]: InstructionPreset };

  constructor(objectID: string, data: { [field: string]: any }) {
    this.objectID = objectID;
    this.title = data.title;
    this.category = data.category;
    this.ownerId = data.ownerId;
    this.version = data.version;
    this.isBodyweight = data.isBodyweight;
    this.unilateral = data.unilateral;
    this.youtubeLink = data.youtubeLink;
    this.customVideo = data.customVideo;
    this.visibilityStatus = data.visibilityStatus;
    this.ownerDisplayName = data.ownerDisplayName;
    this.instructionPresets = data.instructionPresets;
  }
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
  instructionPresets?: { [key: string]: InstructionPreset };
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
  appAccountToken?: string;
  // unix timestamp
  createdAt?: number;
  email: string;
  username: string;
  name?: string;
  migratedProData?: boolean;
  billingInfo?: FIRBillingInfo;
  activeSchedules?: { [key: string]: ActiveScheduleInfo };
}

// Deprecated for FIRScheduleInvite
export interface ScheduleEmailInvite {
  // deprecated
  created: any;

  // unix timestamp
  invitedAt: number;
  email: string;
}

export enum ScheduleInviteType {
  Invite = "invite",
  Request = "request",
}

export enum InviteStatus {
  Pending = "pending",
  Accepted = "accepted",
  Rejected = "rejected",
}

export interface FIRScheduleInvite {
  scheduleInfo: ScheduleInfo;
  type: ScheduleInviteType;
  note?: string;
  recipientId: string;
  senderId: string;
  status: InviteStatus;
  nonMemberDisplayName?: string;

  // unix timestamp
  invitedAt: number;
}

export interface SignInDTO {
  email: string;
  migratedUsername?: string;
  migratedBillingInfo?: FIRBillingInfo;
}

export enum PhotoType {
  Unsplash = "unsplash",
  Custom = "custom",
}

export enum DistanceUnit {
  meters = "meters",
  feet = "feet",
  kilometers = "kilometers",
  miles = "miles",
}

export enum DurationUnit {
  minute = "minute",
  second = "second",
}

export interface PhotoInfo {
  type: PhotoType;
  unsplashThumbUrl?: string;
  unsplashRegularUrl?: string;
  customPhotoFirPath?: string;
  customPhotoUrl?: string;
}

export enum ScheduleSignUpType {
  anyoneCanSignUp = "anyoneCanSignUp",
  inviteOnly = "inviteOnly",
}

export interface ShowFIRSchedule {
  title: string;
  created: any;
  // unix timestamp
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
  currency?: string
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
  instructions?: { [instructionId: string]: Instruction };
  repeatCount?: number;
  customVideo?: FIRVideo;
  groupInstruction?: Instruction; // exists but may be empty
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

  // unix timestamp
  createdAt?: number;

  ownerId: string;
  photo?: PhotoInfo;
  visibilityStatus?: string;
  ownerDisplayName?: string;
  roles: { [userId: string]: string };
  profile?: ScheduleProfile;
  pendingEmailInvites?: { [userId: string]: ScheduleEmailInvite };
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
  // unix timestamp
  createdAt?: number;
  activityId: string;
  activityShortId?: string;
  activityTitle?: string;
  email: string;
  /// The ID of the user this entry belongs to, 
  /// NOT the creator of the associated activity.
  ownerId?: string;

  /// The ID of the creator of the associated activity.
  activityOwnerId?: string;

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
  // deprecated
  redeemed?: boolean;

  // should not be nil
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

export class IActivity {
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

  constructor(id: string, data: { [field: string]: any }) {
    this.id = id;
    this.created = data.created;
    this.status = data.status;
    this.title = data.title;
    this.ownerId = data.ownerId;
    this.photo = data.photo;
    this.scheduleInfo = data.scheduleInfo;
    this.customVideo = data.customVideo;
    this.scheduledDate = data.scheduledDate;
    this.signupConfig = data.signupConfig;
    this.type = data.type;
    this.instructionSetId = data.instructionSetId;
    this.youtubeLink = data.youtubeLink;
    this.access = data.access;
    this.tags = data.tags;
  }
}

export class ALGActivity implements IActivity {
  get id(): string | undefined {
    return this.objectID;
  }
  shortId?: string;
  objectID: string; // document id
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

  constructor(objectID: string, data: { [field: string]: any }) {
    this.objectID = objectID;
    this.created = data.created;
    this.status = data.status;
    this.title = data.title;
    this.ownerId = data.ownerId;
    this.photo = data.photo;
    this.scheduleInfo = data.scheduleInfo;
    this.signupConfig = data.signupConfig;
    this.customVideo = data.customVideo;
    this.scheduledDate = data.scheduledDate;
    this.type = data.type;
    this.instructionSetId = data.instructionSetId;
    this.youtubeLink = data.youtubeLink;
    this.access = data.access;
    this.tags = data.tags;
  }
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

  // deprecated
  backgroundColor?: string;
  linksTextColor?: string;
  linksBackgroundColor?: string;
  linksBorderColor?: string;
  linksBorderWidth?: number;
  linksBorderRadius?: number;
  links?: { [uniqueId: string]: WebLink };
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

// similar to FIRScheduleMember, but on the user
// must be small payload.
export interface ActiveScheduleInfo {
  scheduleId: string;
  joined: any;
  role: string;
}

export enum ScheduleRole {
  Member = "member",
  Owner = "owner",
}

export enum DocumentRole {
  Admin = "admin",
}

// Subcollection
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
  metadata?: ScheduleMemberMetadata

  // deprecated
  subscriptionId?: string;
  subscriptionStatus?: string;
}

interface ScheduleMemberMetadata {
  isFirst?: boolean
}

export enum MemberStatus {
  Active = "active",
  Inactive = "inactive",
  Removed = "removed",
  Blocked = "blocked",
}

export interface StripeBillingInfo {
  customerId?: string;
  connectId?: string;
  detailsSubmitted?: boolean;
  chargesEnabled?: boolean;
  connectCustomerIds?: { [key: string]: string };
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

  // deprecated
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

// Stripe subscription statuses
export enum SubscriptionStatus {
  active = "active",
  past_due = "past_due",
  unpaid = "unpaid",
  canceled = "canceled",
  incomplete = "incomplete",
  incomplete_expired = "incomplete_expired",
  trialing = "trialing",
}

export enum RedemptionStatus {
  redeemed = "redeemed",
  unredeemed = "unredeemed",
  rejected = "rejected",
}

export enum SignupType {
  purchase = "purchase",
  gift = "gift",
}
