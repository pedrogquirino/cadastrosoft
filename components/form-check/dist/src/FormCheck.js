"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ThemeProvider = require("./ThemeProvider");

var _FormContext = _interopRequireDefault(require("./FormContext"));

var _Feedback = _interopRequireDefault(require("./Feedback"));

var _FormCheckInput = _interopRequireDefault(require("./FormCheckInput"));

var _FormCheckLabel = _interopRequireDefault(require("./FormCheckLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormCheck =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormCheck, _React$Component);

  function FormCheck() {
    _classCallCheck(this, FormCheck);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormCheck).apply(this, arguments));
  }

  _createClass(FormCheck, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          bsPrefix = _this$props.bsPrefix,
          inline = _this$props.inline,
          disabled = _this$props.disabled,
          isValid = _this$props.isValid,
          isInvalid = _this$props.isInvalid,
          feedback = _this$props.feedback,
          inputRef = _this$props.inputRef,
          className = _this$props.className,
          style = _this$props.style,
          title = _this$props.title,
          type = _this$props.type,
          label = _this$props.label,
          children = _this$props.children,
          custom = _this$props.custom,
          props = _objectWithoutProperties(_this$props, ["id", "bsPrefix", "inline", "disabled", "isValid", "isInvalid", "feedback", "inputRef", "className", "style", "title", "type", "label", "children", "custom"]);

      var hasLabel = label != null && label !== false && !children;

      var input = _react.default.createElement(_FormCheckInput.default, _extends({}, props, {
        type: type,
        ref: inputRef,
        isValid: isValid,
        isInvalid: isInvalid,
        isStatic: !hasLabel,
        disabled: disabled
      }));

      return _react.default.createElement(_FormContext.default.Transform, {
        mapToValue: function mapToValue(_ref) {
          var controlId = _ref.controlId;
          return {
            controlId: id || controlId,
            custom: custom
          };
        }
      }, _react.default.createElement("div", {
        style: style,
        className: (0, _classnames.default)(className, !custom && bsPrefix, custom && "custom-control custom-".concat(type), inline && "".concat(custom ? 'custom-control' : bsPrefix, "-inline"))
      }, children || _react.default.createElement(_react.default.Fragment, null, input, hasLabel && _react.default.createElement(_FormCheckLabel.default, {
        title: title
      }, label), (isValid || isInvalid) && _react.default.createElement(_Feedback.default, {
        type: isValid ? 'valid' : 'invalid'
      }, feedback))));
    }
  }]);

  return FormCheck;
}(_react.default.Component);

_defineProperty(FormCheck, "propTypes", {
  /**
   * @default 'form-check'
   */
  bsPrefix: _propTypes.default.string,

  /**
   * The FormCheck `ref` will be forwarded to the underlying input element,
   * which means it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias {ref}
   */
  inputRef: _propTypes.default.any,

  /** A HTML id attribute, necessary for proper form accessibility. */
  id: _propTypes.default.string,

  /**
   * Provide a function child to manually handle the layout of the FormCheck's inner components.
   *
   * ````
   * <FormCheck>
   *   <FormCheck.Input isInvalid type={radio} />
   *   <FormCheck.Label>Allow us to contact you?</FormCheck.Label>
   *   <Feedback type="invalid">Yo this is required</Feedback>
   * </FormCheck>
   * ```
   */
  children: _propTypes.default.node,
  inline: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  title: _propTypes.default.string,
  label: _propTypes.default.node,

  /** Use Bootstrap's custom form elements to replace the browser defaults */
  custom: _propTypes.default.bool,

  /** The type of checkable. */
  type: _propTypes.default.oneOf(['radio', 'checkbox']).isRequired,

  /** Manually style the input as valid */
  isValid: _propTypes.default.bool.isRequired,

  /** Manually style the input as invalid */
  isInvalid: _propTypes.default.bool.isRequired,

  /** A message to display when the input is in a validation state */
  feedback: _propTypes.default.node
});

_defineProperty(FormCheck, "defaultProps", {
  type: 'checkbox',
  inline: false,
  disabled: false,
  isValid: false,
  isInvalid: false,
  title: ''
});

var DecoratedFormCheck = (0, _ThemeProvider.createBootstrapComponent)(FormCheck, {
  forwardRefAs: 'inputRef',
  prefix: 'form-check'
});
DecoratedFormCheck.Input = _FormCheckInput.default;
DecoratedFormCheck.Label = _FormCheckLabel.default;
var _default = DecoratedFormCheck;
exports.default = _default;

//# sourceMappingURL=FormCheck.js.map