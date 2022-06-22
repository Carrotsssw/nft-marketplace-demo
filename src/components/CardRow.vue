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
  <!-- TODO: responsive -->
  <div
    class="flex h-16 p-4 border-0 hover:shadow-[0_0px_6px_0px_rgba(0,0,0,0.2)] transition-all cursor-pointer"
  >
    <div class="flex basis-16 items-center">
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
    <div class="flex grow items-center">
      <div class="border rounded-lg py-1 px-2 h-full ml-auto">
        <img
          class="h-full"
          src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
        />
      </div>
    </div>
  </div>
</template>
