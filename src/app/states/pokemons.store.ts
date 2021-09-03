import { Injectable } from '@angular/core';
import { Pokemon } from '../shared/models/pokemon.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface PokemonState extends EntityState<Pokemon, string> {
   pokemons: Pokemon[];
   selectedPokemon: Pokemon;
   loadingSelectedPokemon: boolean;
}

export function createInitialState(): PokemonState {
  return {
    pokemons: [],
    selectedPokemon: {
      base_experience: 0,
      height: 0,
      id: 0,
      is_default: false,
      location_area_encounters: '',
      name: '',
      order: 0,
      sprites: { 
        other: {
          'official-artwork': {
            front_default: ''
        }
      }
    },
      weight: 0,
    },
    loadingSelectedPokemon: false
  };
}
 
@Injectable({
  providedIn: 'root'
})

@StoreConfig({ name: 'pokemons' })
export class PokemonsStore extends EntityStore<PokemonState, Pokemon> {
  constructor() {
    super(createInitialState());
  }

  public setPokemons(pokemons: Pokemon[]) {
    this.set(pokemons)
    this.update(state => ({
        ...state,
        pokemons
    }))
  }

  public setLoadingSelectedPokemon(loading: boolean) {
    this.update(state => ({
      ...state,
      loadingSelectedPokemon: loading
    }))
  }

  public setSelectedPokemon(pokemon: Pokemon) {
    this.update(state => ({
      ...state,
      selectedPokemon: pokemon
    }))
  }

}

