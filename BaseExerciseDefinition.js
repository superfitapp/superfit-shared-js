"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MovementModule_1 = require("./MovementModule");
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
exports.default = BaseExerciseDefinition;
