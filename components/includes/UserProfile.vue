<template>
  <div class="profile">
    <div class="profile__summary">
      <div class="profile__picture">
        <img src="@/assets/images/profile.jpg" alt="" class="profile__image" />
      </div>
      <div class="profile__info">
        <h1 class="profile__name">{{ user.name }}</h1>
        <h3 class="profile__username">{{ user.login }}</h3>
      </div>
    </div>
    <p class="profile__details">
      {{ user.bio }}
    </p>
    <button class="profile__edit">Edit profile</button>
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
