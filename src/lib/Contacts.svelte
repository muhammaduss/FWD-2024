<script lang="ts">
    export let reachInfo: string;
    export let github_link: string;
    export let telegram_link: string;
    export let mailto: string;
</script>

<section id="contacts">
    <h2>Contacts</h2>
    <p>{reachInfo}</p>
    <div class="social-links">
        <a id="gh-link" href={github_link} target="_blank"
            ><i class="fa fa-github"></i></a
        >
        <a id="tg-link" href={telegram_link} target="_blank"
            ><i class="fa fa-telegram"></i></a
        >
        <a id="email" href={mailto}><i class="fa fa-envelope"></i></a>
    </div>
</section>
