<template>
  <b-container>
    <h1>Modificar Equipo</h1>
    <hr />
    <b-row class="my-3">
      <b-col sm="1">
        <label for="input-id">ID</label>
      </b-col>
      <b-col>
        <b-form-input
          id="input-id"
          v-model="id"
          placeholder="ID"
        ></b-form-input>
      </b-col>
      <b-col sm="1">
        <label for="input-marca">Marca</label>
      </b-col>
      <b-col>
        <b-form-input
          id="input-marca"
          v-model="marca"
          placeholder="Introduzca la marca"
        ></b-form-input>
      </b-col>
    </b-row>
    <b-row class="my-3">
      <b-col sm="1">
        <label for="textarea-description">Descripción:</label>
      </b-col>
      <b-col>
        <b-form-textarea
          v-model="descripcion"
          id="textarea-description"
          placeholder="Introduzca una descripción"
        ></b-form-textarea>
      </b-col>
    </b-row>
    <b-row class="-my-3">
      <b-col sm="1">
        <label for="select-type">Tipo</label>
      </b-col>
      <b-col>
        <b-form-select
          v-model="tipo"
          class="form-control"
          placeholder="Seleccione el tipo de equipo"
        >
          <b-form-select-option value="cama">Cama</b-form-select-option>
          <b-form-select-option value="riel">Riel</b-form-select-option>
          <b-form-select-option value="colchon">Colchón</b-form-select-option>
        </b-form-select>
      </b-col>
      <b-col sm="1">
        <label for="select-estado">Estado</label>
      </b-col>
      <b-col>
        <b-form-select
          v-model="estado"
          class="form-control"
          placeholder="Seleccione el tipo de equipo"
        >
          <b-form-select-option value="active" selected>Activo</b-form-select-option>
          <b-form-select-option value="inactive"
            >No activo</b-form-select-option
          >
        </b-form-select>
      </b-col>
    </b-row>
    <EquipoRegisterCama v-if="tipo === 'cama'" :model="info" />
    <EquipoRegisterRiel v-if="tipo === 'riel'" :model="info" />
    <EquipoRegisterColchon v-if="tipo === 'colchon'" :model="info" />
    <b-row class="my-3">
      <b-col style="text-align: center">
        <b-button @click="save" :disabled="isLoading"
          >Actualizar <b-spinner v-if="isLoading"></b-spinner
        ></b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import EquipoRegisterCama from "@/components/equipo/EquipoRegisterCama.vue";
import EquipoRegisterRiel from "@/components/equipo/EquipoRegisterRiel.vue";
import EquipoRegisterColchon from "@/components/equipo/EquipoRegisterColchon.vue";

import { firebase, db } from "@/firebase";

export default {
  name: "EquipoEdit",
  components: {
    EquipoRegisterCama,
    EquipoRegisterRiel,
    EquipoRegisterColchon,
  },
  data() {
    return {
      isLoading: false,
      id: null,
      marca: null,
      estado: null,
      descripcion: null,
      info: null,
      tipo: null,
    };
  },
  created() {
    const docId = this.$route.params.id;
    db.collection("equipos")
      .doc(docId)
      .onSnapshot((doc) => {
        if(!doc.exists) return;
        const { id, marca, estado, descripcion, tipo, info } = doc.data();
        this.id = id;
        this.marca = marca;
        this.estado = estado;
        this.descripcion = descripcion;
        this.info = info;
        this.tipo = tipo;
      });
  },
  methods: {
    save() {
      const self = this;
      const docId = this.$route.params.id;
      this.isLoading = true;
      const equipo = {
        id: this.id,
        marca: this.marca,
        descripcion: this.descripcion,
        tipo: this.tipo,
        estado: this.estado,
        info: this.info,
        lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
      };
      db.collection("equipos")
        .doc(docId)
        .update(equipo)
        .then(() => {
          self.isLoading = false;
          self.$swal({
            icon: "success",
            title: "Equipo actualizado correctamente",
          });
        })
        .catch(() => {
          self.isLoading = false;
          this.$swal({
            icon: "error",
            title: "No se logró actualizar el equipo",
          });
        });
      if (window.navigator.onLine === false) {
        this.isLoading = false;
        self.$swal({
          icon: "success",
          title: "Equipo actualizado correctamente en la BD local",
          text: "¡Sin conexión!",
        });
      }
    },
  },
};
</script>

<style>
</style>