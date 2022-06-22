<script setup>
import { defineProps } from "vue";
import IconQuestion from "@/components/icons/IconQuestion.vue";

defineProps({
  name: String,
  image: String,
  collectionImage: String,
  estimatePrice: Number,
  floorPrice: Number,
  acquisitionPrice: Number,
  acquisitionDate: Number,
});
</script>

<template>
  <div
    class="border-0 hover:shadow-[0_0px_6px_0px_rgba(0,0,0,0.2)] transition-all cursor-pointer"
  >
    <!-- Desktop -->
    <div class="hidden md:flex h-16 w-full p-4">
      <div class="hidden lg:flex basis-16 items-center">
        <img class="h-full rounded-lg mr-2" :src="collectionImage" />
      </div>
      <div class="flex basis-96 items-center">
        <img class="h-full rounded-lg mr-2" :src="image" />
        <span class="text-sm font-medium">{{ name }}</span>
      </div>
      <div class="flex basis-60 items-center">
        Ξ
        <span class="text-sm font-medium mr-1">{{
          $filters.currencyfilter(estimatePrice)
        }}</span
        ><IconQuestion class="fill-indigo-400 w-4" />
      </div>
      <div class="flex basis-60 items-center">
        Ξ
        <span class="text-sm font-medium mr-1">{{
          $filters.currencyfilter(floorPrice)
        }}</span
        ><IconQuestion class="fill-indigo-400 w-4" />
      </div>
      <div class="flex basis-60 items-center text-slate-500">
        Ξ
        <span class="text-sm font-medium mr-1">{{
          $filters.currencyfilter(acquisitionPrice)
        }}</span>
      </div>
      <div class="flex basis-60 items-center text-slate-500">
        <span class="text-sm font-medium">{{
          $filters.dateDisplay(acquisitionDate)
        }}</span>
      </div>
      <div class="flex grow items-center min-w-fit">
        <div class="border rounded-lg py-1 px-2 h-full ml-auto">
          <img
            class="h-full"
            src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
          />
        </div>
      </div>
    </div>
    <!-- Mobile -->
    <div class="flex md:hidden h-18 w-full p-4">
      <div class="flex w-2/4 items-center h-12">
        <img class="h-full rounded-lg mr-2" :src="image" />
        <span class="text-sm font-medium w-60 truncate card-item-name">{{
          name
        }}</span>
      </div>
      <div class="flex flex-col items-end w-2/4 h-12">
        <span class="text-xs font-bold text-slate-500">Floor Price</span>
        <div class="flex items-center mt-1">
          <img
            class="h-4 mr-2"
            src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
          /><span class="font-bold">{{ floorPrice }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-item-name {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
}
</style>
