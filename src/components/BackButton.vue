<script setup>
import { defineProps } from "vue";
import IconArrowLeft from "@/components/icons/IconArrowLeft.vue";

defineProps({
  description: String,
  creatorName: String,
});
</script>

<template>
  <div
    class="rounded-xl cursor-pointer w-fit p-2 px-3 bg-indigo-400 hover:shadow-[0_0px_6px_0px_rgba(0,0,0,0.2)] transition-all"
  >
    <IconArrowLeft class="w-4 fill-gray-50" />
  </div>
</template>
