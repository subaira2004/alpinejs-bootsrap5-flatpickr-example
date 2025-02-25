import path from 'path'

export default {
    root: path.resolve(__dirname, ''),
    resolve: {
      alias: {
        '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      }
    }
  }