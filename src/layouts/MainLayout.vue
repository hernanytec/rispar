<template>
  <q-layout view="hhh lpr lFf" class="bg-grey-2 default-padding">
    <q-header class="bg-transparent default-padding">
      <default-header />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import DefaultHeader from "src/components/DefaultHeader.vue";

export default {
  components: { DefaultHeader },
  name: "MainLayout"
};
</script>

<style lang="scss" scoped>
.default-padding {
  padding: 0 1rem;
}
</style>
