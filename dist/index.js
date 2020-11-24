"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var uom_1 = require("uom");
var lodash_round_1 = __importDefault(require("lodash.round"));
2;
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
var PlanUtils = /** @class */ (function () {
    function PlanUtils() {
    }
    PlanUtils.experienceLevelText = function (planInfo) {
        switch (planInfo.level.toLowerCase()) {
            case "beginner" /* Beginner */:
                return "Perfect for all fitness levels";
            case "intermediate" /* Intermediate */:
                return "Some training experience preferred";
            case "advanced" /* Advanced */:
                return "Advanced fitness experience preferred";
            case "pro" /* Pro */:
                return "Advanced movement and strength experience required";
            default:
                return "Some training experience preferred";
        }
    };
    PlanUtils.trainingPlanTemplateTotalWeeks = function (planInfo) {
        if (!planInfo.phases) {
            return 0;
        }
        return planInfo.phases.map(function (x) { return x.numberOfWeeks; }).reduce(function (a, b) { return a + b; });
    };
    return PlanUtils;
}());
exports.PlanUtils = PlanUtils;
var TrainingLevelManager = /** @class */ (function () {
    function TrainingLevelManager() {
    }
    TrainingLevelManager.prototype.allLevels = function () {
        return [
            "beginner" /* Beginner */,
            "intermediate" /* Intermediate */,
            "advanced" /* Advanced */,
            "pro" /* Pro */
        ];
    };
    TrainingLevelManager.prototype.title = function (type) {
        switch (type) {
            case "beginner" /* Beginner */:
                return "Perfect For All Levels";
            case "intermediate" /* Intermediate */:
                return "General Fitness Preferred";
            case "advanced" /* Advanced */:
                return "Athletic Fitness Preferred";
            case "pro" /* Pro */:
                return "Athletic Fitness Required";
            default:
                return undefined;
        }
    };
    TrainingLevelManager.prototype.imageUrl = function (type) {
        switch (type) {
            case "beginner" /* Beginner */:
                return "https://superfit.nyc3.cdn.digitaloceanspaces.com/assets/easy.png";
            case "intermediate" /* Intermediate */:
                return "https://superfit.nyc3.cdn.digitaloceanspaces.com/assets/medium.png";
            case "advanced" /* Advanced */:
                return "https://superfit.nyc3.cdn.digitaloceanspaces.com/assets/medium.png";
            case "pro" /* Pro */:
                return "https://superfit.nyc3.cdn.digitaloceanspaces.com/assets/hard.png";
            default:
                return "https://superfit.nyc3.cdn.digitaloceanspaces.com/assets/easy.png";
        }
    };
    return TrainingLevelManager;
}());
exports.TrainingLevelManager = TrainingLevelManager;
var ALGExercise = /** @class */ (function () {
    function ALGExercise(objectID, data) {
        this.objectID = objectID;
        this.title = data.title;
        this.category = data.title;
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
        enumerable: true,
        configurable: true
    });
    return ALGActivity;
}());
exports.ALGActivity = ALGActivity;
