/** @jsx jsx */
import { ReactNode } from 'react';
import { jsx } from '@emotion/react';
import { CommonPropsAndClassName, CSSObjectWithLabel, GroupBase, OptionBase } from '../types';
export interface ContainerProps<Option extends OptionBase = OptionBase, IsMulti extends boolean = boolean, Group extends GroupBase<Option> = GroupBase<Option>> extends CommonPropsAndClassName<Option, IsMulti, Group> {
    /** Whether the select is disabled. */
    isDisabled: boolean;
    isFocused: boolean;
    /** The children to be rendered. */
    children: ReactNode;
    /** Inner props to be passed down to the container. */
    innerProps: JSX.IntrinsicElements['div'];
}
export declare const containerCSS: <Option extends OptionBase, IsMulti extends boolean, Group extends GroupBase<Option>>({ isDisabled, isRtl, }: ContainerProps<Option, IsMulti, Group>) => CSSObjectWithLabel;
export declare const SelectContainer: <Option extends OptionBase, IsMulti extends boolean, Group extends GroupBase<Option>>(props: ContainerProps<Option, IsMulti, Group>) => jsx.JSX.Element;
export interface ValueContainerProps<Option extends OptionBase = OptionBase, IsMulti extends boolean = boolean, Group extends GroupBase<Option> = GroupBase<Option>> extends CommonPropsAndClassName<Option, IsMulti, Group> {
    /** Props to be passed to the value container element. */
    innerProps?: JSX.IntrinsicElements['div'];
    /** The children to be rendered. */
    children: ReactNode;
    isDisabled: boolean;
}
export declare const valueContainerCSS: <Option extends OptionBase, IsMulti extends boolean, Group extends GroupBase<Option>>({ theme: { spacing }, }: ValueContainerProps<Option, IsMulti, Group>) => CSSObjectWithLabel;
export declare const ValueContainer: <Option extends OptionBase, IsMulti extends boolean, Group extends GroupBase<Option>>(props: ValueContainerProps<Option, IsMulti, Group>) => jsx.JSX.Element;
export interface IndicatorsContainerProps<Option extends OptionBase = OptionBase, IsMulti extends boolean = boolean, Group extends GroupBase<Option> = GroupBase<Option>> extends CommonPropsAndClassName<Option, IsMulti, Group> {
    isDisabled: boolean;
    /** The children to be rendered. */
    children: ReactNode;
    /** Props to be passed to the indicators container element. */
    innerProps?: {};
}
export declare const indicatorsContainerCSS: () => CSSObjectWithLabel;
export declare const IndicatorsContainer: <Option extends OptionBase, IsMulti extends boolean, Group extends GroupBase<Option>>(props: IndicatorsContainerProps<Option, IsMulti, Group>) => jsx.JSX.Element;
