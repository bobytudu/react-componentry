# react-componentry:
## Modules:- 
### Forms   
 A simple and elegant way to create forms with React, React Hook Form and Material UI.
 - Input - `import { Input } from 'react-components'`
 - Select - `import { Select } from 'react-components'`
 - DatePicker - `import { DatePicker } from 'react-components'`
 - AutoComplete - `import { AutoComplete } from 'react-components'`

### Common
 Some common component made with `@mui/material`
 - Alert - `import { Alert } from 'react-components`
 - Loader - `import { Loader } from 'react-components`


### Props
 - Input :-  
   ```
   import { TextFieldProps } from "@mui/material";
   import { Control } from "react-hook-form";
   
   TextFieldProps & {
        control: Control<any>;
        name: string;
        label?: string;
        type?: string;
        rows?: string | number;
        multiline?: boolean;
        disabled?: boolean;
        placeholder?: string;
    };
   ```
- Select :- 
    ```
    SelectPropsTypes {
        options: { value: string | number; label: string }[];
        label: string;
        control: Control<any>;
        name: string;
        sx?: BoxProps;
        fullWidth?: boolean;
    }
    ```
- DatePicker :-
    ```
    interface DatePickerPropsTypes {
        control: Control<any>;
        label: string;
        name: string;
        fullWidth?: boolean;
    }
    ```
- AutoComplete :-
    ```
    AutoCompletePropsTypes {
        options: { label: string; value: string }[];
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
    ```
- Alert :-
    ```
    AlertPropsTypes {
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
    ```
- Loader :-
    ```
    LoaderPropsTypes {
        open: boolean;
    }
    ```