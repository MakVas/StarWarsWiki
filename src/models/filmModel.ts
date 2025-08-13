export type filmModel = {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
};

export const defaultFilm: filmModel = {
    title: '',
    episode_id: 0,
    opening_crawl: '',
    director: '',
    producer: '',
    release_date: '',
};
