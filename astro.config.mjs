import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import netlify from "@astrojs/netlify";
// const SERVER_PORT = 4321;
// const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;

// const LIVE_URL = "https://github.com/rstringa/Astro4";
// const SCRIPT = process.env.npm_lifecycle_script || "";
// const isBuild = SCRIPT.includes("astro build");

// export let SITE_URL = LOCALHOST_URL;

export let ROOT = '';

// if(isBuild){
//   SITE_URL = LIVE_URL;
//   // BASE_URL = '/dist';
// }


// https://astro.build/config
export default defineConfig({
  // server : {port:SERVER_PORT },
  // trailingSlash: "always",
  // build: {

  //   format: "file",
  // },
  // outDir: '.'+ BASE_URL,
  // base: BASE_URL,

  site: "https://github.com/rstringa/Astro4",
  integrations: [tailwind(), mdx(), sitemap(), icon()],
  output: "static",
  // adapter: netlify()
});