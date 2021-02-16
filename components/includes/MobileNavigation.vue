<template>
     <div class="mobile-navigation">
      <div class="navigation">
        <nuxt-link to="/overview" class="navigation__link">Overview</nuxt-link>
        <nuxt-link to="/" class="navigation__link"
          >Repositories
          <span class="navigation__details">{{
            user.public_repos
          }}</span></nuxt-link
        >
        <nuxt-link to="/projects" class="navigation__link">Projects</nuxt-link>
        <nuxt-link to="/packages" class="navigation__link">Packages</nuxt-link>
      </div>
   
    </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.getUserObject;
    }
  }
};
</script>