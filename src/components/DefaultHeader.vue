<template>
  <div
    class="bg-white flex items-center q-pa-md"
    :class="{ 'justify-between': $q.screen.lt.md, 'q-mt-md': $q.screen.gt.sm }"
  >
    <img alt="Rispar logo" src="~assets/logo.png" class="logo" />

    <q-separator class="gt-sm" vertical inset spaced="24px" size="2px" />

    <span class="text-grey-5 text-bold">TESTE FRONTEND</span>
    <span class="gt-sm text-grey-14 hello-text">
      Olá, solicite o seu crédito Rispar =)
    </span>
  </div>
</template>

<script>
export default {
  name: 'DefaultHeader',
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

body.screen--xs {
  .logo {
    height: auto;
    max-width: 150px;
  }
}
</style>
