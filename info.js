

let animesFiltradas = [];

fetch("anime.json")
    .then(res => res.json())
    .then(animes => {
        animesFiltradas = animes;
        
        crearInfo();
        
    });

    function crearInfo() {
        const queryString = document.location.search;

        const params= new URLSearchParams(queryString);

        const id = params.get("id");
        
        const animeBuscada = animesFiltradas.find(anime => anime.id == id);

        const contenedor = document.querySelector("contenedor_cards");

        if (animeBuscada) {
            contenedor_cards.innerHTML = `
        
                
                 
                
            <div class="clearfix">
              
              
               <img src="${animeBuscada.imagen}" class="col-md-3 float-md-start mb-3 ms-md-3" >
            
             <p><strong class="col-md-4 float-md-start mb-1 ms-md-3">${animeBuscada.informacion}</strong></p>
            

            </div>`;
            
        } else {
              contenedor.innerHTML = `<p>Anime no encontrado</p>`;
        }
    }


  