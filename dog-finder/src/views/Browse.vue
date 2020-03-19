<template>
<div>
  
  <div class="checkboxes">
    <p> Browse for Dogs according to Size:  </p>
    <select v-model="selected">
      <option v-for="option in options" :key="option.id">
        {{ option.text }}
      </option>
    </select>
  </div>
  <DogList :dogs="dogss" />
</div>

</template>

<script>
import DogList from "../components/DogList.vue"
export default {
  name: 'Browse',
  components: {
    DogList
  },
  data() {
    return {
      dogsss: [],
      selected: 'Small',
      options: [
      { text: 'Small', value: 'Small' },
      { text: 'Medium', value: 'Medium' },
      { text: 'Large', value: 'Large' }
    ],
      hypoSelect: 'No',
      hypos: [
      { text: 'Yes', value: 'Yes' },
      { text: 'No', value: 'No' },
      ]
    }
  },
  computed: {
    dogss(){
      return this.$root.$data.dogs.filter(dog => dog.size === this.selected);
    },

  },
}
</script>
