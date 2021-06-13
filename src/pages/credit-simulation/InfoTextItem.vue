<template>
  <div class="q-my-sm fontsize-12">({{ index }}) {{ text }}</div>
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
