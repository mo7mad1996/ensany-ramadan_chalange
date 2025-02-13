<template>
  <div v-if="isDataLoaded" class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div
      class="bg-white bgCard p-10 rounded-lg shadow-xl text-center relative w-full max-w-[700px] min-h-[650px] flex flex-col justify-between"
    >
      <!-- Decorative Lanterns -->
      <div class="absolute left-5 top-5 w-24">
        <img loading="lazy" src="../../../assets/images/gift/Group.png" alt="Lantern" />
      </div>
      <div class="absolute right-5 top-5 w-24">
        <img loading="lazy" src="../../../assets/images/gift/Group.png" alt="Lantern" />
      </div>

      <!-- Arabic Calligraphy -->
      <div class="mt-10">
        <img loading="lazy" 
          src="../../../assets/images/gift/image_2.png"
          alt="Bismillah"
          class="mx-auto"
        />
      </div>

      <!-- Gift Certificate Title -->
      <div class="flex justify-center mt-5">
        <div
          class="w-[350px] px-3 py-4 border-2 border-[#C5A364] rounded-md text-green-700 font-bold text-[46px] leading-none text-center mx-auto"
        >
          {{ $t("campaigns.gift_certificate") }}
        </div>
      </div>

      <!-- Message -->
      <div class="mt-7 text-lg font-semibold px-6">
        <p v-if="viewGift">
          <bdi>
            {{ $t("campaigns.gift_to") }}
            <span class="font-bold">({{ viewGift?.donation?.love_name }})</span>
            {{ $t("campaigns.on_this_day") }}
          </bdi>
          <p v-if="viewGift?.donation?.love_comment != null">
            <bdi>
              {{ $t('campaigns.message_gift') }}: {{ viewGift?.donation?.love_comment }}
             
            </bdi>
            <bdi> 
                <p>
                {{ $t('campaigns.gift_by') }}: {{ viewGift?.donation?.name }}
              </p>
              </bdi>
          </p>
        </p>
        <p class="text-black-600 mt-3" v-if="viewGift?.campaign !== null">
          
          {{ $t('campaigns.gift_message') }} 
        </p>
        <p
          class="text-green-700 font-bold underline cursor-pointer mt-2 text-xl"
          v-if="viewGift?.campaign !== null"
        >
        <a :href="`/campaigns/${viewGift?.campaign?.id}`">{{ viewGift?.campaign?.name }}</a>
        </p>
      </div>

      <!-- Golden Ribbon Seal -->
      <div class="mt-10">
        <img loading="lazy" 
          src="../../../assets/images/gift/Medal.png"
          alt="Seal"
          class="mx-auto w-24"
        />
      </div>

      <!-- Social Media & Contact -->
      
      <div class="mt-10 mb-5 text-gray-700 flex items-center justify-center space-x-4">
        <a
        class="flex items-center justify-center space-x-2 text-lg"
        v-for="(link, index) in footer"
        :key="index"
        :href="link?.url"
        target="_blank"
      >
        <img loading="lazy" :src="link?.icon"  alt="footer_icon" />
      </a>

        <a :href="'/'" class="flex items-center justify-center space-x-2 text-lg">
          <img loading="lazy" src="../../../assets/images/gift/google.png" class="w-6" alt="Website" />
          <span>RamadanChallenge.com</span>
        </a>
        
       
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useGlobalVar } from "~/helpers/global-var";
import { useFooter } from '~/modules/home/services/footer';
import { useShowGift } from "../services/showGift";

const router = useRouter(); // استخدام useRouter
const route = useRoute();

const { viewGift, status } = useShowGift(route.params.id);
const { footer, footer_error } = useFooter();
const isDataLoaded = ref(false);  

onMounted(() => {
  if (status.value === "error") {
    router.push("/"); 
  } else {
    isDataLoaded.value = true;  
  }
});

const { siteName } = useGlobalVar();
siteName(viewGift.value.donation?.love_name );

useSeoMeta({
  description: viewGift.value.donation?.love_comment,
  });

// useSeoMeta({
//   title: locale.value == "ar" ? ramadan_ar : ramadan_en,
//   ogTitle: "My Amazing Site",
//   ogDescription: "This is my amazing site, let me tell you all about it.",
//   ogImage: "https://example.com/image.png",
//   twitterCard: "summary_large_image",
// });
 

definePageMeta({
  layout: "empty",
});

</script>

<style scoped>
.bgCard {
  background-image: url(/assets/images/gift/decor.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
