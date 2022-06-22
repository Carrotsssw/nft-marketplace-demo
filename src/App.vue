<script setup>
import { RouterView } from "vue-router";
import Layout from "./Layout.vue";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <NavBar />
  <Layout>
    <RouterView />
  </Layout>
</template>

<style>
@import "@/assets/base.css";

#app {
  height: 100vh;
}
</style>
