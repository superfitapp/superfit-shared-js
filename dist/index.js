import { Amount, Units } from "uom";
import round from 'lodash.round';
2;
export var convertedWeight = function (unitToConvertFrom, unitToConvertTo, weight, levelsOfPrecision) {
    if (levelsOfPrecision === void 0) { levelsOfPrecision = 1; }
    if (!weight) {
        return null;
    }
    var unit = (unitToConvertFrom == "kilogram" /* Kilogram */ ? Units.Kilogram : Units.PoundLb);
    var amount = Amount.create(weight, unit);
    if (unitToConvertTo == "kilogram" /* Kilogram */) {
        var toKilos = Amount.valueAs(Units.Kilogram, amount);
        return round(toKilos, levelsOfPrecision);
    }
    else {
        var toPounds = Amount.valueAs(Units.PoundLb, amount);
        return round(toPounds, levelsOfPrecision);
    }
};
export { PlanUtils } from './plan-utils';
