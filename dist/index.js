"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExerciseBlock = /** @class */ (function () {
    function ExerciseBlock() {
        this.Warmup = "warmup";
        this.Drills = "drills";
        this.Cooldown = "cooldown";
        this.PowerStrength = "powerstrength";
        this.Conditioning = "conditioning";
    }
    return ExerciseBlock;
}());
exports.ExerciseBlock = ExerciseBlock;
var WorkoutType = /** @class */ (function () {
    function WorkoutType() {
    }
    WorkoutType.Addon = "addon";
    WorkoutType.PowerStrength = "powerstrength";
    WorkoutType.Conditioning = "conditioning";
    return WorkoutType;
}());
exports.WorkoutType = WorkoutType;
var MassUnit = /** @class */ (function () {
    function MassUnit() {
    }
    MassUnit.Pound = "pound";
    MassUnit.Kilogram = "kilogram";
    return MassUnit;
}());
exports.MassUnit = MassUnit;
var Level = /** @class */ (function () {
    function Level() {
    }
    Level.Beginner = "beginner";
    Level.Intermediate = "intermediate";
    Level.Advanced = "advanced";
    Level.Pro = "pro";
    return Level;
}());
exports.Level = Level;
var MovementType = /** @class */ (function () {
    function MovementType() {
    }
    MovementType.Static = "static";
    MovementType.Dynamic = "dynamic";
    MovementType.HPush = "hpush";
    MovementType.HPull = "hpull";
    MovementType.LBPush = "lbpush";
    MovementType.LBPull = "lbpull";
    MovementType.LPushPull = "lpushpull";
    MovementType.HPushPull = "hpushpull";
    MovementType.VPull = "vpull";
    MovementType.VPush = "vpush";
    return MovementType;
}());
exports.MovementType = MovementType;
