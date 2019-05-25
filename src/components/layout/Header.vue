<template>
  <div id="header">
    <div class="wrapper">
      <div class="title-container">
        <h1>
          Funny pages
          <!-- <img src="../../assets/book.svg" alt="book logo" id="book-logo"> -->
        </h1>
        <h3 class="subtitle">
          Celebrating books that make kids laugh
          <span class="emoji">🤣</span>
        </h3>
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
#book-logo {
  width: 150px;
  height: 150px;
  position: absolute;
  left: 590px;
  bottom: -55px;
}
.subtitle {
  position: relative;
  display: inline-block;
}

#header h3 {
  color: #ff4f4f;
  /* color: #42b4b4; */
  font-size: 1.5rem;
  letter-spacing: 1px;
  font-style: italic;
  /* text-shadow: none; */
  /* margin-top: 3px; */
}
.emoji {
  font-size: 2rem;
  position: absolute;
  right: -42px;
  bottom: -10px;
  transition: 1s;
  cursor: default;
  text-shadow: none;
  font-style: normal;
}

.title-container h1 {
  position: relative;
}

.emoji:hover {
  transform: rotate(360deg);
}
#header {
  height: 250px;
  /* border: 10px solid cornflowerblue; */
  display: flex;
  background: linear-gradient(180deg, #fffdf8, #c7f9f9);
  /* background: #fffdf8; */
  /* background: url(../../assets/cheese.svg);
  background-size: cover; */
  /* background: #ffdd9a; */
}

.title-container {
  /* width: 300px; */
  height: 200px;
  padding-top: 80px;
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
  /* background: #c7f9f9; */
  background: #ffeecc;
  /* border-right: 5px solid #ff4f4f; */
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


