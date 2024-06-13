export default function createAboutPage() {
  const aboutPage = document.createElement("div");
  aboutPage.className = "about-container";

  const aboutCard = document.createElement("div");
  aboutCard.className = "about-card";

  const aboutCardTitle = document.createElement("div");
  aboutCardTitle.className = "about-title";
  aboutCardTitle.textContent = "Ital Pastino, serving its customers since 1998!";

  const aboutCardDesc = document.createElement("div");
  aboutCardDesc.className = "about-desc";
  aboutCardDesc.textContent =
    "Welcome to Ital Pastino, where we have been serving the finest Italian cuisine since 1998. Nestled in the heart of the city, our restaurant offers an inviting atmosphere where the warmth of Italy is felt in every detail. From the aroma of freshly baked bread to the sound of laughter and clinking glasses, Ital Pastino is a place where friends and family come together to enjoy delicious food and create lasting memories.";

  const aboutCardDesc1 = document.createElement("div");
  aboutCardDesc1.className = "about-desc";
  aboutCardDesc1.textContent =
    "At Ital Pastino, our menu is a celebration of traditional Italian flavors and culinary craftsmanship. We source the freshest ingredients to create dishes that are both authentic and innovative, honoring the time-honored recipes passed down through generations. Our chefs are passionate about bringing a taste of Italy to your table, whether you're savoring a classic pasta dish, a hearty risotto, or our signature wood-fired pizzas.";

  const aboutCardDesc2 = document.createElement("div");
  aboutCardDesc2.className = "about-desc";
  aboutCardDesc2.textContent =
    "We pride ourselves on our commitment to exceptional service and a welcoming ambiance. Since our establishment, we have strived to provide an experience that goes beyond just dining. Our knowledgeable staff is dedicated to making your visit unforgettable, from recommending the perfect wine pairing to ensuring that every dish exceeds your expectations. At Ital Pastino, we believe that every meal is a celebration, and we are honored to be a part of your special moments.";

  aboutCard.appendChild(aboutCardTitle);
  aboutCard.appendChild(aboutCardDesc);
  aboutCard.appendChild(aboutCardDesc1);
  aboutCard.appendChild(aboutCardDesc2);

  aboutPage.appendChild(aboutCard);
  return aboutPage;
}