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
var PlanUtils = /** @class */ (function () {
    function PlanUtils() {
    }
    PlanUtils.experienceLevelText = function (planInfo) {
        switch (planInfo.level.toLowerCase()) {
            case "beginner" /* Beginner */:
                return "Perfect for all fitness levels";
            case "intermediate" /* Intermediate */:
                return "Some training experience preferred";
            case "advanced" /* Advanced */:
                return "Advanced fitness experience preferred";
            case "pro" /* Pro */:
                return "Advanced movement and strength experience required";
            default:
                return "Some training experience preferred";
        }
    };
    PlanUtils.trainingPlanTemplateTotalWeeks = function (planInfo) {
        if (!planInfo.phases) {
            return 0;
        }
        return planInfo.phases.map(function (x) { return x.numberOfWeeks; }).reduce(function (a, b) { return a + b; });
    };
    return PlanUtils;
}());
export { PlanUtils };
