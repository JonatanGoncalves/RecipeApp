import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';

const ReceitaPageScreen = () => {
  return (
    <View style={styles.miojoContainer}>
      <Text style={styles.miojoText}>Nenhuma opção escolha vai de Miojo 🍜🍜</Text>
    </View>
  );
};

const HomePageScreen = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/search.php?s=fish'
      );
      setRecipes(response.data.meals);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>Receitas</Text>
      {recipes.map((recipe, index) => (
        <View key={index} style={{ marginVertical: 10 }}>
          <Image
            source={{ uri: recipe.strMealThumb }}
            style={{ width: 200, height: 150, borderRadius: 10 }}
          />
          <Text style={{ textAlign: 'center' }}>{recipe.strMeal}</Text>
        </View>
      ))}
      <ReceitaPageScreen />
    </ScrollView>   
  );
};

const styles = StyleSheet.create({
    miojoContainer: {
      backgroundColor: '#f0f0f0',
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
      alignItems: 'center',
    },
    miojoText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'green',
    },
  });

export default HomePageScreen;    