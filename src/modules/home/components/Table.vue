<template>
  <section
    class="pt-sm pb-sm w-full"
    aria-label="this table to show highest donors"
  >
    <Container>
      <!-- Add a scrollable container -->
      <div class="flex justify-center">
        <div class="overflow-auto w-full">
          <div v-if="status == 'pending'">
            <v-skeleton-loader type="table" class="w-full"></v-skeleton-loader>
          </div>

          <table class="w-full" v-if="status == 'success'">
            <thead class="bg-primary">
              <tr>
                <th>
                  <div class="flex gap-x-2 items-center">
                    <nuxt-img
                      loading="lazy"
                      src="/dashboard/donate.svg"
                      width="15"
                      class="filter"
                      alt="ramadanchallenges image"
                    />
                    <span>{{ $t("home.donor") }}</span>
                  </div>
                </th>
                <th>
                  <div class="flex gap-x-2 items-center">
                    <nuxt-img
                      loading="lazy"
                      src="/donation_amount.svg"
                      width="15"
                      class="filter"
                      alt="ramadanchallenges image"
                    />
                    <span>{{ $t("home.donation_amount") }}</span>
                  </div>
                </th>
                <th>
                  <div class="flex gap-x-2 items-center">
                    <nuxt-img
                      loading="lazy"
                      src="/campaign.svg"
                      width="15"
                      class="filter"
                      alt="ramadanchallenges image"
                    />
                    <span>{{ $t("home.donation_campaign") }}</span>
                  </div>
                </th>
                <th>
                  <div class="flex gap-x-2 items-center">
                    <nuxt-img
                      loading="lazy"
                      src="/time.svg"
                      width="15"
                      class="filter"
                      alt="time"
                    />
                    <span>{{ $t("home.donation_time") }}</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(donor, index) in topTen" :key="index">
                <td>
                  <div class="flex gap-x-2 items-center">
                    <nuxt-img
                      loading="lazy"
                      src="/user.svg"
                      width="25"
                      alt="user"
                    />
                    <span v-if="donor?.user_name">{{ donor?.user_name }}</span>
                    <span v-if="donor?.user">{{ donor?.user?.name }}</span>
                  </div>
                </td>
                <td class="font-bold">${{ donor?.total_amount }}</td>
                <td>
                  <nuxt-link
                    :to="`campaigns/${donor?.campaign?.id}`"
                    class="underline cursor-pointer"
                    >{{ donor?.campaign?.name }}</nuxt-link
                  >
                </td>
                <td>{{ reFormat(donor?.created_at) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from "~/global/Container.vue";
import { reFormat } from "~/helpers/format-date";
import { useDonors } from "../services/top-donors";

const { topTen, status } = useDonors();
watchEffect(() => {
  // console.log(topTen.value[0].campaign.id);
});
</script>

<style scoped lang="scss">
table {
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 10px;
  overflow: hidden;

  th,
  td {
    padding: 8px;
  }
  th {
    color: #fff;
  }

  .filter {
    filter: brightness(6.5);
  }
}

table {
  min-width: 500px;
}
</style>
