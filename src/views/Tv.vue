<template>
  <div class="home">
    <Navbar />
    <div>
      <Banner :topRated="topRatedTv" type="Tv" />
      <div class="container">
        <div class="mt-4">
          <h2>Popular Tv Show</h2>
          <FilmList :film="popularTv" type="Tv"/>
        </div>
        <div class="mt-4">
          <h2>On Air</h2>
          <FilmList :film="onAir" type="Tv" />
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
  name: "Tv",
  components: {
    Navbar,
    FilmList,
    Banner,
  },
  computed: {
    ...mapState(["topRatedTv"]),
    ...mapState(["token"]),
    ...mapState(["popularTv"]),
    ...mapState(["nowPlayingTv"]),
     ...mapState(["onAir"]),
  },
  created() {
    const config = {
      headers: { Authorization: `Bearer ${this.token}` },
    };
    this.$store.dispatch("getTopRated", { config: config, type: "tv" });
    this.$store.dispatch("getPopular", { config: config, type: "tv" });
    this.$store.dispatch("getOnAir", { config: config, type: "tv" });
    // this.$store.dispatch("getUpcoming", { config: config, type: "tv" });
  },
};
</script>

<style>
</style>