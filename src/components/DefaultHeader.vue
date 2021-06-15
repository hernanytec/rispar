<template>
  <div
    class="bg-white flex items-center q-pa-md"
    :class="{ 'justify-between': $q.screen.lt.md, 'q-mt-md': $q.screen.gt.sm }"
  >
    <img
      alt="Rispar logo"
      src="~assets/logo.png"
      class="logo"
      :class="{ 'logo-small': $q.screen.lt.sm }"
    />

    <span class="gt-sm text-grey-5 text-bold q-px-md">|</span>

    <span class="text-grey-5 text-bold q-mt-xs">TESTE FRONTEND</span>
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
  width: 200px;
  max-width: 50%;
  &-small {
    width: 120px;
  }
}

.hello-text {
  font-weight: bold;
  margin-left: 120px;
}
</style>
