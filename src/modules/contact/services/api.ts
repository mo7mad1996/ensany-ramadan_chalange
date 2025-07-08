import { api } from "../../../helpers/axios";
import { ref, onMounted } from "vue";

// here all apis calls of the module

export function getHeroSection() {
  const hero = ref(null);
  const error: any = ref(null);

  const fetchHero = async () => {
    try {
      const response = await api.get("/drosat/manasat");
      hero.value = response.data;
    } catch (err) {
      error.value = err;
      console.error(err);
    }
  };

  onMounted(() => {
    fetchHero();
  });

  return {
    hero,
    error,
  };
}
