export class MovieModel {
    constructor(args) {
        this.id = args.id || -1;
        this.title = args.title || '';
        this.release_date = args.release_date || '2021-01-01';
        this.genres = args.genres || [];
        this.backdrop_path = `https://image.tmdb.org/t/p/original${args.backdrop_path}` || ''
        this.poster_path = `https://image.tmdb.org/t/p/original${args.poster_path}` || ''
        this.overview = args.overview || '';
        this.tagLine = args.tagLine || '';
        this.popularity = args.popularity || 0.0;
        this.vote_count = args.vote_count || 0;
        this.vote_average = args.vote_average || 0;
        this.status = args.status || 'upcoming';
    }
}
