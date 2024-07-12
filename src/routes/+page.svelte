<script lang="ts">
	import Bio from '.././lib/Bio.svelte';
	import Comic from '.././lib/Comic.svelte';
	import 'font-awesome/css/font-awesome.min.css';

	// Using SSR (defined in +page.js)
	// It allows to see comic without loading it on client side
	export let data;

	export let comicData = data.props?.comicData;
	export let comicDate = data.props?.comicDate;
	export let relative_time = data.props?.relativeTime;

	let showComic = false;

	const toggleComic = () => {
		showComic = !showComic;
	};

	// Variables for Bio component
	let description: string = `Hi, I'm 20 yo second year student of Innopolis University, studying in
          software development track. I have interest in backend development and
          DevOps. Additionally, I'm excited with modern web frameworks and want to
          try my best to become fullstack developer.`;

	let skills: string[] = [
		`Syntax: C/C++, Python, Java`,
		`Worked with libraries and frameworks: Django, DRF, ZeroMQ, Telebot,
              gRPC`,
		`Databases: PostgreSQL, MongoDB`,
		`Containerization: Docker`,
		`Documentation: Markdown`,
		`SDLC: Scrum, Kanban`,
		`VCS: Git`,
		`Other (beginner level): linux shell, Nginx, docker-compose, CI/CD
              pipelining, frontend basics: html/css/js`
	];

	let studyingNow: string[] = [`Django REST Framework (DRF)`, `FastAPI`, `SvelteKit`];

	let languages: string[] = [`English - B1/B2`, `Russian - A1/A2`];
</script>

<main>
	<h1>Muhammad Allayarov | Backend Developer</h1>
	<Bio {description} {skills} {studyingNow} {languages} />

	<div id="comic-button">
		<a href="#comic-button" on:click={toggleComic} class="comic-button"
			>{showComic ? 'Hide Comic' : 'Show Comic'}</a
		>
	</div>
	{#if showComic}
		<Comic {comicData} {comicDate} {relative_time} />
	{/if}
</main>
