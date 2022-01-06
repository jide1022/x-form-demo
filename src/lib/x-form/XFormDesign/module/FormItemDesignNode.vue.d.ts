import { PropType, Ref } from 'vue';
import { DisplayState, FormItemOptions, UiState } from '../../Controls/FormItemOptions';
import { ControlType } from '../../Controls/FormItemOptions';
declare const _sfc_main: import("vue").DefineComponent<{
    controlOptions: {
        type: PropType<FormItemOptions>;
        required: true;
    };
    uiState: {
        type: PropType<UiState>;
        required: true;
    };
}, {
    setSelectedControlOptions: Function | undefined;
    selectedControlOptionsId: Ref<any> | undefined;
    handleControlCopy: import("../injectionKeys").HandleControlCopyFun | undefined;
    handleControlDelete: import("../injectionKeys").HandleControlDeleteFun | undefined;
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
    props: Readonly<{
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        controlOptions: FormItemOptions;
        uiState: UiState;
    }>;
    currentUiState: import("vue").ComputedRef<UiState>;
    disabled: import("vue").ComputedRef<boolean>;
    readonly: import("vue").ComputedRef<boolean>;
    labelCol: import("vue").ComputedRef<{
        style: string;
    } | null>;
    com: import("vue").ComputedRef<import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions> | {
        com?: import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions> | undefined;
        options?: FormItemOptions | undefined;
        formConfig?: import("../../Controls/FormOptions").FormConfig | undefined;
    } | undefined>;
    DisplayState: typeof DisplayState;
    QuestionCircleOutlined: import("@ant-design/icons-vue/lib/icons/QuestionCircleOutlined").QuestionCircleOutlinedIconType;
    CopyOutlined: import("@ant-design/icons-vue/lib/icons/CopyOutlined").CopyOutlinedIconType;
    DeleteOutlined: import("@ant-design/icons-vue/lib/icons/DeleteOutlined").DeleteOutlinedIconType;
    ControlType: typeof ControlType;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    controlOptions?: unknown;
    uiState?: unknown;
} & {
    controlOptions: FormItemOptions;
    uiState: UiState;
} & {}>, {}>;
export default _sfc_main;
