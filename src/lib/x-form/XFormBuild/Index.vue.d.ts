import { PropType } from 'vue';
import { ControlKey, DisplayState, FormItemOptions, UiState } from '../Controls/FormItemOptions';
import { DataSource } from '../Controls/XDataSource/types';
import { ControlType } from '../Controls/FormItemOptions';
import { FormConfig } from '../Controls/FormOptions';
declare const _sfc_main: import("vue").DefineComponent<{
    initialData: {
        type: ObjectConstructor;
    };
    formConfig: {
        type: PropType<FormConfig>;
        required: true;
    };
}, {
    emits: (event: "change" | "formDataChange" | "customClick", ...args: any[]) => void;
    props: Readonly<{
        onChange: ((...args: any[]) => any) | undefined;
        onFormDataChange: ((...args: any[]) => any) | undefined;
        onCustomClick: ((...args: any[]) => any) | undefined;
        initialData: Record<string, any> | undefined;
        formConfig: FormConfig;
    }>;
    _formConfig: import("vue").Ref<{
        config: {
            layout: "vertical" | "horizontal";
            colon?: boolean | undefined;
            labelAlign: "right" | "left";
            labelWidth: number;
            name: string;
            uiState: UiState;
            eventResponder?: {
                change: string;
                dataSourceChange: string;
            } | undefined;
        };
        controls: {
            [x: string]: any;
            id: string;
            controlName: string;
            controlKey: ControlKey;
            controlType: ControlType;
            field: string;
            label: string;
            renderLabel?: boolean | undefined;
            labelWidth?: number | undefined;
            tip?: string | undefined;
            extra?: string | undefined;
            rules?: {
                key: string;
                type?: string | undefined;
                trigger?: string | undefined;
                message?: string | undefined;
                pattern?: string | undefined;
                min?: number | undefined;
                max?: number | undefined;
                required?: boolean | undefined;
                whitespace?: boolean | undefined;
                validator?: Function | undefined;
                code?: string | undefined;
            }[] | undefined;
            displayState?: DisplayState | undefined;
            uiState?: UiState | undefined;
            children?: any[] | undefined;
            dataSource?: {
                [x: string]: any;
                key?: string | undefined;
                label?: string | undefined;
                value?: string | undefined;
                children?: any[] | undefined;
            }[] | undefined;
            propertyResponder?: {
                uiState?: string | undefined;
                displayState?: string | undefined;
            } | undefined;
        }[];
    }>;
    fromItemPathMap: {
        [key: string]: FormItemOptions;
    };
    formRef: import("vue").Ref<any>;
    state: {
        spinning: boolean;
    };
    formData: import("vue").Ref<{
        [x: string]: any;
    }>;
    generateInitData: () => {};
    generateControlPathMap: () => void;
    initDta: {};
    handleControlValueChange: (field: string, value: any, formFieldPath: string[], controlFieldPath: string[], otherData: any) => void;
    getFormControl: (path: string | string[]) => FormItemOptions | null;
    setFormItemValue: (formFieldPath: string[] | string, value: any) => void;
    getFormItemValue: (formFieldPath: string[] | string) => any;
    setFormItemDataSource: (controlFieldPath: string[], dataSource: DataSource) => void;
    getFormItemDataSource: (controlFieldPath: string[]) => DataSource | null | undefined;
    setFormLoading: (loading: boolean) => void;
    setFormItemProperty: (controlFieldPath: string[], property: string, propertyValue: string) => void;
    setFormProperty: (property: string, propertyValue: string) => void;
    validate: () => any;
    triggerCustomEvent: (eventName: string, field: string, value: any, formFieldPath: string[], controlFieldPath: string[], labelField?: string | undefined) => void;
    XFormItem: import("vue").DefineComponent<{
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
        formOptions: import("vue").Ref<{
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
        formData: import("vue").Ref<{
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "formDataChange" | "customClick")[], "change" | "formDataChange" | "customClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    initialData?: unknown;
    formConfig?: unknown;
} & {
    formConfig: FormConfig;
} & {
    initialData?: Record<string, any> | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onFormDataChange?: ((...args: any[]) => any) | undefined;
    onCustomClick?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
