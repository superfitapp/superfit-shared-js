"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALGActivity = exports.IActivity = exports.ALGExercise = exports.convertedWeight = void 0;
var uom_1 = require("uom");
var lodash_round_1 = __importDefault(require("lodash.round"));
exports.convertedWeight = function (unitToConvertFrom, unitToConvertTo, weight, levelsOfPrecision) {
    if (levelsOfPrecision === void 0) { levelsOfPrecision = 1; }
    if (!weight) {
        return null;
    }
    var unit = (unitToConvertFrom == "kilogram" /* Kilogram */ ? uom_1.Units.Kilogram : uom_1.Units.PoundLb);
    var amount = uom_1.Amount.create(weight, unit);
    if (unitToConvertTo == "kilogram" /* Kilogram */) {
        var toKilos = uom_1.Amount.valueAs(uom_1.Units.Kilogram, amount);
        return lodash_round_1.default(toKilos, levelsOfPrecision);
    }
    else {
        var toPounds = uom_1.Amount.valueAs(uom_1.Units.PoundLb, amount);
        return lodash_round_1.default(toPounds, levelsOfPrecision);
    }
};
// export interface WorkoutTemplateTypeResponse {
//   id: string;
//   creationDate: Date;
//   revisionDate: Date;
//   title: string;
//   visibilityStatus: string;
//   internalTitle?: string;
//   photoId?: string;
//   sectionOneTitle: string;
//   sectionTwoTitle: string;
//   sectionThreeTitle: string;
//   sectionFourTitle: string;
//   sectionFiveTitle: string;
//   sectionOneColor?: string;
//   sectionTwoColor?: string;
//   sectionThreeColor?: string;
//   sectionFourColor?: string;
//   sectionFiveColor?: string;
//   difficultyOneRest?: number;
//   difficultyTwoRest?: number;
//   difficultyThreeRest?: number;
//   difficultyFourRest?: number;
//   difficultyFiveRest?: number;
//   workoutTemplates?: Workout_Template_Response_V1[];
//   owner?: Professional_Response_V1
// }
// export interface WorkoutSectionResponse {
//   title: string
//   order: number
//   colorDescription?: string
// }
// export const enum PlanType {
//   Plan = "plan",
//   Class = "class"
// }
// export class TrainingLevelManager {
//   allLevels(): string[] {
//     return [
//       Level.Beginner,
//       Level.Intermediate,
//       Level.Advanced,
//       Level.Pro
//     ];
//   }
//   title(type: string): string | undefined {
//     switch (type) {
//       case Level.Beginner:
//         return "Perfect For All Levels";
//       case Level.Intermediate:
//         return "General Fitness Preferred";
//       case Level.Advanced:
//         return "Athletic Fitness Preferred";
//       case Level.Pro:
//         return "Athletic Fitness Required";
//       default:
//         return undefined;
//     }
//   }
//   imageUrl(type: string): string | undefined {
//     switch (type) {
//       case Level.Beginner:
//         return "https://superfit.nyc3.cdn.digitaloceanspaces.com/assets/easy.png";
//       case Level.Intermediate:
//         return "https://superfit.nyc3.cdn.digitaloceanspaces.com/assets/medium.png";
//       case Level.Advanced:
//         return "https://superfit.nyc3.cdn.digitaloceanspaces.com/assets/medium.png";
//       case Level.Pro:
//         return "https://superfit.nyc3.cdn.digitaloceanspaces.com/assets/hard.png";
//       default:
//         return "https://superfit.nyc3.cdn.digitaloceanspaces.com/assets/easy.png";
//     }
//   }
// }
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
        enumerable: false,
        configurable: true
    });
    return ALGActivity;
}());
exports.ALGActivity = ALGActivity;
