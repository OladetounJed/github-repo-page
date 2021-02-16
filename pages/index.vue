<template> </template>

<script>
export default {};
</script>

<template>
  <div>
    <AppHeader />
    <DesktopNavigation />
    <div class="main-container">
      <UserProfile />
      <MobileNavigation />
      <div class="repositories">
        <form action="" class="repository__search-form" @submit.prevent="searchUserRepositories()">
          <input type="text" class="repository__search" v-model="searchKey"/>
          <button type="submit" class="repository__search-button">
            Search
          </button>
        </form>

        <div class="repositories__con">
          <div
            class="repository"
            v-for="repository in repositories"
            :key="repository.id"
          >
            <div class="repository__info">
              <p class="repository__name">{{ repository.name }}</p>
              <p class="repository__details">{{ repository.description }}</p>
              <div class="repository__state">
                <span
                  class="repository__language-color"
                  :class="repository.language"
                ></span>
                <span class="repository__stack">{{ repository.language }}</span>
                <span class="repository__updatedAt">Updated 21 Days ago</span>
              </div>
            </div>
            <div class="repository__starred">
              <button class="repository__star">Star</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorMode: true,
      repositories: [],
      searchKey: ""
    };
  },
  mounted() {
    this.getUserProfile();
    this.getUserRepositories();
  },
  // created() {
  //   if (this.$colorMode.preference === "dark") {
  //     this.switchColorMode(true);
  //     this.colorMode = true;
  //   } else {
  //     this.switchColorMode(false);
  //     this.colorMode = false;
  //   }
  //   console.log(this.colorMode)
  //   console.log(this.$colorMode.preference)
  // },
  computed: {
    darkMode() {
      return this.$store.getters.getDarkMode;
    },
    user() {
      return this.$store.getters.getUserObject;
    }
  },
  methods: {
    getUserProfile() {
      this.isWorking = true;
      this.$store
        .dispatch("getUserProfile")
        .then(response => {})
        .catch(error => {
          this.isWorking = false;
        });
    },

    getUserRepositories() {
      this.isWorking = true;
      this.$store
        .dispatch("getUserRepositories")
        .then(response => {
          this.repositories = response;
       
        })
        .catch(error => {
          this.isWorking = false;
        });
    },
     searchUserRepositories() {
    
      this.isWorking = true;
      this.$store
        .dispatch("getUserRepositories")
        .then(response => {
          this.repositories = response;
          console.log(response);
        })
        .catch(error => {
          this.isWorking = false;
        });
    }
  }
};
</script>
