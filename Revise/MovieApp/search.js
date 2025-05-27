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