<template>
  <div class="image rounded-xl">
    <img
      src="../../../assets/images/banner.png"
      class="rounded-lg xl:w-[644px] lg:w-[644px] md:w-full w-full xl:h-[590px] lg:h-[590px] md:h-full h-full object-cover"
      alt="ramadanchallenges image"
    />
  </div>
</template>

<style scoped>
.image {
  position: relative;
}

[dir="ltr"] .image {
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    border-radius: 10px;
    height: 100%;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.9164478291316527) 11%,
      rgba(255, 255, 255, 0) 95%
    );
  }
}

[dir="rtl"] .image {
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    border-radius: 8px;
    height: 100%;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.9164478291316527) 11%,
      rgba(255, 255, 255, 0) 95%
    );
  }
}

@media (max-width: 767px) {
  .image {
    &::before {
      background: rgb(0, 0, 0);
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.8324142156862745) 43%,
        rgba(255, 255, 255, 0) 95%
      );
    }
  }
}
</style>
