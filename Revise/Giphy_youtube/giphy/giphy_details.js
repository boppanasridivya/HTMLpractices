let APIKEY ="mIgZvVdklmik81SneSlRuUiqLcfCSA62";

const details = async() =>{
    let id = JSON.parse(localStorage.getItem("details"));
    try{
        let response = await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${APIKEY}`);
        let data = await response.json();
        console.log(data);
        appendToDOM(data.data);
    }
    catch(error){
        console.log(error);
    }
}
details();

const appendToDOM = (data) =>{
       let details = document.getElementById("details");

       let image = document.createElement("img");
       image.src= data.images.original.url;

       details.append(image);
}