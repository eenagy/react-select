export interface Option {
    readonly label: string;
    readonly value: string;
}
export declare const OPTIONS: readonly Option[];
export interface OptionDisabled {
    readonly label: string;
    readonly value: string;
    readonly isDisabled?: boolean;
}
export declare const OPTIONS_DISABLED: readonly OptionDisabled[];
export interface OptionNumberValue {
    readonly label: string;
    readonly value: number;
}
export declare const OPTIONS_NUMBER_VALUE: readonly OptionNumberValue[];
export interface OptionBooleanValue {
    readonly label: string;
    readonly value: boolean;
}
export declare const OPTIONS_BOOLEAN_VALUE: readonly OptionBooleanValue[];
export interface OptionAccented {
    readonly label: string;
    readonly value: string;
}
export declare const OPTIONS_ACCENTED: readonly OptionAccented[];
