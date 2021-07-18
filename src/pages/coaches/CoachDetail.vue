<template>
  <div>
    <section>
      <base-card>
        <div class="left-right">
          <div>
            <h2>{{ fullName }}</h2>
            <h3>${{ rate }}/hour</h3>
          </div>
          <div class="right">
            <h3>Display Image</h3>
          </div>
        </div>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button
            link
            :to="contactLink"
            v-if="showButton"
            @click="displayButton"
            >Contact</base-button
          >
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
        <p>{{ description }}</p>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedCoach: null,
      showButton: true,
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + " " + this.selectedCoach.lastName;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    },
    contactLink() {
      return this.$route.path + "/contact";
    },
  },
  created() {
    this.selectedCoach = this.$store.getters["coaches/coaches"].find(
      (coach) => coach.id === this.id
    );
  },
  methods: {
    displayButton() {
      this.showButton = false;
    },
  },
};
</script>

<style scoped>
.left-right {
  display: flex;
}

.right {
  padding-left: 50%;
  justify-content: right;
}
</style>
