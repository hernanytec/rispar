<template>
  <div>
    <div class="text-h5">Cadastro</div>
    <div class="text-body2">Informe os seus dados iniciais</div>

    <div class="form-container">
      <q-form class="column">
        <div class="row items-center q-mb-lg">
          <div class="col-4 text-right q-pr-md">NOME COMPLETO</div>
          <q-input v-model="form.name" class="col-8" outlined dense />
        </div>

        <div class="row items-center">
          <div class="col-4 text-right q-pr-md">EMAIL</div>
          <q-input
            v-model="form.email"
            class="col-8"
            type="email"
            outlined
            dense
          />
        </div>

        <q-btn
          class="self-end q-mt-lg"
          color="primary"
          label="Próximo"
          @click="onNext"
        />
      </q-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",

  data() {
    return {
      form: {
        name: "",
        email: ""
      }
    };
  },

  methods: {
    onNext() {
      this.$emit("next");
    }
  }
};
</script>

<style lang="scss" scoped>
.form-container {
  background-color: white;
  padding: 1rem;
  margin-top: 2rem;
}
</style>
