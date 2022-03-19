const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();

    
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
   
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./assets/error.jpg")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            let tipoPokemon = data.types[0].type.name;
            console.log(tipoPokemon);
            tipoPok(tipoPokemon);

            let moves = data.moves[1].move.name;
            console.log(moves);
            movimiento(moves);

            let estadistica = data.stats[5].stat.name;
            console.log(estadistica);
            datos(estadistica);

            let habilidad = data.abilities[1].ability.name;
            console.log(habilidad);
            habil(habilidad);
        }
        
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const tipoPok = (url) =>{
    tipoPokemon= document.getElementById("tipo_D");
    tipoPokemon.textContent = url;
}
const movimiento = (url) => {
    moves = document.getElementById("movePoke");
    moves.textContent = url;
}
const datos = (url) =>{
    estadistica = document.getElementById("datoPoke");
    estadistica.textContent = url;
}
const habil = (url) =>{
    habilidad = document.getElementById("habil")
    habilidad.textContent = url;
}




