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

      <nuxt-link to="/blogs" class="text-black">{{
        $t("global.blogs")
      }}</nuxt-link>

      <nuxt-link to="/about" class="text-black">{{
        $t("global.about_us")
      }}</nuxt-link>

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
            @click="$router.push('/dashboard/charity')"
            >{{ $t("global.dashboard") }}</v-btn
          >

          <v-btn
            v-else
            class="text-capitalize"
            variant="flat"
            size="default"
            color="primary"
            @click="$router.push('/dashboard/donor')"
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
          @click="$router.push('/login')"
          >{{ $t("global.signin") }}</v-btn
        >

        <v-btn
          v-if="!user"
          class="text-capitalize"
          variant="flat"
          size="default"
          color="primary"
          @click="$router.push('/signup')"
          >{{ $t("global.doner") }}</v-btn
        >

        <v-btn
          v-if="!user"
          class="text-capitalize"
          variant="flat"
          size="default"
          color="primary"
          @click="$router.push('/signup-charity')"
          >{{ $t("global.charity2") }}</v-btn
        >

        <v-btn
          class="text-capitalize"
          variant="outlined"
          size="default"
          color="primary"
          @click="$router.push('/contact')"
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
        <div class="logo cursor-pointer" @click="$router.push('/')">
          <img src="../assets/images/logo.svg" width="136" height="48" alt="" />
        </div>

        <!-- menue in small screens -->
        <div class="phone_menue d-flex gap-x-3 d-lg-none d-md-flex d-xl-none">
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
            <nuxt-link to="/" class="text-black">{{
              $t("global.home")
            }}</nuxt-link>
          </li>

          <li>
            <nuxt-link to="/campaigns" class="text-black">{{
              $t("global.campaigns")
            }}</nuxt-link>
          </li>

          <li>
            <nuxt-link to="/blogs" class="text-black">{{
              $t("global.blogs")
            }}</nuxt-link>
          </li>

          <li>
            <nuxt-link to="/about" class="text-black">{{
              $t("global.about_us")
            }}</nuxt-link>
          </li>

          <!-- <li>
            <nuxt-link to="/" class="d-flex ga-2">
              <img src="../assets/images/search.svg" width="15" alt="" />
              <span>{{ $t("global.search") }}...</span>
            </nuxt-link>
          </li> -->
        </ul>

        <!-- contact & signin-btn & lang -->
        <div
          class="buttons d-none d-lg-flex d-xl-flex d-md-none ga-3 align-center"
        >
          <div v-if="user" class="relative">
            <div
              @click="openDrop"
              class="flex gap-2 items-center rounded-md hover:bg-[#407b410f] cursor-pointer p-2"
            >
              <img src="../assets/images/user.svg" width="30" alt="" />
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

          <div class="flex items-center gap-x-3" v-else>
            <v-btn
              class="text-capitalize rounded-lg"
              variant="flat"
              size="default"
              color="primary"
              @click="$router.push('/login')"
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
                    @click="$router.push('/signup')"
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
                    @click="$router.push('/signup-charity')"
                  >
                    <div class="flex gap-x-2 items-center">
                      <img
                        src="../assets/images/charity.svg"
                        width="15"
                        alt=""
                      />
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
            @click="$router.push('/contact')"
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
import Container from "./Container.vue";
import selectCurruncy from "./select-curruncy.vue";
import SwitchLang from "./SwitchLang.vue";
import { useAuth } from "~/modules/auth/services/auth";
import { useGlobalVar } from "~/helpers/global-var";

const { locale } = useI18n();
const { isLoading, logout, user } = useAuth();
const { user_type } = useGlobalVar();
const isOpen = ref(false);
const isMenue = ref(false);

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

<style scoped>
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
