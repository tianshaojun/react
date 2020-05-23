// const { injectBabelPlugin } = require('react-app-rewired');

// module.exports = function override(config, env) {
//     config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
//     return config;
// };


const {
    override,
    fixBabelImports,
    // addLessLoader,
    addWebpackAlias
} = require("customize-cra");

const path = require('path');

const resolve = (url) => {
    return path.resolve(__dirname, './', url);
}

module.exports = override(
    // antd按需加载
    fixBabelImports("import", {
        libraryName: "antd-mobile", 
        libraryDirectory: "es", 
        style: 'css' 
    }),
    // change importing css to less
    // addLessLoader({
    //   javascriptEnabled: true,
    //   modifyVars: { "@primary-color": "#1DA57A" }
    // })
    // 配置路径别名
    addWebpackAlias({
        '@': path.resolve(__dirname, './src'),
        'styles': path.resolve(__dirname, './src/assets/styles'),
        'pages': path.resolve(__dirname, './src/pages'),
        'images': path.resolve(__dirname, './src/assets/images'),
        'components': path.resolve(__dirname, './src/components')
    }),
);
