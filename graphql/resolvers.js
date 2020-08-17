//쿼리를 해결하는 파일
//여기서 다른 데이터베이스에도 갈 수 있고 메모리나 다른 API로도 갈 수 있음
import { getMovies, getMovie, getSuggestions } from './db';

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id),
  },
};

export default resolvers;
