import { PropType } from 'vue';
import { SliderFormItemOptions } from './Options';
declare const _sfc_main: import("vue").DefineComponent<{
    value: {
        type: (StringConstructor | NumberConstructor)[];
    };
    options: {
        type: PropType<SliderFormItemOptions>;
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
        value: string | number | undefined;
        disabled: boolean;
        readonly: boolean;
        options: SliderFormItemOptions;
    }>;
    emits: (event: "change", ...args: any[]) => void;
    value: import("vue").Ref<number | undefined>;
    change: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value?: unknown;
    options?: unknown;
    readonly?: unknown;
    disabled?: unknown;
} & {
    disabled: boolean;
    readonly: boolean;
    options: SliderFormItemOptions;
} & {
    value?: string | number | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    readonly: boolean;
}>;
export default _sfc_main;
