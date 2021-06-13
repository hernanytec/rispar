<template>
  <div class="q-mb-lg fontsize-12">({{ index }}) {{ text }}</div>
</template>

<script>
export default {
  name: 'InfoTextItem',

  props: {
    index: {
      type: Number,
      default: 0,
    },
    text: {
      type: String,
      default: '',
    },
  },
};
</script>
