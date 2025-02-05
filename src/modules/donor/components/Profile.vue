<template>
     <div class="profile-settings pt-sm">
            <h2 class="text-xl font-bold">
              {{ $t("donor.account_details") }}
            </h2>
  
            <div class="update-form mt-5">
              <Form @submit="onSubmit">
                <!-- name -->
                <div>
                  <!-- <div class="relative">
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
                  </div> -->
  
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
                    {{ $t("donor.update_account") }}
                  </v-btn>
  
                  <v-btn
                    :ripple="false"
                    class="text-capitalize rounded-lg mt-2"
                    variant="outlined"
                    size="large"
                    color="primary"
                  >
                    {{ $t("donor.discard_changes") }}
                  </v-btn>
                </div>
              </Form>
            </div>
          </div>
</template>
<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
</script>