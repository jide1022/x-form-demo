import { PropType } from "vue";
import { CascaderFormItemOptions } from './Options';
declare const _sfc_main: import("vue").DefineComponent<{
    value: {
        type: PropType<string[]>;
    };
    options: {
        type: PropType<CascaderFormItemOptions>;
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
        value: string[] | undefined;
        disabled: boolean;
        readonly: boolean;
        options: CascaderFormItemOptions;
    }>;
    emits: (event: "change", ...args: any[]) => void;
    value: import("vue").Ref<string[]>;
    readonlyValue: import("vue").ComputedRef<string>;
    change: (value: string | string[]) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value?: unknown;
    options?: unknown;
    readonly?: unknown;
    disabled?: unknown;
} & {
    disabled: boolean;
    readonly: boolean;
    options: CascaderFormItemOptions;
} & {
    value?: string[] | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    readonly: boolean;
}>;
export default _sfc_main;
