import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, Image, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=251");
        const data = await response.json();

        // Obtener detalles y filtrar solo tipo "grass"
        const detailedPokemon = await Promise.all(
          data.results.map(async (poke) => {
            const res = await fetch(poke.url);
            const details = await res.json();

            // Extraer el primer tipo del Pokémon
            const primaryType = details.types[0]?.type.name || "unknown";

            // Solo incluir Pokémon de tipo "grass"
            if (primaryType === "fire") {
              return {
                name: poke.name,
                id: details.id,
                image: details.sprites.front_default,
                type: primaryType,
              };
            }
            return null;
          })
        );

        // Filtrar valores nulos y actualizar el estado
        setPokemon(detailedPokemon.filter(Boolean));
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right, flex: 1, backgroundColor: "black" }}>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={pokemon}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              {/* ID con fondo circular */}
              <View style={styles.idContainer}>
                <Text style={styles.idText}>{item.id}</Text>
              </View>

              {/* Imagen del Pokémon */}
              <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />

              {/* Nombre y tipo */}
              <Text style={styles.name}>{item.name}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
  },
  card: {
    alignItems: "center",
    marginBottom: 30,
    position: "relative", // Necesario para posicionar el ID
  },
  idContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "red",
    width: 40,
    height: 40,
    borderRadius: 20, // Hace que sea un círculo
    justifyContent: "center",
    alignItems: "center",
  },
  idText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  image: {
    width: 220,
    height: 220,
    marginBottom: -10, // Sube el nombre más cerca de la imagen
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    textTransform: "capitalize",
  },
  type: {
    fontSize: 18,
    color: "white",
    marginTop: 5,
  },
});

export default PokemonList;
