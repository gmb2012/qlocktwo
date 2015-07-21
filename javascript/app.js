requirejs.config({
    baseUrl: 'javascript/lib',
    paths: {
        app: '../app',

        // Components
        Qlock: '../Qlock',
        Interior: '../Interior',

        // ClassNames Helper
        ClassNames: 'ClassNames',

        // react
        react: 'https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/react',
        JSXTransformer: 'https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/JSXTransformer',
        jsx: 'jsx',

        // Charting
        Chart: 'Chart.min',

        // JQuery
        jquery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min'
    },

    // config for jsx
    shim: {
        JSXTransformer: {
            exports: 'JSXTransformer'
        }
    }
});

requirejs(['jsx!Qlock', 'Interior']);