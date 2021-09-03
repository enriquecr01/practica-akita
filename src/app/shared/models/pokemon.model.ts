
export interface Pokemon {
    // abilities?: Abilitie[];
    base_experience?: number;
    // forms: Form[];
    // game_indices: GameIndice[];
    height: number;
    //held_items: []
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    //moves: (93) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    name: string;
    order: number;
    //species: {name: "charmander", url: "https://pokeapi.co/api/v2/pokemon-species/4/"}
    sprites: any;
    //stats: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
    //types: [{…}]
    weight: number;
}