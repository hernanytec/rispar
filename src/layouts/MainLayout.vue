<template>
  <q-layout
    view="hhh lpr lFf"
    class="layout"
    :class="{ 'default-padding': $q.screen.gt.sm }"
  >
    <q-header
      class="bg-transparent"
      :class="{ 'default-padding': $q.screen.gt.sm }"
    >
      <default-header />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import DefaultHeader from 'src/components/DefaultHeader.vue';

export default {
  components: { DefaultHeader },
  name: 'MainLayout',
};
</script>

<style lang="scss" scoped>
.default-padding {
  padding: 0 1rem;
}

body.screen--xl {
  .default-padding {
    padding: 0 5rem;
  }
}

.layout {
  background-color: $bg-base-color;
  overflow-y: scroll;
}
</style>
