<template>
  <v-navigation-drawer
    class="v-navigation-drawer--mobile p-[2rem]"
    v-model="isOpen"
    :location="locale === 'ar' ? 'left' : 'right'"
    temporary
    color="#F6FFF6"
  >
    <div class="card flex flex-col gap-y-[1.5rem] items-center" v-if="isOpen">
      <nuxt-link to="/" class="text-black">{{ $t("global.home") }}</nuxt-link>

      <nuxt-link to="/campaigns" class="text-black">{{
        $t("global.campaigns")
      }}</nuxt-link>

      <nuxt-link to="/blogs" class="text-black">{{ $t("global.blogs") }}</nuxt-link>

      <nuxt-link to="/about" class="text-black">{{ $t("global.about_us") }}</nuxt-link>

      <!-- <nuxt-link to="/" class="d-flex ga-2 text-black">
        <img src="../assets/images/search.svg" width="15" alt="" />
        <span>{{ $t("global.search") }}</span>
      </nuxt-link> -->

      <div class="flex flex-col gap-y-[1.5rem]">
        <div>
          <v-btn
            v-if="user && user?.user_type === 'charity'"
            class="text-capitalize"
            variant="flat"
            size="default"
            color="primary"
            @click="navigateTo('/dashboard/charity')"
            >{{ $t("global.dashboard") }}</v-btn
          >

          <v-btn
            v-else-if="user && user?.user_type === 'dooner'"
            class="text-capitalize"
            variant="flat"
            size="default"
            color="primary"
            @click="navigateTo('/dashboard/donor')"
            >{{ $t("global.dashboard") }}</v-btn
          >
        </div>

        <v-btn
          v-if="user"
          class="text-capitalize"
          variant="flat"
          size="default"
          color="primary"
          @click="logout"
          >{{ $t("global.logout") }}</v-btn
        >

        <v-btn
          v-if="!user"
          class="text-capitalize"
          variant="flat"
          size="default"
          color="primary"
          @click="navigateTo('/login')"
          >{{ $t("global.signin") }}</v-btn
        >

        <v-btn
          v-if="!user"
          class="text-capitalize"
          variant="flat"
          size="default"
          color="primary"
          @click="navigateTo('/signup')"
          >{{ $t("global.doner") }}</v-btn
        >

        <v-btn
          v-if="!user"
          class="text-capitalize"
          variant="flat"
          size="default"
          color="primary"
          @click="navigateTo('/signup-charity')"
          >{{ $t("global.charity2") }}</v-btn
        >

        <v-btn
          class="text-capitalize"
          variant="outlined"
          size="default"
          color="primary"
          @click="navigateTo('/contact')"
          >{{ $t("global.contact_us") }}</v-btn
        >
      </div>

      <SwitchLang />
    </div>
  </v-navigation-drawer>

  <v-app-bar elevation="0" color="#F6FFF6">
    <Container class="w-100">
      <div class="d-flex justify-space-between align-center w-100">
        <!-- logo -->
        <div class="logo cursor-pointer" @click="navigateTo('/')">
          <img src="../assets/images/logo.svg" width="136" height="48" alt="" />
        </div>

        <!-- menue in small screens -->
        <div class="phone_menue d-flex gap-x-3 d-lg-none d-md-flex d-xl-none">
          <div
            v-if="user && user?.user_type === 'dooner'"
            class="block md:block sm:block mt-2 me-5"
          >
            <nuxt-link
              to="/dashboard/donor/donations-cart"
              class="text-black d-flex align-center gap-1"
            >
              <div class="relative">
                <img src="../assets/images/donor/Icon.png" width="20" alt="Cart" />
                <span
                  v-if="cartCounter !== undefined && cartCounter > 0"
                  class="absolute -top-2 -right-3 bg-primary rounded-full w-5 h-5 flex items-center justify-center text-xs text-gray-800"
                >
                  <bdi>{{ cartCounter > 9 ? "+9" : cartCounter }}</bdi>
                </span>
              </div>
            </nuxt-link>
          </div>

          <selectCurruncy />

          <img
            src="../assets/images/menue.svg"
            class="cursor-pointer"
            width="30"
            alt=""
            @click="openMenue"
          />
        </div>

        <!-- links and searchbar -->
        <ul
          aria-label="links of the website"
          class="d-none d-lg-flex d-xl-flex d-md-none ga-5 align-center"
        >
          <li>
            <nuxt-link to="/" class="text-black">{{ $t("global.home") }}</nuxt-link>
          </li>

          <li>
            <nuxt-link to="/campaigns" class="text-black">{{
              $t("global.campaigns")
            }}</nuxt-link>
          </li>

          <li>
            <nuxt-link to="/blogs" class="text-black">{{ $t("global.blogs") }}</nuxt-link>
          </li>

          <li>
            <nuxt-link to="/stories" class="text-black">{{
              $t("global.stories")
            }}</nuxt-link>
          </li>

          <li>
            <nuxt-link to="/videos" class="text-black">{{
              $t("global.videos")
            }}</nuxt-link>
          </li>
          <!-- <li>
            <nuxt-link to="/videos" class="text-black">{{
              $t("global.videos")
            }}</nuxt-link>
          </li> -->

          <li>
            <nuxt-link to="/about" class="text-black">{{
              $t("global.about_us")
            }}</nuxt-link>
          </li>

          <li v-if="pages && pages.length > 0">
            <v-menu>
              <template v-slot:activator="{ props }">
                <span
                  class="text-black cursor-pointer flex"
                  style="text-transform: capitalize"
                  v-bind="props"
                >
                  {{ $t("global.other_links") }}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 mr-2 mt-1 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </span>
              </template>

              <v-list>
                <v-list-item v-for="(pagelink, index) in pages" :key="index">
                  <v-list-item-title
                    class="cursor-pointer text-right align-self-start"
                    @click="navigateTo('/page/' + pagelink?.id)"
                  >
                    <div
                      class="flex gap-x-3 mt-2 border-b items-center"
                      :class="locale === 'ar' ? 'text-right' : 'text-left'"
                    >
                      <span class="mb-2">{{ pagelink?.title }}</span>
                    </div>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </li>

          <!-- <li>
            <nuxt-link to="/" class="d-flex ga-2">
              <img src="../assets/images/search.svg" width="15" alt="" />
              <span>{{ $t("global.search") }}...</span>
            </nuxt-link>
          </li> -->
        </ul>

        <!-- contact & signin-btn & lang -->

        <div class="buttons d-none d-lg-flex d-xl-flex d-md-none ga-3 align-center">
          <template v-if="user">
            <div class="relative">
              <div
                @click="openDrop"
                class="flex gap-2 items-center rounded-md hover:bg-[#407b410f] cursor-pointer p-2"
              >
                <img
                  :src="user.photo || '../assets/images/user.svg'"
                  width="30"
                  class="rounded-full aspect-square objectgit -cover"
                  alt=""
                />
                <span v-if="user?.first_name">{{ user?.first_name }}</span>
                <span v-if="user?.charity_name">{{ user?.charity_name }}</span>
                <v-icon>mdi-menu-down</v-icon>
              </div>
              <div
                v-if="isMenue"
                class="drobdown-menue absolute top-[3.5rem] p-[8px] bg-[#f6fff6] w-full"
              >
                <ul class="list-none">
                  <li class="flex gap-2 items-center mb-1 cursor-pointer">
                    <img
                      src="../assets/images/dashboard/dashboard.svg"
                      width="15"
                      alt=""
                    />
                    <nuxt-link
                      v-if="user?.user_type === 'charity'"
                      class="hover:underline text-sm"
                      to="/dashboard/charity"
                      >{{ $t("global.dashboard") }}</nuxt-link
                    >

                    <nuxt-link
                      v-else
                      class="hover:underline text-sm"
                      to="/dashboard/donor"
                      >{{ $t("global.dashboard") }}</nuxt-link
                    >
                  </li>

                  <li>
                    <v-btn
                      :disabled="isLoading"
                      :loading="isLoading"
                      class="text-capitalize rounded-lg w-full mt-2"
                      :ripple="false"
                      variant="flat"
                      size="small"
                      color="primary"
                      @click="logout"
                    >
                      {{ $t("global.logout") }}
                    </v-btn>
                  </li>
                </ul>
              </div>
            </div>

            <div v-if="user && user?.user_type === 'dooner'">
              <nuxt-link
                to="/dashboard/donor/donations-cart"
                class="text-black d-flex align-center gap-1"
              >
                <div class="relative">
                  <img src="../assets/images/donor/Icon.png" width="20" alt="Cart" />
                  <span
                    v-if="cartCounter !== undefined && cartCounter > 0"
                    class="absolute -top-2 -right-3 bg-primary rounded-full w-5 h-5 flex items-center justify-center text-xs text-gray-800"
                  >
                    <bdi>{{ cartCounter > 9 ? "+9" : cartCounter }}</bdi>
                  </span>
                </div>
              </nuxt-link>
            </div>

            <div class="flex items-center gap-x-3" v-if="!user">
              <v-btn
                class="text-capitalize rounded-lg"
                variant="flat"
                size="default"
                color="primary"
                @click="navigateTo('/login')"
                >{{ $t("global.signin") }}</v-btn
              >

              <v-menu>
                <template v-slot:activator="{ props }">
                  <v-btn
                    color="primary"
                    class="capitalize border"
                    style="text-transform: capitalize"
                    v-bind="props"
                    >{{ $t("global.signup") }}
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    <v-list-item-title
                      class="cursor-pointer"
                      @click="navigateTo('/signup')"
                    >
                      <div class="flex gap-x-2 items-center">
                        <img src="../assets/images/doner.svg" width="15" alt="" />
                        <span>{{ $t("global.doner") }}</span>
                      </div>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      class="cursor-pointer"
                      @click="navigateTo('/signup-charity')"
                    >
                      <div class="flex gap-x-2 items-center">
                        <img src="../assets/images/charity.svg" width="15" alt="" />
                        <span>{{ $t("global.charity2") }}</span>
                      </div>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </template>

          <div class="flex items-center gap-x-3" v-else>
            <v-btn
              class="text-capitalize rounded-lg"
              variant="flat"
              size="default"
              color="primary"
              @click="navigateTo('/login')"
              >{{ $t("global.signin") }}</v-btn
            >

            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn
                  color="primary"
                  class="capitalize border"
                  style="text-transform: capitalize"
                  v-bind="props"
                  >{{ $t("global.signup") }}
                </v-btn>
              </template>
              <v-list>
                <v-list-item>
                  <v-list-item-title
                    class="cursor-pointer"
                    @click="navigateTo('/signup')"
                  >
                    <div class="flex gap-x-2 items-center">
                      <img src="../assets/images/doner.svg" width="15" alt="" />
                      <span>{{ $t("global.doner") }}</span>
                    </div>
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title
                    class="cursor-pointer"
                    @click="navigateTo('/signup-charity')"
                  >
                    <div class="flex gap-x-2 items-center">
                      <img src="../assets/images/charity.svg" width="15" alt="" />
                      <span>{{ $t("global.charity2") }}</span>
                    </div>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>

          <selectCurruncy />

          <v-btn
            class="text-capitalize rounded-lg"
            variant="outlined"
            size="default"
            color="primary"
            @click="navigateTo('/contact')"
            >{{ $t("global.contact_us") }}</v-btn
          >

          <div class="lang-switcher">
            <SwitchLang />
          </div>
        </div>
      </div>
    </Container>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useGlobalVar } from "~/helpers/global-var";
import { useAuth } from "~/modules/auth/services/auth";
import { useCartCounter } from "~/modules/donor/services/cart-counter";
import { usePages } from "~/modules/home/services/pages";
import Container from "./Container.vue";
import selectCurruncy from "./select-curruncy.vue";
import SwitchLang from "./SwitchLang.vue";

const { locale } = useI18n();
const { isLoading, logout, user } = useAuth();
const { user_type } = useGlobalVar();
const isOpen = ref(false);
const isMenue = ref(false);
const { cartCounter } = useCartCounter() || 0;
const { pages } = usePages() || 0;

const openMenue = (): void => {
  isOpen.value = !isOpen.value;
};

const openDrop = (): void => {
  isMenue.value = !isMenue.value;
};

const donerAction = (): void => {
  user_type.value = "donoer";
  navigateTo("/signup");
};

const charityAction = (): void => {
  user_type.value = "donoer";
  navigateTo("/signup");
};
</script>

<style scoped lang="scss">
ul {
  list-style: none;

  a {
    text-decoration: none;
    color: #121212;
  }
}

.phone_menue {
  position: relative;

  .card {
    position: absolute;
    z-index: 999999;
    background-color: #f6fff6;
    left: -132px;
    top: 44px;
    padding: 20px 26px;
  }
}
</style>
