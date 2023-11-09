export interface AlertPropsTypes {
    anchorOrigin?: {
        vertical: "top" | "bottom";
        horizontal: "left" | "center" | "right";
    };
    closeSnack: () => void;
    state: {
        open: boolean;
        type: "success" | "error";
        message: string;
    };
}
declare function AlertComponent({ state, closeSnack, anchorOrigin }: AlertPropsTypes): import("react/jsx-runtime").JSX.Element;
export default AlertComponent;
