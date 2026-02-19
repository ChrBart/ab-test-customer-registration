export default {
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: ['src/index.html', 'src/design.html'],
    },
  },
  server: {
    open: true,
  },
}
