const API_KEY = '1062caf7a565cc063091894493ac2d1e';

const requests = {
        fetchTrending : '/trending/all/week?api_key=d52e0431788e3e1fb9bfef780e147211&language=en-US',
        fetchTopRated : '/movie/top_rated?api_key=d52e0431788e3e1fb9bfef780e147211&language=en-US',
        fetchActionMovies: '/discover/movie?api_key=d52e0431788e3e1fb9bfef780e147211&with_genres=28',
        fetchComedyMovies: '/discover/movie?api_key=d52e0431788e3e1fb9bfef780e147211&with_genres=35',
        fetchHorrorMovies: '/discover/movie?api_key=d52e0431788e3e1fb9bfef780e147211&with_genres=27',
        fetchRomanceMovies: '/discover/movie?api_key=d52e0431788e3e1fb9bfef780e147211&with_genres=10749',
        fetchMystery: '/discover/movie?api_key=d52e0431788e3e1fb9bfef780e147211&with_genres=9648',
        fetchSciFi: '/discover/movie?api_key=d52e0431788e3e1fb9bfef780e147211&with_genres=878',
        fetchWestern: '/discover/movie?api_key=d52e0431788e3e1fb9bfef780e147211&with_genres=37',
        fetchAnimation: '/discover/movie?api_key=d52e0431788e3e1fb9bfef780e147211&with_genres=16',
        fetchTV: '/discover/movie?api_key=d52e0431788e3e1fb9bfef780e147211&with_genres=16',
};

export default requests;