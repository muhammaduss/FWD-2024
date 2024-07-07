<script lang="ts">
	import Projects from '../../lib/Projects.svelte';
	import { type Project } from '../../lib/types';

	// Variables for Project
	let project: Project[] = [
		{
			name: 'InnoSport: Achievements',
			gh_link: 'https://github.com/muhammaduss/InnoSport',
			role: "frontend developer's assistant",
			description:
				'Summer Course [Software Project] 2023, UI. Enhancing the ability of coaches to track student engagement and statistics by adding schedules with attendance of relevant classes.',
			stack: 'HTML, CSS, JavaScript'
		},
		{
			name: 'Wishlist Bot for Telegram',
			gh_link: 'https://github.com/muhammaduss/wishlist_telegram_bot',
			role: 'solo project: backend developer',
			description: 'Summer elective [Python] 2023, UI. A bot for storing wish lists for any topic.',
			stack: 'Python, Telebot, SQLite3'
		},
		{
			name: 'CryptoClicker',
			gh_link: 'https://github.com/absorian/cryptoclicker',
			role: 'DevOps',
			description:
				'Autumn course [System and Network Administration] 2024, UI. A mini-site for stimulating the accumulation of virtual currency with support for a leaderboard and with load distribution to several servers via nginx.',
			stack: 'Nginx, Dockerfile, Github Actions, CI/CD pipelining'
		},
		{
			name: 'IKIGAI',
			gh_link: 'https://github.com/TheAnushervon/IKIGAI',
			role: 'backend developer',
			description:
				'The prize place in the hackathon from "LETS HACK", the case from the Future Crew MTS, 2024. Client portal for the study of the security of the external perimeter of the customer.',
			stack: 'Django, Django REST Framework'
		}
	];
</script>

<main>
	<Projects {project} />
</main>
