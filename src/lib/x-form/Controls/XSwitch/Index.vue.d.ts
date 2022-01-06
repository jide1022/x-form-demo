import { PropType } from 'vue';
import { SwitchFormItemOptions } from './Options';
declare const _sfc_main: import("vue").DefineComponent<{
    value: {
        type: BooleanConstructor;
    };
    options: {
        type: PropType<SwitchFormItemOptions>;
        required: true;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    props: Readonly<{
        onChange: ((...args: any[]) => any) | undefined;
        value: boolean;
        disabled: boolean;
        readonly: boolean;
        options: SwitchFormItemOptions;
    }>;
    emits: (event: "change", ...args: any[]) => void;
    value: import("vue").Ref<boolean | undefined>;
    readonlyValue: import("vue").ComputedRef<string | number | undefined>;
    change: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value?: unknown;
    options?: unknown;
    readonly?: unknown;
    disabled?: unknown;
} & {
    value: boolean;
    disabled: boolean;
    readonly: boolean;
    options: SwitchFormItemOptions;
} & {}> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    value: boolean;
    disabled: boolean;
    readonly: boolean;
}>;
export default _sfc_main;
