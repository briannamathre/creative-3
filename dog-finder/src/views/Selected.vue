<template>
<div class="wrapper">
  <h2> FURRY FRIENDS YOU ARE INTERESTED IN </h2>
  <div class="dogs">
    <div class="dog" v-if="this.$root.$data.cart.length == 0"> You have not selected any doggies </div>
    <div class="dog" v-for="dog in this.$root.$data.cart" :key="dog.id">
      <div class="image">
        <img :src="'/images/doggies/'+dog.image">
      </div>
      <div class="info">
        <h1>{{dog.name}}</h1>
        <p>{{dog.basicInfo}}</p>
      </div>
      <div class = "otherStuff">
        <li> Dog Size: {{dog.size}}</li>
        <li> Hypoallergenic? {{dog.hypoallergenic}}</li>
        <li> Weight: {{dog.weight}}</li>
        <li> Starting Price: {{dog.startingPrice}}</li>
        <button class="auto" v-on:click="remove(dog)"> No Longer Interested</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import DogList from "../components/DogList.vue"
export default {
  name: 'Selected',
  component: {
    DogList
  },
  data() {
    return {
      searchText: '',
    }
  },
  methods: {
    remove(object) {
      for (let index = 0; index < this.$root.$data.cart.length; index++) {
        if (this.$root.$data.cart[index] === object){
          this.$root.$data.cart.splice(index,1);
        }
      }
      return this.$root.$data.cart;
    }
  },
  computed: {
  },
}
</script>

<style scoped>
.dog {
  width: auto;
  display: flex;
  flex-wrap: wrap;
  border: 5px solid #f88379;
  border-style: double;
}

h1 {
  width: 388px;
  text-align: center;
  font-size: 35px;
  margin-left: 1px;
  margin-right: 1px;
  background-color:white;
  border: 1px solid #f88379;
  font-family: 'Amatic SC', cursive;
}
h2 {
  width: 388px;
  text-align: center;
  font-size: 35px;
  margin-left: 1px;
  margin-right: 1px;
  background-color:white;
  border: 1px solid #f88379;
  font-family: 'Amatic SC', cursive;
}
.info{
  width: 50%;
  margin: 4px;
  padding: 4px;
}
.product {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  border: 1px solid #ccc;
}

.dog{
  margin: 10px;
  background-color: #f1f9fd;
}

.dog img {
  height: 280px;
  width: 240px;
  object-fit: cover;
}

.otherStuff{
  width: 20%;
  list-style-type: none;
  display: flex;
  flex-wrap:wrap;
  justify-content: center;

}
.otherStuff li{
  margin: 5px;
  width: auto;
  list-style-type: none;
  justify-content: center;
}

button {
  height: auto;
  width: 140px;
  background:white ;
  color: black;
  border-top: 1px solid #f88379;
  border-left: 1px solid #f88379;
  margin-top:5px;
  font-family: 'Amatic SC', cursive;
  font-size: 20px;
  float:right;
  justify-content: center;
}
.dog .image {
  display: flex;
  justify-content: center;
  margin: 5px;
}

@media only screen and (min-width: 799px) and (max-width: 1200px) {
  h1{
    width: 750px;
    text-align: center;
    font-size: 35px;
    margin-left: 1px;
    margin-right: 1px;
    background-color:white;
    border: 1px solid #f88379;
    font-family: 'Amatic SC', cursive;
  }
  .dog{
    display: flex;
    flex-wrap: wrap;
    width: 760px;
    justify-content: center;
  }
  .info{
    width: 770px;
  }
  .dog img {
    height: 260px;
    width: 220px;
    object-fit: cover;
  }
  .otherStuff{
    width: 770px;
    list-style-type: none;
    display: flex;
    flex-wrap:wrap;
    justify-content: center;

  }
  .otherStuff li{
    margin: 8px;
    padding: 3px;
  }
}

@media only screen and (min-width: 20px) and (max-width: 800px) {
  .wrapper{
    margin:auto;
  }
  h1{
    width: 360px;
    text-align: center;
    font-size: 35px;
    margin-left: 1px;
    margin-right: 1px;
    background-color:white;
    border: 1px solid #f88379;
    font-family: 'Amatic SC', cursive;
  }
  .dog{
    display: flex;
    flex-wrap: wrap;
    width: 400px;
    justify-content: center;
  }
  .info{
    width: 370px;
  }
  .dog img {
    height: 260px;
    width: 220px;
    object-fit: cover;
  }
  .otherStuff{
    width: 370px;
    list-style-type: none;
    display: flex;
    flex-wrap:wrap;
    justify-content: center;

  }
}
</style>
