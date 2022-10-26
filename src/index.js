import unsplash from "./unsplash.js"

unsplash("hello world",
  (urls) => {
    console.log(urls)
  }
)
