export interface Series {
    id: number;
    name: string;
    overview: string;
    poster_path: string;
}

export interface PopularSeriesResponse {
    total_pages: number;
    results: Series[];
}

export interface Genre {
    id: number;
    name: string;
}

export interface SeriesDetailResponse {
    id: number;
    name: string;
    overview: string;
    genres: Genre[];
    poster_path: string;
    first_air_date?: string;
    vote_average?: number; 
}
