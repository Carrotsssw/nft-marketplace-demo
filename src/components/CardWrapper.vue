<script setup>
defineProps({
  headers: Array,
});
</script>

<template>
  <div class="overflow-hidden border-b">
    <div class="flex h-16 p-4 border-0 border-b">
      <div
        class="flex items-center"
        :class="item.class ? item.class : 'grow'"
        v-for="(item, index) in headers"
        :key="`header-${index}`"
      >
        <span class="text-sm font-bold">{{ item.title }}</span>
      </div>
    </div>
    <slot />
  </div>
</template>
