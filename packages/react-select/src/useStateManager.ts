import {
  ActionMeta,
  GroupBase,
  InputActionMeta,
  OnChangeValue,
  OptionBase,
  PropsValue,
} from './types';
import { PublicBaseSelectProps } from './Select';
import { useCallback, useState, useMemo } from 'react';

type StateManagedPropKeys =
  | 'inputValue'
  | 'menuIsOpen'
  | 'onChange'
  | 'onInputChange'
  | 'onMenuClose'
  | 'onMenuOpen'
  | 'value';

type SelectPropsWithOptionalStateManagedProps<
  Option extends OptionBase,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> = Omit<PublicBaseSelectProps<Option, IsMulti, Group>, StateManagedPropKeys> &
  Partial<PublicBaseSelectProps<Option, IsMulti, Group>>;

export interface StateManagerAdditionalProps<Option extends OptionBase> {
  defaultInputValue?: string;
  defaultMenuIsOpen?: boolean;
  defaultValue?: PropsValue<Option>;
}

export type StateManagerProps<
  Option extends OptionBase = OptionBase,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> = SelectPropsWithOptionalStateManagedProps<Option, IsMulti, Group> &
  StateManagerAdditionalProps<Option>;

export default function useStateManager<
  Option extends OptionBase,
  IsMulti extends boolean,
  Group extends GroupBase<Option>,
  AdditionalProps
>({
  defaultInputValue = '',
  defaultMenuIsOpen = false,
  defaultValue = null,
  inputValue: propsInputValue,
  menuIsOpen: propsMenuIsOpen,
  onChange: propsOnChange,
  onInputChange: propsOnInputChange,
  onMenuClose: propsOnMenuClose,
  onMenuOpen: propsOnMenuOpen,
  value: propsValue,
  ...restSelectProps
}: StateManagerProps<Option, IsMulti, Group> &
  AdditionalProps): PublicBaseSelectProps<Option, IsMulti, Group> &
  Omit<
    AdditionalProps,
    keyof StateManagerAdditionalProps<Option> | StateManagedPropKeys
  > {
  const stateInputValue = useMemo(
    () => propsInputValue !== undefined ? propsInputValue : defaultInputValue,
    [propsInputValue, defaultInputValue]
  );
  const [stateMenuIsOpen, setStateMenuIsOpen] = useState(
    propsMenuIsOpen !== undefined ? propsMenuIsOpen : defaultMenuIsOpen
  );
  const stateValue = useMemo(
    () => propsValue !== undefined ? propsValue : defaultValue,
    [propsValue, defaultValue]
  );

  const onChange = useCallback(
    (value: OnChangeValue<Option, IsMulti>, actionMeta: ActionMeta<Option>) => {
      if (typeof propsOnChange === 'function') {
        propsOnChange(value, actionMeta);
      }
    },
    [propsOnChange]
  );
  const onInputChange = useCallback(
    (value: string, actionMeta: InputActionMeta) => {
      let newValue;
      if (typeof propsOnInputChange === 'function') {
        newValue = propsOnInputChange(value, actionMeta);
      }
    },
    [propsOnInputChange]
  );
  const onMenuOpen = useCallback(() => {
    if (typeof propsOnMenuOpen === 'function') {
      propsOnMenuOpen();
    }
    setStateMenuIsOpen(true);
  }, [propsOnMenuOpen]);
  const onMenuClose = useCallback(() => {
    if (typeof propsOnMenuClose === 'function') {
      propsOnMenuClose();
    }
    setStateMenuIsOpen(false);
  }, [propsOnMenuClose]);

  const inputValue =
    propsInputValue !== undefined ? propsInputValue : stateInputValue;
  const menuIsOpen =
    propsMenuIsOpen !== undefined ? propsMenuIsOpen : stateMenuIsOpen;
  const value = propsValue !== undefined ? propsValue : stateValue;

  return {
    ...restSelectProps,
    inputValue,
    menuIsOpen,
    onChange,
    onInputChange,
    onMenuClose,
    onMenuOpen,
    value,
  };
}
