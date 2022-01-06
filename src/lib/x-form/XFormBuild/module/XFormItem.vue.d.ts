import { PropType, Ref } from 'vue';
import { FormItemOptions, UiState } from '../../Controls/FormItemOptions';
import { ControlType } from '../../Controls/FormItemOptions';
declare const _sfc_main: import("vue").DefineComponent<{
    controlOptions: {
        type: PropType<FormItemOptions>;
        required: true;
    };
    parentData: {
        type: ObjectConstructor;
        required: true;
    };
    formFieldPath: {
        type: PropType<string[]>;
        required: true;
    };
    controlFieldPath: {
        type: PropType<string[]>;
        required: true;
    };
    value: {};
    uiState: {
        type: PropType<UiState>;
    };
}, {
    formOptions: Ref<{
        readonly layout: "vertical" | "horizontal";
        readonly colon?: boolean | undefined;
        readonly labelAlign: "right" | "left";
        readonly labelWidth: number;
        readonly name: string;
        readonly uiState: UiState;
        readonly eventResponder?: {
            readonly change: string;
            readonly dataSourceChange: string;
        } | undefined;
    }> | undefined;
    formData: Ref<{
        readonly constructor: Function;
        readonly toString: () => string;
        readonly toLocaleString: () => string;
        readonly valueOf: () => Object;
        readonly hasOwnProperty: (v: PropertyKey) => boolean;
        readonly isPrototypeOf: (v: Object) => boolean;
        readonly propertyIsEnumerable: (v: PropertyKey) => boolean;
    }> | undefined;
    triggerCustomEvent: Function | undefined;
    props: Readonly<{
        onChange: ((...args: any[]) => any) | undefined;
        controlOptions: FormItemOptions;
        parentData: Record<string, any>;
        formFieldPath: string[];
        controlFieldPath: string[];
        value: unknown;
        uiState: UiState | undefined;
    }>;
    emits: (event: "change", ...args: any[]) => void;
    labelCol: import("vue").ComputedRef<{
        style: string;
    } | null>;
    currentFormItemName: import("vue").ComputedRef<string[] | "">;
    currentFormFieldPath: import("vue").ComputedRef<string[]>;
    currentControlFieldPath: import("vue").ComputedRef<string[]>;
    displayVisible: import("vue").ComputedRef<boolean>;
    currentUiState: import("vue").ComputedRef<UiState>;
    disabled: import("vue").ComputedRef<boolean>;
    readonly: import("vue").ComputedRef<boolean>;
    formControlRules: import("vue").ComputedRef<{
        message: string | undefined;
        type: string;
        validator: ((rule: any, value: any) => Promise<void>) | null;
        key: string;
        trigger?: string | undefined;
        pattern?: string | undefined;
        min?: number | undefined;
        max?: number | undefined;
        required?: boolean | undefined;
        whitespace?: boolean | undefined;
        code?: string | undefined;
    }[]>;
    valueType: import("vue").ComputedRef<string>;
    com: import("vue").ComputedRef<import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions> | undefined>;
    change: (field: string, value: any, formFieldPath: string[], controlFieldPath: string[], otherData: any) => void;
    triggerEvent: (eventName: string, field: string, value: any, labelField?: string | undefined) => void;
    QuestionCircleOutlined: import("@ant-design/icons-vue/lib/icons/QuestionCircleOutlined").QuestionCircleOutlinedIconType;
    ControlType: typeof ControlType;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    controlOptions?: unknown;
    parentData?: unknown;
    formFieldPath?: unknown;
    controlFieldPath?: unknown;
    value?: unknown;
    uiState?: unknown;
} & {
    controlOptions: FormItemOptions;
    parentData: Record<string, any>;
    formFieldPath: string[];
    controlFieldPath: string[];
} & {
    value?: unknown;
    uiState?: UiState | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
