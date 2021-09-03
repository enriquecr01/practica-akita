import { Injectable } from '@angular/core';
import { Query, QueryEntity, StoreConfig } from '@datorama/akita';
import { PokemonsStore, PokemonState } from '../states/pokemons.store';

@Injectable({
  providedIn: 'root'
})

export class PokemonsQuery extends QueryEntity<PokemonState> {

  selectPokemons$ = this.select(state => {
    return state.pokemons
  })

  loadingPokemon$ = this.select(state => {
    return state.loadingSelectedPokemon
  })

  selectPokemon$ = this.select(state => {
    return state.selectedPokemon
  })
  
  constructor(protected store: PokemonsStore) {
    super(store);
  }
}
