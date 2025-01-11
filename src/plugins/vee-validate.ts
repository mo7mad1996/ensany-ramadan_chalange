import { defineRule, configure } from "vee-validate";
import { all } from "@vee-validate/rules";
import { useCookie } from "nuxt/app";
import { getMessage } from "~/helpers/validation-msg";

export default defineNuxtPlugin(() => {
  Object.entries(all).forEach(([ruleName, ruleFn]) => {
    defineRule(ruleName, ruleFn);
  });

  // Configure custom message generator
  configure({
    generateMessage: (ctx) => {
      if (!ctx.rule) return `Field ${ctx.field} is invalid.`;
      const currentLocale = useCookie("i18n_redirected");
      const locale = currentLocale.value || "ar";
      return getMessage(locale, ctx.rule.name, ctx.field);
    },
  });
});
