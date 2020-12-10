<template>
  <div>
    <div v-if="type == 'Movie'">
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
          v-for="data in topRated"
          :key="data.id"
          :caption="`${data.title}`"
          :text="`${data.overview}`"
          :img-src="`https://image.tmdb.org/t/p/original/${data.backdrop_path}`"
          class="img-carousel"
          @click="goDetail(data.id)"
        >
          <router-link
            :to="{ name: type, params: { id: data.id } }"
            class="btn-carousel"
          >
            VIEW MORE
          </router-link>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <div v-if="type == 'Tv'">
      <b-carousel
        id="carousel-2"
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
          v-for="data in topRated"
          :key="data.id"
          :caption="`${data.name}`"
          :text="`${data.overview}`"
          :img-src="`https://image.tmdb.org/t/p/original/${data.poster_path}`"
          class="img-carousel"
          @click="goDetail(data.id)"
        >
          <router-link
            :to="{ name: type, params: { id: data.id } }"
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
export default {
  name: "Banner",
  props: ["topRated", "type"],
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
      this.$router.push({ name: this.type, params: { id: id } });
    },
  },
};
</script>

<style>
</style>