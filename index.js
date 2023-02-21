


fetch("https://fakestoreapi.com/products",)
.then((resp) =>  resp.json())
.then((data) => {
    let = vana = "",
    data.map((value) =>{
      vana += `<div class="card">
      <h1 class="title">${value.title}</h1>
      <img src=${value.image} class="images">
      <p>${value.description}</p>
      <p class="category">${value.category}</p>
      <p class="price">${value.price}</p>
      </div>`;
    });
    document.getElementById("cards").innerHTML = vana;

    console.log(cards)
    
}).catch((err) =>{

})