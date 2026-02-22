import {
  DropdownAlertData,
  DropdownAlertType,
} from "react-native-dropdownalert";

let alert = (_data: DropdownAlertData) =>
  Promise.resolve<DropdownAlertData>(_data);

export const setAlertHandler = (
  func: (data: DropdownAlertData) => Promise<DropdownAlertData>,
) => {
  alert = func;
};

export const showAlert = async (
  type: "success" | "error" | "info",
  title: string,
  message?: string,
) => {
  const mapType = {
    success: DropdownAlertType.Success,
    error: DropdownAlertType.Error,
    info: DropdownAlertType.Info,
  };

  await alert({
    type: mapType[type],
    title,
    message: message || "",
  });
};
