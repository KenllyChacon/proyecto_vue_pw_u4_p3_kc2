<template>
  <h1>Buscar</h1>
  <h2>{{id}}</h2>
  <h2>{{id2}}</h2>
  <input v-model="cedula" type="text">
  <button @click="consultarCliente()">Buscar por cedula</button>
</template>

<script>
import {obtenerPorCedulaFachada} from "@/js/api_facturacion/ProcesarCliente";

export default {
  name: "Buscar",
  data() {
    return {
      cedula: null,
      id:null,
      id2: this.$route.params.idCliente
    }
  },
  mounted() {
    console.log('Ento a la pagina buscar')
    console.log(this.$route)
    console.log(this.$route.params)
    const {idCliente} = this.$route.params
    console.log(idCliente)
    this.id = idCliente
  },
  methods: {
    async consultarCliente() {
      const {nombre, apellido, cedula} = await obtenerPorCedulaFachada(this.cedula)
      console.log(nombre)
      console.log(apellido)
      console.log(cedula)
    },
  }
}
</script>

<style scoped>

</style>