import { a as _objectSpread2 } from './index-827940c1.esm.js';
import _slicedToArray from '@babel/runtime/helpers/esm/slicedToArray';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import { useMemo, useState, useCallback } from 'react';

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
      restSelectProps = _objectWithoutProperties(_ref, _excluded);

  var stateInputValue = useMemo(function () {
    return propsInputValue !== undefined ? propsInputValue : defaultInputValue;
  }, [propsInputValue, defaultInputValue]);

  var _useState = useState(propsMenuIsOpen !== undefined ? propsMenuIsOpen : defaultMenuIsOpen),
      _useState2 = _slicedToArray(_useState, 2),
      stateMenuIsOpen = _useState2[0],
      setStateMenuIsOpen = _useState2[1];

  var stateValue = useMemo(function () {
    return propsValue !== undefined ? propsValue : defaultValue;
  }, [propsValue, defaultValue]);
  var onChange = useCallback(function (value, actionMeta) {
    if (typeof propsOnChange === 'function') {
      propsOnChange(value, actionMeta);
    }
  }, [propsOnChange]);
  var onInputChange = useCallback(function (value, actionMeta) {

    if (typeof propsOnInputChange === 'function') {
      propsOnInputChange(value, actionMeta);
    }
  }, [propsOnInputChange]);
  var onMenuOpen = useCallback(function () {
    if (typeof propsOnMenuOpen === 'function') {
      propsOnMenuOpen();
    }

    setStateMenuIsOpen(true);
  }, [propsOnMenuOpen]);
  var onMenuClose = useCallback(function () {
    if (typeof propsOnMenuClose === 'function') {
      propsOnMenuClose();
    }

    setStateMenuIsOpen(false);
  }, [propsOnMenuClose]);
  var inputValue = propsInputValue !== undefined ? propsInputValue : stateInputValue;
  var menuIsOpen = propsMenuIsOpen !== undefined ? propsMenuIsOpen : stateMenuIsOpen;
  var value = propsValue !== undefined ? propsValue : stateValue;
  return _objectSpread2(_objectSpread2({}, restSelectProps), {}, {
    inputValue: inputValue,
    menuIsOpen: menuIsOpen,
    onChange: onChange,
    onInputChange: onInputChange,
    onMenuClose: onMenuClose,
    onMenuOpen: onMenuOpen,
    value: value
  });
}

export { useStateManager as u };
