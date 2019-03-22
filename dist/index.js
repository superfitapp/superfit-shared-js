"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProgramCatalogAvailability;
(function (ProgramCatalogAvailability) {
    ProgramCatalogAvailability["Pro"] = "pro";
    ProgramCatalogAvailability["Free"] = "free";
})(ProgramCatalogAvailability = exports.ProgramCatalogAvailability || (exports.ProgramCatalogAvailability = {}));
var ExerciseBlock;
(function (ExerciseBlock) {
    ExerciseBlock["Warmup"] = "Warmup";
    ExerciseBlock["Drills"] = "Drills";
    ExerciseBlock["Cooldown"] = "Cooldown";
    ExerciseBlock["PowerStrength"] = "PowerStrength";
    ExerciseBlock["Conditioning"] = "Conditioning";
})(ExerciseBlock = exports.ExerciseBlock || (exports.ExerciseBlock = {}));
var WorkoutType;
(function (WorkoutType) {
    WorkoutType["Addon"] = "Addon";
    WorkoutType["PowerStrength"] = "PowerStrength";
    WorkoutType["Conditioning"] = "Conditioning";
})(WorkoutType = exports.WorkoutType || (exports.WorkoutType = {}));
var MassUnit;
(function (MassUnit) {
    MassUnit["Pound"] = "pound";
    MassUnit["Kilogram"] = "kilogram";
})(MassUnit = exports.MassUnit || (exports.MassUnit = {}));
var Season;
(function (Season) {
    Season["OffSeason"] = "OffSeason";
    Season["InSeason"] = "InSeason";
    Season["PostSeason"] = "PostSeason";
    Season["AllSeason"] = "AllSeason";
})(Season = exports.Season || (exports.Season = {}));
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
var ExerciseGoalType;
(function (ExerciseGoalType) {
    ExerciseGoalType["MoreWeight"] = "more-weight";
    ExerciseGoalType["LessWeight"] = "less-weight";
    ExerciseGoalType["MoreReps"] = "more-reps";
    ExerciseGoalType["LessReps"] = "less-reps";
    ExerciseGoalType["MorePower"] = "more-power";
    ExerciseGoalType["SpeedQuickness"] = "speed-and-quickness";
    ExerciseGoalType["DynamicMobility"] = "dynamic-mobility";
    ExerciseGoalType["DynamicStability"] = "dynamic-stability";
    ExerciseGoalType["AMGRAP"] = "amgrap";
    ExerciseGoalType["LongerDuration"] = "longer-duration";
    ExerciseGoalType["ShorterDuration"] = "shorter-duration";
    ExerciseGoalType["SlowerPace"] = "slower-pace";
    ExerciseGoalType["FasterPace"] = "faster-pace";
    ExerciseGoalType["StaticMobility"] = "static-mobility";
    ExerciseGoalType["StaticStability"] = "static-stability";
    ExerciseGoalType["Technique"] = "technique";
    ExerciseGoalType["Custom"] = "custom";
})(ExerciseGoalType = exports.ExerciseGoalType || (exports.ExerciseGoalType = {}));
