<template>
  <div class="cards grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-3">
    <div class="card shadow-sm p-5 border rounded-lg">
      <div class="flex justify-between items-center">
        <h4 class="text-xl font-bold pt-3 pb-3">40,689</h4>
        <img src="../../../assets/images/dashboard/donation.svg" alt="" />
      </div>

      <span>{{ $t("dashboard.total_donations") }}</span>
    </div>

    <div class="card shadow-sm p-5 border rounded-lg">
      <div class="flex justify-between items-center">
        <h4 class="text-xl font-bold pt-3 pb-3">$40,689</h4>

        <img src="../../../assets/images/mony.svg" alt="" />
      </div>

      <span>{{ $t("dashboard.total_donations_amount") }}</span>
    </div>

    <div class="card shadow-sm p-5 border rounded-lg">
      <div class="flex justify-between items-center">
        <h4 class="text-xl font-bold pt-3 pb-3">40,689</h4>
        <img src="../../../assets/images/dashboard/campaigns.svg" alt="" />
      </div>

      <span>{{ $t("dashboard.total_campaigns") }}</span>
    </div>

    <div class="card shadow-sm p-5 border rounded-lg">
      <div class="flex justify-between items-center">
        <h4 class="text-xl font-bold pt-3 pb-3">40,689</h4>

        <img src="../../../assets/images/dashboard/doners.svg" alt="" />
      </div>

      <span>{{ $t("dashboard.total_donors") }}</span>
    </div>

    <div class="card shadow-sm p-5 border rounded-lg">
      <div class="flex justify-between items-center">
        <h4 class="text-xl font-bold pt-3 pb-3">40,689</h4>
        <img src="../../../assets/images/dashboard/warning.svg" alt="" />
      </div>

      <span>{{ $t("dashboard.field_donations") }}</span>
    </div>

    <div class="card shadow-sm p-5 border rounded-lg">
      <div class="flex justify-between items-center">
        <h4 class="text-xl font-bold pt-3 pb-3">40,689</h4>
        <img src="../../../assets/images/dashboard/doners.svg" alt="" />
      </div>

      <span>{{ $t("dashboard.success_donations") }}</span>
    </div>
  </div>
</template>
