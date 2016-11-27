'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _Month = require('./Month');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  year: _react2.default.PropTypes.number.isRequired,
  forceFullWeeks: _react2.default.PropTypes.bool,
  showDaysOfWeek: _react2.default.PropTypes.bool,
  showWeekSeparators: _react2.default.PropTypes.bool,
  firstDayOfWeek: _react2.default.PropTypes.number,
  selectRange: _react2.default.PropTypes.bool,
  onPickDate: _react2.default.PropTypes.func,
  onPickRange: _react2.default.PropTypes.func,
  customClasses: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.object, _react2.default.PropTypes.func])
};

var defaultProps = {
  year: (0, _moment2.default)().year(),
  forceFullWeeks: false,
  showDaysOfWeek: true,
  showWeekSeparators: true,
  firstDayOfWeek: 0,
  selectRange: false,
  onPickDate: null,
  onPickRange: null,
  selectedDay: (0, _moment2.default)(),
  customClasses: null
};

var Calendar = function (_React$Component) {
  _inherits(Calendar, _React$Component);

  function Calendar(props) {
    _classCallCheck(this, Calendar);

    var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

    _this.state = {
      selectingRange: undefined
    };
    return _this;
  }

  _createClass(Calendar, [{
    key: 'dayClicked',
    value: function dayClicked(date, classes) {
      var _state = this.state,
          selectingRange = _state.selectingRange,
          useless = _state.useless;
      var _props = this.props,
          selectRange = _props.selectRange,
          onPickRange = _props.onPickRange,
          onPickDate = _props.onPickDate;


      if (!selectRange) {
        onPickDate && onPickDate(date, classes);
        return;
      }

      if (!selectingRange) {
        selectingRange = [date, date];
      } else {
        if (selectingRange[0] > date) {
          onPickRange && onPickRange(date, selectingRange[0]);
        } else {
          onPickRange && onPickRange(selectingRange[0], date);
        }
        selectingRange = undefined;
      }

      this.setState({
        selectingRange: selectingRange
      });
    }
  }, {
    key: 'dayHovered',
    value: function dayHovered(hoveredDay) {
      var selectingRange = this.state.selectingRange;


      if (selectingRange) {
        selectingRange[1] = hoveredDay;

        this.setState({
          selectingRange: selectingRange
        });
      }
    }
  }, {
    key: '_daysOfWeek',
    value: function _daysOfWeek() {
      var _props2 = this.props,
          firstDayOfWeek = _props2.firstDayOfWeek,
          forceFullWeeks = _props2.forceFullWeeks,
          showWeekSeparators = _props2.showWeekSeparators;

      var totalDays = forceFullWeeks ? 42 : 37;

      var days = [];
      (0, _utils.range)(firstDayOfWeek, totalDays + firstDayOfWeek).map(function (i) {
        var day = (0, _moment2.default)().weekday(i).format('dd').charAt(0);

        if (showWeekSeparators) {
          if (i % 7 === firstDayOfWeek && days.length) {
            // push week separator
            days.push(_react2.default.createElement('th', {
              className: 'week-separator',
              key: 'seperator-' + i
            }));
          }
        }
        days.push(_react2.default.createElement(
          'th',
          {
            key: 'weekday-' + i
          },
          day
        ));
      });

      return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'th',
          null,
          '\xA0'
        ),
        days
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          year = _props3.year,
          firstDayOfWeek = _props3.firstDayOfWeek;
      var selectingRange = this.state.selectingRange;


      var months = (0, _utils.range)(0, 12).map(function (month) {
        return _react2.default.createElement(_Month.Month, _extends({
          month: month,
          key: 'month-' + month,
          dayClicked: function dayClicked(d, classes) {
            return _this2.dayClicked(d, classes);
          },
          dayHovered: function dayHovered(d) {
            return _this2.dayHovered(d);
          }
        }, _this2.props, {
          selectingRange: selectingRange
        }));
      });

      return _react2.default.createElement(
        'table',
        { className: 'calendar' },
        _react2.default.createElement(
          'thead',
          { className: 'day-headers' },
          this.props.showDaysOfWeek ? this._daysOfWeek() : null
        ),
        _react2.default.createElement(
          'tbody',
          null,
          months
        )
      );
    }
  }]);

  return Calendar;
}(_react2.default.Component);

exports.default = Calendar;


Calendar.propTypes = propTypes;
Calendar.defaultProps = defaultProps;