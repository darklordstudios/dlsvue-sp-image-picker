// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///L:/Repos/darklordstudios/dlsvue-sp-image-picker/node_modules/vite/dist/node/index.js";
import vue from "file:///L:/Repos/darklordstudios/dlsvue-sp-image-picker/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///L:/Repos/darklordstudios/dlsvue-sp-image-picker/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import Components from "file:///L:/Repos/darklordstudios/dlsvue-sp-image-picker/node_modules/unplugin-vue-components/dist/vite.js";
import { PrimeVueResolver } from "file:///L:/Repos/darklordstudios/dlsvue-sp-image-picker/node_modules/@primevue/auto-import-resolver/index.mjs";
import { resolve } from "node:path";
import dts from "file:///L:/Repos/darklordstudios/dlsvue-sp-image-picker/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "L:\\Repos\\darklordstudios\\dlsvue-sp-image-picker";
var __vite_injected_original_import_meta_url = "file:///L:/Repos/darklordstudios/dlsvue-sp-image-picker/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    dts(),
    vueDevTools(),
    Components({
      resolvers: [PrimeVueResolver()]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "DLSVUE",
      fileName: "dls-vue"
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJMOlxcXFxSZXBvc1xcXFxkYXJrbG9yZHN0dWRpb3NcXFxcZGxzdnVlLXNwLWltYWdlLXBpY2tlclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiTDpcXFxcUmVwb3NcXFxcZGFya2xvcmRzdHVkaW9zXFxcXGRsc3Z1ZS1zcC1pbWFnZS1waWNrZXJcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0w6L1JlcG9zL2Rhcmtsb3Jkc3R1ZGlvcy9kbHN2dWUtc3AtaW1hZ2UtcGlja2VyL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IHZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcclxuaW1wb3J0IHsgUHJpbWVWdWVSZXNvbHZlciB9IGZyb20gJ0BwcmltZXZ1ZS9hdXRvLWltcG9ydC1yZXNvbHZlcidcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCdcclxuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXHJcblxyXG4vLyBodHRwczovL3ZpdGUuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICB2dWUoKSxcclxuICAgIGR0cygpLFxyXG4gICAgdnVlRGV2VG9vbHMoKSxcclxuICAgIENvbXBvbmVudHMoe1xyXG4gICAgICByZXNvbHZlcnM6IFtQcmltZVZ1ZVJlc29sdmVyKCldXHJcbiAgICB9KVxyXG4gIF0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcclxuICAgIH0sXHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgbGliOiB7XHJcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvaW5kZXgudHNcIiksXHJcbiAgICAgIG5hbWU6IFwiRExTVlVFXCIsXHJcbiAgICAgIGZpbGVOYW1lOiBcImRscy12dWVcIlxyXG4gICAgfSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgZXh0ZXJuYWw6IFtcInZ1ZVwiXSxcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgZ2xvYmFsczoge1xyXG4gICAgICAgICAgdnVlOiBcIlZ1ZVwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVVLFNBQVMsZUFBZSxXQUFXO0FBRTFXLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLGVBQWU7QUFDeEIsT0FBTyxTQUFTO0FBUmhCLElBQU0sbUNBQW1DO0FBQW9LLElBQU0sMkNBQTJDO0FBVzlQLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQSxJQUNKLFlBQVk7QUFBQSxJQUNaLFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQztBQUFBLElBQ2hDLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUN4QyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLEtBQUs7QUFBQSxNQUNoQixRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxLQUFLO0FBQUEsUUFDUDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
