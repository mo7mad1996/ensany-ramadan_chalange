<template>
  <form action="">
    <!-- name input -->
    <div class="relative">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3">
        <img src="../../../assets/images/contact/name.svg" alt="" />
      </div>

      <input
        type="text"
        id="custom-input"
        placeholder="Name"
        class="block w-full pl-10 px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
      />
    </div>

    <!-- email input -->
    <div class="relative mt-3">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3">
        <img src="../../../assets/images/contact/email.svg" alt="" />
      </div>

      <input
        type="email"
        id="custom-input"
        placeholder="Email"
        class="block w-full pl-10 px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
        required
      />
    </div>
  </form>
</template>
