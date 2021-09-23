<template>
  <div class="home">
    <h1>Ventas</h1>
    <p>Cantidad de productos: <strong>{{cantGames}}</strong></p>
    <ul v-for="game in juegosStock" :key="game.codigo" >
      <li>
        Código: {{ game.codigo }} | Nombre: {{ game.nombre }} | Stock: {{ game.stock }} | Precio: {{ game.precio }} | <button @click="vender(game)">Vender</button>
      </li>
    </ul>
    <h3>Registro de ventas</h3>
    <ul>
        <li v-for="venta in ventas" :key="venta.codigo">
            Cantidad: {{venta.cantidad}} | Código: {{ venta.codigo }} | Nombre: {{ venta.nombre }} | Precio: {{ venta.precio }}
        </li>
    </ul>
    <h1>Total compra: {{totalVentas}}</h1>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";


export default {
  name: 'lista-ventas',
  // props: {},
  data: function(){
    return {}
  },
  computed: {
    ...mapState(["ventas"]),
    ...mapGetters(['juegosStock', 'totalVentas']),
  },
  methods: {
    // destacado(game){
    //     return game.destacado == true ? {'font-weight': 'bold'} : {'font-weight': 'normal'}
    // },
    ...mapActions(['procesarVenta', 'agregarVenta']),
    vender(game) {
        let venta_game = {
            codigo: game.codigo,
            nombre: game.nombre,
            cantidad: 1,
            precio: game.precio,
            total: game.precio
        }
        this.procesarVenta(game.codigo),
        this.agregarVenta(venta_game)
    }
  },
  // watch: {},
  components: {
    
  },

  // -- Lifecycle Methods
  // beforeCreate() {},
  // created() {},
  // beforeMount() {},
  // mounted() {},
  // beforeUpdate() {},
  // updated() {},
  // beforeDestroy() {},
  // destroyed() {},
  // -- End Lifecycle Methods
}
</script>

<style scoped>
  .home {
    width: 50%;
    margin: 0 auto;
}

h1, h2 {
    text-align: center;
}

ul {
    margin: 0;
}
</style>
