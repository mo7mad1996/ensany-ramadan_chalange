<template>
  <div class="comments pt-sm text-[#121212]">
    <h1 class="text-2xl leading-[36px] text-[#121212]">
      {{ $t("campaigns.comments") }}
    </h1>

    <div class="header flex justify-between items-center mt-4">
      <div class="text-sm">{{ commentsMeta?.total }} {{ $t("campaigns.comments") }}</div>

      <div class="flex items-center gap-x-2 cursor-pointer">
        <span class="text-sm">{{ $t("campaigns.sorted_by") }}</span>
        <v-icon size="small">mdi-sort</v-icon>
      </div>
    </div>

    <!-- commment input (write a comment) -->
    <div class="comment-part mt-5 py-0 px-5">
      <!-- <div class="flex gap-x-3 items-center">
        <img loading="lazy" src="../../../assets/images/user.svg" alt="" />
        <h4 class="text-2xl font-bold">Ali Omar</h4>
      </div>

      <Field
        as="textarea"
        type="text"
        name="comment"
        rules="required"
        :placeholder="$t('campaigns.comment_paceholder')"
        class="block w-full mt-5 ltr:pl-5 rtl:pr-5 pt-3 pb-md outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
      />

      <div class="w-full flex justify-end">
        <v-btn
          type="submit"
          class="text-capitalize rounded-lg w-1/4 mt-5"
          :ripple="false"
          variant="flat"
          size="large"
          color="primary"
          >{{ $t("campaigns.comment") }}</v-btn
        >
      </div> -->

      <!-- skeleton loader for comments -->
      <div v-for="(item, index) in 2" :key="index">
        <v-skeleton-loader
          v-for="(item, index) in 2"
          :key="index"
          v-if="status == 'pending'"
          type="avatar, list-item-two-line"
          class="mb-sm"
        ></v-skeleton-loader>
      </div>

      <!-- here display all comments && comments.length -->
      <div>
        <div class="all-comments mt-md" v-if="status == 'success' && comments.length">
          <div class="comment mb-sm" v-for="(comment, index) in comments" :key="index">
            <div class="flex gap-x-3 items-start">
              <img loading="lazy" src="../../../assets/images/user.svg" alt="" />
              <div>
                <h4 class="text-2xl font-bold" v-if="comment?.user_name">
                  {{ comment?.user_name }}
                </h4>
                <h4 class="text-2xl font-bold" v-if="comment?.user">
                  {{ comment?.user?.name }}
                </h4>
                <p class="text-sm text-[#12121299] pt-1">
                  {{ reFormat(comment?.created_at) }}
                </p>
              </div>
            </div>

            <p class="text-sm leading-20 text-justify pt-5">
              {{ comment?.love_comment }}
            </p>
          </div>
        </div>

        <div
          class="image flex justify-center mt-md"
          v-if="comments.length == 0 && status == 'error'"
        >
          <img loading="lazy" src="../../../assets/images/no-data.jpg" width="150" alt="" />
        </div>

        <div class="pagination items-center justify-center pb-sm">
          <v-pagination
            v-model="currentPage"
            :length="commentsMeta.last_page"
            @imput="fetchComments"
            :total-visible="5"
          ></v-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { reFormat } from "~/helpers/format-date";
import { useComments } from "../services/comments";
const route = useRoute();

const { comments, status, currentPage, commentsMeta, refresh } = useComments(
  route.params.id
);

const fetchComments = () => {
  refresh();
};

watch(currentPage, (newPage) => {
  fetchComments();
});
</script>
