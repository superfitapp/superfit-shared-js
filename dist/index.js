"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MassUnit = /** @class */ (function () {
    function MassUnit() {
    }
    MassUnit.Pound = "pound";
    MassUnit.Kilogram = "kilogram";
    return MassUnit;
}());
exports.MassUnit = MassUnit;
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
