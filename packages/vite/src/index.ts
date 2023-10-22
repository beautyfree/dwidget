import progress from "vite-plugin-progress";
import banner from "vite-plugin-banner";
import compression from "vite-plugin-compression2";
import { visualizer } from "rollup-plugin-visualizer";

interface Pkg {
  name: string;
  version: string;
  description: string;
  author: string;
  homepage: string;
}

export const plugins = ({ pkg }: { pkg: Pkg }) => [
  progress(),
  banner({
    content: `/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n * description: ${pkg.description}\n * author: ${pkg.author}\n * homepage: ${pkg.homepage}\n */`,
  }),
  compression({
    algorithm: "gzip",
    exclude: [/\.(br)$ /, /\.(gz)$/],
  }),
  compression({
    algorithm: "brotliCompress",
    exclude: [/\.(br)$ /, /\.(gz)$/],
  }),
  visualizer({
    open: true,
    gzipSize: true,
    brotliSize: true,
  }),
];
