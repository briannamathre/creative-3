<template>

<div id="app">
  <div id="menu">
    <div id="side">
      <router-link to="/browse">
        <div class="menu-item browse">
          <img src="/images/dog.png">
          <p>Sizes</p>
        </div>
      </router-link>
      <router-link to="/hypoallergenic">
        <div class="menu-item browse">
          <img src="/images/allergy.png">
          <p>Allergy</p>
        </div>
      </router-link>
      <router-link to="/selected">
        <div class="menu-item">
          <img src="/images/paw.png">
          <p>Selected</p>
        </div>
      </router-link>
    </div>
    <div id="brand">
      <router-link to="/">
        <img src="/images/logo.png">
      </router-link>
    </div>
  </div>
  <router-view />
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      numberOfItems: 0,
    }
  },
  computed: {
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "side brand none";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: left;
  flex-wrap:wrap;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
</style>
