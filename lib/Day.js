'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Day = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  classes: _react2.default.PropTypes.string,
  dayClicked: _react2.default.PropTypes.func,
  dayHovered: _react2.default.PropTypes.func
};

var defaultProps = {
  classes: ''
};

var Day = exports.Day = function (_React$Component) {
  _inherits(Day, _React$Component);

  function Day() {
    _classCallCheck(this, Day);

    return _possibleConstructorReturn(this, (Day.__proto__ || Object.getPrototypeOf(Day)).apply(this, arguments));
  }

  _createClass(Day, [{
    key: '_onClick',
    value: function _onClick() {
      var _props = this.props,
          dayClicked = _props.dayClicked,
          day = _props.day;

      dayClicked(day);
    }
  }, {
    key: '_onHover',
    value: function _onHover() {
      var _props2 = this.props,
          dayHovered = _props2.dayHovered,
          day = _props2.day;

      dayHovered(day);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          classes = _props3.classes,
          day = _props3.day;

      return _react2.default.createElement(
        'td',
        {
          onClick: function onClick() {
            return _this2._onClick();
          },
          onMouseEnter: function onMouseEnter() {
            return _this2._onHover();
          },
          className: classes
        },
        _react2.default.createElement(
          'span',
          { className: 'day-number' },
          isNaN(day.date()) ? "" : day.date()
        )
      );
    }
  }]);

  return Day;
}(_react2.default.Component);

Day.propTypes = propTypes;
Day.defaultProps = defaultProps;