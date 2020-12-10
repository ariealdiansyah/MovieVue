<template>
   <div>
    <!-- <div class="container"> -->
      <b-navbar toggleable="lg" type="dark" variant="dark">
          <b-icon icon="film" variant="light"></b-icon>
        <b-navbar-brand href="#">Cinema 21</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Movies</b-nav-item>
            <b-nav-item to="/tv">TV</b-nav-item>
            <b-nav-item to="/food">Artist</b-nav-item>
          </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Find Movie</b-button>
        </b-nav-form>
            </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
 name: "Navbar",
}
</script>

<style>

</style>