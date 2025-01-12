interface validationMessages {
  [rulName: string]: string;
  default: string;
}

interface Dictionary {
  [locale: string]: validationMessages;
}

const dictionary: Dictionary = {
  en: {
    required: "The field {field} is required.",
    email: "The field {field} must be a valid email.",
    min: "The field {field} is too short.",
    default: "The field {field} is invalid.",
  },
  ar: {
    required: "حقل {field} مطلوب.",
    email: "حقل {field} يجب أن يكون بريدًا صالحًا.",
    min: "حقل {field} قصير جدًا.",
    default: "الحقل {field} غير صالح.",
  },
};

// A helper function to retrieve messages
export function getMessage(locale: string, ruleName: string, field: string) {
  const localeDict = dictionary[locale] || dictionary.ar;
  const message =
    localeDict[ruleName] ||
    localeDict.default ||
    `The field ${field} is invalid.`;
  return message.replace("{field}", field);
}
