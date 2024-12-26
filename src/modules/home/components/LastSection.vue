<template>
  <Container>
    <section class="ready mt-[3rem] mb-[3rem]">
      <div class="content relative text-white px-[5rem] py-[5rem]">
        <h1 class="font-bold text-[36px] leading-[54px]">
          Ready to Make a <br />
          Difference This Ramadan.
        </h1>

        <p class="text-[14px] pt-[2rem]">
          Your contributions create change. Let’s reach our goals together .
        </p>

        <v-btn
          class="text-capitalize rounded-lg mt-[2rem]"
          variant="flat"
          size="default"
          color="#3E7E41"
          >Join the Challenge</v-btn
        >
      </div>
    </section>
  </Container>
</template>

<script setup>
import Container from "../../../global/Container.vue";
</script>

<style scoped>
.ready {
  background: url(../../../assets/images/ready-img.png) no-repeat;
  background-size: cover;
  height: 400px;
  border-radius: 10px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.916448) 41%,
      rgba(255, 255, 255, 0) 95%
    );
  }
}
</style>
