import { Control } from "react-hook-form";
export interface DatePickerPropsTypes {
    control: Control<any>;
    label: string;
    name: string;
    fullWidth?: boolean;
}
declare function CustomDatePicker({ control, label, name, fullWidth, }: DatePickerPropsTypes): import("react/jsx-runtime").JSX.Element;
export default CustomDatePicker;
