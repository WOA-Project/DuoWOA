<script lang="ts">
	import { Button, TextBlock, IconButton } from "fluent-svelte";

	import { PageSection, CopyBox, HeroCard, Metadata } from "../lib";

	import Box from "@fluentui/svg-icons/icons/box_16_regular.svg?raw";
	import Book from "@fluentui/svg-icons/icons/book_24_regular.svg?raw";
	import Open from "@fluentui/svg-icons/icons/open_16_regular.svg?raw";

	import { base } from "$app/paths";
</script>

<Metadata
	title="DuoWOA"
	description="Windows on ARM running on the Surface Duo family of devices."
/>

<PageSection id="hero-section">
	<div class="hero-contents">
		<h1>DuoWOA</h1>
		<p>Windows on ARM running on the Surface Duo family of devices.</p>
		<div class="buttons-spacer">
			<Button variant="accent" href="{base}/docs">Get Started</Button>
			<Button
				href="https://github.com/WOA-Project/DuoWOA"
				target="_blank"
				rel="noreferrer noopener">Source Code</Button
			>
		</div>
	</div>

	<div class="hero-cards">
		<HeroCard>
			<svelte:fragment slot="header">
				<TextBlock variant="bodyStrong">1.</TextBlock>
			</svelte:fragment>
		</HeroCard>
		<HeroCard>
			<svelte:fragment slot="header">
				<TextBlock variant="bodyStrong">2.</TextBlock>
			</svelte:fragment>
		</HeroCard>
		<HeroCard>
			<svelte:fragment slot="header">
				<TextBlock variant="bodyStrong">3.</TextBlock>
			</svelte:fragment>
		</HeroCard>
	</div>
</PageSection>

<style lang="scss">
	@use "src/styles/pages/home";
</style>
