const movies =[
    // {
    //     name: "RRR",
    //     rating: 9,
    //     img : "https://img10.hotstar.com/image/upload/f_auto,q_90,t_web_vl_3x/sources/r1/cms/prod/9349/1713504779349-h"
    // },
    {
        name: "Lion King",
        rating: 8.9,
        img:"https://img10.hotstar.com/image/upload/f_auto,q_90,t_web_vl_3x/sources/r1/cms/prod/5242/875242-v",
    },
    // {
    //     name: "Frozen",
    //     rating: 8.5,
    //     img:"https://img10.hotstar.com/image/upload/f_auto,q_90,t_web_vl_3x/sources/r1/cms/prod/8839/808839-t",
    // },
    // {
    //     name: "Alladin",
    //     rating: 9.2,
    //     img:"https://img10.hotstar.com/image/upload/f_auto,q_90,t_web_vl_3x/sources/r1/cms/prod/5168/795168-t",
    // },
    {
        name: "The JUngle Book",
        rating: 8.2,
        img:"https://img10.hotstar.com/image/upload/f_auto,q_90,t_web_vl_3x/sources/r1/cms/prod/4822/674822-h",
    },
    // { 
    //     name: "Frozen-2",
    //     rating: 9,
    //     img:"https://img10.hotstar.com/image/upload/f_auto,q_90,t_web_vl_3x/sources/r1/cms/prod/2315/1412315-t-81e824c83128"
    // },
    {
        name: "SeethaRamam",
        rating: 9.7,
        img:"https://img10.hotstar.com/image/upload/f_auto,q_90,t_web_vl_3x/sources/r1/cms/prod/3075/1721799583075-i"
    },
      {
            name: "Brahmastra",
            rating: 5.6,
           img:"https://img10.hotstar.com/image/upload/f_auto,q_90,t_web_vl_3x/sources/r1/cms/prod/5909/1721644845909-i"
      },
    // {
    //     name: "SALAR",
    //     rating: 7,
    //     img:"https://img10.hotstar.com/image/upload/f_auto,q_90,t_web_vl_3x/sources/r1/cms/prod/5174/1722086485174-t"
    // },
    {
        name: "Moana",
        rating: 8.9,
        img:"https://img10.hotstar.com/image/upload/f_auto,q_90,t_web_vl_3x/sources/r1/cms/prod/8261/1548261-i-67a6fca38e23"
    },
    {
        name: "RRR",
        rating: 8,
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7642/1307642-v-3d3b6c61f97e",
      },
      {
        name: "Goodluck Jerry	",
        rating: 7,
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/901/1310901-v-e9763c24f44d",
      },
      {
        name: "MSD",
        rating: 8.5,
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v",
      },
      {
        name: "Doctor Strange",
        rating: 9,
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9948/1279948-v-cc9471178e40",
      },
      {
        name: "Ford vs Ferrari",
        rating: 8.7,
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3150/813150-v",
      },
      {
        name: "Masaan",
        rating: 8.8,
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/7441/1000087441/1000087441-v",
      },
      {
        name: "The lion king",
        rating: 8.4,
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5242/875242-v",
      }
]
   let slideShowArr= [
        "https://image-resizer-cloud-api.akamaized.net/image/3E153C8E-8C6E-47E9-8697-79644726744B/0-3x1.jpg?width=1800&updatedTime=2024-10-01T12:02:10Z&dt=Web",
       "https://image-resizer-cloud-api.akamaized.net/image/F1DE08EE-79B3-44CC-90D9-0303FE935BCC/0-3x1.jpg?width=1800&updatedTime=2024-08-30T14:33:20Z&dt=Web",
       "https://image-resizer-cloud-api.akamaized.net/image/3D24C9D0-A513-488B-9CAF-50D4BF2D13C3/0-3x1.jpg?width=1800&updatedTime=2024-08-30T14:37:12Z&dt=Web",
       "https://image-resizer-cloud-api.akamaized.net/image/2CD58353-24C9-4F51-9279-C8E1746D5C1F/0-3x1.jpg?width=1800&updatedTime=2024-08-31T12:12:14Z&dt=Web"
];


   function slideShow(){
    let i = 0;
    let div = document.getElementById("carousel");
    let image = document.createElement("img");
    image.src = slideShowArr[0];

    div.append(image);
    
    setInterval(function(){
        if(i == slideShowArr.length){
            i =0;
        }
            image.src =slideShowArr[i]; //0,1,2,3,4,0,1,2,3,4
            i = i+1;
    //  console.log(i)
    }, 2000);


   }
   slideShow();

   function appendMovies(data) {
     let data_div = document.getElementById("basic");
     data_div.innerHTML ="";
     data_div.id ="movies";

     //we need to write forEach to iterate the items in movies variables.
     data.forEach(function(elem){
        let div = document.createElement("div");

        let p_name = document.createElement("p");
        p_name.innerHTML = `Name : ${elem.name}`;

        let p_rating = document.createElement("p");
        p_rating.innerHTML = `Rating : ${elem.rating}`;

        let uploadPics = document.createElement("img");
        uploadPics.id = "poster";
        uploadPics.src = elem.img;

        div.append(uploadPics, p_name, p_rating)
        data_div.append(div);

        // console.log(div);
     })


   }
   let myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      let data = movies;
  
      if (data != null) {
        resolve(data);
      } else {
        reject("Err: server could not send data");
      }
    }, 3000);
  });
  
  async function main() {
    try {
      let response = await myPromise;
  
      appendMovies(response); //generall we do api call
    } catch (error) {
      console.log("error:", error);
    }
  }
  
  main();

  //searching for the movie write functionality here

  let searchItem = document.getElementById("search-bar");
  searchItem.addEventListener("click" ,searchMovies);

  async function searchMovies() {
    try{

      let query = document.getElementById("query").value;

      let response = await fetch(
        `http://www.omdbapi.com/?apikey=918341e&s=${query}`
      );

      let data = await response.json();//to convert json to object data;
      console.log(data);

      appendMovie(data.Search);
   
    }
    catch(error){
      console.log("fetchError", error);
    }
  }

  function appendMovie(data){
     let loader_div =document.getElementById("basic");
    //  loader_div.style.display = "none";

     let data_div = document.getElementById("movies");

     data_div.innerHTML="";

     data.forEach(function(element){
      let div = document.createElement("div");
      
      let title = document.createElement("p");
      title.innerText = `Name : ${element.Title}`;

      let year = document.createElement("p");
      year.innerText = `Year : ${element.Year}`;

      let poster = document.createElement("img");
      poster.id = "poster";

      poster.src = element.Poster;

      div.append(poster, title, year);

      data_div.append(div);
      console.log(div);
  });



  }