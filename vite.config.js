export default {
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: ['src/index.html', 'src/figma-review.html'],
    },
  },
  server: {
    open: true,
  },
}
