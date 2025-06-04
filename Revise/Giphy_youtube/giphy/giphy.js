let APIKEY ="mIgZvVdklmik81SneSlRuUiqLcfCSA62";

const main = async()=>{
    try{
        let response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}`);

        let data = await response.json();
        console.log(data);
        appendToDOM(data.data);  //from the api
    }
    catch(error){
        console.log(error);
    }
}

const appendToDOM = (data) =>{  //here data means array of objects

         let gifyContent = document.querySelector("#gify");
        let stickerContent = document.querySelector("#sticker");

        gifyContent.innerHTML="";
        stickerContent.innerHTML="";

        let main = document.getElementById("main");
        main.innerHTML="";
    data.forEach((element) => {  //looping the elements in the array
        
   

        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = element.images.downsized.url;

        div.append(image);

        main.append(div);

    });
}
main();