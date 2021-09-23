<template>
  <div>
    <div class="formulario">
      <input type="text" placeholder="Filtrar por código" v-model="search" />
    </div>
    <ul v-for="game in filtroCodigo(search)" :key="game.id">
      <li :style="backgroundColor(game)">
        {{ game.codigo }} | {{ game.nombre }} | {{ game.stock }} |
        {{ game.precio }}
      </li>
    </ul>
    <h2 v-if="filtroCodigo(search).length === 0">No se ha encontrado el contenido</h2>
    <p>El stock de juegos es: <strong>{{totalStock}}</strong></p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Busqueda",
  // props: {},
  data: function () {
    return {
      search: "",
    };
  },
  computed: {
    ...mapState(["games"]),
    ...mapGetters(["filtroCodigo", "totalStock"])
  },
  methods: {
    backgroundColor(game) {
      return { "background-color": game.color };
    },
  },
  // watch: {},
  // components: {},

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
};
</script>

<style scoped>
ul {
  margin: 0;
}

.formulario {
  margin-bottom: 10px;
}
</style>