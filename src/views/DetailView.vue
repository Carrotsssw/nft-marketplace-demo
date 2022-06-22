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

onBeforeMount(() => {
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
  <div v-else class="flex justify-center">
    <CardGallery class="mr-4" v-bind="listStore.detail" />
    <div>
      <BackButton @click="onClickBack" />
      <CardDescription class="mt-2" v-bind="listStore.detail" />
    </div>
  </div>
</template>
