"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProgramCatalogAvailability = /** @class */ (function () {
    function ProgramCatalogAvailability() {
    }
    ProgramCatalogAvailability.Pro = "pro";
    ProgramCatalogAvailability.Free = "free";
    return ProgramCatalogAvailability;
}());
exports.ProgramCatalogAvailability = ProgramCatalogAvailability;
var ExerciseBlock = /** @class */ (function () {
    function ExerciseBlock() {
    }
    ExerciseBlock.Warmup = "warmup";
    ExerciseBlock.Drills = "drills";
    ExerciseBlock.Cooldown = "cooldown";
    ExerciseBlock.PowerStrength = "powerstrength";
    ExerciseBlock.Conditioning = "conditioning";
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
var Season = /** @class */ (function () {
    function Season() {
    }
    Season.OffSeason = "offseason";
    Season.InSeason = "inseason";
    Season.PostSeason = "postseason";
    Season.AllSeason = "allseason";
    return Season;
}());
exports.Season = Season;
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
var ExerciseInput = /** @class */ (function () {
    function ExerciseInput() {
    }
    ExerciseInput.Reps = "reps";
    ExerciseInput.Weight = "weight";
    ExerciseInput.Duration = "duration";
    ExerciseInput.Distance = "distance";
    return ExerciseInput;
}());
exports.ExerciseInput = ExerciseInput;
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
var MovementCategory = /** @class */ (function () {
    function MovementCategory() {
    }
    MovementCategory.Mobility = "mobility";
    MovementCategory.Stability = "stability";
    MovementCategory.Plyometric = "plyometric";
    MovementCategory.Power = "power";
    MovementCategory.Strength = "strength";
    MovementCategory.Movement = "movement";
    MovementCategory.Condition = "condition";
    return MovementCategory;
}());
exports.MovementCategory = MovementCategory;
var ExerciseGoalType = /** @class */ (function () {
    function ExerciseGoalType() {
    }
    ExerciseGoalType.MoreWeight = "more-weight";
    ExerciseGoalType.LessWeight = "less-weight";
    ExerciseGoalType.MoreReps = "more-reps";
    ExerciseGoalType.LessReps = "less-reps";
    ExerciseGoalType.MorePower = "more-power";
    ExerciseGoalType.SpeedQuickness = "speed-and-quickness";
    ExerciseGoalType.DynamicMobility = "dynamic-mobility";
    ExerciseGoalType.DynamicStability = "dynamic-stability";
    ExerciseGoalType.AMGRAP = "amgrap";
    ExerciseGoalType.LongerDuration = "longer-duration";
    ExerciseGoalType.ShorterDuration = "shorter-duration";
    ExerciseGoalType.SlowerPace = "slower-pace";
    ExerciseGoalType.FasterPace = "faster-pace";
    ExerciseGoalType.StaticMobility = "static-mobility";
    ExerciseGoalType.StaticStability = "static-stability";
    ExerciseGoalType.Technique = "technique";
    ExerciseGoalType.Custom = "custom";
    return ExerciseGoalType;
}());
exports.ExerciseGoalType = ExerciseGoalType;
var Gender = /** @class */ (function () {
    function Gender() {
    }
    Gender.Male = "male";
    Gender.Female = "female";
    Gender.Neutral = "neutral";
    return Gender;
}());
exports.Gender = Gender;
