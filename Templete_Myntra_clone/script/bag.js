let bagItemObject;
onLoad();

function onLoad() {
      loadBagItemObjects();
      displayBagItems();
      displayBagSummary();
}

function displayBagSummary(){
      let bagSummaryElement = document.querySelector(".bag-summery");
      let total = 0;
      let current_total = 0;
      bagItemObject.forEach(item => {
            total += item.original_price;
            current_total += item.current_price;
      })
      console.log(total)

      let content = `
      <div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (Item ${bagItemObject.length})</div>
            <div class="price-item">
                  <span class="price-item-tag">
                        Total MRP
                  </span>
                  <span class="price-item-value">
                        ₹${total}
                  </span>
            </div>
            <div class="price-item">
                  <span class="price-item-tag">
                        Discount on MRP
                  </span>
                  <span class="price-item-value priceDetail-base-discount">
                        -₹${total-current_total}
                  </span>
            </div>
            <div class="price-item">
                  <span class="price-item-tag">
                        Convenience Fee
                  </span>
                  <span class="price-item-value">
                        ₹99
                  </span>
            </div>
            <hr>
            <div class="price-footer">
                  <span class="price-item-tag">
                        Total Amount
                  </span>
                  <span class="price-item-value">
                        ₹${total-(total-current_total)+99}
                  </span>
            </div>
      </div>
      <button class="btn-place-order">
            <div class="css-xjhrni">
                  PLACE ORDER
            </div>
      </button>
      `;

      bagSummaryElement.innerHTML = content;
}



function loadBagItemObjects() {
      console.log(bagItems);
      bagItemObject = bagItems.map(itemId => {
            for (let i = 0; i < item_value.length; i++) {
                  if (itemId == item_value[i].id) {
                        return item_value[i];
                  }
            }
      });

      console.log(bagItemObject);
}

function removeItem(itemId){
      bagItems = bagItems.filter(removeitemID => removeitemID != itemId);
      localStorage.setItem("bag_count",JSON.stringify(bagItems));
      displayBagCount();
      loadBagItemObjects();
      displayBagItems();
      displayBagSummary();
}

function displayBagItems() {
      let main_area = document.querySelector(".bag-items-container");
      let content = '';
      bagItemObject.forEach(element => {
            content += `
            <div class="bag-item-container">
                  <div class="item-left-part">
                        <img class="bag-item-img" src="${element.image}" alt="">
                  </div>
                  <div class="item-right-part">
                        <div class="company">
                              ${element.company}
                        </div>
                        <div class="item-namee">
                              ${element.item_name}
                        </div>
                        <div class="price-container">
                              <div class="item-pricee">
                                    <span class="current-price"> ₹${element.current_price}</span>
                                    <span class="original-price"> ₹${element.original_price}</span>
                                    <span class="discount"> (${element.discount_percentage}% OFF)</span>
                              </div>
                        </div>
                        <div class="return-period">
                              <span class="return-period-days">${element.return_period} days</span> return available
                        </div>
                        <div class="delivey-details">
                              Delivery by
                              <span class="delivery-details-days">
                                    ${element.delivery_date}
                              </span>
                        </div>
                  </div>
                  <div onclick="removeItem(${element.id})" class="remove-from-chart">
                        X
                  </div>
            </div>
            `;

      });


      main_area.innerHTML = content;
}






