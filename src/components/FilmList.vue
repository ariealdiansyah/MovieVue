<template>
  <div>
    <div class="d-flex flex-wrap">
      <div
        class="col-md-4 my-2"
        v-for="data in film"
        :key="data.id"
      >
        <router-link :to="{ name: 'Movie', params: { id: data.id } }">
          <img
            class="img-fluid"
            :src="`https://image.tmdb.org/t/p/original/${data.backdrop_path}`"
            width="500"
            height="400"
        /></router-link>
        <span v-if="type == 'Movie'">{{ data.title }}</span> <br />
        <span v-if="type == 'Tv'">{{ data.name }}</span> <br />
        <span><font-awesome-icon icon="star" />{{ data.vote_average }}</span>
        <span> || <lang-flag :iso="data.original_language" /></span>
        <span v-if="type == 'Movie'"> || {{ data.release_date }} </span>
        <span v-if="type == 'Tv'"> || {{ data.first_air_date }} </span>  
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmList",
  props: ["film", "type"],
  data() {
    return {};
  },
};
</script>

<style>
</style>