export interface InterfaceAlerts {
  type: "error" | "warning" | "info" | "success" | "";
  title: string;
  message: string;
  open: boolean;
  actionClose: () => void;
}
