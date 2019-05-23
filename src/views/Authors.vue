<template>
  <div id="authors-section">
    <div class="wrapper">
      <div id="authors-banner"></div>
      <div class="author-container">
        <div class="auth-image">
          <img src="../assets/becker.jpg" alt="Helaine Becker">
        </div>
        <div class="auth-text">
          <p>
            Helaine Becker - Helaine Becker is the bestselling author of more than 70 books for children and young adults, including the “enduring Canadian Christmas classic” A PORCUPINE IN A TREE and the giggle-inducing ODE TO UNDERWEAR. She's a multi-time winner of the Silver Birch Award and a two-time winner of the Lane Anderson Award for science writing for children.
            www.helainebecker.com
          </p>
        </div>
      </div>
      <div class="author-container">
        <div class="auth-image">
          <img src="../assets/chan.jpg" alt="Marty Chan">
        </div>
        <div class="auth-text">
          <p>Marty Chan is an award-winning author living in Edmonton, Alberta. He has written for television, radio, theatre, newspaper, and has published several children’s and young adult books. Marty’s TV shows and plays have been watched around the world, and he continues to write in the company of his wife and two cats, Buddy and Max. www.martychan.com</p>
        </div>
      </div>
      <div class="author-container">
        <div class="auth-image">
          <img src="../assets/grant.jpg" alt="Vicki Grant">
        </div>
        <div class="auth-text">
          <p>Former scriptwriter and advertising copywriter Vicki Grant has been called “a superb storyteller” (CCBC) and “one of the funniest writers working today” (Vancouver Sun). Her books have won The Red Maple, The Arthur Ellis and Young Canada Reads as well as been shortlisted for the Edgar, the CLA Book of the Year and many Forest of Reading awards. Her latest YA novel, 36 Questions That Changed My Mind About You, sold to over 20 territories worldwide. www.vickigrant.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Authors"
};
</script>

<style scoped>
#authors-banner {
  background-image: url("../assets/books.jpg");
  height: 400px;
  background-size: cover;
  background-position: 0 90%;
  margin-bottom: 30px;
}
.author-container {
  height: 500px;
  display: flex;
}

.auth-text {
  height: 400px;
  border: 2px solid blue;
  width: calc(100% - 300px);
  padding-left: 30px;
  display: flex;
  align-items: center;
  text-align: center;
}

.auth-image {
  width: 300px;
  height: 400px;
  border: 2px solid red;
}

.auth-image img {
  max-width: 100%;
  display: block;
}
</style>


