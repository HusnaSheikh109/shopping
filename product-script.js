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
  
  // Get product ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  
  // Find and show product
  const product = products.find(p => p.id === productId);
  
  if (product) {
    document.getElementById("detail-image").src = product.image;
    document.getElementById("detail-name").textContent = product.name;
    document.getElementById("detail-price").textContent = product.price;
    document.getElementById("detail-description").textContent = product.description;
    document.getElementById("detail-rating").textContent = `Rating: ${product.rating}`;
    document.getElementById("detail-reviews").textContent = product.reviews;
  } else {
    document.body.innerHTML = '<div class="text-center text-danger mt-5">Product not found.</div>';
  }
  const form = document.getElementById("review-form");
const reviewList = document.getElementById("review-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const comment = document.getElementById("review-comment").value;
  const fileInput = document.getElementById("review-image");
  const file = fileInput.files[0];

  const reader = new FileReader();
  reader.onload = function () {
    const imageURL = reader.result;

    const reviewDiv = document.createElement("div");
    reviewDiv.className = "card p-3 my-3";

    reviewDiv.innerHTML = `
      <p>${comment}</p>
      ${file ? `<img src="${imageURL}" class="img-fluid rounded" style="max-width:200px;">` : ""}
    `;
    reviewList.appendChild(reviewDiv);
    form.reset();
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    reader.onload(); // still display the comment even without image
  }
});
 function submitReview() {
    const input = document.getElementById("review-input");
    const reviewText = input.value.trim();
  
    if (!reviewText) {
      alert("Please write something before submitting.");
      return;
    }
    const reviews = JSON.parse(localStorage.getItem(`reviews-${productId}`)) || [];
    reviews.push(reviewText);
    localStorage.setItem(`reviews-${productId}`, JSON.stringify(reviews));
  
    input.value = "";
    loadReviews();
  }
  
  // Load reviews from localStorage
  function loadReviews() {
    const reviewContainer = document.getElementById("review-list");
    reviewContainer.innerHTML = "";
  
    const reviews = JSON.parse(localStorage.getItem(`reviews-${productId}`)) || [];
    if (reviews.length === 0) {
        reviewContainer.innerHTML = "<p class='text-muted'>No user reviews yet.</p>";
        return;
      }
    
      reviews.forEach((text) => {
        const div = document.createElement("div");
        div.className = "alert alert-secondary mb-2";
        div.textContent = text;
        reviewContainer.appendChild(div);
      });
    }