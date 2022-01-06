import { PropType } from 'vue';
import { TimeFormItemOptions } from './Options';
import dayjs, { Dayjs } from 'dayjs';
declare const _sfc_main: import("vue").DefineComponent<{
    value: {
        type: StringConstructor;
    };
    options: {
        type: PropType<TimeFormItemOptions>;
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
        value: string | undefined;
        disabled: boolean;
        readonly: boolean;
        options: TimeFormItemOptions;
    }>;
    emits: (event: "change", ...args: any[]) => void;
    value: import("vue").Ref<dayjs.Dayjs | undefined>;
    readonlyValue: import("vue").ComputedRef<string>;
    change: (date: Dayjs) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value?: unknown;
    options?: unknown;
    readonly?: unknown;
    disabled?: unknown;
} & {
    disabled: boolean;
    readonly: boolean;
    options: TimeFormItemOptions;
} & {
    value?: string | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    readonly: boolean;
}>;
export default _sfc_main;
