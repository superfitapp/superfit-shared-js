"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uom_1 = require("uom");
exports.convertedWeight = function (unitToConvertFrom, unitToConvertTo, weight) {
    if (!weight) {
        return null;
    }
    var unit = (unitToConvertFrom == "kilogram" /* Kilogram */ ? uom_1.Units.Kilogram : uom_1.Units.PoundLb);
    var amount = uom_1.Amount.create(weight, unit);
    if (unitToConvertTo == "kilogram" /* Kilogram */) {
        var toKilos = uom_1.Amount.valueAs(uom_1.Units.Kilogram, amount);
        return toKilos;
    }
    else {
        var toPounds = uom_1.Amount.valueAs(uom_1.Units.PoundLb, amount);
        return toPounds;
    }
};
