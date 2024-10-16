package com.pokedex.pokedex.service;

import com.pokedex.pokedex.model.Pokemon;
import com.pokedex.pokedex.repository.PokemonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PokemonService {
    @Autowired
    private PokemonRepository pokemonRepository;

    public List<Pokemon> findAll() {
        return pokemonRepository.findAll();
    }

    public Pokemon findById(Long id) {
        return pokemonRepository.findById(id).orElse(null);
    }

    public Pokemon save(Pokemon pokemon) {
        return pokemonRepository.save(pokemon);
    }

    public void deleteById(Long id) {
        pokemonRepository.deleteById(id);
    }
}
