import { Tags } from "./tags";

export interface Project {
    id: number,
    name: string,
    summary: string,
    discription: string,
    projectLink: string,
    pictures: string[],
    tags: Tags[]
}