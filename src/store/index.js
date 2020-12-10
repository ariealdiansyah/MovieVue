import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist';
import axios from 'axios';

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
        popularTv: [],
        topRatedMovie: [],
        topRatedTv: [],
        discoverMovie: [],
        discoverTv: [],
        nowPlaying: [],
        nowPlayingTv: [],
        upcoming: [],
        upcomingTv: [],
        recommend: [],
        recommendTv: [],
        onAir: [],
        movie: {},
        tv: {}
    },
    mutations: {
        setPopular(state, { payload, type }) {
            if (type == "movie") state.popularMovie = payload
            else if (type == "tv") state.popularTv = payload
        },
        setTopRated(state, { payload, type }) {
            if (type == "movie") state.topRatedMovie = payload
            else if (type == "tv") state.topRatedTv = payload
        },
        setDiscoverMovie(state, { payload, type }) {
            if (type == "movie") state.discoverMovie = payload
            else if (type == "tv") state.discoverTv = payload
        },
        setNowPlaying(state, { payload, type }) {
            if (type == "movie") state.nowPlaying = payload
            else if (type == "tv") state.onAir = payload
        },
        setUpcoming(state, { payload, type }) {
            if (type == "movie") state.upcoming = payload
            else if (type == "tv") state.upcomingTv = payload
        },
        setRecommendation(state, { payload, type }) {
            if (type == "movie") state.recommend = payload
            else if (type == "tv") state.recommendTv = payload
        },
        setMovie(state, payload) {
            state.movie = payload
        },
        setTv(state, payload) {
            state.tv = payload
        }
    },
    actions: {
        getTopRated({ commit }, config) {
            axios.get("https://api.themoviedb.org/3/" + config.type + "/top_rated", config.config).then(res => {
                commit("setTopRated", { payload: res.data.results, type: config.type });
            });
        },
        getPopular({ commit }, config) {
            axios.get("https://api.themoviedb.org/3/" + config.type + "/popular", config.config).then(res => {
                commit("setPopular", { payload: res.data.results, type: config.type });
            });
        },
        getNowPlaying({ commit }, config) {
            axios.get("https://api.themoviedb.org/3/" + config.type + "/now_playing", config.config).then(res => {
                commit("setNowPlaying", { payload: res.data.results, type: config.type });
            });
        },
        getUpcoming({ commit }, config) {
            axios.get("https://api.themoviedb.org/3/" + config.type + "/upcoming", config.config).then(res => {
                commit("setUpcoming", { payload: res.data.results, type: config.type });
            });
        },
        getOnAir({ commit }, config) {
            axios.get("https://api.themoviedb.org/3/" + config.type + "/on_the_air", config.config).then(res => {
                commit("setNowPlaying", { payload: res.data.results, type: config.type });
            });
        }
    },
    modules: {},
    plugins: [vuexLocalStorage.plugin]
})