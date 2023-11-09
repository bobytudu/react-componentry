import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DatePicker } from "@mui/x-date-pickers";
import { Controller } from "react-hook-form";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
function CustomDatePicker(_a) {
    var control = _a.control, label = _a.label, name = _a.name, _b = _a.fullWidth, fullWidth = _b === void 0 ? true : _b;
    return (_jsx(Controller, { control: control, name: name, render: function (_a) {
            var _b = _a.field, value = _b.value, onChange = _b.onChange;
            return (_jsxs(Box, { sx: { width: "100%" }, children: [_jsx(Typography, { variant: "subtitle1", sx: { mb: 0.6, fontSize: 14, fontWeight: 600 }, children: label }), _jsx(DatePicker, { disableFuture: true, value: value, onChange: function (value) { return onChange(value); }, slotProps: {
                            textField: {
                                fullWidth: fullWidth,
                            },
                        } })] }));
        } }));
}
export default CustomDatePicker;
//# sourceMappingURL=DatePicker.js.map