import { defineConfig,loadEnv } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSvgr } from "@rsbuild/plugin-svgr";
import { pluginSass } from "@rsbuild/plugin-sass";


const { publicVars } = loadEnv({ prefixes: ['REACT_APP_'] });


export default defineConfig({
  plugins: [
    pluginReact(),
    pluginSvgr({ mixedImport: true }),
    pluginSass(),
    
  ],
  output: {
    distPath: {
      root: "dist",
    },
    assetPrefix: '/Spartisan/',
  },
  // source: {
  //   define: {
  //     "process.env.REACT_APP_FIREBASE_API_KEY": JSON.stringify(process.env.REACT_APP_FIREBASE_API_KEY),
  //     "process.env.REACT_APP_FIREBASE_AUTH_DOMAIN": JSON.stringify(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN),
  //     "process.env.REACT_APP_FIREBASE_PROJECT_ID": JSON.stringify(process.env.REACT_APP_FIREBASE_PROJECT_ID),
  //     "process.env.REACT_APP_FIREBASE_STORAGE_BUCKET": JSON.stringify(process.env.REACT_APP_FIREBASE_STORAGE_BUCKET),
  //     "process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID": JSON.stringify(process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID),
  //     "process.env.REACT_APP_FIREBASE_APP_ID": JSON.stringify(process.env.REACT_APP_FIREBASE_APP_ID),
  //     "process.env.REACT_APP_FIREBASE_MEASUREMENT_ID": JSON.stringify(process.env.REACT_APP_FIREBASE_MEASUREMENT_ID)
  //   },
  // },
});
