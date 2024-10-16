getfetch();
async function getfetch(){
    try{
        let pokemonname= document.getElementById("pokemonname").value.toLowerCase()
    let response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)
     if(!response.ok){
        throw new Error("could nit find");
        
        

    }
    let data =await response.json();
    let pokemonsprite=data.sprites.front_default;
    let imgELement=document.getElementById("pokemonsprite")
    imgELement.src= pokemonsprite;
    imgELement.style.display="block";
}
    catch(error){
 console.error(error)
    }



}