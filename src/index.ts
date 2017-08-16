import "./styles/jodit.less";
import * as consts from './constants';
import './polyfills';
import Toolbar from './modules/Toolbar'

module.exports = require('./Jodit').default;

window['Jodit'] = module.exports;

import './Config'

Object.keys(consts).forEach((key) => {
    module.exports[key] = consts[key];
});

declare let require: any;

const requireAll = (r) => {
    r.keys().forEach(r);
};

requireAll(require.context('./plugins/', true, /\.ts$/));

requireAll(require.context('./styles/modules/', true, /\.less$/));
requireAll(require.context('./styles/widgets/', true, /\.less$/));
requireAll(require.context('./styles/plugins/', true, /\.less$/));

const context = require.context('./styles/icons/', true, /\.svg$/);

context.keys().forEach(function (key) {
    Toolbar.icons[key.replace('.svg', '').replace('./', '')] = context.apply(this, arguments);
});

const context2 = require.context('./modules/', true, /\.ts/);
context2.keys().forEach(function (key) {
    module.exports.modules[key.replace('.ts', '').replace('./', '')] = context2.apply(this, arguments).default;
});


const context3 = require.context('./langs/', true, /\.ts$/);
context3.keys().forEach(function (key) {
    module.exports.lang[key.replace('.ts', '').replace('./', '')] = context3.apply(this, arguments).default;
});