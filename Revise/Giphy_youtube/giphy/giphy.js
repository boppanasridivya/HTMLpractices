let APIKEY ="mIgZvVdklmik81SneSlRuUiqLcfCSA62";

const main = async()=>{
    try{
        let response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}`);

        let data = await response.json();
        // console.log(data);
        appendToDOM(data.data);  //from the api
    }
    catch(error){
        console.log(error);
    }
}

const appendToDOM = (data) =>{  //here data means array of objects

         let gifyContent = document.querySelector("#giphy");
        let stickerContent = document.querySelector("#sticker");

        gifyContent.innerHTML="";
        stickerContent.innerHTML="";

        let main = document.getElementById("main");
        main.innerHTML="";
    data.forEach((element) => {  //looping the elements in the array
        
   

        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = element.images.downsized.url;

        image.addEventListener("click", ()=>{
            details_gif(element.id);  //whenever we are clicking on an gif it has to open in gip page based on id we will target
        })

        div.append(image);

        main.append(div);

    });
}
main();

const details_gif = (id) =>{
    localStorage.setItem("details", JSON.stringify(id));

    window.location.href ="./giphy_details.html";
}
const giphySearch = async() =>{
    let query = document.querySelector("#search").value;

    if(query===""){
        alert("please search here");
    }
    else{
       try{
         let response= await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${query}`);
        let data = await response.json();
       appendToDOM(data.data);
       }
       catch(error){
        console.log(error);
       }
    }

}
giphySearch();