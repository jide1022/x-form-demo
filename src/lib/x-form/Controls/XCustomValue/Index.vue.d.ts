import { PropType } from 'vue';
import { CustomValueFormItemOptions } from './Options';
declare const _sfc_main: import("vue").DefineComponent<{
    value: {
        type: (BooleanConstructor | ArrayConstructor | StringConstructor | NumberConstructor)[];
    };
    options: {
        type: PropType<CustomValueFormItemOptions>;
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
    parentData: {
        type: ObjectConstructor;
    };
}, {
    props: Readonly<{
        onChange: ((...args: any[]) => any) | undefined;
        parentData: Record<string, any> | undefined;
        value: string | number | boolean | unknown[] | undefined;
        disabled: boolean;
        readonly: boolean;
        options: CustomValueFormItemOptions;
        onTriggerEvent: ((...args: any[]) => any) | undefined;
    }>;
    value: import("vue").ComputedRef<any>;
    readonlyValue: import("vue").ComputedRef<any>;
    emits: (event: "change" | "triggerEvent", ...args: any[]) => void;
    handleCustomValueBtnClick: () => void;
    handleCustomValueReset: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "triggerEvent")[], "change" | "triggerEvent", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value?: unknown;
    options?: unknown;
    readonly?: unknown;
    disabled?: unknown;
    parentData?: unknown;
} & {
    disabled: boolean;
    readonly: boolean;
    options: CustomValueFormItemOptions;
} & {
    parentData?: Record<string, any> | undefined;
    value?: string | number | boolean | unknown[] | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onTriggerEvent?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    readonly: boolean;
}>;
export default _sfc_main;
