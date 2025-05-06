let image = ["url('Resources/background.jpeg')",
  "url('Resources/background1.jpeg')","url('Resources/background2.jpeg')"];
let backgroundimage = document.getElementById("firstNav")
let counter = 0
function onload(){
  setInterval(function(){
          /* background-image:linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), url("Resources/coffee_image.png"); */

      backgroundimage.style = `background-image:linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), ${image[counter]}` 
      counter++;
      if(counter>3) counter = 0;
  }
,2000
  )
}
onload()   

var userNameStorage= window.localStorage.getItem("username"); 
document.getElementById("userNameStorage").textContent=`Hello ${userNameStorage}`;


let products;

  var fetchAll = async () => {
    try {
      const response = await fetch('http://localhost:3000/products');  
      const users = await response.json();         
      console.log(users);
  products=users;
      const itemContainer = document.querySelector('.itemOurProduct'); 
  
      itemContainer.innerHTML = '';
  
      users.forEach((user,i) => {
        const userItem = `
          <div class="item" >
            <img src="${user.image}" alt="${user.productname}" />
            <h3>${user.productname}</h3>
            <h3>$${user.price}</h3>
            <div class="viewAndAddCart">
              <a onclick="addToLocalStorage(${i})">
                <i class="fa-solid fa-plus"></i>
              </a>
              <a href="showOneDataDetailsUpdate.html?id=${user.ID}">
                <i class="fa-solid fa-eye"></i>
              </a>
            </div>
          </div>
        `;
  
        itemContainer.innerHTML += userItem;
      });
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };



  fetchAll();




  var fetchCoffee = async () => {
    try {
      const response = await fetch('http://localhost:3000/products');  
      const users = await response.json();         
      console.log(users);  
      products=users;

      const itemContainer = document.querySelector('.itemOurProduct');  
      
      if (!itemContainer) {
        console.error("itemOurProduct container not found!");
        return;
      }
  
      itemContainer.innerHTML = '';
  
  
      users.forEach((user,i) => {
        console.log(user.category); 
        if (user.category === 'Coffee') {
          const userItem = `
            <div class="item">
              <img src="${user.image}" alt="${user.productname}" />
              <h3>${user.productname}</h3>
              <h3>$${user.price}</h3>
              <div class="viewAndAddCart">
              <a onclick="addToLocalStorage(${i})">
                  <i class="fa-solid fa-plus"></i>
                </a>
              <a href="showOneDataDetailsUpdate.html?id=${user.ID}">
                  <i class="fa-solid fa-eye"></i>
                </a>
              </div>
            </div>
          `;
          itemContainer.innerHTML += userItem;
        }
      });
  
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };


  var fetchTea = async () => {
    try {
      const response = await fetch('http://localhost:3000/products');  
      const users = await response.json();        
      console.log(users); 
      products=users;

      const itemContainer = document.querySelector('.itemOurProduct'); 
  
      if (!itemContainer) {
        console.error("itemOurProduct container not found!");
        return;
      }
  
      itemContainer.innerHTML = '';
  
  
      users.forEach((user,i) => {
        console.log(user.category); 
        if (user.category === 'Tea') {
          const userItem = `
            <div class="item">
              <img src="${user.image}" alt="${user.productname}" />
              <h3>${user.productname}</h3>
              <h3>$${user.price}</h3>
              <div class="viewAndAddCart">
              <a onclick="addToLocalStorage(${i})">
                  <i class="fa-solid fa-plus"></i>
                </a>
              <a href="showOneDataDetailsUpdate.html?id=${user.ID}">
                  <i class="fa-solid fa-eye"></i>
                </a>
              </div>
            </div>
          `;
          itemContainer.innerHTML += userItem;
        }
      });
  
  
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };



  var fetchNescafe = async () => {
    try {
      const response = await fetch('http://localhost:3000/products');  
      const users = await response.json();         
      console.log(users);  
      products=users;

      const itemContainer = document.querySelector('.itemOurProduct');  
  
      if (!itemContainer) {
        console.error("itemOurProduct container not found!");
        return;
      }
  
      itemContainer.innerHTML = '';
  
      let foundItems = 0;
  
      users.forEach((user,i) => {
        console.log(user.category); 
        if (user.category === 'Nescafe') {
          foundItems++;
          const userItem = `
            <div class="item">
              <img src="${user.image}" alt="${user.productname}" />
              <h3>${user.productname}</h3>
              <h3>$${user.price}</h3>
              <div class="viewAndAddCart">
              <a onclick="addToLocalStorage(${i})">
                  <i class="fa-solid fa-plus"></i>
                </a>
              <a href="showOneDataDetailsUpdate.html?id=${user.ID}">
                  <i class="fa-solid fa-eye"></i>
                </a>
              </div>
            </div>
          `;
          itemContainer.innerHTML += userItem;
        }
      });
    
    } catch (error) {
      console.error('Error fetching users:', error);
    }
    
  };




 function addToLocalStorage (i){
console.log("islam")
  let arrMyObject = JSON.parse(window.localStorage.getItem("myprodect"));

  if(!arrMyObject){
    arrMyObject=[];
    arrMyObject.push(products[i])
    localStorage.setItem("myprodect",[ JSON.stringify(arrMyObject)]);
    console.log(products[i]);
  }
  else {
    arrMyObject.push(products[i])
    localStorage.setItem("myprodect",[ JSON.stringify(arrMyObject)]);

  }

 
 }


  







