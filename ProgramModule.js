"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MovementModule_1 = require("./MovementModule");
var ExerciseBlock_1 = require("./ExerciseBlock");
var WorkoutType_1 = require("./WorkoutType");
var Level_1 = require("./Level");
function sayHi() {
    console.log("saying Hi");
}
exports.sayHi = sayHi;
var IProgramCatalog = /** @class */ (function () {
    function IProgramCatalog() {
    }
    IProgramCatalog.prototype.getLevel = function () {
        return Level_1.default[this.level];
    };
    IProgramCatalog.prototype.setLevel = function (level) {
        this.level = Level_1.default[level];
    };
    return IProgramCatalog;
}());
exports.IProgramCatalog = IProgramCatalog;
var BaseProgramCatalog = /** @class */ (function () {
    function BaseProgramCatalog() {
    }
    BaseProgramCatalog.prototype.getLevel = function () {
        return Level_1.default[this.level];
    };
    BaseProgramCatalog.prototype.setLevel = function (level) {
        this.level = Level_1.default[level];
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
var BaseWorkoutCatalog = /** @class */ (function () {
    function BaseWorkoutCatalog() {
    }
    BaseWorkoutCatalog.prototype.getType = function () {
        return WorkoutType_1.default[this.type];
    };
    BaseWorkoutCatalog.prototype.setType = function (type) {
        this.type = WorkoutType_1.default[type];
    };
    return BaseWorkoutCatalog;
}());
exports.BaseWorkoutCatalog = BaseWorkoutCatalog;
var BaseExerciseCatalog = /** @class */ (function () {
    function BaseExerciseCatalog() {
    }
    BaseExerciseCatalog.prototype.getBlock = function () {
        return ExerciseBlock_1.default[this.block];
    };
    BaseExerciseCatalog.prototype.setBlock = function (block) {
        this.block = ExerciseBlock_1.default[block];
    };
    return BaseExerciseCatalog;
}());
exports.BaseExerciseCatalog = BaseExerciseCatalog;
var BaseExerciseDefinition = /** @class */ (function () {
    function BaseExerciseDefinition() {
    }
    BaseExerciseDefinition.prototype.getBlock = function () {
        return MovementModule_1.MovementType[this.movementType];
    };
    BaseExerciseDefinition.prototype.setBlock = function (movementType) {
        this.movementType = MovementModule_1.MovementType[movementType];
    };
    BaseExerciseDefinition.prototype.getPlane = function () {
        return MovementModule_1.MovementPlane[this.plane];
    };
    BaseExerciseDefinition.prototype.setPlane = function (plane) {
        this.plane = MovementModule_1.MovementPlane[plane];
    };
    BaseExerciseDefinition.prototype.getCategory = function () {
        return MovementModule_1.MovementCategory[this.category];
    };
    BaseExerciseDefinition.prototype.setCategory = function (category) {
        this.category = MovementModule_1.MovementCategory[category];
    };
    BaseExerciseDefinition.fromJson = function (json) {
        var newExerciseDefinition = new BaseExerciseDefinition();
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
}());
exports.BaseExerciseDefinition = BaseExerciseDefinition;
