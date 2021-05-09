<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Listado de Equipos</h1>
        <hr />
        <router-link to="/registrar"
          ><b-button class="float-right"
            >Registrar Equipo</b-button
          ></router-link
        >
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <table class="table table-responsive my-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Marca</th>
              <th>Tipo</th>
              <th>Estado</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in list" :key="index">
              <td>{{ row.id }}</td>
              <td>{{ row.marca }}</td>
              <td>{{ row.tipo }}</td>
              <td>{{ row.estado }}</td>
              <td>
                <b-button class="m-1" size="sm" pill variant="outline-secondary" @click="editar(row)"
                  ><BIconPencilSquare
                /></b-button>
                <b-button
                  class="m-1"
                  size="sm"
                  pill
                  variant="outline-danger"
                  @click="borrar(row)"
                  ><BIconTrash
                /></b-button>
              </td>
            </tr>
          </tbody>
        </table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { db } from "@/firebase";

export default {
  name: "EquipoList",
  data() {
    return {
      list: []
    };
  },
  created() {
    db.collection("equipos").onSnapshot((querySnapshot) => {
      let list = [];
      querySnapshot.forEach((doc) => {
        const docId = doc.id;
        let model = doc.data();
        model.docId = docId;
        list.push(model);
      });
      this.list = list;
    });
  },
  methods: {
    borrar(doc) {
      const self = this;
      self
        .$swal({
          title: "¿Seguro que desea eliminar este equipo?",
          text: "Esta acción es irreversible",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sí, eliminar!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            db.collection("equipos")
              .doc(doc.docId)
              .delete()
              .then(() => {
                self.$swal(
                  "¡Eliminado!",
                  "Se ha eliminado correctamente",
                  "success"
                );
              })
              .catch((err) => {
                console.log(err);
                self.$swal("¡Error!", "Ha ocurrido un error", "error");
              });
          }
        });
    },
    editar(doc){
      this.$router.push(`/equipo/${doc.docId}`); 
    }
  },
};
</script>

<style scoped>
tr,
td {
  text-align: center;
}
</style>