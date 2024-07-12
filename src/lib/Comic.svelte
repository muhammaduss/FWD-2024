<script lang="ts">
	export let comicData;
	export let comicDate;
	export let relative_time;
</script>

<body>
	<div id="comicContainer">
		<h2>{comicData.safe_title || 'Loading...'}</h2>
		<img src={comicData.img} alt={comicData.alt} />
		<p>Published at {comicDate} {relative_time}</p>
	</div>
</body>

<style>
	body {
		text-align: center;
		font-size: large;
		font-family: monospace;
	}
</style>
