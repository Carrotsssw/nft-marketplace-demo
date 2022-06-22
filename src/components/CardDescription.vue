<script setup>
import { defineProps } from "vue";
import IconBar from "@/components/icons/IconBar.vue";

defineProps({
  description: String,
  creatorName: String,
});
</script>

<template>
  <div>
    <div class="h-fit md:w-96 rounded-t-2xl border border-indigo-200 py-4 px-6">
      <div class="flex font-bold"><IconBar class="w-3 mr-2" />Description</div>
    </div>
    <div
      class="flex flex-col md:w-96 rounded-b-2xl border border-t-0 border-indigo-200 py-4 px-6 bg-indigo-100"
    >
      <span class="font-medium">By {{ creatorName }}</span>
      <span>{{ description }}</span>
    </div>
  </div>
</template>
