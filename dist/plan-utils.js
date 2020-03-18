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
