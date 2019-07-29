"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _FormCheck = _interopRequireDefault(require("../src/FormCheck"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

describe('<FormCheck>', function () {
  it('should render correctly', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_FormCheck.default, {
      id: "foo",
      name: "foo",
      value: "foo",
      defaultChecked: true,
      label: "My label",
      className: "my-checkbox"
    }));
    wrapper.assertSingle('div.form-check.my-checkbox').assertSingle('input[type="checkbox"][name="foo"][defaultChecked]');
    wrapper.assertSingle('label.form-check-label[htmlFor="foo"]').text().should.equal('My label');
  });
  it('should render radio correctly', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_FormCheck.default, {
      id: "foo",
      name: "foo",
      value: "foo",
      type: "radio",
      defaultChecked: true,
      className: "my-radio",
      label: "My label"
    }));
    wrapper.assertSingle('div.form-check.my-radio').assertSingle('input[type="radio"][name="foo"][defaultChecked]');
    wrapper.assertSingle('label.form-check-label[htmlFor="foo"]').text().should.equal('My label');
  });
  it('should support inline', function () {
    (0, _enzyme.mount)(_react.default.createElement(_FormCheck.default, {
      inline: true,
      label: "My label"
    })).assertSingle('div.form-check-inline');
  });
  it('should support isValid', function () {
    (0, _enzyme.mount)(_react.default.createElement(_FormCheck.default, {
      isValid: true
    })).assertSingle('.is-valid');
  });
  it('should support isInvalid', function () {
    (0, _enzyme.mount)(_react.default.createElement(_FormCheck.default, {
      isInvalid: true
    })).assertSingle('.is-invalid');
  });
  it('should support ref forwarding', function () {
    var Container =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(Container, _React$Component);

      function Container() {
        _classCallCheck(this, Container);

        return _possibleConstructorReturn(this, _getPrototypeOf(Container).apply(this, arguments));
      }

      _createClass(Container, [{
        key: "render",
        value: function render() {
          var _this = this;

          return _react.default.createElement(_FormCheck.default, {
            ref: function ref(_ref) {
              _this.input = _ref;
            }
          });
        }
      }]);

      return Container;
    }(_react.default.Component);

    var instance = (0, _enzyme.mount)(_react.default.createElement(Container, null)).instance();
    expect(instance.input.tagName).to.equal('INPUT');
  });
  it('should support custom', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_FormCheck.default, {
      custom: true,
      label: "My label"
    }));
    wrapper.assertSingle('div.custom-control').assertSingle('div.custom-checkbox').assertSingle('input.custom-control-input');
    wrapper.assertSingle('label.custom-control-label');
  });
  it('should support custom with inline', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_FormCheck.default, {
      custom: true,
      inline: true,
      label: "My label"
    }));
    wrapper.assertSingle('div.custom-control-inline');
  });
});

//# sourceMappingURL=FormCheckSpec.js.map