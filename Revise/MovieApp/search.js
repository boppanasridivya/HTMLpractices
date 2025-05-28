let slideShowArray = [
  "https://image-resizer-cloud-api.akamaized.net/image/F1DE08EE-79B3-44CC-90D9-0303FE935BCC/0-3x1.jpg?width=1800&updatedTime=2024-08-30T14:33:20Z&dt=Web",
  "https://image-resizer-cloud-api.akamaized.net/image/3D24C9D0-A513-488B-9CAF-50D4BF2D13C3/0-3x1.jpg?width=1800&updatedTime=2024-08-30T14:37:12Z&dt=Web",
  "https://image-resizer-cloud-api.akamaized.net/image/2CD58353-24C9-4F51-9279-C8E1746D5C1F/0-3x1.jpg?width=1800&updatedTime=2024-08-31T12:12:14Z&dt=Web",
];

function slideShow(){
    let i=0;

    let div = document.getElementById("carousel");
   
    let img = document.createElement("img");
    img.src=slideShowArray[0];;

    div.append(img);

    setInterval(() =>{
           if(i===slideShowArray.length-1){
        i=0;
    }
    else{
        img.src=slideShowArray[i];
        i=i+1;
    }
    },3000)

 
}

slideShow();


// searchFunction this is used to get the title and poster fromthe api
async function SearchFunction(){
    try{
        let loader_div = document.getElementById("loader")
        
        loader_div.style.display = "block";
        
        let query = document.getElementById("input").value;

        let response = await fetch(`http://www.omdbapi.com/?apikey=918341e&s=${query}`);
        let data = await response.json();

        console.log(data.Search);
        appendMovies(data.Search)

    }
    catch(error){
        console.log("error :", error)
    }
}

//function appendMovies is used to append the data in to the loader page
function appendMovies(data){
    let loader_div = document.getElementById("loader");
    loader_div.style.display = "none";
    
    let data_div= document.getElementById("movies");
    data_div.innerHTML="";

    data_div.id ="movies";

    data.forEach((element) => {
        let div = document.createElement("div");

        let title = document.createElement("p");
        title.innerHTML = `Name : ${element.Title}`;

        let year = document.createElement("p");
        year.innerHTML = `Year of release : ${element.Year}`;

        let posters = document.createElement("img");
        posters.src = `${element.Poster}`
        div.append(posters, title,year);



        data_div.append(div);
    });
  

}


//debouncing technique we are using to reduce the api calls
let inputQuery = document.getElementById("input");


inputQuery.addEventListener("keyup", function(e){
  let query = e.target.value;
  debouncedResult(query);
})


function debounce(fetchData, delay){
    let timerId;
    return function(arg){
        clearTimeout(timerId);

        timerId=setTimeout(() => {
            fetchData(arg);
        }, delay);
    }
}
let debouncedResult = debounce(fetchData, 1500);

// function fetchData(query){
//     console.log("fetchdata:", query);
// }

async function fetchData(query){
    try {
        console.log("fetchdata:", query);
        let response = await fetch(`http://www.omdbapi.com/?apikey=918341e&s=${query}`);
        let data = await response.json();
        
        if (data.Search) {
            showMovies(data.Search); // Use your filtering logic
        } else {
            appendMovies([]); // Clear results or show "No results"
        }
    } catch (error) {
        console.log("Error  fetchData:", error);
    }
}

//searching for that movie whichever related to the letter based
function showMovies(data){
    let searchText = document.getElementById("input").value.toLowerCase();
    const filteredMovies = data.filter((movie)=>{
       return movie.Title.toLowerCase().includes(searchText);
    });
    appendMovies(filteredMovies);
}