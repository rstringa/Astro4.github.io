import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

const SERVER_PORT = 4321;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;

const LIVE_URL = "https://astroship.web3templates.com";
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
export let BASE_URL = LOCALHOST_URL;

if(isBuild){
  BASE_URL = LIVE_URL
}

// https://astro.build/config
export default defineConfig({
  server : {port:SERVER_PORT },
  site: BASE_URL,
  integrations: [tailwind(), mdx(), sitemap(), icon()],
});
