<template>
  <section aria-label="account settings section">
    <ClientOnly>
      <v-tabs v-model="tab" align-tabs="start" class="v-slide-group--mobile">
        <v-tab value="1" :ripple="false" style="text-transform: capitalize">{{
          $t("dashboard.profile")
        }}</v-tab>
        <!--

       <v-tab value="2" :ripple="false" style="text-transform: capitalize">
        {{ $t("dashboard.notif") }} 
      </v-tab> 
      -->
        <v-tab value="3" :ripple="false" style="text-transform: capitalize">{{
          $t("dashboard.privacy_security")
        }}</v-tab>
      </v-tabs>
    </ClientOnly>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item value="1" class="xl:w-1/2 lg:w-1/2 md:w-full w-full">
        <div class="profile-settings pt-sm">
          <h2 class="text-xl font-semibold">
            {{ $t("dashboard.account_details") }}
          </h2>

          <div class="update-form mt-5">
            <Form
              @submit="onSubmit"
              v-slot="{ validate }"
              :initial-values="defaultValues"
            >
              <!-- name -->
              <div class="mt-5">
                <div
                  class="lable_switch flex justify-between items-center mb-3"
                >
                  <label for="">{{ $t("dashboard.charity_name") }}</label>

                  <div class="lang-switch flex items-center border-b">
                    <div
                      class="px-3 py-1 cursor-pointer"
                      @click="toggle('charity_name')"
                      :class="{
                        'bg-[#28A745] text-white':
                          switcher.charity_name == 'en',
                      }"
                    >
                      {{ $t("home.english") }}
                    </div>
                    <div
                      class="px-3 py-1 cursor-pointer"
                      @click="toggle('charity_name')"
                      :class="{
                        'bg-[#28A745] text-white':
                          switcher.charity_name == 'ar',
                      }"
                    >
                      العربيه
                    </div>
                  </div>
                </div>

                <div class="inputs" v-if="user.user_type == 'charity'">
                  <div class="relative" v-show="switcher.charity_name == 'ar'">
                    <div
                      class="absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center ltr:pr-3 rtl:pl-3"
                    >
                      <nuxt-img
                        loading="lazy"
                        src="campaign/edit.svg"
                        alt="ramadanchallenges image"
                      />
                    </div>

                    <Field
                      type="text"
                      name="charity_name:ar"
                      rules="required"
                      :placeholder="$t('dashboard.charity_name')"
                      class="block w-full ltr:pl-5 rtl:pr-5 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                    />

                    <ErrorMessage name="charity_name:ar" />
                  </div>

                  <div class="relative" v-show="switcher.charity_name == 'en'">
                    <div
                      class="absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center ltr:pr-3 rtl:pl-3"
                    >
                      <nuxt-img
                        loading="lazy"
                        src="/campaign/edit.svg"
                        alt="ramadanchallenges image"
                      />
                    </div>

                    <Field
                      type="text"
                      name="charity_name:en"
                      rules="required"
                      :placeholder="$t('dashboard.charity_name')"
                      class="block w-full ltr:pl-5 rtl:pr-5 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                    />

                    <ErrorMessage name="charity_name_en" />
                  </div>
                </div>
              </div>

              <!-- test -->
              <div v-if="false">
                <div class="relative">
                  <div
                    class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
                  >
                    <nuxt-img
                      loading="lazy"
                      src=""
                      alt="ramadanchallenges image"
                    />
                  </div>

                  <Field
                    type="text"
                    name="updated_name"
                    rules="required"
                    id="updated_name"
                    :placeholder="$t('dashboard.update_name')"
                    class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                  />
                </div>

                <ErrorMessage
                  name="updated_name"
                  class="text-sm text-red-500"
                />
              </div>

              <!-- email -->
              <div class="mt-5">
                <div
                  class="lable_switch flex justify-between items-center mb-3"
                >
                  <label for="">{{ $t("dashboard.email") }}</label>
                </div>

                <div class="mt-4">
                  <div class="relative">
                    <div
                      class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
                    >
                      <nuxt-img
                        loading="lazy"
                        src="/contact/email.svg"
                        alt="ramadanchallenges image"
                      />
                    </div>

                    <Field
                      type="email"
                      name="email"
                      rules="required|email"
                      id="updated_email"
                      :placeholder="$t('dashboard.update_email')"
                      class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                    />
                  </div>

                  <ErrorMessage name="email" />
                </div>
              </div>

              <!-- phone number -->
              <div class="mt-5">
                <div
                  class="lable_switch flex justify-between items-center mb-3"
                >
                  <label for="">{{ $t("dashboard.mobile") }}</label>
                </div>

                <div class="mt-4">
                  <div class="relative">
                    <div
                      class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
                    >
                      <nuxt-img
                        loading="lazy"
                        src="/contact/phone.svg"
                        alt="ramadanchallenges image"
                      />
                    </div>

                    <Field
                      type="text"
                      name="mobile"
                      rules="required"
                      id="updated_phone"
                      :placeholder="$t('dashboard.update_phone')"
                      class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                    />
                  </div>

                  <ErrorMessage name="mobile" />
                </div>
              </div>

              <!-- country -->
              <div class="my-5">
                <div
                  class="lable_switch flex justify-between items-center mb-3"
                >
                  <label for="">{{ $t("dashboard.country") }}</label>
                </div>

                <Field
                  as="select"
                  name="country_id"
                  rules="required"
                  class="block w-full px-3 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                >
                  <option selected disabled value="">
                    {{ $t("dashboard.country") }}
                  </option>

                  <option v-for="c in countries" :key="c.id" :value="c.id">
                    {{ c.name }}
                  </option>
                </Field>
                <ErrorMessage name="country_id" />
              </div>

              <!-- image -->
              <div class="mt-5">
                <label for="">{{ $t("home.upload_image") }}</label>
                <div class="grid grid-cols-3 gap-2">
                  <div class="upload_image col-span-2">
                    <div
                      class="flex items-center border border-gray-300 rounded-md shadow-sm w-full"
                    >
                      <label
                        for="file-upload"
                        class="px-4 py-3 bg-[#E9ECEF] text-black text-sm font-semibold ltr:rounded-l-md rtl:rounded-r-md cursor-pointer hover:bg-[#b8bbbd]"
                      >
                        {{ $t("home.choose_file") }}
                      </label>

                      <Field
                        type="file"
                        id="file-upload"
                        class="sr-only"
                        @change="handleFileChange"
                        accept="image/*"
                        name="photo"
                      />

                      <span
                        class="flex-1 px-3 text-gray-700 text-sm overflow-hidden text-ellipsis whitespace-nowrap"
                      >
                        {{ selectedFileName || $t("home.no_file") }}
                      </span>
                    </div>
                    <ErrorMessage name="image" />
                  </div>

                  <div><nuxt-img loading="lazy" :src="preview" /></div>
                </div>
              </div>

              <!-- file zone -->
              <div class="mt-5">
                <div class="relative">
                  <div class="flex items-center gap-3 px-3 mb-3">
                    <v-icon icon="$upload" />
                    <h2>
                      {{ $t("dashboard.commercial-register") }}
                    </h2>
                  </div>

                  <v-file-upload
                    clearable
                    multiple
                    v-model="files"
                    density="comfortable"
                    variant="comfortable"
                    :title="$t('dashboard.drag-text')"
                  />
                </div>

                <ErrorMessage
                  name="updated_phone"
                  class="text-sm text-red-500"
                />
              </div>

              <!-- submit Btns -->
              <div
                class="buttons mt-4 grid gap-x-2 grid-cols-1 lg:grid-cols-2 md:grid-cols-1"
              >
                <v-btn
                  :ripple="false"
                  type="submit"
                  class="text-capitalize rounded-lg mt-2"
                  variant="flat"
                  size="large"
                  color="primary"
                  :loading="personalForm.loading"
                  @click="validate"
                >
                  {{ $t("dashboard.update_account") }}
                </v-btn>

                <v-btn
                  :ripple="false"
                  class="text-capitalize rounded-lg mt-2"
                  variant="outlined"
                  size="large"
                  color="primary"
                >
                  {{ $t("dashboard.discard_changes") }}
                </v-btn>
              </div>
            </Form>
          </div>
        </div>
      </v-tabs-window-item>
      <!-- 
      <v-tabs-window-item value="2">
        <div class="notif-settings pt-sm">
          <h2 class="text-xl font-semibold">
            {{ $t("dashboard.notif_title") }}
          </h2>
          <p class="text-sm text-[#4a4a4a]">
            {{ $t("dashboard.notif_desc") }}
          </p>

          <div class="options mt-4">
            <div class="flex justify-between items-center">
              <div>
                <div class="flex items-center gap-x-3">
                  <nuxt-img loading="lazy" 
                    src="/dashboard/campaigns.svg"
                    alt="ramadanchallenges image"
                  />
                  <span class="text-xl">{{ $t("dashboard.op1_title") }}</span>
                </div>

                <p class="text-sm text-[#4a4a4a] pt-2">
                  {{ $t("dashboard.op1_desc") }}
                </p>
              </div>

              <v-switch
                v-model="model1"
                color="#3E7E41"
                hide-details
              ></v-switch>
            </div>

            <div class="flex justify-between items-center mt-4">
              <div>
                <div class="flex items-center gap-x-3">
                  <nuxt-img loading="lazy" 
                    src="/dashboard/donation.svg"
                    alt="ramadanchallenges image"
                  />
                  <span class="text-xl">{{ $t("dashboard.op2_title") }}</span>
                </div>

                <p class="text-sm text-[#4a4a4a] pt-2">
                  {{ $t("dashboard.op2_desc") }}
                </p>
              </div>

              <v-switch
                v-model="model2"
                color="#3E7E41"
                hide-details
              ></v-switch>
            </div>

            <div class="flex justify-between items-center mt-4">
              <div>
                <div class="flex items-center gap-x-3">
                  <nuxt-img loading="lazy" 
                    src="/dashboard/notification.svg"
                    alt="ramadanchallenges image"
                  />
                  <span class="text-xl">{{ $t("dashboard.op3_title") }}</span>
                </div>

                <p class="text-sm text-[#4a4a4a] pt-2">
                  {{ $t("dashboard.op3_desc") }}
                </p>
              </div>

              <v-switch
                v-model="model3"
                color="#3E7E41"
                hide-details
              ></v-switch>
            </div>

            <div class="flex justify-between items-center mt-4">
              <div>
                <div class="flex items-center gap-x-3">
                  <nuxt-img loading="lazy" 
                    src="/dashboard/warning.svg"
                    alt="ramadanchallenges image"
                  />
                  <span cxt-xl">{{ $t("dashboard.op4_title") }}</span>
                </div>

                <p class="text-sm text-[#4a4a4a] pt-2">
                  {{ $t("dashboard.op4_desc") }}
                </p>
              </div>

              <v-switch
                v-model="model4"
                color="#3E7E41"
                hide-details
              ></v-switch>
            </div>
          </div>

          <div class="notif-chanels mt-sm">
            <h2 class="text-xl font-semibold">
              {{ $t("dashboard.notif_chanels") }}
            </h2>

            <v-checkbox
              class="checkbox"
              v-model="Email"
              color="#3E7E41"
              :label="$t('dashboard.email')"
            ></v-checkbox>

            <v-checkbox
              class="checkbox"
              v-model="SMS"
              color="#3E7E41"
              :label="$t('dashboard.sms')"
            ></v-checkbox>

            <v-checkbox
              class="checkbox"
              v-model="push_notif"
              color="#3E7E41"
              :label="$t('dashboard.push_notif')"
            ></v-checkbox>
          </div>
        </div>
      </v-tabs-window-item>
    -->

      <v-tabs-window-item value="3">
        <div class="privacy-settings pt-sm">
          <!-- change password section -->
          <div class="change-password pt-sm">
            <h2 class="text-xl">{{ $t("dashboard.change_password") }}</h2>
            <p class="text-sm text-[#969696] pt-2">
              {{ $t("dashboard.change_desc") }}
            </p>

            <form @submit.prevent="onSubmit2">
              <!-- current password input -->
              <div>
                <div class="relative mt-4">
                  <div
                    class="absolute ltr:right-0 rtl:left-0 inset-y-0 flex items-center ltr:pr-3 rtl:pl-3 cursor-pointer"
                    @click="showCurrentPassword"
                  >
                    <v-icon v-if="show3" size="small">mdi-eye-outline</v-icon>
                    <v-icon v-else size="small">mdi-eye-off-outline</v-icon>
                  </div>

                  <Field
                    :type="show3 ? 'text' : 'password'"
                    name="current-password"
                    rules="required|min:6"
                    id="current-password"
                    :placeholder="$t('dashboard.currant_password')"
                    autocomplete="current-password"
                    class="block w-full px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                    required
                    v-model="passwordForm.current_password"
                  />
                </div>

                <ErrorMessage
                  class="text-sm text-red-500"
                  name="current-password"
                />
              </div>

              <!-- password input -->
              <div>
                <div class="relative mt-4">
                  <div
                    class="absolute ltr:right-0 rtl:left-0 inset-y-0 flex items-center ltr:pr-3 rtl:pl-3 cursor-pointer"
                    @click="showPassword"
                  >
                    <v-icon v-if="show1" size="small">mdi-eye-outline</v-icon>
                    <v-icon v-else size="small">mdi-eye-off-outline</v-icon>
                  </div>

                  <Field
                    :type="show1 ? 'text' : 'password'"
                    name="resete-password"
                    rules="required|min:6"
                    id="resete-password"
                    :placeholder="$t('dashboard.new_password')"
                    autocomplete="new-password"
                    class="block w-full px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                    required
                    v-model="passwordForm.password"
                  />
                </div>

                <ErrorMessage
                  class="text-sm text-red-500"
                  name="resete-password"
                />
              </div>

              <!-- confirm password  -->
              <div>
                <div class="relative mt-4">
                  <div
                    class="absolute ltr:right-0 rtl:left-0 inset-y-0 flex items-center ltr:pr-3 rtl:pl-3 cursor-pointer"
                    @click="showConfPassword"
                  >
                    <v-icon v-if="show2" size="small">mdi-eye-outline</v-icon>
                    <v-icon v-else size="small">mdi-eye-off-outline</v-icon>
                  </div>

                  <Field
                    :type="show2 ? 'text' : 'password'"
                    name="resete-confirm"
                    rules="required|confirmed:@resete-password"
                    id="resete-confirm"
                    :placeholder="$t('dashboard.confirm_password')"
                    autocomplete="resete-password"
                    class="block w-full px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                    required
                    v-model="passwordForm.password_confirmation"
                  />
                </div>

                <ErrorMessage
                  class="text-sm text-red-500"
                  name="resete-confirm"
                />
              </div>

              <!-- Submit Button -->
              <div class="w-full flex justify-end mt-4">
                <v-btn
                  :ripple="false"
                  type="submit"
                  class="text-capitalize rounded-lg xl:w-1/4 lg:w-1/4 md:w-full w-full mt-2"
                  variant="flat"
                  size="large"
                  color="primary"
                  :loading="passwordForm.loading"
                >
                  {{ $t("dashboard.update_password") }}
                </v-btn>
              </div>
            </form>
          </div>
        </div>
      </v-tabs-window-item>
    </v-tabs-window>
  </section>
</template>

<script setup>
import Swal from "sweetalert2/dist/sweetalert2.all.min.js";
import { ErrorMessage, Field, Form } from "vee-validate";
import { api } from "~/helpers/axios";
import { useAuth } from "~/modules/auth/services/auth";
import { useProfile } from "~/modules/auth/services/profile";

const { t } = useI18n();
const { user } = useAuth();
const { update, changePassword } = useProfile();

// data
const model1 = ref(true);
const model2 = ref(true);
const model3 = ref(true);
const model4 = ref(true);
const Email = ref(true);
const SMS = ref(true);
const push_notif = ref(true);
const show1 = ref(false);
const show2 = ref(false);
const show3 = ref(false);
const tab = ref(null);
const selectedFileName = ref(null);
const files = ref([]);
const preview = ref(user.value.image);

const countries = ref([]);

const switcher = reactive({ charity_name: "ar" });

const toggle = (key) => {
  switcher[key] = switcher[key] == "en" ? "ar" : "en";
};

const handleFileChange = (event) => {
  const input = event.target;
  const file = input.files ? input.files[0] : null;
  selectedFileName.value = file ? file.name : "";

  // preview image
  preview.value = URL.createObjectURL(file);
};

const defaultValues = computed(() => {
  const translations = user.value.charity_name_translations || [];
  const enData = translations.find((i) => i.locale == "en") || {};
  const arData = translations.find((i) => i.locale == "ar") || {};

  // {a: 1}  =>  {"a:ar" : 1}
  const transformObj = (obj) => {
    const transformed = {};
    for (const key in obj) {
      transformed[`${key}:${obj.locale}`] = obj[key];
    }
    return transformed;
  };

  const payload = {
    ...user.value,

    ...transformObj(arData),
    ...transformObj(enData),

    country_id: user.value.country.id,
  };

  delete payload.image;
  return payload;
});

const personalForm = reactive({
  last_name: "",
  email: "",
  mobile: "",
  loading: false,
});
const passwordForm = reactive({
  current_password: "",
  password: "",
  password_confirmation: "",
  loading: false,
});

const getCountries = async () => {
  api.get("/countries").then((res) => {
    countries.value = res.data.result.data;
  });
};
const onSubmit = async (payload) => {
  try {
    personalForm.loading = true;
    const res = await update(payload, toRaw(files.value));

    Swal.fire({
      icon: "success",
      title: t("dashboard.save"),
      confirmButtonText: t("home.ok"),
      customClass: {
        confirmButton: "my-custom-btn",
      },
    });
  } catch (err) {
    console.error(err);
    Swal.fire({
      title: err.response?.data?.message || err.message,
      html: Object.values(err.response?.data?.result?.errors)
        .flat()
        .map((e) => `<li class="text-start">${e}</li>`)
        .join(" "),
      icon: "error",
      confirmButtonText: t("home.ok"),
      customClass: {
        confirmButton: "my-custom-btn",
      },
    });
  } finally {
    personalForm.loading = false;
  }
};

const showCurrentPassword = () => {
  show3.value = !show3.value;
};

const showPassword = () => {
  show1.value = !show1.value;
};

const showConfPassword = () => {
  show2.value = !show2.value;
};

const onSubmit2 = async () => {
  try {
    passwordForm.loading = true;
    const res = await changePassword(passwordForm);

    Swal.fire({
      icon: "success",
      confirmButtonText: t("home.ok"),
      customClass: {
        confirmButton: "my-custom-btn",
      },
      text: t("auth.password_success"),
    });
  } catch (err) {
    console.error(err);
    Swal.fire({
      icon: "error",
      confirmButtonText: t("home.ok"),
      customClass: {
        confirmButton: "my-custom-btn",
      },
      title: err.response?.data?.message || err.message,
      html: Object.values(err.response?.data?.result?.errors)
        .flat()
        .map((e) => `<li class="text-start">${e}</li>`)
        .join(" "),
    });
  } finally {
    passwordForm.loading = false;
  }
};

onMounted(() => {
  getCountries();
});
</script>

<style scoped>
[role="alert"] {
  @apply text-sm text-red-500;
}
</style>
