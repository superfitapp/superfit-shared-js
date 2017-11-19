"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MovementModule_1 = require("./MovementModule");
const ExerciseBlock_1 = require("./ExerciseBlock");
const WorkoutType_1 = require("./WorkoutType");
const Level_1 = require("./Level");
class IProgramCatalog {
    getLevel() {
        return Level_1.default[this.level];
    }
    setLevel(level) {
        this.level = Level_1.default[level];
    }
}
exports.IProgramCatalog = IProgramCatalog;
class BaseProgramCatalog {
    getLevel() {
        return Level_1.default[this.level];
    }
    setLevel(level) {
        this.level = Level_1.default[level];
    }
    static fromJson(json) {
        let newProgramCatalog = new BaseProgramCatalog();
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
        let workoutCatalogsJson = json["workoutCatalogs"];
        var workoutCatalogs = [];
        // parse workouts 
        // NOT DONE YET
        if (workoutCatalogsJson) {
            for (let workoutCatalogJson of workoutCatalogsJson) {
                let workoutCatalog = new BaseWorkoutCatalog();
                workoutCatalogs.push(workoutCatalog);
            }
            newProgramCatalog.workoutCatalogs = workoutCatalogs;
        }
        // parse coach
        let coachJson = json["coach"];
        if (coachJson) {
            let coachSlug = coachJson["slug"];
            if (coachSlug) {
            }
        }
        return newProgramCatalog;
    }
}
exports.BaseProgramCatalog = BaseProgramCatalog;
class BaseWorkoutCatalog {
    getType() {
        return WorkoutType_1.default[this.type];
    }
    setType(type) {
        this.type = WorkoutType_1.default[type];
    }
}
exports.BaseWorkoutCatalog = BaseWorkoutCatalog;
class BaseExerciseCatalog {
    getBlock() {
        return ExerciseBlock_1.default[this.block];
    }
    setBlock(block) {
        this.block = ExerciseBlock_1.default[block];
    }
}
exports.BaseExerciseCatalog = BaseExerciseCatalog;
class BaseExerciseDefinition {
    getBlock() {
        return MovementModule_1.MovementType[this.movementType];
    }
    setBlock(movementType) {
        this.movementType = MovementModule_1.MovementType[movementType];
    }
    getPlane() {
        return MovementModule_1.MovementPlane[this.plane];
    }
    setPlane(plane) {
        this.plane = MovementModule_1.MovementPlane[plane];
    }
    getCategory() {
        return MovementModule_1.MovementCategory[this.category];
    }
    setCategory(category) {
        this.category = MovementModule_1.MovementCategory[category];
    }
    static fromJson(json) {
        let newExerciseDefinition = new BaseExerciseDefinition();
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
    }
}
exports.BaseExerciseDefinition = BaseExerciseDefinition;
