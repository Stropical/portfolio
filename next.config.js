const pathPrefix = process.env.NODE_ENV === 'production'
? ''
: '/portfolio';

module.exports = {
    assetPrefix: pathPrefix,
    basePath: "/portfolio",
    env: {
        pathPrefix,
    },
};