<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="text" />
    <button @click="guardar">guardar</button>
    <ul>
      <li v-for="(row, index) in list" :key="index">{{row.nombre}}</li>
    </ul>
  </div>
</template>

<script>
import { db } from "@/firebase";

export default {
  name: "HelloWorld",
  data() {
    return {
      text: null,
      list: null
    };
  },
  props: {
    msg: String,
  },
  created() {
    db.collection("usuarios")
    .onSnapshot((querySnapshot) => {
        let list = [];
        querySnapshot.forEach((doc) => {
            list.push(doc.data());
        });
      this.list = list;
    });
  },
  methods: {
    guardar() {
      const nombre = this.text;
      db.collection("usuarios")
        .doc()
        .set({
          nombre
        })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
