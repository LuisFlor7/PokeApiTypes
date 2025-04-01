const fetchPokemon = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=251");
      const data = await response.json();

      // Obtener detalles de cada Pokémon
      const detailedPokemon = await Promise.all(
        data.results.map(async (poke) => {
          const res = await fetch(poke.url);
          const details = await res.json();
          return {
            name: poke.name,
            id: details.id,
            image: details.sprites.front_default,
            type: details.types[0]?.type.name || "Desconocido",
          };
        })
      );

      setPokemon(detailedPokemon);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    } finally {
      setLoading(false);
    }
  };

  export default fetchPokemon;