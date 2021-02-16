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
      
    </div>
  </div>
</template>

<script>
export default {

 
  computed: {
   
    user() {
      return this.$store.getters.getUserObject;
    }
  },
 
};
</script>
