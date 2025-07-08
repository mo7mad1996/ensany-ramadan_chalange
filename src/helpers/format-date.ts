import { format, formatDistanceToNow, parseISO, isValid } from "date-fns";
import { ar } from "date-fns/locale/ar";
import { enAU } from "date-fns/locale/en-AU";

// format => '3 hours ago'
export const reFormat = (date: any) => {
  if (!date) return "Invalid Date";

  const parsedDate = parseISO(date);

  const { locale } = useI18n();

  const validDate = isValid(parsedDate) ? parsedDate : new Date(date);

  return isValid(validDate)
    ? formatDistanceToNow(validDate, {
        addSuffix: true,
        locale: locale.value === "ar" ? ar : enAU,
      })
    : "Invalid Date";
};

// format => '3 February 2025'
export const reFormat2 = (date: any) => {
  if (!date) return "تاريخ غير صالح";

  const { locale } = useI18n();

  const parsedDate = parseISO(date);
  const validDate = isValid(parsedDate) ? parsedDate : new Date(date);

  return isValid(validDate)
    ? format(validDate, "d MMMM yyyy", {
        locale: locale.value === "ar" ? ar : enAU,
      })
    : "تاريخ غير صالح";
};
