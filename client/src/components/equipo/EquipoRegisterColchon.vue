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
        <label for="input-size">Dimensión</label>
      </b-col>
      <b-col>
        <b-form-input
          v-model="model.size"
          id="input-size"
          placeholder="Introduzca la dimensión"
        ></b-form-input>
      </b-col>
    </b-row>
    <b-row class="my-3">
      <b-col sm="1">
        <label for="input-modelo">Peso</label>
      </b-col>
      <b-col>
        <b-form-input
          type="number"
          v-model="model.peso"
          id="input-peso"
          placeholder="Introduzca el peso"
        ></b-form-input>
      </b-col>
      <b-col sm="1">
        <label for="input-size">Peso Soportado</label>
      </b-col>
      <b-col>
        <b-form-input
          type="number"
          v-model="model.maxPeso"
          id="input-size"
          placeholder="Introduzca el peso máximo soportado"
        ></b-form-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="1">
        <label for="input-modelo">Material de Construcción</label>
      </b-col>
      <b-col>
        <b-form-input
          v-model="model.material"
          id="input-material"
          placeholder="Introduzca el material"
        ></b-form-input>
      </b-col>
    </b-row>
        <b-row class="my-3">
      <b-col sm="1">
        <label for="input-cubierta">Cubierta</label>
      </b-col>
      <b-col>
        <b-form-input
          v-model="model.cubierta"
          id="input-cubierta"
          placeholder="Introduzca la cubierta"
        ></b-form-input>
      </b-col>
      <b-col sm="1">
        <label for="input-size">Número de secciones</label>
      </b-col>
      <b-col>
        <b-form-input
          type="number"
          v-model="model.secciones"
          id="input-size"
          placeholder="Introduzca el número de secciones"
        ></b-form-input>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "EquipoRegisterColchon",
  props: {
    model: Object,
  },
};
</script>

<style>
</style>