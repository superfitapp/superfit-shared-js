"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProgramCatalogAvailability = /** @class */ (function () {
    function ProgramCatalogAvailability() {
        this.Pro = "pro";
        this.Free = "free";
    }
    return ProgramCatalogAvailability;
}());
exports.ProgramCatalogAvailability = ProgramCatalogAvailability;
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
        this.Addon = "addon";
        this.PowerStrength = "powerstrength";
        this.Conditioning = "conditioning";
    }
    return WorkoutType;
}());
exports.WorkoutType = WorkoutType;
var MassUnit = /** @class */ (function () {
    function MassUnit() {
        this.Pound = "pound";
        this.Kilogram = "kilogram";
    }
    return MassUnit;
}());
exports.MassUnit = MassUnit;
var Season = /** @class */ (function () {
    function Season() {
        this.OffSeason = "offseason";
        this.InSeason = "inseason";
        this.PostSeason = "postseason";
        this.AllSeason = "allseason";
    }
    return Season;
}());
exports.Season = Season;
var Level = /** @class */ (function () {
    function Level() {
        this.Beginner = "beginner";
        this.Intermediate = "intermediate";
        this.Advanced = "advanced";
        this.Pro = "pro";
    }
    return Level;
}());
exports.Level = Level;
var ExerciseInput = /** @class */ (function () {
    function ExerciseInput() {
        this.Reps = "reps";
        this.Weight = "weight";
        this.Duration = "duration";
        this.Distance = "distance";
    }
    return ExerciseInput;
}());
exports.ExerciseInput = ExerciseInput;
var MovementType = /** @class */ (function () {
    function MovementType() {
        this.Static = "static";
        this.Dynamic = "dynamic";
        this.HPush = "hpush";
        this.HPull = "hpull";
        this.LBPush = "lbpush";
        this.LBPull = "lbpull";
        this.LPushPull = "lpushpull";
        this.HPushPull = "hpushpull";
        this.VPull = "vpull";
        this.VPush = "vpush";
    }
    return MovementType;
}());
exports.MovementType = MovementType;
var MovementCategory = /** @class */ (function () {
    function MovementCategory() {
        this.Mobility = "mobility";
        this.Stability = "stability";
        this.Plyometric = "plyometric";
        this.Power = "power";
        this.Strength = "strength";
        this.Movement = "movement";
        this.Condition = "condition";
    }
    return MovementCategory;
}());
exports.MovementCategory = MovementCategory;
var ExerciseGoalType = /** @class */ (function () {
    function ExerciseGoalType() {
        this.MoreWeight = "more-weight";
        this.LessWeight = "less-weight";
        this.MoreReps = "more-reps";
        this.LessReps = "less-reps";
        this.MorePower = "more-power";
        this.SpeedQuickness = "speed-and-quickness";
        this.DynamicMobility = "dynamic-mobility";
        this.DynamicStability = "dynamic-stability";
        this.AMGRAP = "amgrap";
        this.LongerDuration = "longer-duration";
        this.ShorterDuration = "shorter-duration";
        this.SlowerPace = "slower-pace";
        this.FasterPace = "faster-pace";
        this.StaticMobility = "static-mobility";
        this.StaticStability = "static-stability";
        this.Technique = "technique";
        this.Custom = "custom";
    }
    return ExerciseGoalType;
}());
exports.ExerciseGoalType = ExerciseGoalType;
var Gender = /** @class */ (function () {
    function Gender() {
        this.Male = "male";
        this.Female = "female";
        this.Neutral = "neutral";
    }
    return Gender;
}());
exports.Gender = Gender;
