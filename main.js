const cards = [
  {
    id: 1,
    productTitle: "Yellow Dunk Cards",
    imageUrl: "./assets/yellow-card.png",
    description: "Take your basketball skills to new heights with Dunk Cards, the innovative and interactive training tool that brings excitement and progress to every practice session.",
    isAvaible: "Available",

    specifications: {
      size: "4 x 4",
      weight: "8 0z",
      validTill: " Specifications valid until 04/01/2023"
    },

    pricing: {
      first: "1.99",
      second: "1.49",
      third: "0.99"
    }, 
  },

  {
    id: 2,
    productTitle: "Red Dunk Cards",
    imageUrl: "./assets/red-card.png",
    description: "Take your basketball skills to new heights with Dunk Cards, the innovative and interactive training tool that brings excitement and progress to every practice session.",
    isAvaible: "Available",

    specifications: {
      size: "4 x 4",
      weight: "8 0z",
      validTill: " Specifications valid until 04/01/2023"
    },

    pricing: {
      first: "1.99",
      second: "1.49",
      third: "0.99"
    }
  },

  {
    id: 3,
    productTitle: "Blue Dunk Cards",
    imageUrl: "./assets/blue-card.png",
    description: "Take your basketball skills to new heights with Dunk Cards, the innovative and interactive training tool that brings excitement and progress to every practice session.",
    isAvaible: "Available",

    specifications: {
      size: "4 x 4",
      weight: "8 0z",
      validTill: " Specifications valid until 04/01/2023"
    },

    pricing: {
      first: "1.99",
      second: "1.49",
      third: "0.99"
    }
  },

  {
    id: 4,
    productTitle: "Pink Dunk Cards",
    imageUrl: "./assets/pink-card.png",
    description: "Take your basketball skills to new heights with Dunk Cards, the innovative and interactive training tool that brings excitement and progress to every practice session.",
    isAvaible: "Available",

    specifications: {
      size: "4 x 4",
      weight: "8 0z",
      validTill: " Specifications valid until 04/01/2023"
    },

    pricing: {
      first: "1.99",
      second: "1.49",
      third: "0.99"
    }
  },

  {
    id: 5,
    productTitle: "Crimson Dunk Cards",
    imageUrl: "./assets/red-card.png",
    description: "Take your basketball skills to new heights with Dunk Cards, the innovative and interactive training tool that brings excitement and progress to every practice session.",
    isAvaible: "Available",

    specifications: {
      size: "4 x 4",
      weight: "8 0z",
      validTill: " Specifications valid until 04/01/2023"
    },

    pricing: {
      first: "1.99",
      second: "1.49",
      third: "0.99"
    }
  },

  {
    id: 6,
    productTitle: "Cyan Dunk Cards",
    imageUrl: "./assets/blue-card.png",
    description: "Take your basketball skills to new heights with Dunk Cards, the innovative and interactive training tool that brings excitement and progress to every practice session.",
    isAvaible: "Available",

    specifications: {
      size: "4 x 4",
      weight: "8 0z",
      validTill: " Specifications valid until 04/01/2023"
    },

    pricing: {
      first: "1.99",
      second: "1.49",
      third: "0.99"
    }
  }
  
]

const targetingApp = document.querySelector("#app");

let domString = "";

for (let card of cards) {
  domString += `<div class="card" style="width: 18rem;">
  <div class= "card-body">
    <h2 class= "card-title">${card.productTitle}</h2>
    <hr>
    <img src=${card.imageUrl} class="card-img-top" alt= ${card.productTitle}>
    <p class="card-text">${card.description}</p>
    <p>${card.isAvaible}</p>

    <section class="specifications">
      <h3>Specifications</h3>
      <p><strong>${card.specifications.size}</strong></p>
      <p><strong>${card.specifications.weight}</strong></p>
      <footer>${card.specifications.validTill}</footer>
    </section>

    <section class="pricing">
      <h3>Pricing</h3>
      <p><strong>1: $${card.pricing.first}</strong></p>
      <p><strong> 2-50: $${card.pricing.second}</strong></p>
      <p><strong>$ 51+: ${card.pricing.third}</strong></p>
    </section>
  </div>`;
}
targetingApp.innerHTML = domString;
