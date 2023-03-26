<script lang="ts">
  import facebookLogo from "./assets/facebook.svg";
  import githubLogo from "./assets/github.svg";
  import gmailLogo from "./assets/gmail.svg";
  import discordLogo from "./assets/discord.svg";
  import linkedInLogo from "./assets/linkedin.svg";
  import Icon from "./lib/icon.svelte";
</script>

<div id="container">
  <div id="content">
    My name is Jay. I manage teams that write scalable platforms. Most of my time is spent managing teams at
    <a href="https://www.quip.com/" target="_blank">Quip.com</a>
    <span> and creating or contributing to&nbsp;</span>
    <a href="https://www.github.com/jdoconnor" target="_blank">open source software</a>
  </div>
  <div id="social">
    <div class="icons">
      <Icon name="facebook" image={facebookLogo} link="https://www.facebook.com/jdoconnor" />
      <Icon name="github" image={githubLogo} link="https://www.github.com/jdoconnor" />
      <Icon name="linkedin" image={linkedInLogo} link="https://www.linkedin.com/in/jdoconnor" />
      <Icon name="email" image={gmailLogo} link="mailto:jaydoconnor@gmail.com" />
      <Icon name="discord" image={discordLogo} link="https://discordapp.com/users/257316698728693760" />
    </div>
  </div>
</div>

<style>
  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
  a:hover {
    color: #535bf2;
  }
  :global(body) {
    background-image: url("/noise.png");
    background-color: #e3f2fd;
  }
  #container {
    width: 80%;
    margin: 20px auto;
    text-align: center;
  }

  #content {
    display: block;
    border: 2px solid #686963;
    background-color: #8aa29e;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 20px;
    color: #fafafa;
    padding: 60px;
    font-size: 18px;
    font-weight: 200;
    border-radius: 10px;
  }
</style>
