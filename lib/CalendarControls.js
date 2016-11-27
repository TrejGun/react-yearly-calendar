'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  year: _react2.default.PropTypes.number.isRequired,
  onPrevYear: _react2.default.PropTypes.func,
  onNextYear: _react2.default.PropTypes.func,
  goToToday: _react2.default.PropTypes.func,
  showTodayButton: _react2.default.PropTypes.bool
};

var CalendarControls = function (_React$Component) {
  _inherits(CalendarControls, _React$Component);

  function CalendarControls() {
    _classCallCheck(this, CalendarControls);

    return _possibleConstructorReturn(this, (CalendarControls.__proto__ || Object.getPrototypeOf(CalendarControls)).apply(this, arguments));
  }

  _createClass(CalendarControls, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          showTodayButton = _props.showTodayButton,
          goToToday = _props.goToToday,
          onPrevYear = _props.onPrevYear,
          onNextYear = _props.onNextYear;

      var todayButton = void 0;
      if (showTodayButton) {
        todayButton = _react2.default.createElement(
          'div',
          {
            className: 'control today',
            onClick: function onClick() {
              return goToToday();
            }
          },
          'Today'
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'calendar-controls' },
        _react2.default.createElement(
          'div',
          {
            className: 'control',
            onClick: function onClick() {
              return onPrevYear();
            }
          },
          '\xAB'
        ),
        _react2.default.createElement(
          'div',
          { className: 'current-year' },
          this.props.year
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'control',
            onClick: function onClick() {
              return onNextYear();
            }
          },
          '\xBB'
        ),
        todayButton
      );
    }
  }]);

  return CalendarControls;
}(_react2.default.Component);

exports.default = CalendarControls;


CalendarControls.propTypes = propTypes;