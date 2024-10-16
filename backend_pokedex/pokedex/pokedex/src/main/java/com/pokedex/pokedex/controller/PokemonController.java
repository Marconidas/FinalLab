package com.pokedex.pokedex.controller;

import com.pokedex.pokedex.model.Pokemon;
import com.pokedex.pokedex.service.PokemonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pokemons")
public class PokemonController {
    @Autowired
    private PokemonService pokemonService;

    @GetMapping
    public List<Pokemon> getAllPokemons() {
        return pokemonService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pokemon> getPokemonById(@PathVariable Long id) {
        Pokemon pokemon = pokemonService.findById(id);
        if (pokemon != null) {
            return ResponseEntity.ok(pokemon);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Pokemon> createPokemon(@RequestBody Pokemon pokemon) {
        Pokemon newPokemon = pokemonService.save(pokemon);
        return ResponseEntity.ok(newPokemon);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePokemon(@PathVariable Long id) {
        pokemonService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
