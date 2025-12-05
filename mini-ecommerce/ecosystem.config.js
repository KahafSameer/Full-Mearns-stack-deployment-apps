module.exports = {
    apps: [
        {
            name: 'mini-ecommerce-backend',
            script: './backend/server.js',
            env: {
                NODE_ENV: 'production',
                PORT: 3001,
            },
        },
        {
            name: 'mini-ecommerce-client',
            script: 'serve',
            env: {
                PM2_SERVE_PATH: './client/dist',
                PM2_SERVE_PORT: 3002,
                PM2_SERVE_SPA: 'true',
                PM2_SERVE_HOMEPAGE: '/index.html',
            },
        },
        {
            name: 'mini-ecommerce-admin',
            script: 'serve',
            env: {
                PM2_SERVE_PATH: './admin/dist',
                PM2_SERVE_PORT: 3003,
                PM2_SERVE_SPA: 'true',
                PM2_SERVE_HOMEPAGE: '/index.html',
            },
        },
        {
            name: 'mini-ecommerce-landing',
            script: 'npm',
            args: 'start',
            cwd: './landing',
            env: {
                PORT: 3000,
            },
        },
    ],
};
