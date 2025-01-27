<template>
  <section
    class="pt-sm pb-sm w-full"
    aria-label="this table to show highest donors"
  >
    <Container class="flex justify-center">
      <!-- Add a scrollable container -->
      <div class="overflow-auto w-1/2">
        <table class="w-full">
          <thead class="bg-primary">
            <tr>
              <th>
                <div class="flex gap-x-2 items-center">
                  <img
                    src="../../../assets/images/dashboard/donate.svg"
                    width="15"
                    class="filter"
                    alt=""
                  />
                  <span>Donor</span>
                </div>
              </th>
              <th>
                <div class="flex gap-x-2 items-center">
                  <img
                    src="../../../assets/images/donation_amount.svg"
                    width="15"
                    class="filter"
                    alt=""
                  />
                  <span>Donation Amount</span>
                </div>
              </th>
              <th>
                <div class="flex gap-x-2 items-center">
                  <img
                    src="../../../assets/images/campaign.svg"
                    width="15"
                    class="filter"
                    alt=""
                  />
                  <span>Campaign</span>
                </div>
              </th>
              <th>
                <div class="flex gap-x-2 items-center">
                  <img
                    src="../../../assets/images/time.svg"
                    width="15"
                    class="filter"
                    alt=""
                  />
                  <span>Time</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in 4" :key="index">
              <td>
                <div class="flex gap-x-2 items-center">
                  <img
                    src="../../../assets/images/user.svg"
                    width="25"
                    alt=""
                  />
                  <span>Ahmed Ali</span>
                </div>
              </td>
              <td class="font-bold text-center">$20k</td>
              <td>
                <nuxt-link to="" class="underline cursor-pointer"
                  >Feed a Family for Iftar</nuxt-link
                >
              </td>
              <td>2 mins ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from "~/global/Container.vue";
</script>

<style scoped>
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

/* Optional: Add max-width to table for better responsiveness */
table {
  min-width: 500px; /* Adjust as needed */
}
</style>
