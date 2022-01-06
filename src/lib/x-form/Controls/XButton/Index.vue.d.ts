import { PropType } from 'vue';
import { ButtonFormItemOptions } from './Options';
declare const _sfc_main: import("vue").DefineComponent<{
    options: {
        type: PropType<ButtonFormItemOptions>;
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    props: Readonly<{
        disabled: boolean;
        options: ButtonFormItemOptions;
        onTriggerEvent: ((...args: any[]) => any) | undefined;
    }>;
    emits: (event: "triggerEvent", ...args: any[]) => void;
    click: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "triggerEvent"[], "triggerEvent", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    options?: unknown;
    disabled?: unknown;
} & {
    disabled: boolean;
    options: ButtonFormItemOptions;
} & {}> & {
    onTriggerEvent?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
}>;
export default _sfc_main;
