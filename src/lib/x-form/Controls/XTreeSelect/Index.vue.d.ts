import { PropType } from "vue";
import { TreeSelectFormItemOptions } from './Options';
declare const _sfc_main: import("vue").DefineComponent<{
    value: {
        type: PropType<string | string[]>;
    };
    options: {
        type: PropType<TreeSelectFormItemOptions>;
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
        value: string | string[] | undefined;
        disabled: boolean;
        readonly: boolean;
        options: TreeSelectFormItemOptions;
    }>;
    emits: (event: "change", ...args: any[]) => void;
    value: import("vue").Ref<string | string[] | undefined>;
    readonlyValue: import("vue").ComputedRef<string | undefined>;
    change: (value: string | string[]) => void;
    DownOutlined: import("@ant-design/icons-vue/lib/icons/DownOutlined").DownOutlinedIconType;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value?: unknown;
    options?: unknown;
    readonly?: unknown;
    disabled?: unknown;
} & {
    disabled: boolean;
    readonly: boolean;
    options: TreeSelectFormItemOptions;
} & {
    value?: string | string[] | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    readonly: boolean;
}>;
export default _sfc_main;
