<script>
  import { Router, Route } from "svelte-routing";
  import NavLink from "./components/NavLink.svelte";
  import Hall from "./routes/Hall.svelte";
  import NotFound from "./routes/NotFound.svelte";
  import Clicker from "./routes/Clicker.svelte";
  import Chat from "./routes/Chat.svelte";
  import Casino from "./routes/Casino.svelte";
  import Hwtp from "./routes/Hwtp.svelte";
  import "./public/particles.js";

  export let url = "";

  particlesJS.load("particles-js", "assets/particles.json", function() {
    console.log("callback - particles.js config loaded");
  });
</script>

<style type="text/scss">
  :global(:root) {
    --base-color: rgb(17, 17, 17);
    --second-color: rgb(224, 224, 224);
    --third-color: rgb(14, 201, 60);
    --casino-color: rgb(248, 23, 23);
    --hwtp-color: rgb(112, 10, 126);
    --chat-color: rgb(23, 211, 32);
    --clicker-color: rgb(69, 41, 196);
  }

  :global(body) {
	  background-color: var(--base-color);
  }

  p {
    color: white;
  }

  .content {
    height: 100%;
    width: 100%;
  }

  main {
	z-index: -10;
    height: 100vh;
    width: 100vw;
  }

  #particles-js {
    z-index: -1;
    position: absolute;
	height: 100%;
	width: 100%;
	overflow: hidden;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
</style>

<main>
  
  <!-- <p class="text">main</p> -->
  <Router {url}>

    <div class="content">
      <Route path="/clicker" component={Clicker} />
      <Route path="/chat" component={Clicker} />
      <Route path="/hwtp" component={Clicker} />
      <Route path="/casino" component={Clicker} />
      <Route path="/" component={Hall} />
      <Route path="*" component={NotFound} />
    </div>
  </Router>
  <div id="particles-js" />
</main>
