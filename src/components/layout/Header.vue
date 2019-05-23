<template>
  <div id="header">
    <div class="wrapper">
      <div class="title-container">
        <h1>Funny pages</h1>
        <h3>Celebrating books that make kids laugh</h3>
      </div>
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/authors">Authors</router-link>
        <router-link to="/teachers">Teachers</router-link>
        <router-link to="/partners">Partners</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>
<style>
#header {
  height: 190px;
  /* border: 10px solid cornflowerblue; */
  display: flex;
}

.title-container {
  /* width: 300px; */
  height: 140px;
  padding-top: 50px;
  /* border: 2px solid pink; */
}

#nav {
  /* border: 2px solid green; */
  position: relative;
  height: 60px;
}

#nav a {
  width: 200px;
  display: inline-block;
  /* border: 1px solid red; */
  text-align: center;
  height: 50px;
  padding-top: 18px;
  background: #ffeecc;
}

#nav a:hover {
  background: #ffdd9a;
  letter-spacing: 2px;
  /* background: #fff; */
}

#nav a:nth-child(1) {
  border-radius: 10px 0 0 0;
}
#nav a:nth-child(5) {
  border-radius: 0 10px 0 0;
}
</style>


