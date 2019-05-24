<template>
  <div id="teachers-section">
    <div class="wrapper">
      <div id="teachers-banner"></div>
      <div class="teachers-text">
        <h2>Teachers</h2>
        <p>Interested in having your class attend our workshops and presentations? Funny Pages is open to all students between Grades Four and Twelve but because of space limitations, admission is on a first-come, first-serve basis.</p>
        <br>
        <p>Each school can bring up to thirty students and must have one supervising adult per ten children.</p>
        <br>
        <p>Please contact for more information.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Teachers"
};
</script>

<style scoped>
.teachers-text {
  background: #fffdf8;
  padding: 30px;
  border-radius: 0 0 10px 10px;
}
#teachers-banner {
  height: 400px;
  background-image: url("../assets/kids-laughing.jpg");
  background-size: cover;
  background-position: 0 20%;
}
</style>


