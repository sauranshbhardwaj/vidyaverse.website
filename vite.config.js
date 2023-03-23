import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        "campus-ambassador": resolve(__dirname, "src/campus-ambassador.html"),
        "intro-to-web3": resolve(__dirname, "src/intro-to-web3.html"),
        "contact-us": resolve(__dirname, "src/contact-us.html"),
        "about-us": resolve(__dirname, "src/about-us.html"),
        "web-3-book": resolve(__dirname, "src/web-3-book.html"),
      },
    },
  },
  root: "src",
});
