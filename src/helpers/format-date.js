// utils/dateHelper.js
import { Carbon } from "carbon";

export function formatDate(dateString, format = "MMMM DD, YYYY h:mm A") {
  return Carbon.createFromFormat("Y-m-dTH:i:s.uZ", dateString).format(format);
}
