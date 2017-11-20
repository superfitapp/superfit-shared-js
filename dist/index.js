"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseCoach = /** @class */ (function () {
    function BaseCoach() {
    }
    return BaseCoach;
}());
exports.BaseCoach = BaseCoach;
var ExerciseBlock;
(function (ExerciseBlock) {
    ExerciseBlock["Warmup"] = "Warmup";
    ExerciseBlock["Drills"] = "Drills";
    ExerciseBlock["Cooldown"] = "Cooldown";
    ExerciseBlock["PowerStrength"] = "PowerStrength";
    ExerciseBlock["Conditioning"] = "Conditioning";
})(ExerciseBlock = exports.ExerciseBlock || (exports.ExerciseBlock = {}));
var ExerciseGoal = /** @class */ (function () {
    function ExerciseGoal() {
    }
    return ExerciseGoal;
}());
exports.ExerciseGoal = ExerciseGoal;
var Level;
(function (Level) {
    Level["Beginner"] = "Beginner";
    Level["Intermediate"] = "Intermediate";
    Level["Advanced"] = "Advanced";
    Level["Pro"] = "Pro";
})(Level = exports.Level || (exports.Level = {}));
var ActiveExerciseInput;
(function (ActiveExerciseInput) {
    ActiveExerciseInput["Reps"] = "Reps";
    ActiveExerciseInput["Weight"] = "Weight";
    ActiveExerciseInput["Duration"] = "Duration";
})(ActiveExerciseInput = exports.ActiveExerciseInput || (exports.ActiveExerciseInput = {}));
var MovementType;
(function (MovementType) {
    MovementType["Static"] = "Static";
    MovementType["Dynamic"] = "Dynamic";
    MovementType["HPush"] = "HPush";
    MovementType["HPull"] = "HPull";
    MovementType["LBPush"] = "LBPush";
    MovementType["LBPull"] = "LBPull";
    MovementType["LPushPull"] = "LPushPull";
    MovementType["HPushPull"] = "HPushPull";
    MovementType["VPull"] = "VPull";
    MovementType["VPush"] = "VPush";
})(MovementType = exports.MovementType || (exports.MovementType = {}));
var MovementPlane;
(function (MovementPlane) {
    MovementPlane["Saggital"] = "Saggital";
    MovementPlane["Transverse"] = "Transverse";
    MovementPlane["Frontal"] = "Frontal";
    MovementPlane["Multi"] = "Multi";
})(MovementPlane = exports.MovementPlane || (exports.MovementPlane = {}));
var MovementCategory;
(function (MovementCategory) {
    MovementCategory["Mobility"] = "Mobility";
    MovementCategory["Stability"] = "Stability";
    MovementCategory["Plyometric"] = "Plyometric";
    MovementCategory["Power"] = "Power";
    MovementCategory["Strength"] = "Strength";
    MovementCategory["Movement"] = "Movement";
    MovementCategory["Condition"] = "Condition";
})(MovementCategory = exports.MovementCategory || (exports.MovementCategory = {}));
var IProgramCatalog = /** @class */ (function () {
    function IProgramCatalog() {
    }
    IProgramCatalog.prototype.getLevel = function () {
        return Level[this.level];
    };
    IProgramCatalog.prototype.setLevel = function (level) {
        this.level = Level[level];
    };
    return IProgramCatalog;
}());
exports.IProgramCatalog = IProgramCatalog;
var BaseProgramCatalog = /** @class */ (function () {
    function BaseProgramCatalog() {
    }
    BaseProgramCatalog.prototype.getLevel = function () {
        return Level[this.level];
    };
    BaseProgramCatalog.prototype.setLevel = function (level) {
        this.level = Level[level];
    };
    BaseProgramCatalog.prototype.hi = function () {
        console.log("hi instance");
    };
    BaseProgramCatalog.hi = function () {
        console.log("hi static");
    };
    BaseProgramCatalog.fromJson = function (json) {
        var newProgramCatalog = new BaseProgramCatalog();
        newProgramCatalog.title = json["title"];
        newProgramCatalog.sport = json["sport"];
        newProgramCatalog.summary = json["summary"];
        newProgramCatalog.tagline = json["tagline"];
        newProgramCatalog.level = json["level"];
        newProgramCatalog.numberOfWeeks = json["numberOfWeeks"];
        newProgramCatalog.season = json["season"];
        newProgramCatalog.isLive = json["isLive"] || false;
        newProgramCatalog.seriesOrder = json["seriesOrder"];
        newProgramCatalog.slug = json["slug"];
        newProgramCatalog.version = json["version"];
        var workoutCatalogsJson = json["workoutCatalogs"];
        var workoutCatalogs = [];
        // parse workouts 
        // NOT DONE YET
        if (workoutCatalogsJson) {
            for (var _i = 0, workoutCatalogsJson_1 = workoutCatalogsJson; _i < workoutCatalogsJson_1.length; _i++) {
                var workoutCatalogJson = workoutCatalogsJson_1[_i];
                var workoutCatalog = new BaseWorkoutCatalog();
                workoutCatalogs.push(workoutCatalog);
            }
            newProgramCatalog.workoutCatalogs = workoutCatalogs;
        }
        // parse coach
        var coachJson = json["coach"];
        if (coachJson) {
            var coachSlug = coachJson["slug"];
            if (coachSlug) {
            }
        }
        return newProgramCatalog;
    };
    return BaseProgramCatalog;
}());
exports.BaseProgramCatalog = BaseProgramCatalog;
var WorkoutType;
(function (WorkoutType) {
    WorkoutType["Addon"] = "Addon";
    WorkoutType["PowerStrength"] = "PowerStrength";
    WorkoutType["Conditioning"] = "Conditioning";
})(WorkoutType = exports.WorkoutType || (exports.WorkoutType = {}));
var Season;
(function (Season) {
    Season["OffSeason"] = "OffSeason";
    Season["InSeason"] = "InSeason";
    Season["PostSeason"] = "PostSeason";
    Season["AllSeason"] = "AllSeason";
})(Season = exports.Season || (exports.Season = {}));
var BaseWorkoutCatalog = /** @class */ (function () {
    function BaseWorkoutCatalog() {
    }
    BaseWorkoutCatalog.prototype.getType = function () {
        return WorkoutType[this.type];
    };
    BaseWorkoutCatalog.prototype.setType = function (type) {
        this.type = WorkoutType[type];
    };
    return BaseWorkoutCatalog;
}());
exports.BaseWorkoutCatalog = BaseWorkoutCatalog;
var BaseExerciseCatalog = /** @class */ (function () {
    function BaseExerciseCatalog() {
    }
    BaseExerciseCatalog.prototype.getBlock = function () {
        return ExerciseBlock[this.block];
    };
    BaseExerciseCatalog.prototype.setBlock = function (block) {
        this.block = ExerciseBlock[block];
    };
    return BaseExerciseCatalog;
}());
exports.BaseExerciseCatalog = BaseExerciseCatalog;
var CategoryType = /** @class */ (function () {
    function CategoryType() {
    }
    CategoryType.prototype.getBlock = function () {
        return MovementType[this.movementType];
    };
    CategoryType.prototype.setBlock = function (movementType) {
        this.movementType = MovementType[movementType];
    };
    return CategoryType;
}());
exports.CategoryType = CategoryType;
var BaseExerciseDefinition = /** @class */ (function (_super) {
    __extends(BaseExerciseDefinition, _super);
    function BaseExerciseDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseExerciseDefinition.prototype.getPlane = function () {
        return MovementPlane[this.plane];
    };
    BaseExerciseDefinition.prototype.setPlane = function (plane) {
        this.plane = MovementPlane[plane];
    };
    BaseExerciseDefinition.prototype.getCategory = function () {
        return MovementCategory[this.category];
    };
    BaseExerciseDefinition.prototype.setCategory = function (category) {
        this.category = MovementCategory[category];
    };
    BaseExerciseDefinition.fromJson = function (json) {
        var newExerciseDefinition = new BaseExerciseDefinition();
        newExerciseDefinition.id = json['id'];
        newExerciseDefinition.title = json['title'];
        newExerciseDefinition.slug = json['slug'];
        newExerciseDefinition.movementType = json['movementType'];
        newExerciseDefinition.category = json['category'];
        newExerciseDefinition.plane = json['plane'];
        newExerciseDefinition.isBodyweight = json['isBodyweight'];
        newExerciseDefinition.athleticIndex = json['athleticIndex'];
        newExerciseDefinition.demoUrl = json['demoUrl'];
        newExerciseDefinition.unilateral = json['unilateral'];
        return newExerciseDefinition;
    };
    return BaseExerciseDefinition;
}(CategoryType));
exports.BaseExerciseDefinition = BaseExerciseDefinition;
