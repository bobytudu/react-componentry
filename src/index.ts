import {
  Input,
  Select,
  DatePicker,
  AutoComplete,
  InputPropsTypes,
  SelectPropsTypes,
  DatePickerPropsTypes,
  AutoCompletePropsTypes,
} from "./forms";
import {
  AuthenticatedRoutes,
  AuthenticatedRoutesPropsTypes,
  RouteTypes,
  RouterPropsTypes,
} from "./routes";
import { Alert, Loader, AlertPropsTypes, LoaderPropsTypes } from "./common";

export {
  Input,
  Alert,
  Select,
  Loader,
  DatePicker,
  AutoComplete,
  AuthenticatedRoutes,
};
export type InputProps = InputPropsTypes;
export interface Route extends RouteTypes {}
export interface AlertProps extends AlertPropsTypes {}
export interface SelectProps extends SelectPropsTypes {}
export interface RouterProps extends RouterPropsTypes {}
export interface LoaderProps extends LoaderPropsTypes {}
export interface DatePickerProps extends DatePickerPropsTypes {}
export interface AutoCompleteProps extends AutoCompletePropsTypes {}
export interface AuthenticatedRoutesProps
  extends AuthenticatedRoutesPropsTypes {}
