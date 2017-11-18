"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
