import { Component, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PokemonsQuery } from './queries/pokemons.queries'
import { Pokemon } from './shared/models/pokemon.model';
import { PokemonState, PokemonsStore } from './states/pokemons.store'
import { tap, switchMap, filter } from 'rxjs/operators';
import { PokemonsService } from './services/pokemons.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica-akita';

  listPokemonsSub: Subscription
  pokemons$: Observable<Pokemon[]> = this.pokemonsQuery.selectAll()
  pokemonSelectedLoader$ = this.pokemonsQuery.loadingPokemon$;
  pokemon$ = this.pokemonsQuery.selectPokemon$;


  constructor(private pokemonsQuery: PokemonsQuery, private pokemonsService: PokemonsService) {
  }  

  ngOnInit(): void {
    this.listPokemonsSub = this.pokemonsQuery.selectPokemons$.pipe(
      switchMap(pokemons => {
        if (pokemons.length === 0) {
          return this.pokemonsService.getPokemons()
        }
      })
    ).subscribe(result => {});
  }


  getSelectedPokemon(name: string) {
    return this.pokemonsService.getPokemon(name)
  }

  ngOnDestroy() {
    if (this.listPokemonsSub) {
      this.listPokemonsSub.unsubscribe()
    }
  }

}
