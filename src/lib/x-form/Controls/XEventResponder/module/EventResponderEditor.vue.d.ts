import { PropType } from 'vue';
import { EventResponder } from '../types';
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<EventResponder>;
        required: true;
    };
}, {
    props: Readonly<{
        modelValue: EventResponder;
        "onUpdate:modelValue": ((...args: any[]) => any) | undefined;
    }>;
    emits: (event: "update:modelValue", ...args: any[]) => void;
    state: {
        value: {
            change: string;
            dataSourceChange: string;
        };
    };
    onChangeCodeChange: (code: string) => void;
    onDataSourceChangeCodeChange: (code: string) => void;
    XJsEditor: import("vue").DefineComponent<{
        value: {
            type: StringConstructor;
            default: string;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        height: {
            type: NumberConstructor;
            default: number;
        };
    }, {
        props: Readonly<{
            onChange: ((...args: any[]) => any) | undefined;
            value: string;
            readonly: boolean;
            placeholder: string;
            height: number;
        }>;
        emits: (event: "change", ...args: any[]) => void;
        editorRef: import("vue").Ref<Element | undefined>;
        editor: null;
        beautifyCode: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        value?: unknown;
        placeholder?: unknown;
        readonly?: unknown;
        height?: unknown;
    } & {
        value: string;
        readonly: boolean;
        placeholder: string;
        height: number;
    } & {}> & {
        onChange?: ((...args: any[]) => any) | undefined;
    }, {
        value: string;
        readonly: boolean;
        placeholder: string;
        height: number;
    }>;
    changeExampleCode: string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
} & {
    modelValue: EventResponder;
} & {}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
