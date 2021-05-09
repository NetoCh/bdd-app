<template>
  <b-container>
    <h1>Registrar Equipo</h1>
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
          <b-form-select-option value="cama" selected
            >Cama</b-form-select-option
          >
          <b-form-select-option value="active">Activo</b-form-select-option>
          <b-form-select-option value="inactive"
            >No activo</b-form-select-option
          >
        </b-form-select>
      </b-col>
    </b-row>
    <EquipoRegisterCama v-if="tipo === 'cama'" :model="cama" />
    <EquipoRegisterRiel v-if="tipo === 'riel'" :model="riel" />
    <EquipoRegisterColchon v-if="tipo === 'colchon'" :model="colchon" />
    <b-row class="my-3">
      <b-col style="text-align: center">
        <b-button @click="save" :disabled="isLoading"
          >Registrar <b-spinner v-if="isLoading"></b-spinner
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
  name: "RegistrarEquipo",
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
      descripcion: null,
      estado: "active",
      tipo: "cama",
      cama: {
        accionamiento: "manual",
        cantRueda: 0,
        size: null,
        modelo: null,
      },
      riel: {
        correa: false,
        asa: false,
        bolsa: false,
        compatibleCama: false,
        reversible: false,
      },
      colchon: {
        modelo: null,
        dimension: null,
        peso: 0,
        maxPeso: 0,
        cubierta: null,
        material: null,
        scciones: 0,
      },
    };
  },
  methods: {
    save() {
      const self = this;
      this.isLoading = true;
      const info = this[this.tipo];
      const equipo = {
        id: this.id,
        marca: this.marca,
        descripcion: this.descripcion,
        tipo: this.tipo,
        estado: this.estado,
        info,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
      };
      db.collection("equipos")
        .doc()
        .set(equipo)
        .then(() => {
          self.isLoading = false;
          self.$swal({
            icon: "success",
            title: "Equipo registrado correctamente",
          });
          self.id = null;
          self.marca = null;
          self.descripcion = null;
          self.estado = "active";
          self.tipo = "cama";
          self.cama = {
            accionamiento: "manual",
            cantRueda: 0,
            size: null,
            modelo: null,
          };
          self.riel = {
            correa: false,
            asa: false,
            bolsa: false,
            compatibleCama: false,
            reversible: false,
          };
          self.colchon = {
            modelo: null,
            dimension: null,
            peso: 0,
            maxPeso: 0,
            cubierta: null,
            material: null,
            scciones: 0,
          };
        })
        .catch(() => {
          self.isLoading = false;
          this.$swal({
            icon: "error",
            title: "No se logró registrar el equipo",
          });
        });
      if (window.navigator.onLine === false) {
        this.isLoading = false;
        self.$swal({
          icon: "success",
          title: "Equipo registrado correctamente en la BD local",
          text: "¡Sin conexión!",
        });
      }
    },
  },
};
</script>

<style>
</style>