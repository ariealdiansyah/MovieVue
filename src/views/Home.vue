<template>
  <div class="home">
    <Navbar />
    <div>
      <b-carousel
        id="carousel-1"
        fade
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="500"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          v-for="movie in topRatedMovie.results"
          :key="movie.id"
          :caption="`${movie.title}`"
          :text="`${movie.overview}`"
          :img-src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`"
          class="img-carousel"
          @click="goDetail(movie.id)"
        >
          <router-link
            :to="{ name: 'Movie', params: { id: movie.id } }"
            class="btn-carousel"
          >
            VIEW MORE
          </router-link>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Navbar,
  },
  computed: {
    ...mapState(["topRatedMovie"]),
    ...mapState(["token"]),
  },
  created() {
    const config = {
      headers: { Authorization: `Bearer ${this.token}` },
    };
    axios
      .get("https://api.themoviedb.org/3/movie/top_rated", config)
      .then((res) => {
        this.$store.commit("setTopRated", res.data);
      })
      .catch((err) => {
        console.log(err);
        this.$toast.error(
          "You're Offline, Please Check your internet connection",
          {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          }
        );
      });
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    goDetail(id) {
      this.$router.push({ name: "user", params: { id: id } });
    },
  },
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