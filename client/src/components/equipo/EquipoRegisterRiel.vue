<template>
  <b-row class="my-3" style="text-align: center">
    <b-col>
      <label for="">Incluye: </label>
      <b-form-checkbox v-model="model.correa" value=true unchecked-value=false>
        Correas
      </b-form-checkbox>
      <b-form-checkbox v-model="model.asa" value=true unchecked-value=false>
        Asa
      </b-form-checkbox>
      <b-form-checkbox v-model="model.bolsa" value=true unchecked-value=false>
        Bolsa
      </b-form-checkbox>
    </b-col>
    <b-col>
        <label for="">Son: </label>
        <b-form-checkbox v-model="model.compatibleCama" value=true unchecked-value=false>
        Compatible con camas ajustables
      </b-form-checkbox>
      <b-form-checkbox v-model="model.reversible" value=true unchecked-value=false>
        Reversible
      </b-form-checkbox>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "EquipoRegisterRiel",
  props: {
    model: Object,
  },
};
</script>

<style>
</style>