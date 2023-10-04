// services/movieService.js
export default {
  async getMovies() {
    try {
      const response = await fetch("http://localhost:5555/movies");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao obter a lista de filmes:", error);
      throw error;
    }
  },
};
