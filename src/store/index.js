import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist';

const vuexLocalStorage = new VuexPersist({
    key: 'MovieList', // The key to store the state on in the storage provider.
    storage: window.localStorage, // or window.sessionStorage or localForage
    // Function that passes the state and returns the state with only the objects you want to store.
    // reducer: state => state,
    // Function that passes a mutation and lets you decide if it should update the state in localStorage.
    // filter: mutation => (true)
})

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTk5MzAxNTkxMjE4MmQxMTdjMmFkZDVjMDg5YmM4OSIsInN1YiI6IjVmZDA1YjYxMWZkMzZmMDAzYjM0NzQ2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3Ik0jOetx7K2BFNY2ZJa1lz2Ej6iaGqFh4cfX5KY8HU',
        popularMovie: [],
        topRatedMovie: [],
        discoverMovie: [],
        movie: {}
    },
    mutations: {
        setPopular(state, payload) {
            state.popularMovie = payload
        },
        setTopRated(state, payload) {
            state.topRatedMovie = payload
        },
        setDiscoverMovie(state, payload) {
            state.discoverMovie = payload
        },
        setMovie(state, payload) {
            state.movie = payload
        }
    },
    actions: {},
    modules: {},
    plugins: [vuexLocalStorage.plugin]
})