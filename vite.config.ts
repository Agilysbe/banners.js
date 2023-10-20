import { resolve } from "path";
import { UserConfig } from "vite";

export default {
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "banners",
      formats: ["es"],
      fileName: () => "banners.mjs",
    },
    target: "modules",
    sourcemap: true,
    rollupOptions: {
      external: /^lit/,
    },
  },
  define: {
    "import.meta.env.PACKAGE_VERSION": JSON.stringify(process.env.npm_package_version),
  },
} satisfies UserConfig;
