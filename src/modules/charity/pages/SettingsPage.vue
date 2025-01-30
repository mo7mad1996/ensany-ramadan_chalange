<template>
  <div class="dashboard_campaigns pb-sm">
    <div>
      <h1 class="text-3xl font-bold">Settings</h1>
      <p>Manage your preferences and customize your experience.</p>
    </div>

    <div class="content pt-sm">
      <v-tabs v-model="tab" align-tabs="start">
        <v-tab value="1" :ripple="false" style="text-transform: capitalize"
          >Profile</v-tab
        >
        <v-tab value="2" :ripple="false" style="text-transform: capitalize"
          >Notifications</v-tab
        >
        <v-tab value="3" :ripple="false" style="text-transform: capitalize"
          >Privacy & security</v-tab
        >
      </v-tabs>

      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="1" class="w-1/2">
          <div class="profile-settings pt-sm">
            <h2 class="text-xl font-semibold">Your Account Details</h2>

            <div class="update-form mt-5">
              <Form @submit="onSubmit">
                <!-- name -->
                <div>
                  <div class="relative">
                    <div
                      class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
                    >
                      <img
                        src="../../../assets/images/contact/name.svg"
                        alt=""
                      />
                    </div>

                    <Field
                      type="text"
                      name="updated_name"
                      rules="required"
                      id="updated_name"
                      placeholder="update name"
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
                      placeholder="update Email"
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
                      placeholder="update Phone"
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
                    Update Account
                  </v-btn>

                  <v-btn
                    :ripple="false"
                    class="text-capitalize rounded-lg mt-2"
                    variant="outlined"
                    size="large"
                    color="primary"
                  >
                    Discard changes
                  </v-btn>
                </div>
              </Form>
            </div>
          </div>
        </v-tabs-window-item>

        <v-tabs-window-item value="2">
          <div class="notif-settings pt-sm">
            <h2 class="text-xl font-semibold">Notification Preferences</h2>
            <p class="text-sm text-[#4a4a4a]">Control How You Stay Updated</p>

            <div class="options mt-4">
              <!-- option -->
              <div class="flex justify-between items-center">
                <div>
                  <div class="flex items-center gap-x-3">
                    <img
                      src="../../../assets/images/dashboard/campaigns.svg"
                      alt=""
                    />
                    <span class="text-xl">Campaign Updates</span>
                  </div>

                  <p class="text-sm text-[#4a4a4a] pt-2">
                    Notify me when campaigns I created in are updated.
                  </p>
                </div>

                <v-switch
                  v-model="model"
                  color="#3E7E41"
                  hide-details
                ></v-switch>
              </div>

              <div class="flex justify-between items-center mt-4">
                <div>
                  <div class="flex items-center gap-x-3">
                    <img
                      src="../../../assets/images/dashboard/donation.svg"
                      alt=""
                    />
                    <span class="text-xl">Donation Activities</span>
                  </div>

                  <p class="text-sm text-[#4a4a4a] pt-2">
                    Receive updates about my donations and their progress.
                  </p>
                </div>

                <v-switch
                  v-model="model"
                  color="#3E7E41"
                  hide-details
                ></v-switch>
              </div>

              <div class="flex justify-between items-center mt-4">
                <div>
                  <div class="flex items-center gap-x-3">
                    <img
                      src="../../../assets/images/dashboard/notification.svg"
                      alt=""
                    />
                    <span class="text-xl">Reminders</span>
                  </div>

                  <p class="text-sm text-[#4a4a4a] pt-2">
                    Get reminders about upcoming campaigns.
                  </p>
                </div>

                <v-switch
                  v-model="model"
                  color="#3E7E41"
                  hide-details
                ></v-switch>
              </div>

              <div class="flex justify-between items-center mt-4">
                <div>
                  <div class="flex items-center gap-x-3">
                    <img
                      src="../../../assets/images/dashboard/warning.svg"
                      alt=""
                    />
                    <span class="text-xl">Announcements</span>
                  </div>

                  <p class="text-sm text-[#4a4a4a] pt-2">
                    Get announced about upcoming updates.
                  </p>
                </div>

                <v-switch
                  v-model="model"
                  color="#3E7E41"
                  hide-details
                ></v-switch>
              </div>
            </div>

            <div class="notif-chanels mt-sm">
              <h2 class="text-xl font-semibold">Notification Channels</h2>

              <v-checkbox
                v-model="Email"
                color="#3E7E41"
                label="Email"
              ></v-checkbox>

              <v-checkbox
                v-model="SMS"
                color="#3E7E41"
                label="SMS"
              ></v-checkbox>

              <v-checkbox
                v-model="push_notif"
                color="#3E7E41"
                label="Push notifications"
              ></v-checkbox>
            </div>
          </div>
        </v-tabs-window-item>
      </v-tabs-window>
    </div>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
definePageMeta({
  layout: "charity",
  middleware: "require-auth",
});

const model = ref(true);
const Email = ref(true);
const SMS = ref(true);
const push_notif = ref(true);

const onSubmit = () => {
  console.log("form submitted");
};
const tab = ref(null);
</script>
