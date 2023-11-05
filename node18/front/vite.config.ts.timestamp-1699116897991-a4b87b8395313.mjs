// vite.config.ts
import { crx } from "file:///home/node/share/front/node_modules/@crxjs/vite-plugin/dist/index.mjs";
import react from "file:///home/node/share/front/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { join, resolve } from "path";
import { defineConfig } from "file:///home/node/share/front/node_modules/vite/dist/node/index.js";

// src/manifest.ts
import { defineManifest } from "file:///home/node/share/front/node_modules/@crxjs/vite-plugin/dist/index.mjs";

// package.json
var version = "0.1.0";

// src/manifest.ts
var manifest = defineManifest(async (env) => ({
  manifest_version: 3,
  name: `${env.mode === "development" ? "[Dev] " : ""}Browser Extension TypeScript & React Starter`,
  description: "Browser Extension, TypeScript, React",
  version,
  background: {
    service_worker: "background/index.ts"
  },
  content_scripts: [
    {
      matches: ["http://*/*", "https://*/*", "file:///*"],
      js: ["content/index.tsx"]
    }
  ],
  host_permissions: ["<all_urls>"],
  options_ui: {
    page: "options/options.html",
    open_in_tab: true
  },
  web_accessible_resources: [
    {
      resources: [
        // this file is web accessible; it supports HMR b/c it's declared in `rollupOptions.input`
        "welcome/welcome.html"
      ],
      matches: ["<all_urls>"]
    }
  ],
  action: {
    default_popup: "popup/popup.html",
    default_icon: {
      "16": "images/extension_16.png",
      "32": "images/extension_32.png",
      "48": "images/extension_48.png",
      "128": "images/extension_128.png"
    }
  },
  icons: {
    "16": "images/extension_16.png",
    "32": "images/extension_32.png",
    "48": "images/extension_48.png",
    "128": "images/extension_128.png"
  },
  permissions: ["storage", "tabs"]
}));
var manifest_default = manifest;

// vite.config.ts
var __vite_injected_original_dirname = "/home/node/share/front";
var vite_config_default = defineConfig({
  // @see https://github.com/crxjs/chrome-extension-tools/issues/696
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173
    }
  },
  // prevent src/ prefix on extension urls
  root: resolve(__vite_injected_original_dirname, "src"),
  publicDir: resolve(__vite_injected_original_dirname, "public"),
  build: {
    outDir: resolve(__vite_injected_original_dirname, "dist"),
    rollupOptions: {
      input: {
        // see web_accessible_resources in the manifest config
        welcome: join(__vite_injected_original_dirname, "src/welcome/welcome.html")
      },
      output: {
        chunkFileNames: "assets/chunk-[hash].js"
      }
    }
  },
  plugins: [react(), crx({ manifest: manifest_default })]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic3JjL21hbmlmZXN0LnRzIiwgInBhY2thZ2UuanNvbiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL25vZGUvc2hhcmUvZnJvbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL25vZGUvc2hhcmUvZnJvbnQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvbm9kZS9zaGFyZS9mcm9udC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGNyeCB9IGZyb20gJ0Bjcnhqcy92aXRlLXBsdWdpbic7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgam9pbiwgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgbWFuaWZlc3QgZnJvbSAnLi9zcmMvbWFuaWZlc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9jcnhqcy9jaHJvbWUtZXh0ZW5zaW9uLXRvb2xzL2lzc3Vlcy82OTZcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogNTE3MyxcbiAgICBzdHJpY3RQb3J0OiB0cnVlLFxuICAgIGhtcjoge1xuICAgICAgcG9ydDogNTE3MyxcbiAgICB9LFxuICB9LFxuICAvLyBwcmV2ZW50IHNyYy8gcHJlZml4IG9uIGV4dGVuc2lvbiB1cmxzXG4gIHJvb3Q6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyksXG4gIHB1YmxpY0RpcjogcmVzb2x2ZShfX2Rpcm5hbWUsICdwdWJsaWMnKSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6IHJlc29sdmUoX19kaXJuYW1lLCAnZGlzdCcpLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIC8vIHNlZSB3ZWJfYWNjZXNzaWJsZV9yZXNvdXJjZXMgaW4gdGhlIG1hbmlmZXN0IGNvbmZpZ1xuICAgICAgICB3ZWxjb21lOiBqb2luKF9fZGlybmFtZSwgJ3NyYy93ZWxjb21lL3dlbGNvbWUuaHRtbCcpLFxuICAgICAgfSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBjaHVua0ZpbGVOYW1lczogJ2Fzc2V0cy9jaHVuay1baGFzaF0uanMnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbcmVhY3QoKSwgY3J4KHsgbWFuaWZlc3QgfSldLFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL25vZGUvc2hhcmUvZnJvbnQvc3JjXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ub2RlL3NoYXJlL2Zyb250L3NyYy9tYW5pZmVzdC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ub2RlL3NoYXJlL2Zyb250L3NyYy9tYW5pZmVzdC50c1wiO2ltcG9ydCB7IGRlZmluZU1hbmlmZXN0IH0gZnJvbSAnQGNyeGpzL3ZpdGUtcGx1Z2luJztcbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuXG4vLyBOT1RFOiBkbyBub3QgaW5jbHVkZSBzcmMvIGluIHBhdGhzLFxuLy8gdml0ZSByb290IGZvbGRlcjogc3JjLCBwdWJsaWMgZm9sZGVyOiBwdWJsaWMgKGJhc2VkIG9uIHRoZSBwcm9qZWN0IHJvb3QpXG4vLyBAc2VlIC4uL3ZpdGUuY29uZmlnLnRzI0wxNlxuXG5jb25zdCBtYW5pZmVzdCA9IGRlZmluZU1hbmlmZXN0KGFzeW5jIChlbnYpID0+ICh7XG4gIG1hbmlmZXN0X3ZlcnNpb246IDMsXG4gIG5hbWU6IGAke2Vudi5tb2RlID09PSAnZGV2ZWxvcG1lbnQnID8gJ1tEZXZdICcgOiAnJ31Ccm93c2VyIEV4dGVuc2lvbiBUeXBlU2NyaXB0ICYgUmVhY3QgU3RhcnRlcmAsXG4gIGRlc2NyaXB0aW9uOiAnQnJvd3NlciBFeHRlbnNpb24sIFR5cGVTY3JpcHQsIFJlYWN0JyxcbiAgdmVyc2lvbixcbiAgYmFja2dyb3VuZDoge1xuICAgIHNlcnZpY2Vfd29ya2VyOiAnYmFja2dyb3VuZC9pbmRleC50cycsXG4gIH0sXG4gIGNvbnRlbnRfc2NyaXB0czogW1xuICAgIHtcbiAgICAgIG1hdGNoZXM6IFsnaHR0cDovLyovKicsICdodHRwczovLyovKicsICdmaWxlOi8vLyonXSxcbiAgICAgIGpzOiBbJ2NvbnRlbnQvaW5kZXgudHN4J10sXG4gICAgfSxcbiAgXSxcbiAgaG9zdF9wZXJtaXNzaW9uczogWyc8YWxsX3VybHM+J10sXG4gIG9wdGlvbnNfdWk6IHtcbiAgICBwYWdlOiAnb3B0aW9ucy9vcHRpb25zLmh0bWwnLFxuICAgIG9wZW5faW5fdGFiOiB0cnVlLFxuICB9LFxuICB3ZWJfYWNjZXNzaWJsZV9yZXNvdXJjZXM6IFtcbiAgICB7XG4gICAgICByZXNvdXJjZXM6IFtcbiAgICAgICAgLy8gdGhpcyBmaWxlIGlzIHdlYiBhY2Nlc3NpYmxlOyBpdCBzdXBwb3J0cyBITVIgYi9jIGl0J3MgZGVjbGFyZWQgaW4gYHJvbGx1cE9wdGlvbnMuaW5wdXRgXG4gICAgICAgICd3ZWxjb21lL3dlbGNvbWUuaHRtbCcsXG4gICAgICBdLFxuICAgICAgbWF0Y2hlczogWyc8YWxsX3VybHM+J10sXG4gICAgfSxcbiAgXSxcbiAgYWN0aW9uOiB7XG4gICAgZGVmYXVsdF9wb3B1cDogJ3BvcHVwL3BvcHVwLmh0bWwnLFxuICAgIGRlZmF1bHRfaWNvbjoge1xuICAgICAgJzE2JzogJ2ltYWdlcy9leHRlbnNpb25fMTYucG5nJyxcbiAgICAgICczMic6ICdpbWFnZXMvZXh0ZW5zaW9uXzMyLnBuZycsXG4gICAgICAnNDgnOiAnaW1hZ2VzL2V4dGVuc2lvbl80OC5wbmcnLFxuICAgICAgJzEyOCc6ICdpbWFnZXMvZXh0ZW5zaW9uXzEyOC5wbmcnLFxuICAgIH0sXG4gIH0sXG4gIGljb25zOiB7XG4gICAgJzE2JzogJ2ltYWdlcy9leHRlbnNpb25fMTYucG5nJyxcbiAgICAnMzInOiAnaW1hZ2VzL2V4dGVuc2lvbl8zMi5wbmcnLFxuICAgICc0OCc6ICdpbWFnZXMvZXh0ZW5zaW9uXzQ4LnBuZycsXG4gICAgJzEyOCc6ICdpbWFnZXMvZXh0ZW5zaW9uXzEyOC5wbmcnLFxuICB9LFxuICBwZXJtaXNzaW9uczogWydzdG9yYWdlJywgJ3RhYnMnXSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgbWFuaWZlc3Q7XG4iLCAie1xuICBcIm5hbWVcIjogXCJicm93c2VyLWV4dGVuc2lvbi1yZWFjdC10cy1zdGFydGVyXCIsXG4gIFwicHJpdmF0ZVwiOiB0cnVlLFxuICBcInZlcnNpb25cIjogXCIwLjEuMFwiLFxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImRldlwiOiBcInJ1bi1zIGNsZWFuICYmIHZpdGUgLS1ob3N0IDAuMC4wLjBcIixcbiAgICBcImJ1aWxkXCI6IFwicnVuLXMgY2xlYW4gJiYgdHNjICYmIHZpdGUgYnVpbGQgJiYgcnVuLXMgZmlyZWZveC1tdjItYnVpbGRcIixcbiAgICBcImZpcmVmb3gtbXYyLWJ1aWxkXCI6IFwibm9kZSB0b29scy91bnN0YWJsZV9tdjNUb012MkJ1aWxkLmpzXCIsXG4gICAgXCJjbGVhblwiOiBcInJ1bi1wIGNsZWFuOipcIixcbiAgICBcImNsZWFuOmRpc3RcIjogXCJyaW1yYWYgZGlzdFwiLFxuICAgIFwiY2xlYW46ZGlzdC1maXJlZm94LXYyXCI6IFwicmltcmFmIGRpc3QtZmlyZWZveC12MlwiLFxuICAgIFwiZm9ybWF0XCI6IFwicnVuLXAgZm9ybWF0OipcIixcbiAgICBcImZvcm1hdDplc2xpbnRcIjogXCJydW4tcyBcXFwiIGxpbnQ6ZXNsaW50IC0tZml4IFxcXCJcIixcbiAgICBcImZvcm1hdDpwcmV0dGllclwiOiBcInJ1bi1zIFxcXCIgbGludDpwcmV0dGllciAtLXdyaXRlIFxcXCJcIixcbiAgICBcImxpbnRcIjogXCJydW4tcCBsaW50OipcIixcbiAgICBcImxpbnQ6ZXNsaW50XCI6IFwiZXNsaW50IC4gLS1leHQgLmpzLC50cywudHN4IC0tbWF4LXdhcm5pbmdzIDAgLS1pZ25vcmUtcGF0aCAuZ2l0aWdub3JlXCIsXG4gICAgXCJsaW50OnByZXR0aWVyXCI6IFwicHJldHRpZXIgXFxcIioqLyouKG1kfGpzb258eW1sKVxcXCIgLS1pZ25vcmUtcGF0aCAuZ2l0aWdub3JlIC0tY2hlY2tcIixcbiAgICBcImxpbnQ6dHlwZVwiOiBcInRzYyAtLW5vRW1pdFwiLFxuICAgIFwidGVzdFwiOiBcImplc3RcIixcbiAgICBcImNpOnRlc3RcIjogXCJydW4tcyBcXFwiIHRlc3QgLS1jaSAtLXJlcG9ydGVycz1cXFwiZGVmYXVsdFxcXCIgLS1yZXBvcnRlcnM9XFxcImdpdGh1Yi1hY3Rpb25zXFxcIiBcXFwiXCIsXG4gICAgXCJwcmVwYXJlXCI6IFwic2ltcGxlLWdpdC1ob29rc1wiXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBlZHVhcmRvYWMtc2tpbWxpbmtzL3dlYmV4dC1yZWR1eFwiOiBcIjMuMC4xLXJlbGVhc2UtY2FuZGlkYXRlXCIsXG4gICAgXCJAZW1vdGlvbi9yZWFjdFwiOiBcIl4xMS4xMS4xXCIsXG4gICAgXCJAZXh0ZW5kLWNocm9tZS9zdG9yYWdlXCI6IFwiXjEuNS4wXCIsXG4gICAgXCJAbWFudGluZS9jb3JlXCI6IFwiXjcuMS43XCIsXG4gICAgXCJAbWFudGluZS9ob29rc1wiOiBcIl43LjEuN1wiLFxuICAgIFwiQHJlZHV4anMvdG9vbGtpdFwiOiBcIl4xLjkuNVwiLFxuICAgIFwiQHR3aW5kL2NvcmVcIjogXCJeMS4xLjNcIixcbiAgICBcIkB0d2luZC9wcmVzZXQtYXV0b3ByZWZpeFwiOiBcIl4xLjAuN1wiLFxuICAgIFwiQHR3aW5kL3ByZXNldC10YWlsd2luZFwiOiBcIl4xLjEuNFwiLFxuICAgIFwibG9kYXNoLWVzXCI6IFwiXjQuMTcuMjFcIixcbiAgICBcInJlYWN0XCI6IFwiMTguMi4wXCIsXG4gICAgXCJyZWFjdC1kb21cIjogXCIxOC4yLjBcIixcbiAgICBcInJlYWN0LXJlZHV4XCI6IFwiXjguMS4wXCIsXG4gICAgXCJyZWR1eC1wZXJzaXN0LXdlYmV4dGVuc2lvbi1zdG9yYWdlXCI6IFwiXjEuMC4yXCIsXG4gICAgXCJyZWR1eGpzLXRvb2xraXQtcGVyc2lzdFwiOiBcIl43LjIuMVwiLFxuICAgIFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCI6IFwiXjAuMTAuMFwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBjcnhqcy92aXRlLXBsdWdpblwiOiBcIl4yLjAuMC1iZXRhLjE3XCIsXG4gICAgXCJAdGVzdGluZy1saWJyYXJ5L2plc3QtZG9tXCI6IFwiXjUuMTYuNVwiLFxuICAgIFwiQHRlc3RpbmctbGlicmFyeS9yZWFjdFwiOiBcIl4xNC4wLjBcIixcbiAgICBcIkB0ZXN0aW5nLWxpYnJhcnkvdXNlci1ldmVudFwiOiBcIl4xNC40LjNcIixcbiAgICBcIkB0eXBlcy9mcy1leHRyYVwiOiBcIl4xMS4wLjFcIixcbiAgICBcIkB0eXBlcy9qZXN0XCI6IFwiXjI5LjUuMlwiLFxuICAgIFwiQHR5cGVzL2xvZGFzaC1lc1wiOiBcIl40LjE3LjdcIixcbiAgICBcIkB0eXBlcy9yZWFjdFwiOiBcIl4xOC4yLjEyXCIsXG4gICAgXCJAdHlwZXMvcmVhY3QtZG9tXCI6IFwiXjE4LjIuNVwiLFxuICAgIFwiQHR5cGVzL3JlZHV4LXBlcnNpc3Qtd2ViZXh0ZW5zaW9uLXN0b3JhZ2VcIjogXCJeMS4wLjBcIixcbiAgICBcIkB0eXBlcy93ZWJleHRlbnNpb24tcG9seWZpbGxcIjogXCJeMC4xMC4wXCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvZXNsaW50LXBsdWdpblwiOiBcIl41LjU5LjExXCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyXCI6IFwiXjUuNTkuMTFcIixcbiAgICBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI6IFwiXjQuMC4wXCIsXG4gICAgXCJhdXRvcHJlZml4ZXJcIjogXCJeMTAuNC44XCIsXG4gICAgXCJjb25zdHJ1Y3Qtc3R5bGUtc2hlZXRzLXBvbHlmaWxsXCI6IFwiXjMuMS4wXCIsXG4gICAgXCJlc2xpbnRcIjogXCJeOC40Mi4wXCIsXG4gICAgXCJlc2xpbnQtY29uZmlnLXByZXR0aWVyXCI6IFwiXjguOC4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXByZXR0aWVyXCI6IFwiXjQuMi4xXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXJlYWN0XCI6IFwiXjcuMzIuMlwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1yZWFjdC1ob29rc1wiOiBcIl40LjYuMFwiLFxuICAgIFwiZnMtZXh0cmFcIjogXCJeMTEuMS4xXCIsXG4gICAgXCJpZGVudGl0eS1vYmotcHJveHlcIjogXCJeMy4wLjBcIixcbiAgICBcImplc3RcIjogXCJeMjkuNS4wXCIsXG4gICAgXCJqZXN0LWNocm9tZVwiOiBcIl4wLjguMFwiLFxuICAgIFwiamVzdC1lbnZpcm9ubWVudC1qc2RvbVwiOiBcIl4yOS41LjBcIixcbiAgICBcIm5hbm8tc3RhZ2VkXCI6IFwiXjAuOC4wXCIsXG4gICAgXCJucG0tcnVuLWFsbDJcIjogXCJeNi4wLjVcIixcbiAgICBcInBvc3Rjc3NcIjogXCJeOC40LjI0XCIsXG4gICAgXCJwcmV0dGllclwiOiBcIl4yLjcuMVwiLFxuICAgIFwicmltcmFmXCI6IFwiXjMuMC4yXCIsXG4gICAgXCJzaW1wbGUtZ2l0LWhvb2tzXCI6IFwiXjIuOC4wXCIsXG4gICAgXCJ0YWlsd2luZGNzc1wiOiBcIl4zLjMuMlwiLFxuICAgIFwidHMtamVzdFwiOiBcIl4yOS4xLjBcIixcbiAgICBcInR5cGVzY3JpcHRcIjogXCI0LjkuNVwiLFxuICAgIFwidml0ZVwiOiBcIl40LjMuOVwiXG4gIH0sXG4gIFwic2ltcGxlLWdpdC1ob29rc1wiOiB7XG4gICAgXCJwcmUtY29tbWl0XCI6IFwiLi9ub2RlX21vZHVsZXMvLmJpbi9uYW5vLXN0YWdlZFwiXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1AsU0FBUyxXQUFXO0FBQ3hRLE9BQU8sV0FBVztBQUNsQixTQUFTLE1BQU0sZUFBZTtBQUM5QixTQUFTLG9CQUFvQjs7O0FDSDZOLFNBQVMsc0JBQXNCOzs7QUNHdlIsY0FBVzs7O0FESWIsSUFBTSxXQUFXLGVBQWUsT0FBTyxTQUFTO0FBQUEsRUFDOUMsa0JBQWtCO0FBQUEsRUFDbEIsTUFBTSxHQUFHLElBQUksU0FBUyxnQkFBZ0IsV0FBVztBQUFBLEVBQ2pELGFBQWE7QUFBQSxFQUNiO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixnQkFBZ0I7QUFBQSxFQUNsQjtBQUFBLEVBQ0EsaUJBQWlCO0FBQUEsSUFDZjtBQUFBLE1BQ0UsU0FBUyxDQUFDLGNBQWMsZUFBZSxXQUFXO0FBQUEsTUFDbEQsSUFBSSxDQUFDLG1CQUFtQjtBQUFBLElBQzFCO0FBQUEsRUFDRjtBQUFBLEVBQ0Esa0JBQWtCLENBQUMsWUFBWTtBQUFBLEVBQy9CLFlBQVk7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSwwQkFBMEI7QUFBQSxJQUN4QjtBQUFBLE1BQ0UsV0FBVztBQUFBO0FBQUEsUUFFVDtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVMsQ0FBQyxZQUFZO0FBQUEsSUFDeEI7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixlQUFlO0FBQUEsSUFDZixjQUFjO0FBQUEsTUFDWixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxhQUFhLENBQUMsV0FBVyxNQUFNO0FBQ2pDLEVBQUU7QUFFRixJQUFPLG1CQUFROzs7QURyRGYsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUE7QUFBQSxFQUUxQixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsSUFDWixLQUFLO0FBQUEsTUFDSCxNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBRUEsTUFBTSxRQUFRLGtDQUFXLEtBQUs7QUFBQSxFQUM5QixXQUFXLFFBQVEsa0NBQVcsUUFBUTtBQUFBLEVBQ3RDLE9BQU87QUFBQSxJQUNMLFFBQVEsUUFBUSxrQ0FBVyxNQUFNO0FBQUEsSUFDakMsZUFBZTtBQUFBLE1BQ2IsT0FBTztBQUFBO0FBQUEsUUFFTCxTQUFTLEtBQUssa0NBQVcsMEJBQTBCO0FBQUEsTUFDckQ7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUFFLDJCQUFTLENBQUMsQ0FBQztBQUN0QyxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
