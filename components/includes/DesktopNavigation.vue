<template>
  <div class="navigation-con">
    <div class="empty-state"></div>
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
    <label class="switch">
      <input
        type="checkbox"
        v-model="colorMode"
        @click="switchColorMode(colorMode)"
      />
      <span class="slider round"></span>
    </label>
  </div>
</template>

<script>
export default {
  data(){
    return {
      colorMode: false,
    }
  },
  computed: {
     darkMode() {
      return this.$store.getters.getDarkMode;
    },
    user() {
      return this.$store.getters.getUserObject;
    }
  },
  methods: {
    switchColorMode(value) {
   
      this.$store.commit("switchColorMode", value);

      if (this.colorMode === true) {
        this.$colorMode.preference = "dark";
      } else {
        this.$colorMode.preference = "light";
      }
    }
  }
};
</script>
