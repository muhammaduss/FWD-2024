<script lang="ts">
	import { type Project } from './types';
	export let project: Project[];
</script>

<section id="projects">
	<h2>Projects</h2>
	<ul>
		{#each project as { name, gh_link, description, stack, role }}
			<li>
				<b>{name}</b>
				<a href={gh_link} target="_blank"><i class="fa fa-github"></i></a>
				- {role}
				<p>{description}</p>
				<p>Stack: {stack}</p>
			</li>
		{/each}
	</ul>
</section>
