<template>
  <div class="contenedor">
    <h1>Búsqueda</h1>
    <ListaBusqueda />
  </div>
</template>

<script>
import ListaBusqueda from '../components/ListaBusqueda.vue'

export default {
  name: "Busqueda",
  // props: {},
  data: function () {
    return {};
  },
  //   computed: {},
  //   methods: {},
  // watch: {},
  components: {
      ListaBusqueda
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
};
</script>

<style scoped>
.contenedor {
    width: 50%;
    margin: 0 auto;
}

h1 {
    text-align: center;
}

</style>