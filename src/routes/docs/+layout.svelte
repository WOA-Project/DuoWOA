<script lang="ts">
	import { goto } from "$app/navigation";

	import { Metadata, TreeView, Toc } from "../../lib";
	import { docsMap } from "../../data/docs";

	import { Button, TextBlock, AutoSuggestBox, ListItem } from "fluent-svelte";

	import { base } from "$app/paths";

	let article;
	let searchMatches = [];
	let searchValue = "";
	let searchSelection = 0;
	let searchFlyoutOpen = false;
	let searchItems = docsMap.map(page => page.name);

  	export let data;

	function handleKeyDown({ key }: KeyboardEvent) {
		if (key === "Enter") {
			searchValue = "";
			goto(
				`/docs${
					docsMap.filter(page => searchMatches.some(match => page.name === match))[
						searchSelection
					].path
				}`
			);
		}
	}

	function handleSelection(index) {
		searchValue = searchItems[index];
		searchSelection = index;
		searchFlyoutOpen = false;
	}
</script>

<Metadata title="DuoWOA - Docs - {data.props.currentPage?.name}" description="" />

<main class="docs-container">
	<div class="docs-container-inner">
		<aside>
			<div class="docs-search">
				<AutoSuggestBox
					placeholder="Search Docs"
					on:keydown={handleKeyDown}
					bind:open={searchFlyoutOpen}
					bind:value={searchValue}
					bind:selection={searchSelection}
					bind:matches={searchMatches}
					bind:items={searchItems}
				>
					<svelte:fragment slot="item-template" let:matches let:index let:id let:item>
						<ListItem
							on:click={() => handleSelection(index)}
							tabindex={-1}
							selected={searchSelection === index}
							href="{base}/docs{docsMap.filter(page =>
								matches.some(match => page.name === match)
							)[index].path}"
							{id}
						>
							{item}
							<svelte:fragment slot="icon">
								{#if docsMap.filter( page => matches.some(match => page.name === match) )[index].name}
									{@html docsMap.filter(page =>
										matches.some(match => page.name === match)
									)[index].icon}
								{/if}
							</svelte:fragment>
						</ListItem>
					</svelte:fragment>
				</AutoSuggestBox>
			</div>
			<TreeView tree={docsMap} />
		</aside>

		<article class="markdown-body" bind:this={article}>
			<header>
				<h1 id={data.props.currentPage?.name}>{data.props.currentPage?.name}</h1>
				<Button
					href="https://github.com/WOA-Project/DuoWOA/edit/main/src/routes/docs{data.props.currentPage?.path ||
						'/index'}.md"
					rel="noreferrer noopener"
					target="_blank"
					variant="hyperlink">Edit This Page</Button
				>
			</header>
			<slot />
		</article>

		<aside>
			<TextBlock variant="bodyStrong">On This Page</TextBlock>
			<Toc target={article} />
		</aside>
	</div>
</main>

<style global lang="scss">
	@use "src/styles/pages/docs";
</style>
