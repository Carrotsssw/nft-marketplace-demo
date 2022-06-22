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
    class="flex flex-col items-center md:w-96 rounded-2xl border border-indigo-200 p-6"
  >
    <img class="w-6/12 h-full rounded-2xl mr-2" :src="image" />
    <span class="font-medium mt-4">{{ name }}</span>
    <div class="flex justify-between w-full mt-8">
      <div class="flex font-medium text-slate-500">
        Estimated Price<IconQuestion class="fill-indigo-400 w-4 ml-1" />
      </div>
      <div class="font-medium">
        Ξ{{ $filters.currencyfilter(estimatePrice) }}
      </div>
    </div>
    <div class="flex justify-between w-full mt-2">
      <div class="flex font-medium text-slate-500">
        Floor Price<IconQuestion class="fill-indigo-400 w-4 ml-1" />
      </div>
      <div class="font-medium">Ξ{{ $filters.currencyfilter(floorPrice) }}</div>
    </div>
    <div class="flex justify-between w-full text-slate-500 mt-2">
      <div class="flex font-medium">
        Acquisition Price<IconQuestion class="fill-indigo-400 w-4 ml-1" />
      </div>
      <div class="font-medium">
        Ξ{{ $filters.currencyfilter(acquisitionPrice) }}
      </div>
    </div>
    <div class="flex justify-between w-full mt-2">
      <div class="flex font-medium text-slate-500">
        Acquisition Date<IconQuestion class="fill-indigo-400 w-4 ml-1" />
      </div>
      <div class="font-medium">
        {{ $filters.dateDisplay(acquisitionDate) }}
      </div>
    </div>
  </div>
</template>
