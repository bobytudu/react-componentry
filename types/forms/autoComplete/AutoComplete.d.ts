import { SxProps } from "@mui/system";
import { Control } from "react-hook-form";
export interface AutoCompletePropsTypes {
    options: {
        label: string;
        value: string;
    }[];
    label: string;
    loading?: boolean;
    sx?: SxProps;
    control: Control<any>;
    name: string;
    multiple?: boolean;
    disableCloseOnSelect?: boolean;
    optionLabel?: string;
    renderOption?: any;
    fullWidth?: boolean;
}
declare function CustomAutoComplete(props: AutoCompletePropsTypes): import("react/jsx-runtime").JSX.Element;
export default CustomAutoComplete;
