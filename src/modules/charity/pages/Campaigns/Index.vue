<template>
  <div class="dashboard_campaigns pb-sm">
    <dashbordBreadcrumb :is-buttons="true" :is-link="false">
      <template #title>{{ $t("dashboard.campaigns_overview") }}</template>
      <template #first_button>{{ $t("global.donate_now") }}</template>
      <template #second_button>
        <nuxt-link to="/start-campaign">
          {{ $t("global.start_campaign") }}
        </nuxt-link></template
      >
    </dashbordBreadcrumb>

    <div class="content pt-sm">
      <!-- <h2 class="text-xl font-bold">
        {{ $t("dashboard.fundraising_history") }}
      </h2> -->

      <v-card flat>
        <v-text-field
          v-model="search"
          density="compact"
          :label="$t('global.search')"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          flat
          hide-details
          single-line
          class="pb-4 pt-4 rounded-lg w-1/4"
        ></v-text-field>

        <v-data-table
          class="border"
          :items="charityCampaigns"
          :search="search"
          :headers="headers"
          :items-per-page="itemsPerPage"
          :page="currentPage"
          :server-items-length="totalItems"
          :loading="status === 'pending'"
          @update:page="currentPage = $event"
          @update:items-per-page="itemsPerPage = $event"
        >
          <!-- Status Button -->
          <template v-slot:item.status="{ item }">
            <v-btn
              class="w-full"
              :color="item.status === 'published' ? '#28A745' : '#5C7762'"
              elevation="0"
              variant="tonal"
              :ripple="false"
              size="small"
              style="text-transform: capitalize"
            >
              {{ item.status }}
            </v-btn>
          </template>

          <!-- start date -->
          <template v-slot:item.start_at="{ item }">
            {{ reFormat2(item?.start_at) }}
          </template>

          <!-- campaign goal -->
          <template v-slot:item.price_target="{ item }">
            <p class="mb-0 font-bold text-primary">${{ item?.price_target }}</p>
          </template>

          <!-- end date -->
          <template v-slot:item.end_at="{ item }">
            {{ reFormat2(item?.end_at) }}
          </template>

          <!-- campaign image -->
          <template v-slot:item.image="{ item }">
            <v-img
              :src="item.image"
              alt="Campaign Image"
              width="40"
              height="40"
              cover
              class="rounded"
            />
          </template>

          <!-- Actions -->
          <template v-slot:item.actions="{ item }">
            <div class="flex gap-x-2 items-center">
              <v-btn
                icon
                size="x-small"
                elevation="0"
                variant="tonal"
                color="red"
                @click="confirmDelete(item?.id)"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>

              <v-btn
                icon
                size="x-small"
                elevation="0"
                variant="tonal"
                color="green"
                :to="{
                  name: 'edit-campaign',
                  params: { id: item.id },
                }"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </div>
          </template>
        </v-data-table>
      </v-card>
    </div>
  </div>
</template>

<script setup>
import Swal from "sweetalert2";
import dashbordBreadcrumb from "~/global/dashbord-breadcrumb.vue";
import { reFormat2 } from "~/helpers/format-date";
import { useGlobalVar } from "~/helpers/global-var";
import { useCharityCamoaigns } from "../../services/charity-campaigns";
import { useCampaign } from "../../services/campaign";
import { useCampaignsPage } from "../../typescript/campaigns-page";
definePageMeta({
  layout: "charity",
  middleware: "require-auth",
});

const router = useRouter();
const { search, headers } = useCampaignsPage();
const { charityCampaigns, status, itemsPerPage, totalItems, currentPage } =
  useCharityCamoaigns();

const { deleteCampaign } = useCampaign();

const confirmDelete = (id) => {
  if (id) {
    Swal.fire({
      title: t("dashboard.delete_msg"),
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: t("dashboard.delete"),
      confirmButtonColor: "#d33",
      cancelButtonText: t("dashboard.cancel"),
      cancelButtonColor: "#6c757d",
      customClass: {
        confirmButton: "my-custom-btn",
        cancelButton: "my-custom-btn",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCampaign(id);
        Swal.fire({
          icon: "success",
          title: t("dashboard.confirm_delete"),
          confirmButtonText: t("dashboard.ok"),
          confirmButtonColor: "#3E7E41",
          customClass: {
            confirmButton: "my-custom-btn",
          },
        });
      }
    });
  }
};

const { siteName } = useGlobalVar();
siteName("dashboard.page_title_campaigns");
</script>
