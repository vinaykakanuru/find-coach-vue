<template>
  <li>
    <div class="left-right">
      <div>
        <h3>{{ fullName }}</h3>
        <h4>Experience - {{ experience }}(Yrs)</h4>
        <h4>${{ rate }}/hour</h4>
      </div>
      <!-- <div class="right">
        <h3>Display Image</h3>
      </div> -->
    </div>
    <div>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
    </div>
    <div class="actions">
      <base-button mode="outline" link :to="coachContactLink"
        >Contact</base-button
      >
      <base-button link :to="coachDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
import BaseBadge from "../ui/BaseBadge.vue";
export default {
  components: { BaseBadge },
  props: ["id", "firstName", "lastName", "rate", "areas", "experience"],
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    coachContactLink() {
      return this.$route.path + "/" + this.id + "/contact";
    },
    coachDetailsLink() {
      return this.$route.path + "/" + this.id;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}

.left-right {
  display: flex;
}

.right {
  padding-left: 40%;
  justify-content: right;
}
</style>
