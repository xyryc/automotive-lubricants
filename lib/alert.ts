import type DropdownAlert from "react-native-dropdownalert";

let alertRef: DropdownAlert | null = null;

export const setAlertRef = (ref: DropdownAlert | null) => {
  alertRef = ref;
};

export const showAlert = (
  type: "success" | "error" | "info",
  title: string,
  message?: string,
) => {
  alertRef?.alertWithType(type, title, message || "");
};
