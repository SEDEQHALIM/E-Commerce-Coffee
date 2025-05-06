
var userNameStorage= window.localStorage.getItem("username"); 
document.getElementById("userNameStorage").textContent=`Hello ${userNameStorage}`;

var showDetails = async () => {
    try {

      const urlParams = new URLSearchParams(window.location.search);
      const productId = Number(urlParams.get('id'));



      const response = await fetch('http://localhost:3000/products');
      const products = await response.json();
      console.log(products);  
  
      const itemContainer = document.querySelector('#dataItem');
    
      if (!itemContainer) {
        console.error("itemContainer not found!");
        return;
      }
    
      itemContainer.innerHTML = ''; 
    
      products.forEach(product => {
        if (product.ID === productId) {
          const productHtml = `
            <div class="divFotImg">
              <img src="${product.image}" alt="image of item">
            </div>
            <div class="divForDataOfImg">
              <h2>${product.productname}</h2>
              <p style="font-size: x-large; margine">Type of drink : <span style="color :#bc7018;;" >${product.type}</span></p> 
              <p> Description : <span style="color :#bc7018;;" > ${product.description}</span></p>

              <div style=" display: inline;margin-bottom: 40px ">
              <span class="priceItem">Price :  <span style="color :#bc7018;;" >$${product.price}</span> </span>
                            <span class="priceItem" style="margin-left: 170px;">Offer :  <span style="color :#bc7018;;" >$${product.offer}</span> </span>
              </div>




           

              <a href="cart.html"  >
              <input type="button" value="Add To Cart" id="buttoncart">
              </a>
            </div>
          `;
    
          itemContainer.innerHTML = productHtml;
        }
      });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  
  showDetails();