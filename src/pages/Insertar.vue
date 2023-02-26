<template>
  <h1>Insertar</h1>
  <input v-model="id" type="text">
  <button @click="insertar()">Insertar</button>
</template>

<script>
import {insertarFachada} from "@/js/api_facturacion/ProcesarCliente";

export default {
  name: "Insertar",
  data(){
    return {
      id: null
    }
  },
  mounted() {
    console.log('Ento a la pagina insertar')
    console.log(this.$route)
    console.log(this.$route.query)
    console.log(this.$route.query.ciudad)
    console.log(this.$route.query.edad)
    const {ciudad,edad} = this.$route.query
    console.log('Nuevas impresiones')
    console.log(ciudad)
    console.log(edad)
  },
  methods:{
    insertar(){
      const miCliente = {
        nombre:"Kenlly",
        apellido:"Chacon",
        genero:"M"
      }
      insertarFachada(miCliente);
    }
  }
}
</script>

<style scoped>

</style>