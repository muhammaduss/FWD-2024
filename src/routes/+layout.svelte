<script lang="ts">
	import '../app.css';
	import Contacts from '$lib/Contacts.svelte';

	let reachInfo: string = `You can reach me in Telegram from 10:00 to 23:00 any day of the week`;
	let github_link: string = `https://github.com/muhammaduss`;
	let telegram_link: string = `https://t.me/muhammaduss`;
	let mailto: string = `mailto:muhammad20040130@gmail.com`;
</script>

<header>
	<nav>
		<a href="/">Home</a>
		<a href="/projects">Projects</a>
	</nav>
</header>

<slot />

<footer>
	<Contacts {reachInfo} {github_link} {telegram_link} {mailto} />
</footer>
