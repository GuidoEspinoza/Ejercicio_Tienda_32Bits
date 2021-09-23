<template>
  <div class="home">
    <h1>Tienda 32 Bits</h1>
    <h2>Juegos de PC y Consolas</h2>
    <p>Cantidad de productos: <strong>{{cantGames}}</strong></p>
    <ul v-for="game in games" :key="game.id" >
      <li 
      :style="destacado(game)">
        {{ game.codigo }} | {{ game.nombre }} | {{ game.stock }} | {{ game.precio }} | <BtnVender />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import BtnVender from '../components/BtnVender.vue'

export default {
  name: 'Home',
  // props: {},
  data: function(){
    return {}
  },
  computed: {
    ...mapState(["games"]),
    ...mapGetters(['cantGames'])
  },
  methods: {
    destacado(game){
        return game.destacado == true ? {'font-weight': 'bold'} : {'font-weight': 'normal'}
    },

  },
  // watch: {},
  components: {
    BtnVender
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
