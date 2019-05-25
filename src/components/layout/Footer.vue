<template>
  <footer>
    <div class="wrapper">
      <div class="footer-flex-container">
        <div class="contact-container">
          <h2>contact</h2>
          <p>
            <i class="fas fa-phone"></i> 902-555-5555
          </p>
          <p>
            <i class="far fa-envelope"></i> funnypages@funnypages.com
          </p>
          <p>2020 Spring Garden Rd., Halifax, NS</p>
          <p>B3P-3H3</p>
        </div>
        <div class="social-media-container">
          <h2>Follow Us</h2>
          <div class="social-icons">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter"></i>
          </div>
        </div>
        <div class="newsletter-container">
          <h2>Newsletter</h2>
          <form action>
            <input type="email" placeholder="e-mail address" id="email">
            <label for="email">e-mail address</label>
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
    <div class="copyright">
      <h3>2019 © Funny Pages Festival</h3>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
footer {
  background: url(../../assets/cheese.svg);
  background-color: #ffe9bf;
  background-size: cover;
  /* background: #ffdd9a; */
  padding-top: 50px;
  /* height: 200px; */
  text-align: center;
  margin-top: 30px;
}
.footer-flex-container {
  display: flex;
  margin-top: 30px;
  padding-bottom: 40px;
}

.contact-container,
.newsletter-container {
  width: 40%;
  /* border: 1px solid red; */
}
.social-media-container {
  width: 20%;
  /* border: 1px solid red; */
}

.contact-container {
  text-align: left;
}
.social-icons {
  margin-top: 20px;
}
.social-icons i {
  font-size: 2.5rem;
  margin: 10px;
  cursor: pointer;
  /* color: #ff4f4f; */
  /* color: #c7f9f9; */
  /* color: #96eaea; */

  color: #68d0d0;
}

.social-icons i:hover {
  color: #ff4f4f;
}

.newsletter-container form {
  position: relative;
}

.newsletter-container label {
  position: absolute;
  top: -1px;
  left: 80px;
  transition: 0.5s;
  color: #ff4f4f;
  opacity: 0;
}

.newsletter-container input {
  display: block;
  width: 250px;
  height: 30px;
  margin: 0 auto;
  border: none;
  padding: 5px;
  margin-top: 20px;
}
.newsletter-container button {
  width: 250px;
  height: 30px;
  display: block;
  margin: 0 auto;
  background: #ff4f4f;
  color: white;
  border: none;
  margin-top: 5px;
}
.newsletter-container button:hover {
  background: #68d0d0;
}

.newsletter-container input:focus ~ label {
  top: -27px;
  opacity: 1;
}

.copyright {
  height: 50px;
  background: #ff4f4f;
  padding-top: 15px;
}
h3 {
  color: white;
}
</style>


