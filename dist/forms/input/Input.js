var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import get from "lodash/get";
import { Controller } from "react-hook-form";
import Typography from "@mui/material/Typography";
var CustomInput = function (_a) {
    var control = _a.control, name = _a.name, label = _a.label, _b = _a.sx, sx = _b === void 0 ? {} : _b, inputProps = _a.inputProps, rest = __rest(_a, ["control", "name", "label", "sx", "inputProps"]);
    return (_jsx(Controller, { control: control, name: name, render: function (_a) {
            var _b = _a.field, value = _b.value, onChange = _b.onChange, errors = _a.formState.errors;
            return (_jsxs(Box, { sx: { width: "100%" }, children: [_jsx(Typography, { variant: "subtitle1", sx: { mb: 0.6, fontSize: 14, fontWeight: 600 }, children: label }), _jsx(TextField, __assign({ value: value }, rest, { variant: get(rest, "variant", "outlined"), onChange: function (e) { return onChange(e.target.value); }, error: Boolean(get(errors, name)), sx: __assign({ maxWidth: !rest.fullWidth ? 400 : "auto" }, sx), helperText: _jsx(_Fragment, { children: get(errors, "".concat(name, ".message"), "") }), inputProps: inputProps })), !get(errors, name) && (_jsx(InputLabel, { sx: { color: "transparent" }, children: _jsx(_Fragment, { children: get(errors, name, "") }) }))] }));
        } }));
};
export default CustomInput;
//# sourceMappingURL=Input.js.map