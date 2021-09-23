import { createStore } from 'vuex'

export default createStore({
    state: {
        games: [
            { codigo: "0001", nombre: "Sekiro", stock: "100", precio: "30000", color: "red", destacado: true },
            { codigo: "0002", nombre: "Fifa 21", stock: "100", precio: "25000", color: "blue", destacado: false },
            { codigo: "0003", nombre: "Gear of War 4", stock: "100", precio: "15000", color: "green", destacado: true },
            { codigo: "0004", nombre: "Mario Tennis Aces", stock: "100", precio: "35000", color: "yellow", destacado: false },
            { codigo: "0005", nombre: "Bloodborne", stock: "100", precio: "10000", color: "blue", destacado: false },
            { codigo: "0006", nombre: "Forza Horizon 4", stock: "100", precio: "20000", color: "red", destacado: true },
        ],
        ventas: []
    },
    getters: {
        cantGames: state => {
            return state.games.length;
        },
        filtroCodigo: state => (codigo) => {
            if (codigo != '') {
                return state.games.filter(game => {
                    return game.codigo == codigo
                })
            } else {
                return state.games
            }
        },
        totalStock: state => {
            return state.games.reduce((acumulador, juego) => {
                return acumulador + parseInt(juego.stock)
            }, 0)
        },
        totalVentas: state => {
            return state.ventas.reduce((acumulador, juego) => {
                return acumulador + (parseInt(juego.precio) * parseInt(juego.cantidad))
            }, 0)
        },
        juegosStock: state => {
            return state.games.filter(game => {
                return game.stock > 0
            })
        }
    },
    mutations: {
        procesarVenta: (state, codigo) => {
            state.games.forEach(producto => {
                if (codigo == producto.codigo && producto.stock > 0) {
                    producto.stock = parseInt(producto.stock) - 1
                }
            })
        },
        agregarVenta: (state, ventaNueva) => {
            var existencia = false
            state.ventas.map(venta => {
                if (venta.codigo == ventaNueva.codigo) {
                    //alert('AYURAME' + ventaNueva.codigo)
                    venta.cantidad++
                        venta.total = venta.cantidad * venta.precio
                    existencia = true
                }
            })
            if (existencia == false) {
                state.ventas.push(ventaNueva)
            }
        }
    },
    actions: {
        procesarVenta: ({ commit }, codigo) => {
            commit('procesarVenta', codigo)
        },
        agregarVenta: ({ commit }, producto) => {
            commit('agregarVenta', producto)
        }

    },
    modules: {}
})