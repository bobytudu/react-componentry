import AutoComplete, {
  AutoCompletePropsTypes,
} from "./forms/autoComplete/AutoComplete";
import DatePicker, {
  DatePickerPropsTypes,
} from "./forms/datepicker/DatePicker";
import Alert, { AlertPropsTypes } from "./common/Alert";
import Loader, { LoaderPropsTypes } from "./common/Loader";
import Input, { InputPropsTypes } from "./forms/input/Input";
import Select, { SelectPropsTypes } from "./forms/select/Select";

export { DatePicker, AutoComplete, Select, Input, Alert, Loader };
export type InputProps = InputPropsTypes;
export interface AlertProps extends AlertPropsTypes {}
export interface SelectProps extends SelectPropsTypes {}
export interface LoaderProps extends LoaderPropsTypes {}
export interface DatePickerProps extends DatePickerPropsTypes {}
export interface AutoCompleteProps extends AutoCompletePropsTypes {}
