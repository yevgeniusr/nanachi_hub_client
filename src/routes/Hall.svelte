<script>
  import NavLink from "../components/NavLink.svelte";
  import { navigateTo } from "../services/navigate.js";
</script>

<style type="text/scss">
  .hall {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 100%;
  }
  .link {
    height: 70%;
    width: 70%;
    background-color: var(--second-color);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 3em;
    cursor: pointer;
  }

  #nanachi {
    height: 100%;
    width: 100%;

    grid-row: 1 / 3;
  }

  nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-self: center;
    align-self: center;

    justify-items: center;
    align-items: center;

    height: 40%;
    width: 100%;
  }

  .title {
    justify-self: center;
    align-self: center;
    font-size: 10em;
    color: var(--second-color);
  }
</style>

<section class="hall">
  <img id="nanachi" src="img/nanachi_hub.png" alt="nanachi" />
  <h1 class="title">Nanachi Hub</h1>
  <nav>
    <span class="link chat__link" on:click={navigateTo('chat')}>Chat</span>
    <span class="link clicker__link" on:click={navigateTo('clicker')}>
      Clicker
    </span>
    <span class="link hwtp__link" on:click={navigateTo('hwtp')}>HWTP</span>
    <span class="link casino__link" on:click={navigateTo('casino')}>
      Casino
    </span>
  </nav>
</section>
