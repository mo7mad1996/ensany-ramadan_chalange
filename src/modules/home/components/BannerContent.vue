<template>
  <!-- large text -->
  <h1
    class="mb-0 font-bold lg:text-5xl xl:text-5xl md:text-[30px] text-[30px] lg:leading-[64.4px] xl:leading-[64.4px] md:leading-[44.4px] leading-[44.4px] lg:w-[520px] xl:w-[520px] md:w-[326px] w-[326px]"
  >
    {{ $t("home.banner_title") }}
  </h1>

  <!-- small text -->
  <p class="mb-0 mt-5 font-thin text-sm leading-20">
    {{ $t("home.banner_desc") }}
  </p>

  <!-- banner buttons -->
  <div class="banner_buttons flex flex-wrap gap-3 items-center mt-5">
    <v-btn
      class="text-capitalize rounded-lg"
      variant="flat"
      size="default"
      color="primary"
      @click="$router.push('/donate/all')"
    >
      {{ $t("global.join_challenge") }}
    </v-btn>

    <v-btn
      class="text-capitalize rounded-lg"
      variant="outlined"
      size="default"
      color="#fff"
      @click="$router.push('/start-campaign')"
    >
      {{ $t("global.start_campaign") }}
    </v-btn>
    <v-btn
      class="text-capitalize rounded-lg"
      variant="outlined"
      size="default"
      color="#fff"
      @click="$router.push('/donate/all')"
    >
      {{ $t("home.donate-all") }}
    </v-btn>
  </div>
</template>
