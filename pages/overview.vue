<template> </template>

<script>
export default {};
</script>

<template>
  <div>
    <AppHeader />
    <div class="navigation-con">
      <div class="empty-state"></div>
      <div class="navigation">
        <nuxt-link to="/overview" class="navigation__link">Overview</nuxt-link>
        <nuxt-link to="/" class="navigation__link">Repositories <span class="navigation__details">{{user.public_repos}}</span></nuxt-link>
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
    <div class="main-container">
          <UserProfile />
           <MobileNavigation/>
  
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorMode: true,
    
    };
  },
  
  computed: {
    darkMode() {
      return this.$store.getters.getDarkMode;
    },
     user() {
      return this.$store.getters.getUserObject;
    }
  },
};
</script>
