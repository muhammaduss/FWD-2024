<script lang="ts">
	export let description: string;
	export let skills: string[];
	export let studyingNow: string[];
	export let languages: string[];
</script>

<section id="bio">
	<h2>About me</h2>
	<p>{description}</p>
	<p>Skills:</p>

	<ul>
		{#each skills as skill}
			<li>{skill}</li>
		{/each}
	</ul>

	<p>Studying now: {studyingNow.join(', ')}</p>

	<p>Languages: {languages.join(', ')}</p>
</section>
