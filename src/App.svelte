<script>
	import { Router, Route } from "svelte-routing";
	import NavLink from "./components/NavLink.svelte";
  	import Hall from "./routes/Hall.svelte";
	import NotFound from "./routes/NotFound.svelte";
	import Clicker from "./routes/Clicker.svelte";

	export let url = "";
</script>
<main>
	<p>main</p>
	<Router url="{url}">
	<div>
		<Route path="/clicker" component="{Clicker}" />
		<Route path="/" component="{Hall}" />
		<Route path="*" component="{NotFound}" />
	</div>
	</Router>
</main>


<style lang="scss">
	:global(:root) {
		--base-color: rgb(28, 29, 28);
	}

	:global(h1) {
        color: green;
    }

	main {
		background-color: var(--base-color);
		height: 100vh;
		width: 100vw;
	}
</style>