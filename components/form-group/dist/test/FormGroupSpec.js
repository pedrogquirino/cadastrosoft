"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _FormControl = _interopRequireDefault(require("../src/FormControl"));

var _FormLabel = _interopRequireDefault(require("../src/FormLabel"));

var _FormGroup = _interopRequireDefault(require("../src/FormGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<FormGroup>', function () {
  it('renders children', function () {
    (0, _enzyme.mount)(_react.default.createElement(_FormGroup.default, null, _react.default.createElement("span", {
      className: "child1"
    }), _react.default.createElement("span", {
      className: "child2"
    }))).assertSingle('.child1');
  });
  it('renders with form-group class', function () {
    (0, _enzyme.mount)(_react.default.createElement(_FormGroup.default, null, _react.default.createElement("span", null)));
  });
  it('provided controlId to label and control', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_FormGroup.default, {
      controlId: "my-control"
    }, _react.default.createElement("div", null, _react.default.createElement(_FormLabel.default, null, "label"), _react.default.createElement(_FormControl.default, null))));
    wrapper.assertSingle('label[htmlFor="my-control"]');
    wrapper.assertSingle('input[id="my-control"]');
  });
});

//# sourceMappingURL=FormGroupSpec.js.map