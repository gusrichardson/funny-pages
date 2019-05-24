<template>
  <div id="header">
    <div class="wrapper">
      <div class="title-container">
        <h1>Funny pages</h1>
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
.subtitle {
  position: relative;
  display: inline-block;
}
.emoji {
  font-size: 2rem;
  position: absolute;
  right: -42px;
  bottom: -13px;
  transition: 1s;
  cursor: default;
}

.emoji:hover {
  transform: rotate(360deg);
}
#header {
  height: 210px;
  /* border: 10px solid cornflowerblue; */
  display: flex;
  /* background: #ffdd9a; */
}

.title-container {
  /* width: 300px; */
  height: 160px;
  padding-top: 55px;
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


