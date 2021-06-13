<template>
  <div class="form-container">
    <q-form class="column">
      <FormItem label="NOME COMPLETO">
        <q-input
          v-model="data.fullname"
          outlined
          dense
          :error="$v.data.fullname.$error"
          error-message="Campo obrigatório"
          @blur="$v.data.fullname.$touch()"
        />
      </FormItem>

      <FormItem label="EMAIL">
        <q-input
          v-model="data.email"
          type="email"
          outlined
          dense
          :error="$v.data.email.$error"
          error-message="Email inválido"
          @blur="$v.data.email.$touch()"
        />
      </FormItem>

      <q-btn
        :disabled="isInvalidForm"
        class="self-end q-mt-lg"
        color="primary"
        label="Próximo"
        @click="onNext"
      />
    </q-form>
  </div>
</template>

<script>
import FormItem from 'components/FormItem.vue';
import { email, required } from 'vuelidate/lib/validators';

export default {
  name: 'Register',

  components: { FormItem },

  props: {
    value: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      data: this.value,
    };
  },

  computed: {
    isInvalidForm() {
      return this.$v.$invalid;
    },
  },

  methods: {
    onNext() {
      this.$emit('next');
    },
  },

  validations: {
    data: {
      fullname: {
        required,
      },
      email: {
        required,
        email,
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.form-container {
  background-color: white;
  padding: 1rem;
  margin-top: 2rem;
}
</style>
