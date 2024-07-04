<script lang="ts">
  import Header from "./lib/Header.svelte";
  import Bio from "./lib/Bio.svelte";
  import Contacts from "./lib/Contacts.svelte";
  import Projects from "./lib/Projects.svelte";
  import Comic from "./lib/Comic.svelte";
  import "font-awesome/css/font-awesome.min.css";
  import { type Project } from "./lib/types";

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
            pipelining, frontend basics: html/css/js`,
  ];

  let studyingNow: string[] = [
    `Django REST Framework (DRF)`,
    `FastAPI`,
    `SvelteKit`,
  ];

  let languages: string[] = [`English - B1/B2`, `Russian - A1/A2`];

  // Variables for Project
  let project: Project[] = [
    {
      name: "InnoSport: Achievements",
      gh_link: "https://github.com/muhammaduss/InnoSport",
      role: "frontend developer's assistant",
      description:
        "Summer Course [Software Project] 2023, UI. Enhancing the ability of coaches to track student engagement and statistics by adding schedules with attendance of relevant classes.",
      stack: "HTML, CSS, JavaScript",
    },
    {
      name: "Wishlist Bot for Telegram",
      gh_link: "https://github.com/muhammaduss/wishlist_telegram_bot",
      role: "solo project: backend developer",
      description:
        "Summer elective [Python] 2023, UI. A bot for storing wish lists for any topic.",
      stack: "Python, Telebot, SQLite3",
    },
    {
      name: "CryptoClicker",
      gh_link: "https://github.com/absorian/cryptoclicker",
      role: "DevOps",
      description:
        "Autumn course [System and Network Administration] 2024, UI. A mini-site for stimulating the accumulation of virtual currency with support for a leaderboard and with load distribution to several servers via nginx.",
      stack: "Nginx, Dockerfile, Github Actions, CI/CD pipelining",
    },
    {
      name: "IKIGAI",
      gh_link: "https://github.com/TheAnushervon/IKIGAI",
      role: "backend developer",
      description:
        'The prize place in the hackathon from "LETS HACK", the case from the Future Crew MTS, 2024. Client portal for the study of the security of the external perimeter of the customer.',
      stack: "Django, Django REST Framework",
    },
  ];

  // Variables for Contacts component
  let reachInfo: string = `You can reach me in Telegram from 10:00 to 23:00 any day of the week`;
  let github_link: string = `https://github.com/muhammaduss`;
  let telegram_link: string = `https://t.me/muhammaduss`;
  let mailto: string = `mailto:muhammad20040130@gmail.com`;
</script>

<main>
  <Header name="Muhammad Allayarov" stack="Backend developer" />
  <Bio {description} {skills} {studyingNow} {languages} />
  <Projects {project} />

  <div id="comic-button">
    <a href="#comic-button" on:click={toggleComic} class="comic-button"
      >{showComic ? "Hide Comic" : "Show Comic"}</a
    >
  </div>
  {#if showComic}
    <Comic email="m.allayarov@innopolis.university" />
  {/if}

  <Contacts {reachInfo} {github_link} {telegram_link} {mailto} />
</main>
