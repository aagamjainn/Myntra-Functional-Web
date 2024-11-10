let bagItems =[];

onLoad();
displayItemsOnHomePage();
function onLoad(){
      
      let bagItemCount = localStorage.getItem("bag_count");
      bagItems = bagItemCount ? JSON.parse(bagItemCount) : [];
      
      displayBagCount();
      // localStorage.removeItem("bag_count");
}


function addToBag(itemId){
      bagItems.push(itemId);
      localStorage.setItem("bag_count",JSON.stringify(bagItems));
      displayBagCount();
      

}


function displayBagCount(){
      let count = document.querySelector(".count");
      console.log(bagItems.length)
      if(bagItems.length > 0){
            count.innerHTML = bagItems.length;
            count.style.visibility = 'visible';
      }else {
            count.style.visibility = 'hidden';
      }
}


function displayItemsOnHomePage() {
      let itemsContainerElement = document.querySelector(".items-container");
      if(!displayItemsOnHomePage){
            return;
      }
      let innerHtml = '';
      item_value.forEach(item => {
            innerHtml += `<div class="item-container">
            <img class="item-image" src="${item.image}" alt="carlton london">
            <div class="rating">
                  ${item.rating.stars} ⭐|${item.rating.count}k
            </div>
            <div class="company-name">
                  ${item.company}
            </div>
            <div class="item-name">
                  ${item.item_name}
            </div>
            <div class="item-price">
                  <span class="current-price"> ₹${item.current_price}</span>  
                  <span class="original-price"> ₹${item.original_price}</span>
                  <span class="discount"> (${item.discount_percentage}% OFF)</span>
            </div>
      
            <button class="btn-add-bag" onclick="addToBag(${item.id})"> Add to Bag</button>
      </div>`
      });

      itemsContainerElement.innerHTML = innerHtml;
}





