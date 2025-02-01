<template>
  <section aria-label="account settings section">
    <v-tabs v-model="tab" align-tabs="start">
      <v-tab value="1" :ripple="false" style="text-transform: capitalize">{{
        $t("dashboard.profile")
      }}</v-tab>
      <v-tab value="2" :ripple="false" style="text-transform: capitalize">{{
        $t("dashboard.notif")
      }}</v-tab>
      <v-tab value="3" :ripple="false" style="text-transform: capitalize">{{
        $t("dashboard.privacy_security")
      }}</v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item value="1" class="w-1/2">
        <div class="profile-settings pt-sm">
          <h2 class="text-xl font-semibold">
            {{ $t("dashboard.account_details") }}
          </h2>

          <div class="update-form mt-5">
            <Form @submit="onSubmit">
              <!-- name -->
              <div>
                <div class="relative">
                  <div
                    class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
                  >
                    <img src="../../../assets/images/contact/name.svg" alt="" />
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
              <div class="mt-4">
                <div class="relative">
                  <div
                    class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
                  >
                    <img
                      src="../../../assets/images/contact/email.svg"
                      alt=""
                    />
                  </div>

                  <Field
                    type="text"
                    name="updated_email"
                    rules="required|email"
                    id="updated_email"
                    :placeholder="$t('dashboard.update_email')"
                    class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                  />
                </div>

                <ErrorMessage
                  name="updated_email"
                  class="text-sm text-red-500"
                />
              </div>

              <!-- phone number -->
              <div class="mt-4">
                <div class="relative">
                  <div
                    class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
                  >
                    <img
                      src="../../../assets/images/contact/phone.svg"
                      alt=""
                    />
                  </div>

                  <Field
                    type="text"
                    name="updated_phone"
                    rules="required"
                    id="updated_phone"
                    :placeholder="$t('dashboard.update_phone')"
                    class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                  />
                </div>

                <ErrorMessage
                  name="updated_phone"
                  class="text-sm text-red-500"
                />
              </div>

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

      <v-tabs-window-item value="2">
        <div class="notif-settings pt-sm">
          <h2 class="text-xl font-semibold">
            {{ $t("dashboard.notif_title") }}
          </h2>
          <p class="text-sm text-[#4a4a4a]">
            {{ $t("dashboard.notif_desc") }}
          </p>

          <div class="options mt-4">
            <!-- option -->
            <div class="flex justify-between items-center">
              <div>
                <div class="flex items-center gap-x-3">
                  <img
                    src="../../../assets/images/dashboard/campaigns.svg"
                    alt=""
                  />
                  <span class="text-xl">{{ $t("dashboard.op1_title") }}</span>
                </div>

                <p class="text-sm text-[#4a4a4a] pt-2">
                  {{ $t("dashboard.op1_desc") }}
                </p>
              </div>

              <v-switch v-model="model" color="#3E7E41" hide-details></v-switch>
            </div>

            <div class="flex justify-between items-center mt-4">
              <div>
                <div class="flex items-center gap-x-3">
                  <img
                    src="../../../assets/images/dashboard/donation.svg"
                    alt=""
                  />
                  <span class="text-xl">{{ $t("dashboard.op2_title") }}</span>
                </div>

                <p class="text-sm text-[#4a4a4a] pt-2">
                  {{ $t("dashboard.op2_desc") }}
                </p>
              </div>

              <v-switch v-model="model" color="#3E7E41" hide-details></v-switch>
            </div>

            <div class="flex justify-between items-center mt-4">
              <div>
                <div class="flex items-center gap-x-3">
                  <img
                    src="../../../assets/images/dashboard/notification.svg"
                    alt=""
                  />
                  <span class="text-xl">{{ $t("dashboard.op3_title") }}</span>
                </div>

                <p class="text-sm text-[#4a4a4a] pt-2">
                  {{ $t("dashboard.op3_desc") }}
                </p>
              </div>

              <v-switch v-model="model" color="#3E7E41" hide-details></v-switch>
            </div>

            <div class="flex justify-between items-center mt-4">
              <div>
                <div class="flex items-center gap-x-3">
                  <img
                    src="../../../assets/images/dashboard/warning.svg"
                    alt=""
                  />
                  <span class="text-xl">{{ $t("dashboard.op4_title") }}</span>
                </div>

                <p class="text-sm text-[#4a4a4a] pt-2">
                  {{ $t("dashboard.op4_desc") }}
                </p>
              </div>

              <v-switch v-model="model" color="#3E7E41" hide-details></v-switch>
            </div>
          </div>

          <div class="notif-chanels mt-sm">
            <h2 class="text-xl font-semibold">
              {{ $t("dashboard.notif_chanels") }}
            </h2>

            <v-checkbox
              v-model="Email"
              color="#3E7E41"
              label="Email"
            ></v-checkbox>

            <v-checkbox v-model="SMS" color="#3E7E41" label="SMS"></v-checkbox>

            <v-checkbox
              v-model="push_notif"
              color="#3E7E41"
              label="Push notifications"
            ></v-checkbox>
          </div>
        </div>
      </v-tabs-window-item>

      <v-tabs-window-item value="3">
        <div class="privacy-settings pt-sm">
          <h2 class="text-xl font-bold">Security Settings</h2>
          <p class="text-sm text-[#969696]">
            Manage and strengthen your account's security.
          </p>

          <div class="header pt-sm">
            <div class="flex justify-between items-center">
              <h3 class="text-xl">Recent Login Activity</h3>
              <span class="underline text-primary text-sm cursor-pointer"
                >Terminate all sessions</span
              >
            </div>
            <p class="text-sm text-[#969696] pt-2">
              Review the devices and locations where your account was accessed.
              If something doesn’t look right, take action immediately
            </p>
          </div>

          <!-- change password section -->
          <div class="change-password pt-sm">
            <h2 class="text-xl">Change Password</h2>
            <p class="text-sm text-[#969696] pt-2">
              Update your password to keep your account secure. A strong
              password includes letters, numbers, and symbols.
            </p>

            <Form @submit="onSubmit2">
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
                  class="text-capitalize rounded-lg w-1/4 mt-2"
                  variant="flat"
                  size="large"
                  color="primary"
                >
                  update password
                </v-btn>
              </div>
            </Form>
          </div>
        </div>
      </v-tabs-window-item>
    </v-tabs-window>
  </section>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";

const model = ref(true);
const Email = ref(true);
const SMS = ref(true);
const push_notif = ref(true);
const show1 = ref(false);
const show2 = ref(false);
const show3 = ref(false);

const onSubmit = () => {
  console.log("form submitted");
};
const tab = ref(null);

const showCurrentPassword = () => {
  show3.value = !show3.value;
};

const showPassword = () => {
  show1.value = !show1.value;
};

const showConfPassword = () => {
  show2.value = !show2.value;
};

const onSubmit2 = () => {
  console.log("form submitted");
};
</script>
