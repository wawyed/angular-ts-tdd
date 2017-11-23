/* eslint-disable no-undef */

const webpack = require('webpack');
const tsconfig = require('../tsconfig/tsconfig');
const workingRoot = require('../../helpers/workingRoot');

function getConfig() {
  return {
    resolve: {
      extensions: ['.js', '.ts']
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loaders: [
            {
              loader: 'awesome-typescript-loader',
              options: {
                configFileContent: tsconfig()
              }
            },
            'angular2-template-loader'
          ]
        },
        {
          test: /\.html$/,
          loaders: [
            'html-loader'
          ]
        }
      ]
    },
    plugins: [
      new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)@angular/,
        workingRoot.getDir('src')
      ),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ]
  };
}

module.exports = getConfig;
