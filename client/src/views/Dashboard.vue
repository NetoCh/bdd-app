<template>
  <div class="container">
        <b-row>
      <b-col>
        <h1>Estado de Equipos</h1>
        <hr />
      </b-col>
    </b-row>
    <div class="row">
      <div class="col-sm-6 my-3">
        <vc-donut 
        :sections="equiposTypeChart" 
        has-legend legend-placement="top"
          >Tipos de Equipo</vc-donut
        >
      </div>
      <div class="col-sm-6 my-3">
        <vc-donut 
        :sections="status.cama" 
        has-legend legend-placement="top"
          >Estados de Camas</vc-donut
        >
      </div>
      <div class="col-sm-6 my-3">
        <vc-donut 
        :sections="status.colchon" 
        has-legend legend-placement="top"
          >Estados de Colchones</vc-donut
        >
      </div>
      <div class="col-sm-6 my-3">
        <vc-donut 
        :sections="status.riel" 
        has-legend legend-placement="top"
          >Estados de Rieles</vc-donut
        >
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase";

export default {
  name: "dashboard",
  data() {
    return {
      list: [],
      equiposType: null,
      equiposTypeChart: [
        { label: "Red section", value: 25, color: "red" },
        { label: "Green section", value: 25, color: "green" },
        { label: "Blue section", value: 25, color: "blue" },
      ],
      status: [
        { label: "Red section", value: 25, color: "red" },
        { label: "Green section", value: 25, color: "green" },
        { label: "Blue section", value: 25, color: "blue" },
      ],
    }
  },
  created() {
    const self = this;
    db.collection("equipos").onSnapshot((querySnapshot) => {
      let list = [];
      if(querySnapshot.empty) return;
      querySnapshot.forEach((doc) => {
        const docId = doc.id;
        let model = doc.data();
        model.docId = docId;
        list.push(model);
      });
      this.equiposType = self.groupBy(list, "tipo");
      this.list = list;
    });
  },
  watch:{
    equiposType(val){
      let equiposTypeChart = [];
      let status = [];
      for(let i in val){
        const groupBy = this.groupBy(val[i], "estado");
        status[i] = [
          { label: "activos", value: groupBy.active && groupBy.active.length ? parseInt(groupBy.active.length/val[i].length*100) : 0},
          { label: "inactivos", value: groupBy.inactive && groupBy.inactive.length ? parseInt(groupBy.inactive.length/val[i].length*100) : 0},
        ]
        equiposTypeChart.push({
          label: i,
          value: parseInt(val[i].length/this.list.length*100)
        });
      }
      this.status = status;
      this.equiposTypeChart = equiposTypeChart;
    }
  },
  methods: {
    groupBy(array, key) {
      return array.reduce((r, a) => {
        r[a[key]] = [...(r[a[key]] || []), a];
        return r;
      }, {});
    },
  },
};
</script>
