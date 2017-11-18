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
}
exports.BaseExerciseDefinition = BaseExerciseDefinition;
