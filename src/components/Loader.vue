<template>
  <div class="loader-container">
    <img src="~assets/loader.gif" alt="loading animation" />
    <div class="fontsize-10">{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: 'Loader',

  props: {
    label: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.loader-container {
  display: flex;
  flex-direction: column;

  img {
    margin: 0 auto;
    width: 50px;
    padding: 1rem 0;
  }
}
</style>