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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMediaQuery, useTheme } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import get from "lodash/get";
import * as React from "react";
import { Controller } from "react-hook-form";
import { VariableSizeList } from "react-window";
import Typography from "@mui/material/Typography";
var LISTBOX_PADDING = 8; // px
function renderRow(props) {
    var data = props.data, index = props.index, style = props.style;
    var dataSet = data[index];
    var inlineStyle = __assign(__assign({}, style), { top: style.top + LISTBOX_PADDING });
    return _jsx("div", { style: inlineStyle, children: dataSet });
}
var OuterElementContext = React.createContext({});
var OuterElementType = React.forwardRef(function (props, ref) {
    var outerProps = React.useContext(OuterElementContext);
    return _jsx("div", __assign({ ref: ref }, props, outerProps));
});
function useResetCache(data) {
    var ref = React.useRef(null);
    React.useEffect(function () {
        if (ref.current != null) {
            ref.current.resetAfterIndex(0, true);
        }
    }, [data]);
    return ref;
}
// Adapter for react-window
var ListboxComponent = React.forwardRef(function ListboxComponent(props, ref) {
    var children = props.children, other = __rest(props, ["children"]);
    var itemData = [];
    children.forEach(function (item) {
        itemData.push(item);
        itemData.push.apply(itemData, (item.children || []));
    });
    var theme = useTheme();
    var smUp = useMediaQuery(theme.breakpoints.up("sm"), {
        noSsr: true,
    });
    var itemCount = itemData.length;
    var itemSize = smUp ? 36 : 48;
    var getChildSize = function (child) {
        if (child.hasOwnProperty("group")) {
            return 48;
        }
        return itemSize;
    };
    var getHeight = function () {
        if (itemCount > 8) {
            return 8 * itemSize;
        }
        return itemData.map(getChildSize).reduce(function (a, b) { return a + b; }, 0);
    };
    var gridRef = useResetCache(itemCount);
    return (_jsx("div", { ref: ref, children: _jsx(OuterElementContext.Provider, { value: other, children: _jsx(VariableSizeList, { itemData: itemData, height: getHeight() + 2 * LISTBOX_PADDING, width: "100%", ref: gridRef, outerElementType: OuterElementType, innerElementType: "ul", itemSize: function (index) { return getChildSize(itemData[index]); }, overscanCount: 5, itemCount: itemCount, children: renderRow }) }) }));
});
function CustomAutoComplete(props) {
    return (_jsx(Controller, { control: props.control, name: props.name, render: function (_a) {
            var _b = _a.field, value = _b.value, onChange = _b.onChange;
            return (_jsxs(Box, { sx: __assign({ minWidth: 250 }, props.sx), children: [_jsx(Typography, { variant: "subtitle1", sx: { mb: 0.6, fontSize: 14, fontWeight: 600 }, children: props.label }), _jsx(Autocomplete, { disablePortal: true, id: "custom-autocomplete", value: value, renderOption: props.renderOption, multiple: get(props, "multiple", false), disableCloseOnSelect: get(props, "disableCloseOnSelect", false), onChange: function (event, newValue) {
                            return onChange(newValue);
                        }, fullWidth: props.fullWidth, options: props.options, loading: props.loading, ListboxComponent: ListboxComponent, renderTags: function (value) {
                            if (Array.isArray(value))
                                return "".concat(value.length, " items selected");
                            return null;
                        }, sx: __assign({ minWidth: get(props, "sx.minWidth", "200px"), mb: 3 }, props.sx), renderInput: function (params) { return _jsx(TextField, __assign({}, params)); } })] }));
        } }));
}
export default CustomAutoComplete;
//# sourceMappingURL=AutoComplete.js.map