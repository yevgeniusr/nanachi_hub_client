<script>
  import NavLink from "../components/NavLink.svelte";
  import { navigateTo } from "../services/navigate.js";
  import { onMount } from 'svelte';

  let background;
  let x_size = 50;
  let y_size = 50;
  let grid_size = [...Array(x_size * y_size).keys()];

  onMount(async () => {
		background.style.setProperty('--x-size', x_size);
    background.style.setProperty('--y-size', y_size);
	});
  
  function grid_clicked(e) {
    console.log(e);
    e.originalTarget.classList.remove('grid_point');
    e.originalTarget.classList.add('grid_clicked');
  }

  function dive_diper(e) {
    console.log(e)
    background.dispatchEvent(e);
  }
</script>

<style type="text/scss">
  .hall {
    z-index: -2;
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

    font-size: 2em;
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
    font-size: 6em;
    color: var(--second-color);
  }

  .background {
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: var(--second-color);

    display: grid;
    grid-template-columns: repeat(var(--y-size), 1fr);
    grid-template-rows: repeat(var(--x-size), 1fr);
    grid-gap: 1px;
  }

  .grid_point {
    background-color: var(--base-color); 
    &:hover {
      transition: 0.5s;
      background-color: var(--second-color); 
    }
  }

  .grid_point .grid_clicked {
  }

  .grid_clicked {

  }
</style>

<section on:click={dive_diper} class="hall">
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
  <div bind:this={background} class="background">
    {#each grid_size as x}
      <div on:click={grid_clicked} class="grid_point"></div>
    {/each}
  </div>
</section>
