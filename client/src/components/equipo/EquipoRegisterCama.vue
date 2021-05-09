<template>
  <div>
    <b-row class="my-3">
      <b-col sm="1">
        <label for="input-modelo">Modelo</label>
      </b-col>
      <b-col>
        <b-form-input
            v-model="model.modelo"
          id="input-modelo"
          placeholder="Introduzca el modelo"
        ></b-form-input>
      </b-col>
      <b-col sm="1">
        <label for="input-size">Tamaño</label>
      </b-col>
      <b-col>
        <b-form-input
        v-model="model.size"
          id="input-size"
          placeholder="Introduzca la tamaño"
        ></b-form-input>
      </b-col>
    </b-row>
    <b-row class="my-3">
      <b-col sm="1">
        <label for="input-accionaminento">Accionamiento</label>
      </b-col>
      <b-col>
        <b-form-select
          v-model="model.accionamiento"
          class="form-control"
          placeholder="Seleccione el tipo de equipo"
        >
          <b-form-select-option value="manual"
            >Manual</b-form-select-option
          >
          <b-form-select-option value="electrico"
            >Eléctrico</b-form-select-option
          >
          <b-form-select-option value="colchon">Colchon</b-form-select-option>
        </b-form-select>
      </b-col>
      <b-col sm="1">
        <label for="input-cantRuedas">Cant. Ruedas</label>
      </b-col>
      <b-col>
        <b-form-input type="number"
        v-model="model.cantRueda"
          id="input-cantRuedas"
          placeholder="Introduzca la cantidad de ruedas"
        ></b-form-input>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "EquipoRegisterCama",
  props: {
    model: Object,
  },
};
</script>

<style>
</style>