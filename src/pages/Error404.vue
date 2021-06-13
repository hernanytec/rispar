<template>
  <div
    class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center"
  >
    <div class="column items-center">
      <div style="font-size: 30vh">404</div>

      <img src="~assets/pocoyo.png" width="300px" />

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Volta mininu"
        no-caps
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404',
};
</script>
