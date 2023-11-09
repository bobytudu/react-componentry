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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Controller } from "react-hook-form";
import Typography from "@mui/material/Typography";
import get from "lodash/get";
import find from "lodash/find";
function CustomSelect(_a) {
    var options = _a.options, label = _a.label, control = _a.control, name = _a.name, sx = _a.sx, _b = _a.fullWidth, fullWidth = _b === void 0 ? true : _b;
    return (_jsx(Controller, { name: name, control: control, render: function (_a) {
            var _b = _a.field, value = _b.value, onChange = _b.onChange, errors = _a.formState.errors;
            return (_jsxs(Box, { sx: __assign({ minWidth: 250 }, sx), children: [_jsx(Typography, { variant: "subtitle1", sx: { mb: 0.6, fontSize: 14, fontWeight: 600 }, children: label }), _jsxs(Select, { value: value, fullWidth: fullWidth, onChange: onChange, displayEmpty: true, renderValue: function (selected) {
                            if (!selected) {
                                return (_jsxs("p", { style: { opacity: "0.6", margin: 0, padding: 0 }, children: ["Select ", label] }));
                            }
                            return get(find(options, { value: selected }), "label", "unknown");
                        }, error: Boolean(get(errors, name)), children: [_jsxs(MenuItem, { value: "", children: ["Select ", label] }), options.map(function (item) { return (_jsx(MenuItem, { value: item.value, children: item.label }, item.value)); })] }), get(errors, name) && (_jsx(FormHelperText, { sx: { color: "error.main" }, children: _jsxs(_Fragment, { children: ["error- ", get(errors, "".concat(name, ".message"), "")] }) }))] }));
        } }));
}
export default CustomSelect;
//# sourceMappingURL=Select.js.map