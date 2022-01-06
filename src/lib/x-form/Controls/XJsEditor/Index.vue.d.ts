declare const _sfc_main: import("vue").DefineComponent<{
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
export default _sfc_main;
