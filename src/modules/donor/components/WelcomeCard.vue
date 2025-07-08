<template>
  <div class="card shadow-sm p-5 border rounded-lg">
    <div class="w-50">

        <p class="text-3xl mt-4">
          <span class="text-grey-darken-4">{{ $t("donor.welcome") }},</span> <span v-if="user?.first_name" class="font-bold">{{ user?.first_name }}</span><v-icon color="yellow darken-3" size="24">mdi-moon-waxing-crescent</v-icon>
        </p>
        <p class="text-grey-darken-2 text-sm">
         {{ $t("donor.welcome_sentence") }}
        </p>
    </div>
  </div class="card shadow-sm p-5 border rounded-lg">
</template>
<script setup>
import { useAuth } from '~/modules/auth/services/auth';

const { user } = useAuth();</script>
