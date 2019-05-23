<template>
  <div id="app">
    <Header/>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Luckiest+Guy|Roboto&display=swap");

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
nav,
section,
summary {
  display: block;
}
audio,
canvas,
video {
  display: inline-block;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
[hidden] {
  display: none;
}
html {
  font-family: sans-serif;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
a:focus {
  outline: thin dotted;
}
a:active,
a:hover {
  outline: 0;
}
h1 {
  font-size: 2em;
}
abbr[title] {
  border-bottom: 1px dotted;
}
b,
strong {
  font-weight: 700;
}
dfn {
  font-style: italic;
}
mark {
  background: #ff0;
  color: #000;
}
code,
kbd,
pre,
samp {
  font-family: monospace, serif;
  font-size: 1em;
}
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
q {
  quotes: \201c \201d \2018 \2019;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}
img {
  border: 0;
}
svg:not(:root) {
  overflow: hidden;
}
fieldset {
  border: 1px solid silver;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  margin: 0;
}
button,
input {
  line-height: normal;
}
button,html input[type=button],/* 1 */input[type=reset],input[type=submit] {
  -webkit-appearance: button;
  cursor: pointer;
}
button[disabled],
input[disabled] {
  cursor: default;
}
input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
input[type="search"] {
  -webkit-appearance: textfield;
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
textarea {
  overflow: auto;
  vertical-align: top;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
body,
figure {
  margin: 0;
}
legend,
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: "";
  clear: both;
  height: 0;
}

* {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  background: #c7f9f9;
  /* background: #62dcdc; */
}
h1,
h2,
h3,
p {
  margin: 0;
  padding: 0;
}

h1 {
  font-family: "Luckiest Guy", cursive;
  font-size: 5rem;
  line-height: 0.8;
  /* color: #ff7272; */
  color: #ff4f4f;
  text-shadow: 1px 1px black, 2px 2px black;
  letter-spacing: 1px;
}
h2 {
  line-height: 1;
  font-family: "Luckiest Guy", cursive;
  font-size: 2rem;
  color: #ff4f4f;
  text-shadow: 1px 1px black;
  letter-spacing: 1px;
}

a {
  font-family: "Luckiest Guy", cursive;
  font-size: 1.5rem;
  color: #ff4f4f;
  text-decoration: none;
  /* color: #ff7272; */
}

p,
li {
  font-family: "Roboto", sans-serif;
  font-size: 125%;
  letter-spacing: 1px;
  line-height: 1.6;
  color: #070707;
}
.wrapper {
  width: 1000px;
  /* border: 2px solid red; */
  margin: 0 auto;
}
</style>
