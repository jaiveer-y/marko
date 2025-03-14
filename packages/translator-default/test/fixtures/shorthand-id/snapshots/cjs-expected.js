"use strict";

exports.__esModule = true;
exports.default = void 0;

var _index = require("marko/src/runtime/html/index.js");

var _attr = _interopRequireDefault(require("marko/src/runtime/html/helpers/attr.js"));

var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _marko_componentType = "packages/translator-default/test/fixtures/shorthand-id/template.marko",
      _marko_template = (0, _index.t)(_marko_componentType);

var _default = _marko_template;
exports.default = _default;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state) {
  out.w("<div id=shorthand></div>");
  out.w(`<div${(0, _attr.default)("id", dynamic)}></div>`);
  out.w(`<div${(0, _attr.default)("id", `partial-${dynamic}`)}></div>`);
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);