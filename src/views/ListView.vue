<script setup>
import { useListStore } from "@/stores/list";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

import CardWrapper from "@/components/CardWrapper.vue";
import CardRow from "@/components/CardRow.vue";
import CardRowSkeleton from "@/components/CardRowSkeleton.vue";

const listStore = useListStore();
const router = useRouter();
const headers = [
  {
    title: null,
    class: "basis-16",
  },
  {
    title: "Item",
    class: "basis-96",
  },
  {
    title: "Estimated Price",
    class: "basis-60",
  },
  {
    title: "Floor Price",
    class: "basis-60",
  },
  {
    title: "Acquisition Price",
    class: "basis-60",
  },
  {
    title: "Acquisition Date",
    class: "basis-60",
  },
  {
    title: null,
    class: "basis-10",
  },
];

onMounted(() => {
  listStore.fetchList();
});

function onClickRow({ tokenID }) {
  router.push({ path: `/detail/${tokenID}` });
}
</script>

<template>
  <CardWrapper :headers="headers">
    <template v-if="listStore.listLoading">
      <CardRowSkeleton
        v-for="(_, index) in 4"
        :key="`card-row-skeleton-${index}`"
      />
    </template>
    <template v-else>
      <CardRow
        v-for="(item, index) in listStore.list"
        :key="`card-row-${index}`"
        v-bind="item"
        @click="onClickRow(item)"
    /></template>
  </CardWrapper>
</template>
