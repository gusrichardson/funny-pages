<template>
  <div id="home-page">
    <div class="wrapper">
      <div id="banner"></div>
      <div class="home-text">
        <h2>Welcome to Funny Pages!</h2>
        <br>
        <p>Join us this summer for the first annual “Funny Pages”, a day of workshops, presentations and lots and lots of laughing.</p>
        <br>
        <p>
          <span class="bold">When:</span> Friday, May 8, 2020 from
          9 a.m. to 3:30 p.m.
        </p>
        <br>
        <p>
          <span class="bold">Where:</span> Halifax Central Library
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
#banner {
  height: 400px;
  background-image: url(../assets/strange-animals.jpg);
  /* background-position: 0% 10%; */
  background-size: cover;
  background-repeat: no-repeat;
}

.home-text {
  padding: 30px;
  background: #fffdf8;
  border-radius: 0 0 10px 10px;
}
</style>


