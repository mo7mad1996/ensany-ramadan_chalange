export const useGlobalVar = () => {
  const ramadan_ar = ref("التحدى الرمضانى");
  const ramadan_en = ref("Ramadan Challenge");
  const user_type = ref("donoer");
  function siteName(locale: any, title = '') {
    const localTitle = locale == 'ar' ? ramadan_ar : ramadan_en;
    return title !== '' ? localTitle + ' / ' + title : localTitle;
  }
  return {
    siteName,
    ramadan_ar,
    ramadan_en,
    user_type,
  };
};
