<template>
  <div class="bg-white flex items-center q-pa-md q-mt-md">
    <img alt="Rispar logo" src="~assets/logo.png" class="logo" />

    <q-separator vertical inset spaced="24px" size="2px" />

    <span class="text-grey-6">TESTE FRONTEND</span>
    <span class="text-grey-14 hello-text">
      Olá, solicite seu crédito Rispar =)
    </span>
  </div>
</template>

<script>
export default {
  name: "DefaultHeader"
};
</script>

<style lang="scss" scoped>
.logo {
  height: auto;
  max-width: 220px;
}

.hello-text {
  font-weight: bold;
  margin-left: 120px;
}
</style>
