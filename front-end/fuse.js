const {
  FuseBox,
  SassPlugin,
  CSSPlugin,
  QuantumPlugin,
  CSSResourcePlugin,
  ImageBase64Plugin,
  PostCSSPlugin,
  JSONPlugin
} = require('fuse-box')

const development = process.env.NODE_ENV !== 'production' &&
  !process.argv.includes('--production')

const fuse = FuseBox.init({
  homeDir: 'src',
  target: 'browser@es5',
  output: 'public/$name.js',
  useTypescriptCompiler: true,
  plugins: [
    [
      SassPlugin({
        importer: true
      }),
      CSSResourcePlugin({
        dist: "public/img",
        resolve: (f) => `/static/img/${f}`
      }),
      development ? CSSPlugin() : CSSPlugin({
        outFile: _ => 'public/app.css',
      }),

    ],
    !development && QuantumPlugin({
      uglify: true,
      css: {
        clean: true
      },
      bakeApiIntoBundle: true
    }),
    ImageBase64Plugin(), JSONPlugin()
  ],
})

const bundle = fuse.bundle('app')
  .instructions('> index.jsx')

if (development) {
  bundle.hmr({
    reload: true
  }).watch()
  fuse.dev({
    port: 4444,
    fallback: 'index.html'
  })
}

fuse.run()