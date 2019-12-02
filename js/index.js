const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//HEADER SECTION

//navigation links

//any other way to do this cleaner?
const services = document.querySelector("nav a:nth-child(1)");
services.textContent = siteContent["nav"]["nav-item-1"];

const product = document.querySelector("nav a:nth-child(2)");
product.textContent = siteContent["nav"]["nav-item-2"];

const vision = document.querySelector("nav a:nth-child(3)");
vision.textContent = siteContent["nav"]["nav-item-3"];

const features = document.querySelector("nav a:nth-child(4)");
features.textContent = siteContent["nav"]["nav-item-4"];

const about = document.querySelector("nav a:nth-child(5)");
about.textContent = siteContent["nav"]["nav-item-5"];

const contact = document.querySelector("nav a:nth-child(6)");
contact.textContent = siteContent["nav"]["nav-item-6"];

//CTA SECTION

//cta text
const ctaText = document.querySelector(".cta-text h1");
ctaText.textContent = siteContent["cta"]["h1"];

const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];

//cta-img
const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

//MAIN CONTENT SECTION

//top content
const mainFeatures = document.querySelector(".top-content div:first-child h4");
const mainFeaturesContent = document.querySelector(
  ".top-content div:first-child p"
);
mainFeatures.textContent = siteContent["main-content"]["features-h4"];
mainFeaturesContent.textContent =
  siteContent["main-content"]["features-content"];

const mainAbout = document.querySelector(".top-content div:last-child h4");
const mainAboutContent = document.querySelector(
  ".top-content div:last-child p"
);
mainAbout.textContent = siteContent["main-content"]["about-h4"];
mainAboutContent.textContent = siteContent["main-content"]["about-content"];

//middle img
const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//bottom content
const mainServices = document.querySelector(
  ".bottom-content div:nth-child(1) h4"
);
const mainServicesContent = document.querySelector(
  ".bottom-content div:nth-child(1) p"
);
mainServices.textContent = siteContent["main-content"]["services-h4"];
mainServicesContent.textContent =
  siteContent["main-content"]["services-content"];

const mainProduct = document.querySelector(
  ".bottom-content div:nth-child(2) h4"
);
const mainProductContent = document.querySelector(
  ".bottom-content div:nth-child(2) p"
);
mainProduct.textContent = siteContent["main-content"]["product-h4"];
mainProductContent.textContent = siteContent["main-content"]["product-content"];

const mainVision = document.querySelector(
  ".bottom-content div:nth-child(3) h4"
);
const mainVisionContent = document.querySelector(
  ".bottom-content div:nth-child(3) p"
);
mainVision.textContent = siteContent["main-content"]["vision-h4"];
mainVisionContent.textContent = siteContent["main-content"]["vision-content"];
