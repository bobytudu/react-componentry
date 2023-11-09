import { TextFieldProps } from "@mui/material";
export type InputPropsTypes = TextFieldProps & {
    control: any;
    name: string;
    label?: string;
    type?: string;
    rows?: string | number;
    multiline?: boolean;
    disabled?: boolean;
    placeholder?: string;
};
declare const CustomInput: ({ control, name, label, sx, inputProps, ...rest }: InputPropsTypes) => import("react/jsx-runtime").JSX.Element;
export default CustomInput;
