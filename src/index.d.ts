import {
  AutoCompletePropsTypes,
  InputPropsTypes,
  SelectPropsTypes,
  DatePickerPropsTypes,
} from "./forms";
import {
  RouteTypes,
  RouterPropsTypes,
  AuthenticatedRoutesPropsTypes,
} from "./routes";
import { AlertPropsTypes, LoaderPropsTypes } from "./common";

declare module "react-componentry" {
  export type InputProps = InputPropsTypes;
  export interface AlertProps extends AlertPropsTypes {}
  export interface SelectProps extends SelectPropsTypes {}
  export interface LoaderProps extends LoaderPropsTypes {}
  export interface DatePickerProps extends DatePickerPropsTypes {}
  export interface AutoCompleteProps extends AutoCompletePropsTypes {}
  export interface Route extends RouteTypes {}
  export interface RouterProps extends RouterPropsTypes {}
  export interface AuthenticatedRoutesProps
    extends AuthenticatedRoutesPropsTypes {}
}
