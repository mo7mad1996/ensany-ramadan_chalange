import { formatDistanceToNow, parseISO, isValid } from "date-fns";

export const reFormat = (date: any) => {
  if (!date) return "Invalid Date";

  const parsedDate = parseISO(date);

  const validDate = isValid(parsedDate) ? parsedDate : new Date(date);

  return isValid(validDate)
    ? formatDistanceToNow(validDate, { addSuffix: true })
    : "Invalid Date";
};
