<script lang="ts">
	import { page } from "$app/stores";
	import { TextBlock } from "fluent-svelte";

	import { base } from "$app/paths";

	interface Item {
		href: string;
		name: string;
		icon?: string;
	}

	export let items: Item[];
</script>

<header class="navbar">
	<div class="navbar-inner">
		<a class="logo" href="{base}/">
			<img src="{base}/logo.svg" width="32" height="32" alt="DuoWOA logo" />
			DuoWOA <TextBlock variant="caption">DF</TextBlock>
		</a>
		<nav>
			{#each items as { href, name, icon }}
				<a
					{href}
					sveltekit:prefetch
					class:selected={$page.url.pathname === href ||
						($page.url.pathname.split("/").length > 1 &&
							href.split("/").length > 1 &&
							$page.url.pathname.startsWith(href) &&
							!(href === "" || href === "/")) ||
						(href === "/" && $page.url.pathname === "")}
				>
					{#if icon}
						{@html icon}
					{/if}
					<TextBlock>{name}</TextBlock>
				</a>
			{/each}
		</nav>
		<div class="buttons">
			<slot name="buttons" />
		</div>
	</div>
</header>

<style lang="scss">
	@use "./Navbar";
</style>
