const products = [
  {
    id: "1",
    name: "Modern Vase",
    price: "₹999",
    image: "modernvase.jpg",
    description: "A stylish modern vase perfect for any home.",
    rating: "★★★★☆",
    reviews: "120 reviews"
  },
  {
    id: "2",
    name: "Wall Art Canvas",
    price: "₹1499",
    image: "wallartcanva.jpg",
    description: "Elegant wall art to enhance your living space.",
    rating: "★★★☆☆",
    reviews: "80 reviews"
  },
  {
    id: "3",
    name: "Decorative Lamp",
    price: "₹1,199",
    image: "decorativelamp.jpg",
    description: "A charming lamp to add a cozy feel to your room.",
    rating: "★★★★☆",
    reviews: "50 reviews"
  },
  {
    id: "4",
    name: "Cushion Set",
    price: "₹799",
    image: "cushionset.jpg",
    description: "Soft and stylish cushion set for your sofa.",
    rating: "★★★★☆",
    reviews: "70 reviews"
  }
];

// Only run this part if we're on the homepage
const productList = document.getElementById("product-list");

if (productList) {
  products.forEach((product) => {
    const col = document.createElement("div");
    col.className = "col-sm-6 col-md-4 col-lg-3 mb-4";

    col.innerHTML = `
      <a href="index1.html?id=${product.id}" class="text-decoration-none text-dark">
        <div class="card h-100 shadow-sm">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-price">${product.price}</p>
            <button class="btn btn-cart w-100">Add to Cart</button>
          </div>
        </div>
      </a>
    `;
    productList.appendChild(col);
  });
}

