import { ComicData } from './types'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const email: string = 'm.allayarov@innopolis.university';
const params: URLSearchParams = new URLSearchParams({ email: email });
fetch('https://fwd.innopolis.university/api/hw2?' + params.toString())
    .then((response: Response) => response.json())
    .then((data: string) => {
        const comicId: string = data;

        const url_params: URLSearchParams = new URLSearchParams({ id: comicId });

        fetch('https://fwd.innopolis.university/api/comic?' + url_params.toString())
            .then((response: Response) => response.json())
            .then((data: ComicData) => {
                const content = data;

                const comicTitle = document.getElementById('comicTitle') as HTMLElement;
                const comicDate = document.getElementById('comicDate') as HTMLElement;
                const comicImage = document.getElementById('comicImage') as HTMLImageElement;
                const date: string = new Date(content.year, content.month, content.day).toLocaleDateString();

                comicTitle.textContent = content.safe_title;
                comicDate.textContent = `Published at ${date} ${dayjs(content.year + '-' + content.month + '-' + content.day).fromNow()}`
                comicImage.src = content.img;
                comicImage.alt = content.alt;
            });
    });