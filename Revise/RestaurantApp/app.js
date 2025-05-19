const tables=[
    {id:"table1",name:"table-1",total:0,items:{}},
    {id:"table2",name:"table-2",total:0,items:{}},
    {id:"table3",name:"table-3",total:0,items:{}},
];

const menuItems =[
    {id:"item1", name:"Biryani",type:"main-course",price:"100"},
    {id:"item2", name:"Mushroom Manchuria",type:"Starter",price:"200"},
    {id:"item3", name:"Brownie",type:"Dessert",price:"150"},
];

document.addEventListener("DOMContentLoaded", ()=>{
    renderTables(tables);
    renderMenu(menuItems);
});
//function for menu items
function renderMenu(menuItems){
    const menuContainer = document.getElementById("menu-container");
    menuContainer.innerHTML="";

    menuItems.forEach((item) =>{
        const menuItem= document.createElement("div");
        menuItem.className ="menu-item";
        menuItem.id = item.id;

        menuItem.draggable= true;//allows dragging
        menuItem.dataset.name = item.name;
        menuItem.dataset.type = item.type;
        menuItem.dataset.price = item.price;

        menuItem.innerHTML=`
        <h4>${item.name}</h4>
        <p>${item.price}</p>
        <p>Type :${item.type}</p>
        `;
        menuContainer.append(menuItem);
       console.log(menuContainer);

       menuItem.addEventListener("dragstart", dragStart);
    })
}

//function for tables
function renderTables(tables){
    const tableContainer = document.getElementById("table-container");
    tableContainer.innerHTML="";

    tables.forEach((table) =>{
        let tableCard = document.createElement("div");
        tableCard.className="table-card";
        tableCard.id=table.id;

        tableCard.innerHTML=`
        <h3>${table.name}</h3>
        <p>Total:${table.total}</p>
        <p>Items:${Object.values(table.items) .reduce(
            (a, b) => a + b.quantity,
            0
          )}</p>
        `
     tableContainer.append(tableCard);
     tableCard.addEventListener("dragover", dragOver);
     tableCard.addEventListener("drop", itemDrop);
    });
}
//it is used to drag the elements from the menu table
function dragStart(event){
    event.dataTransfer.setData("text/plain", event.target.id);
}

//it allows to drag from the emnu and allow where we can drop
function dragOver(event){
    event.preventDefault();
}

//function drop allows to drop the item

function itemDrop(event){
  event.preventDefault();
  const itemId = event.dataTransfer.getData("text");
  const itemElement = document.getElementById(itemId);
  const itemName = itemElement.dataset.name;
  const itemPrice = parseFloat(itemElement.dataset.price);
  const tableId = event.target.id;

  if(itemName && itemPrice && tables.find((table) => table.id === tableId)){
      addItemToTable(tableId,itemName, itemPrice)
  }
}
function addItemToTable(tableId,itemName,itemPrice){
    const table = tables.find((table) => table.id === tableId);

    if(!table.items[itemName]){
        table.items[itemName] = { quantity: 0, price: itemPrice };
    }
    table.items[itemName].quantity++;
    table.total = table.total+itemPrice;

    const tableCard = document.getElementById(tableId);
    tableCard.querySelector("p").textContent = `Total: ${table.total}`;

    tableCard.querySelector(
        "p:nth-of-type(2)"
      ).innerText = `Items: ${Object.values(table.items).reduce(
        (a, b) => a + b.quantity,
        0
      )}`;
      
}