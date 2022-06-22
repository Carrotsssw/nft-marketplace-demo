<template>
  <div class="border-0 animate-pulse">
    <!-- Desktop -->
    <div class="hidden md:flex h-16 w-full p-4">
      <div class="flex basis-16 items-center">
        <div class="h-full w-8 rounded-lg bg-gray-300"></div>
      </div>
      <div class="flex basis-96 items-center">
        <div class="h-full w-8 rounded-lg bg-gray-300 mr-2"></div>
        <div class="h-4 w-40 rounded bg-gray-300"></div>
      </div>
      <div class="flex basis-60 items-center">
        <div class="h-4 w-32 rounded bg-gray-300"></div>
      </div>
      <div class="flex basis-60 items-center">
        <div class="h-4 w-32 rounded bg-gray-300"></div>
      </div>
      <div class="flex basis-60 items-center text-slate-500">
        <div class="h-4 w-32 rounded bg-gray-300"></div>
      </div>
      <div class="flex basis-60 items-center text-slate-500">
        <div class="h-4 w-32 rounded bg-gray-300"></div>
      </div>
      <div class="flex grow items-center">
        <div class="h-full w-8 rounded-lg bg-gray-300 ml-auto"></div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="flex md:hidden h-18 w-full p-4">
      <div class="flex w-2/4 items-center h-12">
        <div class="h-full w-12 rounded-lg bg-gray-300 mr-2"></div>
        <div class="h-4 w-20 rounded bg-gray-300"></div>
      </div>
      <div class="flex flex-col items-end w-2/4 h-12">
        <div class="h-4 w-20 rounded bg-gray-300"></div>
        <div class="h-4 w-20 rounded bg-gray-300 mt-1"></div>
      </div>
    </div>
  </div>
</template>
