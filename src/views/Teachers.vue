<template>
  <div id="teachers-section">
    <div class="wrapper">
      <div id="teachers-banner"></div>
      <div class="teachers-text">
        <h2>Teachers</h2>
        <br>
        <p>Interested in having your class attend our workshops and presentations? Funny Pages is open to all students between Grades Four and Twelve but because of space limitations, admission is on a first-come, first-serve basis.</p>
        <div class="teachers-flex">
          <div class="text-container">
            <p>Each school can bring up to thirty students and must have one supervising adult per ten children.</p>
            <br>
            <p>Please contact for more information.</p>
          </div>
          <div class="gallery-container">
            <div class="img-container one">
              <img src="../assets/ellie-and-jeannie.jpg" alt="two young women laughing">
            </div>
            <div class="img-container two">
              <img src="../assets/kids-reading.jpg" alt="kids reading">
            </div>
            <div class="img-container three">
              <img src="../assets/classroom.jpg" alt="a classroom of kids laughing">
            </div>
          </div>
        </div>
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
.teachers-flex {
  display: flex;
  margin-top: 10px;
  /* border: 1px solid red; */
}
.text-container {
  width: 500px;
  padding-right: 20px;
}
.gallery-container {
  width: 500px;
  height: 400px;
  /* border: 1px solid red; */
  display: grid;
  grid-template-rows: 190px 190px;
  grid-template-columns: 280px 210px;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}

.one {
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 1;
  /* border: 1px solid blue; */
  overflow: hidden;
}
.one img {
  max-width: 100%;
  display: block;
}

.two {
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 2;
  grid-row-end: 2;
  overflow: hidden;
}
.two img {
  max-width: 100%;
  display: block;
}

.three {
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
}

.three img {
  max-width: 100%;
  display: block;
  margin-top: 35px;
}
</style>


