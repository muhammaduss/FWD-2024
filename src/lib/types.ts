export default interface ComicData {
    safe_title: string;
    img: string;
    alt: string;
    day: number;
    month: number;
    year: number;
}

export interface Project {
    name: string;
    gh_link: string;
    description: string;
    role: string;
    stack: string;
}