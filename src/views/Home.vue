<template>
  <div class="home">
    <Navbar />
    <div>
      <Banner :topRated="topRatedMovie" type="Movie" />
      <div class="container">
        <div class="mt-4">
          <h2>Popular Movie</h2>
          <FilmList :film="popularMovie" type="Movie" />
        </div>
        <div class="mt-4">
          <h2>Now Playing Movie</h2>
          <FilmList :film="nowPlaying" type="Movie" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import FilmList from "@/components/FilmList.vue";
import Banner from "@/components/Carousel.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Navbar,
    FilmList,
    Banner
  },
  computed: {
    ...mapState(["topRatedMovie"]),
    ...mapState(["token"]),
    ...mapState(["popularMovie"]),
    ...mapState(["nowPlaying"]),
  },
  created() {
    const config = {
      headers: { Authorization: `Bearer ${this.token}` },
    };
    this.$store.dispatch("getTopRated", {config : config, type : 'movie'});
    this.$store.dispatch("getPopular", {config : config, type : 'movie'});
    this.$store.dispatch("getNowPlaying", {config : config, type : 'movie'});
    this.$store.dispatch("getUpcoming", {config : config, type : 'movie'});
  },
  // data() {
  //   return {
  //     slide: 0,
  //     sliding: null,
  //   };
  // },
  // methods: {
  //   onSlideStart() {
  //     this.sliding = true;
  //   },
  //   onSlideEnd() {
  //     this.sliding = false;
  //   },
  //   goDetail(id) {
  //     this.$router.push({ name: "user", params: { id: id } });
  //   },
  // },
};
</script>

<style>
.img-carousel {
  height: 550px;
}

.btn-carousel {
  color: #ffffff;
}

@media only screen and (max-width: 600px) {
  .img-carousel {
    height: 100%;
    font-size: 8px;
  }
  .img-fluid {
    max-width: 100%;
    height: 300px;
  }
  .carousel-caption {
    position: absolute;
    right: 15%;
    bottom: 20px;
    left: 15%;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    text-align: center;
  }

  .carousel-caption h3 {
    font-size: 3em;
  }
}
</style>