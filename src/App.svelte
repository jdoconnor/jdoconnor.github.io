<script lang="ts">
  import facebookLogo from "./assets/facebook.svg?raw";
  import githubLogo from "./assets/github.svg?raw";
  import gmailLogo from "./assets/gmail.svg?raw";
  import discordLogo from "./assets/discord.svg?raw";
  import linkedInLogo from "./assets/linkedin.svg?raw";
  import scheduleLogo from "./assets/calendar.svg?raw";
  import Icon from "./lib/icon.svelte";
</script>

<div id="container">
  <div id="content">
    My name is Jay. I work on tech, manage teams, and help people grow in their careers. Recently, I was managing teams
    at <a href="https://www.quip.com/" target="_blank">Quip</a> and
    <a href="https://www.slack.com/" target="_blank">Slack</a>.
    <span>I also enjoy contributing to</span>
    <a href="https://www.github.com/jdoconnor" target="_blank">open source software</a> when I have a chance.
  </div>
  <div id="social">
    <div class="icons">
      <Icon name="View my LinkedIn profile" image={linkedInLogo} link="https://www.linkedin.com/in/jdoconnor" />
      <Icon name="Schedule a meeting with me" image={scheduleLogo} link="https://www.cal.com/jdoconnor" />
      <Icon name="View my Github profile" image={githubLogo} link="https://www.github.com/jdoconnor" />
      <Icon name="Email me" image={gmailLogo} link="mailto:jaydoconnor@gmail.com" />
      <Icon name="View my Discord profile" image={discordLogo} link="https://discordapp.com/users/257316698728693760" />
    </div>
  </div>
</div>

<style>
  a {
    font-weight: 500;
    color: #5b1865;
    text-decoration: inherit;
  }
  a:hover {
    color: #2c5784;
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
    border: 2px solid #251101;
    background-color: #8aa29e;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 20px;
    color: #251101;
    padding: 60px;
    font-size: 18px;
    font-weight: 500;
    border-radius: 10px;
  }
</style>
