<script lang="ts" setup>
</script>

<template>
    <footer class="footer">
  <div class="footer__message">
    We are Disney fans and we adore concept of Open Source &nbsp;
    <img
      class="footer__message--icon"
      src="../assets/Heart.svg"
      alt="heart icon"
    />
  </div>
  <div class="footer__github">
    <a
      href="https://github.com/MarcinOkroj/disney-characters-website-vue-vite"
      target="_blank"
      >Visit Our GitHub</a
    >
  </div>
  <div class="footer__date">
    Made with &nbsp;
    <img
      class="footer__message--icon"
      src="../assets/Heart.svg"
      alt="heart icon"
    />
    &nbsp; 2023
  </div>
</footer>
</template>

<style>
img {
    height: 20px;
}

.footer {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-top: 60px;
}

.footer__message {
    display: flex;
    font-size: 1.25em;
    text-align: center;
}

.footer__github {
    padding: 20px 0;
    text-align: center;
}

.footer__github a {
    border-color: darkgray;
    border-radius: 10px;
    border-style: solid;
    border-width: 2px;
    color: black;
    font-size: 1.2em;
    padding: 10px;
    text-decoration: none;
}

.footer__date {
    display: flex;
    font-size: 0.75em;
    text-align: center;
}
</style>