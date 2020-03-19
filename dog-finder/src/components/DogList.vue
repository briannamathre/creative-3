<template>
<div class="wrapper">
  <div class="dogs">
    <div class="dog" v-for="dog in dogs" :key="dog.id">
      <div class="title">
        <h1>{{dog.name}}</h1>
      </div>
      <div class ="bar">
        <div class="image">
          <img :src="'/images/doggies/'+dog.image">
        </div>
        <div class="info">
          <p>{{dog.basicInfo}}</p>
        </div>
      </div>
      <div class = "otherStuff">

        <li> Dog Size: {{dog.size}}</li>
        <li> Hypoallergenic? {{dog.hypoallergenic}}</li>
        <li> Weight: {{dog.weight}}</li>
        <li> Starting Price: {{dog.startingPrice}}</li>
        <button class="auto" v-on:click="addToCart(dog)">click if interested</button>

      </div>
  </div>

</div>
</div>
</template>

<script>

export default {
  name: 'DogList',
  props: {
    dogs: Array
  },
  data() {
    return {
      items: 0,
    }
  },
  computed: {
  },
  methods: {
    addToCart(dog){
      for (let index = 0; index < this.$root.$data.cart.length; index++) {
        if (this.$root.$data.cart[index] === dog){
          return this.$root.$data.cart
        }
      }
      return this.$root.$data.cart.push(dog);
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.thing{
  display: flex;
  justify-content: center;
}
.dogs {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.dog {
  margin: 8px;
  margin-top: 50px;
  width: 400px;
  border: 5px solid #f88379;
  border-style: double;
  background-color: #f1f9fd;
}
.otherStuff{
  width: 390px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}
.otherStuff li{
  width: 180px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin: 2px;
  padding: 2px;
  justify-content: space-around;
}
.dog img {
  border: 2px solid #333;
  height: 200px;
  width: 160px;
  object-fit: cover;
}

.dog .image {
  display: flex;
  justify-content: left;
  flex-wrap:wrap;
  margin-bottom: 5px;
}

.info{
  width: 210px;
  margin-left: 5px;
}

.bar{
  display: flex;
  flex-wrap:wrap;
  background-color: #f1f9fd;
  margin: 3px;
}


.title h1 {
  width: 388px;
  text-align: center;
  font-size: 35px;
  margin-left: 1px;
  margin-right: 1px;
  background-color:white;
  border-top: 1px solid #f88379;
  border-bottom: 1px solid #f88379;
  font-family: 'Amatic SC', cursive;
}

.title h2 {
  font-size: 14px;
}

.title{
  display: flex;
  justify-content: center;
}


.price {
  display: flex;
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

.auto {
  margin-left: auto;
}
</style>
