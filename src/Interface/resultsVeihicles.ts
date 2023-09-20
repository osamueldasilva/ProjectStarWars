import { IPeoples } from "./getPeoples";

export interface IResultsPeople {
    count: number,
    next: string,
    previous: null,
    results: IPeoples[],
}