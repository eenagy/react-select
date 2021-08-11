'use strict';

var index = require('./index-b16c663b.cjs.dev.js');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var React = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefault(_slicedToArray);
var _objectWithoutProperties__default = /*#__PURE__*/_interopDefault(_objectWithoutProperties);

var _excluded = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function useStateManager(_ref) {
  var _ref$defaultInputValu = _ref.defaultInputValue,
      defaultInputValue = _ref$defaultInputValu === void 0 ? '' : _ref$defaultInputValu,
      _ref$defaultMenuIsOpe = _ref.defaultMenuIsOpen,
      defaultMenuIsOpen = _ref$defaultMenuIsOpe === void 0 ? false : _ref$defaultMenuIsOpe,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? null : _ref$defaultValue,
      propsInputValue = _ref.inputValue,
      propsMenuIsOpen = _ref.menuIsOpen,
      propsOnChange = _ref.onChange,
      propsOnInputChange = _ref.onInputChange,
      propsOnMenuClose = _ref.onMenuClose,
      propsOnMenuOpen = _ref.onMenuOpen,
      propsValue = _ref.value,
      restSelectProps = _objectWithoutProperties__default['default'](_ref, _excluded);

  var stateInputValue = React.useMemo(function () {
    return propsInputValue !== undefined ? propsInputValue : defaultInputValue;
  }, [propsInputValue, defaultInputValue]);

  var _useState = React.useState(propsMenuIsOpen !== undefined ? propsMenuIsOpen : defaultMenuIsOpen),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      stateMenuIsOpen = _useState2[0],
      setStateMenuIsOpen = _useState2[1];

  var stateValue = React.useMemo(function () {
    return propsValue !== undefined ? propsValue : defaultValue;
  }, [propsValue, defaultValue]);
  var onChange = React.useCallback(function (value, actionMeta) {
    if (typeof propsOnChange === 'function') {
      propsOnChange(value, actionMeta);
    }
  }, [propsOnChange]);
  var onInputChange = React.useCallback(function (value, actionMeta) {

    if (typeof propsOnInputChange === 'function') {
      propsOnInputChange(value, actionMeta);
    }
  }, [propsOnInputChange]);
  var onMenuOpen = React.useCallback(function () {
    if (typeof propsOnMenuOpen === 'function') {
      propsOnMenuOpen();
    }

    setStateMenuIsOpen(true);
  }, [propsOnMenuOpen]);
  var onMenuClose = React.useCallback(function () {
    if (typeof propsOnMenuClose === 'function') {
      propsOnMenuClose();
    }

    setStateMenuIsOpen(false);
  }, [propsOnMenuClose]);
  var inputValue = propsInputValue !== undefined ? propsInputValue : stateInputValue;
  var menuIsOpen = propsMenuIsOpen !== undefined ? propsMenuIsOpen : stateMenuIsOpen;
  var value = propsValue !== undefined ? propsValue : stateValue;
  return index._objectSpread2(index._objectSpread2({}, restSelectProps), {}, {
    inputValue: inputValue,
    menuIsOpen: menuIsOpen,
    onChange: onChange,
    onInputChange: onInputChange,
    onMenuClose: onMenuClose,
    onMenuOpen: onMenuOpen,
    value: value
  });
}

exports.useStateManager = useStateManager;
