import { AutoCompletePropsTypes } from "./forms/autoComplete/AutoComplete";
import { DatePickerPropsTypes } from "./forms/datepicker/DatePicker";
import { SelectPropsTypes } from "./forms/select/Select";
import { InputPropsTypes } from "./forms/input/Input";
import { AlertPropsTypes } from "./common/Alert";
import { LoaderPropsTypes } from "./common/Loader";

declare module "react-components" {
  export type InputProps = InputPropsTypes;
  export interface AlertProps extends AlertPropsTypes {}
  export interface SelectProps extends SelectPropsTypes {}
  export interface LoaderProps extends LoaderPropsTypes {}
  export interface DatePickerProps extends DatePickerPropsTypes {}
  export interface AutoCompleteProps extends AutoCompletePropsTypes {}
}
