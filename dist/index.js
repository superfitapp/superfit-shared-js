"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var uom_1 = require("uom");
var lodash_round_1 = __importDefault(require("lodash.round"));
var PrivacyStatus;
(function (PrivacyStatus) {
    PrivacyStatus["unlisted"] = "unlisted";
    PrivacyStatus["public"] = "public";
    PrivacyStatus["private"] = "private";
})(PrivacyStatus = exports.PrivacyStatus || (exports.PrivacyStatus = {}));
var ActivityType;
(function (ActivityType) {
    ActivityType["event"] = "event";
    ActivityType["workout"] = "workout";
    ActivityType["meeting"] = "meeting";
})(ActivityType = exports.ActivityType || (exports.ActivityType = {}));
var ActivityTypeHelper = /** @class */ (function () {
    function ActivityTypeHelper() {
    }
    ActivityTypeHelper.title = function (type) {
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
    };
    ActivityTypeHelper.shortTitle = function (type) {
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
    };
    return ActivityTypeHelper;
}());
exports.ActivityTypeHelper = ActivityTypeHelper;
var MassUnit;
(function (MassUnit) {
    MassUnit["Pound"] = "pound";
    MassUnit["Kilogram"] = "kilogram";
})(MassUnit = exports.MassUnit || (exports.MassUnit = {}));
var LengthUnit;
(function (LengthUnit) {
    LengthUnit["Yard"] = "yard";
    LengthUnit["Meter"] = "meter";
})(LengthUnit = exports.LengthUnit || (exports.LengthUnit = {}));
var ExerciseInput;
(function (ExerciseInput) {
    ExerciseInput["Reps"] = "reps";
    ExerciseInput["Weight"] = "weight";
    ExerciseInput["Duration"] = "duration";
    ExerciseInput["Distance"] = "distance";
    ExerciseInput["Freeform"] = "freeform";
})(ExerciseInput = exports.ExerciseInput || (exports.ExerciseInput = {}));
var ActivityStatus;
(function (ActivityStatus) {
    ActivityStatus["Draft"] = "draft";
    ActivityStatus["Published"] = "published";
    ActivityStatus["Archived"] = "archived";
})(ActivityStatus = exports.ActivityStatus || (exports.ActivityStatus = {}));
var VisibilityStatus;
(function (VisibilityStatus) {
    VisibilityStatus["Public"] = "public";
    VisibilityStatus["Private"] = "private";
    VisibilityStatus["Archived"] = "archived";
})(VisibilityStatus = exports.VisibilityStatus || (exports.VisibilityStatus = {}));
var MovementCategory;
(function (MovementCategory) {
    MovementCategory["Warmup"] = "warmup";
    MovementCategory["Mobility"] = "mobility";
    MovementCategory["Stability"] = "stability";
    MovementCategory["Plyometric"] = "plyometric";
    MovementCategory["Power"] = "power";
    MovementCategory["Strength"] = "strength";
    MovementCategory["Movement"] = "movement";
    MovementCategory["Condition"] = "condition";
    MovementCategory["SportSpecific"] = "sport-specific";
    MovementCategory["Technique"] = "technique";
    MovementCategory["Wellness"] = "wellness";
})(MovementCategory = exports.MovementCategory || (exports.MovementCategory = {}));
var AccessLevel;
(function (AccessLevel) {
    AccessLevel["all"] = "all";
    AccessLevel["members"] = "members";
    AccessLevel["paidMembers"] = "paidMembers";
    AccessLevel["oneTimePurchase"] = "oneTimePurchase";
})(AccessLevel = exports.AccessLevel || (exports.AccessLevel = {}));
exports.convertedWeight = function (unitToConvertFrom, unitToConvertTo, weight, levelsOfPrecision) {
    if (levelsOfPrecision === void 0) { levelsOfPrecision = 1; }
    if (!weight) {
        return null;
    }
    var unit = unitToConvertFrom == MassUnit.Kilogram ? uom_1.Units.Kilogram : uom_1.Units.PoundLb;
    var amount = uom_1.Amount.create(weight, unit);
    if (unitToConvertTo == MassUnit.Kilogram) {
        var toKilos = uom_1.Amount.valueAs(uom_1.Units.Kilogram, amount);
        return lodash_round_1.default(toKilos, levelsOfPrecision);
    }
    else {
        var toPounds = uom_1.Amount.valueAs(uom_1.Units.PoundLb, amount);
        return lodash_round_1.default(toPounds, levelsOfPrecision);
    }
};
var ALGExercise = /** @class */ (function () {
    function ALGExercise(objectID, data) {
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
    return ALGExercise;
}());
exports.ALGExercise = ALGExercise;
var PhotoType;
(function (PhotoType) {
    PhotoType["Unsplash"] = "unsplash";
    PhotoType["Custom"] = "custom";
})(PhotoType = exports.PhotoType || (exports.PhotoType = {}));
var DistanceUnit;
(function (DistanceUnit) {
    DistanceUnit["meters"] = "meters";
    DistanceUnit["feet"] = "feet";
    DistanceUnit["kilometers"] = "kilometers";
    DistanceUnit["miles"] = "miles";
})(DistanceUnit = exports.DistanceUnit || (exports.DistanceUnit = {}));
var DurationUnit;
(function (DurationUnit) {
    DurationUnit["minute"] = "minute";
    DurationUnit["second"] = "second";
})(DurationUnit = exports.DurationUnit || (exports.DurationUnit = {}));
var ScheduleSignUpType;
(function (ScheduleSignUpType) {
    ScheduleSignUpType["anyoneCanSignUp"] = "anyoneCanSignUp";
    ScheduleSignUpType["inviteOnly"] = "inviteOnly";
})(ScheduleSignUpType = exports.ScheduleSignUpType || (exports.ScheduleSignUpType = {}));
var IActivity = /** @class */ (function () {
    function IActivity(id, data) {
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
    return IActivity;
}());
exports.IActivity = IActivity;
var ALGActivity = /** @class */ (function () {
    function ALGActivity(objectID, data) {
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
    Object.defineProperty(ALGActivity.prototype, "id", {
        get: function () {
            return this.objectID;
        },
        enumerable: true,
        configurable: true
    });
    return ALGActivity;
}());
exports.ALGActivity = ALGActivity;
var ScheduleRole;
(function (ScheduleRole) {
    ScheduleRole["Member"] = "member";
    ScheduleRole["Owner"] = "owner";
})(ScheduleRole = exports.ScheduleRole || (exports.ScheduleRole = {}));
var DocumentRole;
(function (DocumentRole) {
    DocumentRole["Admin"] = "admin";
})(DocumentRole = exports.DocumentRole || (exports.DocumentRole = {}));
var MemberStatus;
(function (MemberStatus) {
    MemberStatus["Active"] = "active";
    MemberStatus["Inactive"] = "inactive";
    MemberStatus["Removed"] = "removed";
    MemberStatus["Blocked"] = "blocked";
})(MemberStatus = exports.MemberStatus || (exports.MemberStatus = {}));
// Stripe subscription statuses
var SubscriptionStatus;
(function (SubscriptionStatus) {
    SubscriptionStatus["active"] = "active";
    SubscriptionStatus["past_due"] = "past_due";
    SubscriptionStatus["unpaid"] = "unpaid";
    SubscriptionStatus["canceled"] = "canceled";
    SubscriptionStatus["incomplete"] = "incomplete";
    SubscriptionStatus["incomplete_expired"] = "incomplete_expired";
    SubscriptionStatus["trialing"] = "trialing";
})(SubscriptionStatus = exports.SubscriptionStatus || (exports.SubscriptionStatus = {}));
var RedemptionStatus;
(function (RedemptionStatus) {
    RedemptionStatus["redeemed"] = "redeemed";
    RedemptionStatus["unredeemed"] = "unredeemed";
    RedemptionStatus["rejected"] = "rejected";
})(RedemptionStatus = exports.RedemptionStatus || (exports.RedemptionStatus = {}));
