<template>
  <div id="home-page">
    <div class="wrapper">
      <div id="banner"></div>
      <h2>
        Welcome to the first annual “Funny Pages”, a day of workshops, presentations and lots
        and lots of laughing.
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
h1 {
  color: black;
}
#banner {
  height: 400px;
  background-image: url(../assets/strange-animals.jpg);
  /* background-position: 0% 10%; */
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 30px;
}
</style>


