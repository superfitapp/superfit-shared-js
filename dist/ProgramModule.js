"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExerciseBlock_1 = require("./ExerciseBlock");
const WorkoutType_1 = require("./WorkoutType");
const Level_1 = require("./Level");
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
