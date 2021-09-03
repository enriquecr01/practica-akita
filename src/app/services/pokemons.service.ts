import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Pokemon } from '../shared/models/pokemon.model';
import { PokemonsStore } from '../states/pokemons.store';
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient, private pokemons: PokemonsStore) { }

  getPokemons() {
    return this.http.get<any>(`${environment.API_URL}pokemon`).pipe(
      tap(pokemons => {
        let pokemonArray = []
        let pkmnRes = pokemons.results
        for (let i in pkmnRes) {
          pokemonArray.push({ id: i, name: pkmnRes[i].name, url: pkmnRes[i].url })
        }
        this.pokemons.setPokemons(pokemonArray);
      })
    );
  }

  getPokemon(name: string) {
    this.pokemons.setLoadingSelectedPokemon(true)
    this.http.get<any>(`${environment.API_URL}pokemon/${name}`).subscribe( pokemon => {
      this.pokemons.setLoadingSelectedPokemon(false)
      this.pokemons.setSelectedPokemon(pokemon);
    });
  }

}
