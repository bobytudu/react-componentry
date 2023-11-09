import { Control } from "react-hook-form";
import { BoxProps } from "@mui/material";
export interface SelectPropsTypes {
    options: {
        value: string | number;
        label: string;
    }[];
    label: string;
    control: Control<any>;
    name: string;
    sx?: BoxProps;
    fullWidth?: boolean;
}
declare function CustomSelect({ options, label, control, name, sx, fullWidth, }: SelectPropsTypes): import("react/jsx-runtime").JSX.Element;
export default CustomSelect;
