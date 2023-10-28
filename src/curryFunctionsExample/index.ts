// FROM THIS

// const createURL = (baseURL: string, path: string) => {
//   const protocol = "https";
//   return `${protocol}://${baseURL}/${path}`;
// };

// // create URLs for our main site
// const homeURL = createURL("mysite.com", "");
// const loginURL = createURL("mysite.com", "login");
// const productsURL = createURL("mysite.com", "products");
// const contactURL = createURL("mysite.com", "contact-us");

// // create URLs for our careers site
// const careersHomeURL = createURL("mysite-careers.com", "");
// const careersLoginURL = createURL("mysite-careers.com", "login");


// TO THIS

const createURL = (baseURL: string) => {
  const protocol = "https";

  return (path: string) => `${protocol}://${baseURL}/${path}`;
};

const createMainSiteUrl = createURL("mysite.com")
const createCareersSite =  createURL("mysite-careers.com")

// create URLs for our main site
const homeURL = createMainSiteUrl("");
const loginURL = createMainSiteUrl("login");
const productsURL = createMainSiteUrl("products");
const contactURL = createMainSiteUrl("contact-us");

// create URLs for our careers site
const careersHomeURL = createCareersSite("");
const careersLoginURL = createCareersSite("login");