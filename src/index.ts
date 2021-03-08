import { Amount, Units } from "uom";
import round from "lodash.round";

export enum PrivacyStatus {
  unlisted = "unlisted",
  public = "public",
  private = "private",
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
  Follower = "follower",
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
  email: string;
  username: string;
  name?: string;
  migratedProData?: boolean;
  billingInfo?: FIRBillingInfo;
  activeSchedules?: { [key: string]: ActiveScheduleInfo };
}

export interface ScheduleEmailInvite {
  created: any;
  email: string;
}

export interface SignInDTO {
  email: string;
  migratedUsername?: string;
  migratedBillingInfo?: FIRBillingInfo;
}

export declare enum PhotoType {
  Unsplash = "unsplash",
  Custom = "custom",
}

export declare enum DistanceUnit {
  meters = "meters",
  feet = "feet",
  kilometers = "kilometers",
  miles = "miles",
}

export declare enum DurationUnit {
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

export declare enum ScheduleSignUpType {
  anyoneCanSignUp = "anyoneCanSignUp",
  inviteOnly = "inviteOnly",
}

export interface ShowFIRSchedule {
  title: string;
  created: any;
  color: string;
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

export class IActivity {
  id?: string;
  created: any;
  status: string;
  title: string;
  ownerId: string;
  photo?: PhotoInfo;
  scheduleInfo?: ScheduleInfo;
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

  objectID: string; // document id
  created: any;
  status: string;
  title: string;
  ownerId: string;
  photo?: PhotoInfo;
  scheduleInfo?: ScheduleInfo;
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
  created: any;
  status: string;
  title: string;
  ownerId: string;
  description?: string;
  photo?: PhotoInfo;
  scheduleInfo?: ScheduleInfo;
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
}

export interface ScheduleProfile {
  about?: string;
  twitterUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  youtubeUrl?: string;
  websiteUrl?: string;
  primaryColor?: string;
  secondaryColor: string;
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

export declare enum ScheduleRole {
  Member = "member",
  Owner = "owner",
}

export declare enum DocumentRole {
  Admin = "admin",
}

// Subcollection
export interface FIRScheduleMember {
  scheduleTitle: string;
  memberRole: string;
  scheduleId: string;
  joined: any;
  userId: string;
  username: string;
  name?: string;
  status?: MemberStatus;
  membershipInfo?: ConnectMembershipInfo;

  // deprecated
  subscriptionId?: string;
  subscriptionStatus?: string;
}

export declare enum MemberStatus {
  Active = "active",
  Inactive = "inactive",
  Removed = "removed",
  Blocked = "blocked",
}

export interface StripeBillingInfo {
  customerId?: string;
  connectId?: string;
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
