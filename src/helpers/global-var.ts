export const useGlobalVar = () => {
  const ramadan_ar = ref("التحدى الرمضانى");
  const ramadan_en = ref("Ramadan Challenge");
  const user_type = ref("donoer");

  return {
    ramadan_ar,
    ramadan_en,
    user_type,
  };
};
