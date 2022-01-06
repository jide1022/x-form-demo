declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: string;
    };
}, {
    props: Readonly<{
        onChange: ((...args: any[]) => any) | undefined;
        modelValue: string | number | boolean;
        "onUpdate:modelValue": ((...args: any[]) => any) | undefined;
    }>;
    emits: (event: "change" | "update:modelValue", ...args: any[]) => void;
    state: {
        activeIndex: number;
        typeList: ({
            label: string;
            value: string;
            default: string;
        } | {
            label: string;
            value: string;
            default: null;
        } | {
            label: string;
            value: string;
            default: boolean;
        })[];
        value: string | number | boolean | null;
    };
    btnText: import("vue").ComputedRef<string>;
    handleTypeChange: () => void;
    handleValueChange: (value: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
} & {
    modelValue: string | number | boolean;
} & {}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number | boolean;
}>;
export default _sfc_main;
