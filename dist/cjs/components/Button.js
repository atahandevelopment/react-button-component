"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Button = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "filled" : _b, _c = _a.padding, padding = _c === void 0 ? "sm" : _c, _d = _a.color, color = _d === void 0 ? "primary" : _d, _e = _a.type, type = _e === void 0 ? "button" : _e, onClick = _a.onClick, children = _a.children;
    var btnColor = "";
    switch (color) {
        case "primary":
            btnColor = "#099ede";
            break;
        case "secondary":
            btnColor = "#5009de";
            break;
        case "success":
            btnColor = "#11c204";
            break;
        case "danger":
            btnColor = "#c20437";
            break;
        case "warning":
            btnColor = "#c29904";
            break;
    }
    var btnProps = {
        style: {
            backgroundColor: variant === "outline" ? "transparent" : btnColor,
            borderRadius: "5px",
            padding: padding === "sm" ? "8px" : padding === "md" ? "12px" : "16px",
            color: variant === "outline" ? btnColor : "white",
            boxShadow: "0 0 5px rgba(0,0,0,0.2)",
            border: variant === "outline" ? "1px solid ".concat(btnColor) : "none",
        },
        onClick: onClick,
        type: type,
    };
    return react_1.default.createElement("button", tslib_1.__assign({}, btnProps), children);
};
exports.default = Button;
//# sourceMappingURL=Button.js.map