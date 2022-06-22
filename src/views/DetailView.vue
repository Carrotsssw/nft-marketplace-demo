<script setup>
import { onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useListStore } from "@/stores/list";

import CardGallery from "@/components/CardGallery.vue";
import CardDescription from "@/components/CardDescription.vue";
import BackButton from "@/components/BackButton.vue";
import IconLoading from "@/components/icons/IconLoading.vue";

const route = useRoute();
const router = useRouter();
const listStore = useListStore();

onBeforeMount(async () => {
  if (!route.params.tokenID) {
    onClickBack();
  }

  listStore.fetchDetail(route.params.tokenID);
});

function onClickBack() {
  router.push("/");
}
</script>

<template>
  <IconLoading
    v-if="listStore.detailLoading"
    class="mx-auto mt-32 w-8 fill-indigo-400 animate-[spin_1s_ease-in-out_infinite]"
  />
  <div v-else-if="!listStore.detail">
    <div class="flex items-center justify-center mt-4">
      <BackButton @click="onClickBack" />
      <div class="w-fit text-lg font-bold ml-2">
        Oops! we can't find the item you were looking for.
      </div>
    </div>
  </div>
  <div v-else class="md:flex justify-center">
    <BackButton class="md:hidden mb-4" @click="onClickBack" />
    <CardGallery class="md:mr-4" v-bind="listStore.detail" />
    <div class="pb-6">
      <BackButton class="hidden md:flex" @click="onClickBack" />
      <CardDescription class="mt-4 md:mt-2" v-bind="listStore.detail" />
    </div>
  </div>
</template>
