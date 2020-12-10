<template>
  <div>
    <Navbar />
    <div class="movieDetails">
      <b-container>
        <div class="hero">
          <div class="d-none d-md-block">
            <div class="row mt-4 mb-4">
              <div class="col-md-4">
                <img
                  :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
                  height="450px"
                  alt=""
                />
              </div>
              <div class="col-md-8">
                <div class="d-flex">
                  <div class="col-3">
                    <span class="text-details"> Judul </span>
                  </div>
                  <div class="col-1">
                    <span class="text-details">:</span>
                  </div>
                  <div class="col" style="margin-left: -1em">
                    <span class="text-infos">
                      {{ movie.title }}
                    </span>
                  </div>
                </div>
                <div class="d-flex">
                  <div class="col-3">
                    <span class="text-details"> Original Title </span>
                  </div>
                  <div class="col-1">
                    <span class="text-details">:</span>
                  </div>
                  <div class="col" style="margin-left: -1em">
                    <span class="text-infos">
                      {{ movie.original_title }}
                    </span>
                  </div>
                </div>
                <div class="d-flex">
                  <div class="col-3">
                    <span class="text-details"> Genre </span>
                  </div>
                  <div class="col-1">
                    <span class="text-details">:</span>
                  </div>
                  <div class="col" style="margin-left: -1em">
                    <div
                      class="text-genre"
                      v-for="genre in movie.genres"
                      :key="genre.id"
                      style="display: inline-block"
                    >
                      <span style="display: inline">{{ genre.name }}, </span>
                    </div>
                  </div>
                </div>
                <div class="d-flex">
                  <div class="col-3">
                    <span class="text-details"> Rating </span>
                  </div>
                  <div class="col-1">
                    <span class="text-details">:</span>
                  </div>
                  <div class="col" style="margin-left: -1em">
                    <span class="text-infos">
                      {{ movie.vote_average }}
                    </span>
                  </div>
                </div>
                <div class="d-flex">
                  <div class="col-3">
                    <span class="text-details"> Sinopsis </span>
                  </div>
                  <div class="col-1">
                    <span class="text-details">:</span>
                  </div>
                  <div class="col" style="margin-left: -1em">
                    <span class="text-infos">
                      {{ movie.overview }}
                    </span>
                  </div>
                </div>
                <div class="d-flex">
                  <div class="col-3">
                    <span class="text-details"> Bahasa </span>
                  </div>
                  <div class="col-1">
                    <span class="text-details">:</span>
                  </div>
                  <div class="col" style="margin-left: -1em">
                    <div
                      class="text-genre"
                      v-for="lang in movie.spoken_languages"
                      :key="lang.iso_639_1"
                      style="display: inline-block"
                    >
                      <span style="display: inline"
                        ><lang-flag :iso="lang.iso_639_1" />
                        {{ lang.english_name }},
                      </span>
                    </div>
                  </div>
                </div>
                <div class="d-flex">
                  <div class="col-3">
                    <span class="text-details"> Tanggal Terbit </span>
                  </div>
                  <div class="col-1">
                    <span class="text-details">:</span>
                  </div>
                  <div class="col" style="margin-left: -1em">
                    <span class="text-infos">
                      {{ movie.release_date }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="d-sm-block d-md-none">
          <div class="row mt-4 mb-4">
            <div class="col-md-6">
              <img
                :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
                height="450px"
                width="100%"
                alt=""
              />
            </div>
            <div class="col-md-6 mt-4 mb-4">
              <div class="d-flex" style="color: #ffffff">
                <div class="col-3">
                  <span>Title</span>
                </div>
                <div class="col-1">
                  <span>:</span>
                </div>
                <div class="col">
                  <span>{{ movie.title }}</span>
                </div>
              </div>
              <div class="d-flex" style="color: #ffffff">
                <div class="col-3">
                  <span>Original Title</span>
                </div>
                <div class="col-1">
                  <span>:</span>
                </div>
                <div class="col">
                  <span>{{ movie.original_title }}</span>
                </div>
              </div>
              <div class="d-flex" style="color: #ffffff">
                <div class="col-3">
                  <span>Genre</span>
                </div>
                <div class="col-1">
                  <span>:</span>
                </div>
                <div class="col">
                  <div
                    class="text-genre"
                    v-for="genre in movie.genres"
                    :key="genre.id"
                    style="display: inline-block"
                  >
                    <span style="display: inline">{{ genre.name }},</span>
                  </div>
                </div>
              </div>
              <div class="d-flex" style="color: #ffffff">
                <div class="col-3">
                  <span>Rating</span>
                </div>
                <div class="col-1">
                  <span>:</span>
                </div>
                <div class="col">
                  <span>{{ movie.vote_average }}</span>
                </div>
              </div>
              <div class="d-flex" style="color: #ffffff">
                <div class="col-3">
                  <span>Sinopsis</span>
                </div>
                <div class="col-1">
                  <span>:</span>
                </div>
                <div class="col">
                  <span>{{ movie.overview }}</span>
                </div>
              </div>
              <div class="d-flex" style="color: #ffffff">
                <div class="col-3">
                  <span>Genre</span>
                </div>
                <div class="col-1">
                  <span>:</span>
                </div>
                <div class="col">
                  <div
                    class="text-genre"
                    v-for="lang in movie.spoken_languages"
                    :key="lang.iso_639_1"
                    style="display: inline-block"
                  >
                    <span style="display: inline"
                      ><lang-flag :iso="lang.iso_639_1" />
                      {{ lang.english_name }},
                    </span>
                  </div>
                </div>
              </div>
              <div class="d-flex" style="color: #ffffff">
                <div class="col-3">
                  <span>Tanggal Terbit</span>
                </div>
                <div class="col-1">
                  <span>:</span>
                </div>
                <div class="col">
                  <span>{{ movie.release_date }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
import { mapState } from "vuex";
import LangFlag from "vue-lang-code-flags";

export default {
  name: "Movie",
  components: {
    Navbar,
    LangFlag,
  },
  computed: {
    ...mapState(["movie"]),
    ...mapState(["token"]),
  },
  created() {
    const config = {
      headers: { Authorization: `Bearer ${this.token}` },
    };
    axios
      .get("https://api.themoviedb.org/3/movie/" + this.id, config)
      .then((res) => {
        this.$store.commit("setMovie", res.data);
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
      id: this.$route.params.id,
      backgroundImage: "http://picsum.photos/g/1200/400?image=30",
    };
  },
};
</script>

<style>
.movieDetails {
  background-color: grey;
  padding: 7px;
}

.text-details {
  font-size: 1.5em;
  color: white;
}

.text-infos {
  font-size: 1.5em;
  color: #ffffff;
  /* margin-left: -1em; */
}

.text-genre {
  font-size: 1.5em;
  color: #ffffff;
  /* margin-left: -1em; */
  display: inline-block;
}

@media only screen and (max-width: 600px) {
  .text-details {
    font-size: 1em;
    color: white;
  }

  .text-infos {
    font-size: 1em;
    color: #ffffff;
    /* margin-left: -1em; */
  }

  .text-genre {
    font-size: 1em;
    color: #ffffff;
    /* margin-left: -1em; */
    display: inline-block;
  }
}
</style>