<template>
<div>
  <div class="checkboxes">
    <p> Hypoallergenic Options: </p>
    <select v-model="hypoSelect">
      <option v-for="hypo in hypos" :key="hypo.value">
        {{ hypo.text }}
      </option>
    </select>
  </div>
  <DogList :dogs="dogss" />
</div>

</template>

<script>
import DogList from "../components/DogList.vue"
export default {
  name: 'Hypoallergenic',
  components: {
    DogList
  },
  data() {
    return {
      dogsss: [],
      hypoSelect: 'Yes',
      hypos: [
      { text: 'Yes', value: 'Yes' },
      { text: 'No', value: 'No' },
      ]
    }
  },
  computed: {
    dogss(){
      return this.$root.$data.dogs.filter(dog => dog.hypoallergenic === this.hypoSelect);
    },

  },
}
</script>
