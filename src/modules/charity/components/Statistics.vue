<template>
  <div class="cards grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-3">
    <div class="card shadow-sm p-5 border rounded-lg">
      <div class="flex justify-between items-center">
        <span>{{ $t("dashboard.total_donations") }}</span>
        <img src="../../../assets/images/dashboard/donation.svg" alt="" />
      </div>

      <h4 class="text-xl font-bold pt-3 pb-3">40,689</h4>

      <div class="statistics flex items-center gap-x-3">
        <img
          src="../../../assets/images/dashboard/increment.svg"
          width="15"
          alt=""
        />

        <div>
          <span class="text-[#BB9B49] pe-2">8.5%</span>
          <span class="text-sm">{{ $t("dashboard.number_desc") }}</span>
        </div>
      </div>
    </div>

    <div class="card shadow-sm p-5 border rounded-lg">
      <div class="flex justify-between items-center">
        <span>{{ $t("dashboard.total_donations_amount") }}</span>
        <img src="../../../assets/images/mony.svg" alt="" />
      </div>

      <h4 class="text-xl font-bold pt-3 pb-3">$40,689</h4>

      <div class="statistics flex items-center gap-x-3">
        <img
          src="../../../assets/images/dashboard/increment.svg"
          width="15"
          alt=""
        />

        <div>
          <span class="text-[#BB9B49] pe-2">8.5%</span>
          <span class="text-sm">{{ $t("dashboard.number_desc") }}</span>
        </div>
      </div>
    </div>

    <div class="card shadow-sm p-5 border rounded-lg">
      <div class="flex justify-between items-center">
        <span>{{ $t("dashboard.total_campaigns") }}</span>
        <img src="../../../assets/images/dashboard/campaigns.svg" alt="" />
      </div>

      <h4 class="text-xl font-bold pt-3 pb-3">40,689</h4>

      <div class="statistics flex items-center gap-x-3">
        <img
          src="../../../assets/images/dashboard/increment.svg"
          width="15"
          alt=""
        />

        <div>
          <span class="text-[#BB9B49] pe-2">8.5%</span>
          <span class="text-sm">{{ $t("dashboard.number_desc") }}</span>
        </div>
      </div>
    </div>

    <div class="card shadow-sm p-5 border rounded-lg">
      <div class="flex justify-between items-center">
        <span>{{ $t("dashboard.total_donors") }}</span>
        <img src="../../../assets/images/dashboard/doners.svg" alt="" />
      </div>

      <h4 class="text-xl font-bold pt-3 pb-3">40,689</h4>

      <div class="statistics flex items-center gap-x-3">
        <img
          src="../../../assets/images/dashboard/increment.svg"
          width="15"
          alt=""
        />

        <div>
          <span class="text-[#BB9B49] pe-2">8.5%</span>
          <span class="text-sm">{{ $t("dashboard.number_desc") }}</span>
        </div>
      </div>
    </div>

    <div class="card shadow-sm p-5 border rounded-lg">
      <div class="flex justify-between items-center">
        <span>{{ $t("dashboard.field_donations") }}</span>
        <img src="../../../assets/images/dashboard/warning.svg" alt="" />
      </div>

      <h4 class="text-xl font-bold pt-3 pb-3">40,689</h4>

      <div class="statistics flex items-center gap-x-3">
        <img
          src="../../../assets/images/dashboard/increment.svg"
          width="15"
          alt=""
        />

        <div>
          <span class="text-[#BB9B49] pe-2">8.5%</span>
          <span class="text-sm">{{ $t("dashboard.number_desc") }}</span>
        </div>
      </div>
    </div>

    <div class="card shadow-sm p-5 border rounded-lg">
      <div class="flex justify-between items-center">
        <span>{{ $t("dashboard.success_donations") }}</span>
        <img src="../../../assets/images/dashboard/doners.svg" alt="" />
      </div>

      <h4 class="text-xl font-bold pt-3 pb-3">40,689</h4>

      <div class="statistics flex items-center gap-x-3">
        <img
          src="../../../assets/images/dashboard/increment.svg"
          width="15"
          alt=""
        />

        <div>
          <span class="text-[#BB9B49] pe-2">8.5%</span>
          <span class="text-sm">{{ $t("dashboard.number_desc") }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
