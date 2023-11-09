import { jsx as _jsx } from "react/jsx-runtime";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import { styled } from "@mui/material/styles";
var StyledBackdrop = styled(Backdrop)(function (_a) {
    var theme = _a.theme;
    return ({
        color: "#fff",
        zIndex: theme.zIndex.modal + 1,
    });
});
function Loader(_a) {
    var loading = _a.loading;
    return (_jsx(StyledBackdrop, { open: loading, children: _jsx(CircularProgress, { color: "inherit" }) }));
}
export default Loader;
//# sourceMappingURL=Loader.js.map