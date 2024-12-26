<template>
  <!-- <v-footer :app="true"> -->
  <footer>
    <Container>
      <v-row class="row ga-4" no-gutters>
        <v-col lg="3" xl="4" md="12" cols="12" offset-lg="0">
          <img src="../assets/images/logo.svg" alt="" />
          <p>Every act of kindness makes a difference.</p>
        </v-col>

        <v-col lg="3" xl="4" md="12" cols="12" offset-lg="1">
          <p class="terms">Terms and Conditions FAQs</p>
        </v-col>

        <v-col lg="3" xl="4" md="12" cols="12" offset-lg="1">
          <p class="flow">Follow us on</p>
          <div class="scotila-links d-flex ga-4 mt-4">
            <img src="../assets/images/facebook.svg" alt="" />
            <img src="../assets/images/insta.svg" alt="" />
            <img src="../assets/images/twitter.svg" alt="" />
            <img src="../assets/images/youtube.svg" alt="" />
            <img src="../assets/images/ticktok.svg" alt="" />
            <img src="../assets/images/whatsapp.svg" alt="" />
          </div>
        </v-col>
      </v-row>
    </Container>
  </footer>
  <!-- </v-footer> -->
</template>

<script setup>
import Container from "./Container.vue";
</script>

<style scoped>
footer {
  background-color: #f6fff6;
  padding: 2rem 0;
}

.v-row {
  align-items: center !important;
}

.terms,
.flow {
  font-size: 18px;
}
</style>
