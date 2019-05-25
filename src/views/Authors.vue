<template>
  <div id="authors-section">
    <div class="wrapper">
      <div id="authors-banner"></div>
      <h2>Authors</h2>
      <div class="author-container">
        <div class="auth-image left">
          <img :src="becker" alt="Helaine Becker">
        </div>
        <div class="auth-text">
          <p>
            <span class="bold">Helaine Becker</span> is the bestselling author of more than 70 books for children and young adults, including the “enduring Canadian Christmas classic” A PORCUPINE IN A TREE and the giggle-inducing ODE TO UNDERWEAR. She's a multi-time winner of the Silver Birch Award and a two-time winner of the Lane Anderson Award for science writing for children.
            <a
              href="https://helainebecker.com"
            >helainebecker.com</a>
          </p>
        </div>
      </div>
      <div class="author-container">
        <div class="auth-image right">
          <img v-bind:src="chan" alt="Marty Chan">
        </div>
        <div class="auth-text">
          <p>
            <span class="bold">Marty Chan</span> is an award-winning author living in Edmonton, Alberta. He has written for television, radio, theatre, newspaper, and has published several children’s and young adult books. Marty’s TV shows and plays have been watched around the world, and he continues to write in the company of his wife and two cats, Buddy and Max.
            <a
              href="https://www.martychan.com"
            >martychan.com</a>
          </p>
        </div>
      </div>
      <div class="author-container">
        <div class="auth-image left">
          <img v-bind:src="grant" alt="vicki grant">
        </div>
        <div class="auth-text">
          <p>
            Former scriptwriter and advertising copywriter
            <span class="bold">Vicki Grant</span> has been called “a superb storyteller” (CCBC) and “one of the funniest writers working today” (Vancouver Sun). Her books have won The Red Maple, The Arthur Ellis and Young Canada Reads as well as been shortlisted for the Edgar, the CLA Book of the Year and many Forest of Reading awards. Her latest YA novel, 36 Questions That Changed My Mind About You, sold to over 20 territories worldwide.
            <a
              href="https://www.vickigrant.com"
            >vickigrant.com</a>
          </p>
        </div>
      </div>
      <div class="author-container">
        <div class="auth-image right">
          <img v-bind:src="hrab" alt="Naseem Hrab">
        </div>
        <div class="auth-text">
          <p>
            <span class="bold">Naseem Hrab</span> is a writer, a storyteller and a pretty good friend. Her comedy writing has appeared on McSweeney's Internet Tendency and The Rumpus. Naseem worked as a librarian for a time and now works in children's publishing. She lives in Toronto, Ontario.
            <a
              href="https://www.naseemhrab.com"
            >naseemhrab.com</a>
          </p>
        </div>
      </div>
      <div class="author-container">
        <div class="auth-image left">
          <img v-bind:src="juby" alt="Susan Juby">
        </div>
        <div class="auth-text">
          <p>
            <span class="bold">Susan Juby</span> has written a number of acclaimed novels for teenagers and adults, including the bestselling Alice, I Think, a Rolling Stone Best Top 40 Novel and the first of her Alice MacLeod trilogy, which was made into a successful television series. She is also the author of a memoir, Nice Recovery, and the adult comic novel The Woefield Poultry Collective and its sequel, Republic of Dirt: Return to Woefield. Juby lives with her husband and their dog in Nanaimo.
            <a
              href="https://www.susanjuby.com"
            >susanjuby.com</a>
          </p>
        </div>
      </div>
      <div class="author-container">
        <div class="auth-image right">
          <img v-bind:src="nielsen" alt="Susin Nielsen">
        </div>
        <div class="auth-text">
          <p>
            <span class="bold">Susin Nielsen</span> got her start feeding cast and crew on the popular television series Degrassi Junior High. They hated her food, but they saw a spark in her writing. Nielsen went on to pen sixteen episodes of the hit TV show. Since then, Nielsen has written for many Canadian TV series.
            Nielsen's first two young adult novels, Word Nerd and Dear George Clooney: Please Marry My Mom, won critical acclaim and multiple young readers choice awards. The Reluctant Journal of Henry K. Larsen won the prestigious Governor General's Literary Award and the Canadian Library Association's Children's Book of the Year.
            She lives in Vancouver with her family and two extremely destructive cats.
            <a
              href="https://www.susinnielsen.com"
            >susinnielsen.com</a>
          </p>
        </div>
      </div>
      <div class="author-container">
        <div class="auth-image left">
          <img v-bind:src="scrimger" alt="Richard Scrimger">
        </div>
        <div class="auth-text">
          <p>
            <span class="bold">Richard Scrimger</span> is the award-winning author of more than twenty books for children and adults, including The Nose from Jupiter, Zomboy, Viminy Crowe’s Comic Book and The Wolf and Me. When he’s not writing or talking about writing, Richard teaches at Humber College and gets laughed at by his children. He has four of them. Well, really, they have him. He lives in Toronto. Visit him at
            <a
              href="https://www.richardscrimger.com"
            >richardscrimger.com</a> .
          </p>
        </div>
      </div>
      <div class="author-container">
        <div class="auth-image right">
          <img v-bind:src="sylvester" alt="Kevin Sylvester">
        </div>
        <div class="auth-text">
          <p>
            <span class="bold">Kevin Sylvester</span> is the bestselling author of Sports Hall of Weird. He is also a reporter, radio sports host, producer and documentary-maker, as well as an illustrator.
            <a
              href="https://www.kevinsylvesterbooks.com"
            >kevinsylvesterbooks.com</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import becker from "../assets/becker.jpg";
import chan from "../assets/chan.jpg";
import grant from "../assets/grant.jpg";
import hrab from "../assets/hrab.jpg";
import juby from "../assets/juby.jpg";
import nielsen from "../assets/nielsen.jpg";
import scrimger from "../assets/scrimger.jpg";
import sylvester from "../assets/sylvester.jpg";

export default {
  name: "Authors",
  data: function() {
    return {
      becker: becker,
      chan: chan,
      grant: grant,
      hrab: hrab,
      juby: juby,
      nielsen: nielsen,
      scrimger: scrimger,
      sylvester: sylvester
    };
  }
};
</script>

<style scoped>
.bold {
  font-weight: bold;
  color: #ff4f4f;
}
#authors-section .wrapper {
  background: #fffdf8;
  border-radius: 0 0 10px 10px;
}

#authors-section .wrapper h2 {
  margin-left: 30px;
}
#authors-banner {
  background-image: url("../assets/books.jpg");
  height: 400px;
  background-size: cover;
  background-position: 0 90%;
  margin-bottom: 30px;
}
.author-container {
  height: 450px;
  display: flex;
}

.author-container:nth-child(even) {
  flex-direction: row-reverse;
}

.auth-text {
  height: 400px;
  /* border: 2px solid blue; */
  width: calc(100% - 300px);
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  align-items: center;
  text-align: center;
}

.auth-image {
  width: 300px;
  height: 400px;
  /* box-shadow: 10px 10px #ffdd9a; */
  /* border: 2px solid red; */
}

.right img {
  box-shadow: 15px 15px #ffdd9a;
}

.left img {
  box-shadow: -15px 15px #ffdd9a;
}

/* 
.auth-image img:nth-of-type(odd) {
  box-shadow: -15px 15px #ffdd9a;
} */

/* .auth-image:nth-of-type(2) {
  box-shadow: -10px 10px #ffdd9a;
} */

.auth-image img {
  max-width: 100%;
  display: block;
}
</style>


