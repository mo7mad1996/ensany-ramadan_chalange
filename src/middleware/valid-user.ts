import { api } from "~/helpers/axios";

export default defineNuxtRouteMiddleware(async (to, from) => {
  try {
    const res = await api.get("/me");
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
});
