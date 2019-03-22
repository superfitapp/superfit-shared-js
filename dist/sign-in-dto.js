"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
const index_1 = require("./index");
class SignInDTO_V1 {
}
__decorate([
    swagger_1.ApiModelProperty({
        type: String,
        description: "email user successfully signed in with."
    })
], SignInDTO_V1.prototype, "email", void 0);
__decorate([
    swagger_1.ApiModelProperty({
        type: String,
        description: "uuid string created locally by the client- used as an analytics identifier."
    })
], SignInDTO_V1.prototype, "userId", void 0);
__decorate([
    swagger_1.ApiModelProperty({
        type: index_1.MassUnit,
        description: "mass unit based on client locale or set preference"
    })
], SignInDTO_V1.prototype, "preferredMassUnit", void 0);
exports.default = SignInDTO_V1;
