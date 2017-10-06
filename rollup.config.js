const babel = require('rollup-plugin-babel')

export default {
  input: 'index.lsc.js',
  output: {
    file: 'index-compiled.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
