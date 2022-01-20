const API_kEY = "e62436669c4692655a121e0085af38df";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais GLMovies",
        items: await basicFetch(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${API_kEY}`
        ),
      },
      {
        slug: "trending",
        title: "Recomendados para você.",
        items: await basicFetch(
          `/trending/all/week?language=pt-BR&api_key=${API_kEY}`
        ),
      },
      {
        slug: "toprated",
        title: "Em alta",
        items: await basicFetch(
          `/movie/toprated?language=pt-BR&api_key=${API_kEY}`
        ),
      },
    ];
  },
};
