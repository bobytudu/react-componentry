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
import { jsx as _jsx } from "react/jsx-runtime";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
function AlertComponent(_a) {
    var state = _a.state, closeSnack = _a.closeSnack, anchorOrigin = _a.anchorOrigin;
    var open = state.open, type = state.type, message = state.message;
    var onClose = function () {
        closeSnack();
    };
    return (_jsx(Snackbar, { anchorOrigin: __assign({ vertical: "top", horizontal: "right" }, anchorOrigin), open: open, autoHideDuration: 5000, onClose: onClose, children: _jsx(Alert, { variant: "filled", severity: type === "success" ? "success" : "error", sx: { width: "100%" }, onClose: onClose, children: message }) }));
}
export default AlertComponent;
//# sourceMappingURL=Alert.js.map