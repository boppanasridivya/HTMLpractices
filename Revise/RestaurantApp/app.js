const tables=[
    {id:"table1", name:"table-1",total:0, items:{}},
    {id:"table2", name:"table-2",total:0, items:{}},
    {id:"table3", name:"table-3",total:0, items:{}},

];
const menuItems=[
    {id:"item1", name:"Biryani",price:"150", type:"main-course" },
    {id:"item2", name:"Pizza",price:"120", type:"main-course" },
    {id:"item3", name:"Sandwitz",price:"200", type:"main-course" },
    {id:"item4", name:"Mushroom Manchuria",price:"150", type:"Starter" },
    {id:"item5", name:"Brownie",price:"250", type:"Dessert" }
];
//whenever html page renders I need to get table and menu data on html page
document.addEventListener("DOMContentLoaded", ()=>{
    renderTables(tables);
    renderMenu(menuItems);
})
//this is used to get the items in the menu
function renderMenu(menuItems){
  const menuContainer = document.querySelector("#menu-container");
  menuContainer.innerHTML = "";

  menuItems.forEach((item) =>{
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";
    menuItem.id = item.id;
    menuItem.draggable=true;
    menuItem.dataset.name = item.name;
    menuItem.dataset.price=item.price;
    menuItem.dataset.type=item.type;
//accessing html content u can create document.createElement like that also

    menuItem.innerHTML=`
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            <p>${item.type}</p>
    `;

    menuContainer.append(menuItem);
  })
}

function renderTables((table){
  const table = document.createElement("div");
  table.className ="table-num"
  table.id = table.id;

  table.innerHTML`
  
  `
})