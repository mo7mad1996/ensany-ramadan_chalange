<template>
  <div class="dashboard">
    <div class="flex items-center justify-between">
      <h1 class="lg:flex xl:flex md:hidden hidden text-3xl font-bold">
        {{ $t("donor.donation_cart") }}
      </h1>
      <v-btn
        class="text-capitalize rounded-lg"
        variant="flat"
        size="default"
        color="primary"
        @click="openDialog"
      >
        {{ $t("donor.confirm_donation") }}
      </v-btn>
    </div>
    <div class="grid grid-cols-3 gap-8 mt-6 justify-between">
      <div class="col-span-1">
        <span class="custom-label text-sm">{{ $t("donor.custom_amount") }}</span>
        <v-text-field
          v-model="customAmount"
          variant="outlined"
          density="compact"
          hide-details
          prepend-inner-icon="mdi-cash"
          placeholder="$0"
          class="custom-amount-input rounded-lg outline-none border-none focus:outline-none focus:border-none"
        ></v-text-field>
      </div>

      <!-- Distribution Options -->
      <div class="col-span-2 self-end">
        <v-radio-group v-model="distributionOption" inline>
          <v-radio
            :label="$t('donor.distribute_amount_equally')"
            color="primary"
            value="equal"
            class="custom-radio"
          ></v-radio>
          <v-radio
            :label="$t('donor.customize_per_campaign')"
            color="primary"
            value="custom"
            class="custom-radio"
          ></v-radio>
        </v-radio-group>
      </div>
    </div>

    <div class="content mt-sm">
      <v-card flat>
        <v-data-table
          class="border rounded-lg"
          :items="donorCart.data"
          :headers="headers"
          item-value="id"
          :page="currentPage"
          :server-items-length="totalItems"
          :loading="status === 'pending'"
          @update:page="currentPage = $event"
          @update:items-per-page="itemsPerPage = $event"
        >
          <!-- Image & Name -->
          <template v-slot:item.name="{ item }">
            <div
              class="flex items-center gap-2 space-x-2 cursor-pointer hover:text-blue-600"
              @click="navigateToCampaign(item.id)"
            >
              <v-avatar size="40">
                <img :src="item.campaign?.image" alt="Campaign Image" class="rounded-lg" />
              </v-avatar>
              <span>{{ item.name }}</span>
            </div>
          </template>

          <!-- Amount Input -->
          <template v-slot:item.amount="{ item }">
            <v-text-field
              v-model="item.amount"
              type="text"
              variant="outlined"
              density="compact"
              placeholder="Enter amount"
              class="w-100 rounded-lg outline-none border-none focus:border-primary focus:ring focus:ring-opacity-25"
            ></v-text-field>
          </template>
          <!-- Action Column -->
          <template v-slot:item.action="{ item }">
            <div
              class="flex items-center gap-2 cursor-pointer text-red-500"
              @click="removeItem(item.id)"
            >
              <v-icon size="20">mdi-close-circle</v-icon>
              <span>Remove</span>
            </div>
          </template>

          <!-- Bold Total Amount -->
          <template v-slot:item.total_amount="{ item }">
            <span class="font-bold text-green-600">
              ${{ parseFloat(item.total_amount).toLocaleString() }}
            </span>
          </template>

          <!-- Status -->
          <template v-slot:item.status="{ item }">
            <span
              class="inline-block w-full text-sm font-medium rounded-md text-center py-2 px-4 capitalize"
              :class="{
                'bg-green-200 text-black': item.status === 'published',
                'bg-gray-600 text-white': item.status !== 'published',
              }"
            >
              {{ item.status }}
            </span>
          </template>

          <!-- Created At -->
          <template v-slot:item.created_at="{ item }">
            {{ formattedDate(item.created_at) }}
          </template>
        </v-data-table>
      </v-card>
    </div>
    <dialog class="dialog m-auto rounded-[10px] h-50 min-w-[500px]" ref="donate">
      <div class="close-icon p-3 w-full flex justify-end">
        <v-icon class="cursor-pointer" @click="closeDialog">mdi-close</v-icon>
      </div>
      <DonorConfirmDonationDialog />
    </dialog>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useDonationCartPage } from "../typescript/donation-cart";
import { useDonerCart } from "../services/donation-cart";


const {donorCart} = useDonerCart()


console.log(donorCart)

definePageMeta({
  layout: "donor",
  middleware: "require-auth",
});
const router = useRouter();
const { headers } = useDonationCartPage();
const customAmount = ref("");
const distributionOption = ref("equal");
// const { donorCampMeta, donorCampaigns, status } = useDonorCamoaigns();

const navigateToCampaign = (campaignId) => {
  router.push(`/campaigns/donate/${campaignId}`);
};
const donate = ref("");

const openDialog = () => {
  donate.value.showModal();
};

const closeDialog = () => {
  donate.value.close();
};
const donations = ref([
  {
    id: 1,
    name: "Feed the Hungry – Iftar 2025",
    description: "Support the construction of a mosque...",
    charityName: "Honor company",
    image: "/path-to-image.jpg",
    amount: "",
    action: "",
  },
  {
    id: 2,
    name: "Provide Clean Water",
    description: "Help build wells in underserved communities.",
    charityName: "Water Foundation",
    image: "/path-to-clean-water-image.jpg",
    amount: "",
  },
  {
    id: 3,
    name: "Educate the Orphans",
    description: "Support orphans with education and daily needs.",
    charityName: "Education For All",
    image: "/path-to-education-image.jpg",
    amount: "",
  },
  {
    id: 4,
    name: "Emergency Relief Fund",
    description: "Provide aid to disaster-stricken areas.",
    charityName: "Relief Alliance",
    image: "/path-to-relief-image.jpg",
    amount: "",
  },
  {
    id: 5,
    name: "Sponsor a Child",
    description: "Change the life of a child with monthly sponsorship.",
    charityName: "Child Support Organization",
    image: "/path-to-child-sponsorship-image.jpg",
    amount: "",
  },
  {
    id: 6,
    name: "Medical Aid for Refugees",
    description: "Provide life-saving healthcare to refugees.",
    charityName: "Health First NGO",
    image: "/path-to-medical-aid-image.jpg",
    amount: "",
  },
  {
    id: 7,
    name: "Plant a Million Trees",
    description: "Join us in combating climate change.",
    charityName: "Green Earth Initiative",
    image: "/path-to-tree-planting-image.jpg",
    amount: "",
  },
  {
    id: 8,
    name: "Feed the Children",
    description: "Provide nutritious meals to hungry children worldwide.",
    charityName: "Global Food Aid",
    image: "/path-to-feeding-children-image.jpg",
    amount: "",
  },
  {
    id: 9,
    name: "Build a School",
    description: "Help construct schools in rural areas.",
    charityName: "Future Leaders Foundation",
    image: "/path-to-school-construction-image.jpg",
    amount: "",
  },
  {
    id: 10,
    name: "Support the Elderly",
    description: "Provide care and companionship to the elderly.",
    charityName: "Care for Seniors",
    image: "/path-to-elderly-support-image.jpg",
    amount: "",
  },
]);
</script>
<style></style>
