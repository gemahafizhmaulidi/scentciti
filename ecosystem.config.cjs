module.exports = {
  apps: [
    {
      name: 'scentciti-web',
      script: 'serve',
      env: {
        PM2_SERVE_PATH: '.',
        PM2_SERVE_PORT: 3215,
        PM2_SERVE_SPA: 'false',
        PM2_SERVE_HOMEPAGE: './index.html'
      }
    }
  ]
};
