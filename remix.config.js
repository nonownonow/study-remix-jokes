/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  publicPath: '/build/',
  serverBuildDirectory: 'build',
  devServerPort: 8003,
  ignoredRouteFiles: ['.*'],
  routes: async (defineRoutes) => {
    return defineRoutes(route => {
      route('/test/routes/*', 'test.tsx')
    })
  }
}
