"use strict";
cc._RF.push(module, 'b6b87JGRk9Pf5DBIitGJ8Hm', 'DeathHeart');
// Script/Other Object/DeathHeart.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DeathHeart = /** @class */ (function (_super) {
    __extends(DeathHeart, _super);
    function DeathHeart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.vec2 = cc.v2(1, 0);
        return _this;
    }
    DeathHeart.prototype.onLoad = function () { };
    DeathHeart.prototype.start = function () { };
    DeathHeart.prototype.update = function (dt) {
        this.angle = Math.sqrt(this.vec2.x * this.vec2.x - this.vec2.y * this.vec2.y);
        var atan2 = Math.atan2(this.vec2.y, this.vec2.x);
        var velocity = cc.v2(this.vec2.x * 300 * dt * this.angle, this.vec2.y * 300 * dt * -this.angle);
        if (velocity.x == 0 && velocity.y == 0)
            this.node.destroy();
        this.node.x += velocity.x;
        this.node.y += velocity.y;
    };
    __decorate([
        property(cc.Vec2)
    ], DeathHeart.prototype, "vec2", void 0);
    DeathHeart = __decorate([
        ccclass
    ], DeathHeart);
    return DeathHeart;
}(cc.Component));
exports.default = DeathHeart;

cc._RF.pop();