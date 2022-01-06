import { PropType, Ref } from 'vue';
import { ControlType, ControlKey, FormItemOptions, UiState, DisplayState } from '../../Controls/FormItemOptions';
import { ArrayTableColumnFormItemOptions } from '../../Controls/XArrayTableColumn/Options';
/** 注入的对象 */
interface ColumnType extends ArrayTableColumnFormItemOptions {
    originIndex: number;
    title_text?: string;
    dataIndex?: string;
}
declare const _sfc_main: import("vue").DefineComponent<{
    options: {
        type: PropType<FormItemOptions>;
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
    uiState: {
        type: PropType<UiState>;
        required: true;
    };
}, {
    selectedControlOptionsId: Ref<any> | undefined;
    handleControlAdd: import("../injectionKeys").HandleControlAddFun | undefined;
    props: Readonly<{
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        uiState: UiState;
        disabled: boolean;
        readonly: boolean;
        options: FormItemOptions;
    }>;
    tableWrapRef: Ref<any>;
    value: Ref<object[]>;
    children: import("vue").ComputedRef<ArrayTableColumnFormItemOptions[]>;
    columns: import("vue").ComputedRef<ColumnType[]>;
    handleColumnAdd: () => void;
    state: {
        sortable: any;
    };
    DeleteOutlined: import("@ant-design/icons-vue/lib/icons/DeleteOutlined").DeleteOutlinedIconType;
    ArrayTableColumnDesignNode: import("vue").DefineComponent<{
        options: {
            type: PropType<ArrayTableColumnFormItemOptions>;
            required: true;
        };
    }, {
        setSelectedControlOptions: Function | undefined;
        selectedControlOptionsId: Ref<any> | undefined;
        handleControlAdd: import("../injectionKeys").HandleControlAddFun | undefined;
        handleControlCopy: import("../injectionKeys").HandleControlCopyFun | undefined;
        handleControlDelete: import("../injectionKeys").HandleControlDeleteFun | undefined;
        props: Readonly<{
            onChange: ((...args: any[]) => any) | undefined;
            options: ArrayTableColumnFormItemOptions;
        }>;
        emits: (event: "change", ...args: any[]) => void;
        CopyOutlined: import("@ant-design/icons-vue/lib/icons/CopyOutlined").CopyOutlinedIconType;
        DeleteOutlined: import("@ant-design/icons-vue/lib/icons/DeleteOutlined").DeleteOutlinedIconType;
        QuestionCircleOutlined: import("@ant-design/icons-vue/lib/icons/QuestionCircleOutlined").QuestionCircleOutlinedIconType;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        options?: unknown;
    } & {
        options: ArrayTableColumnFormItemOptions;
    } & {}> & {
        onChange?: ((...args: any[]) => any) | undefined;
    }, {}>;
    draggable: import("vue").DefineComponent<{
        list: {
            type: ArrayConstructor;
            required: boolean;
            default: any;
        };
        modelValue: {
            type: ArrayConstructor;
            required: boolean;
            default: any;
        };
        itemKey: {
            type: (StringConstructor | FunctionConstructor)[];
            required: boolean;
        };
        clone: {
            type: FunctionConstructor;
            default: (original: any) => any;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
        move: {
            type: FunctionConstructor;
            default: any;
        };
        componentData: {
            type: ObjectConstructor;
            /** 注入的对象 */
            required: boolean;
            default: any;
        };
    }, any, {
        error: boolean;
    }, {
        realList(): any;
        getKey(): any;
    }, {
        getUnderlyingVm(domElement: any): any;
        getUnderlyingPotencialDraggableComponent(htmElement: any): any;
        emitChanges(evt: any): void;
        alterList(onList: any): void;
        spliceList(): void;
        updatePosition(oldIndex: any, newIndex: any): void;
        getRelatedContextFromMoveEvent({ to, related }: {
            to: any;
            related: any;
        }): any;
        getVmIndexFromDomIndex(domIndex: any): any;
        onDragStart(evt: any): void;
        onDragAdd(evt: any): void;
        onDragRemove(evt: any): void;
        onDragUpdate(evt: any): void;
        computeFutureIndex(relatedContext: any, evt: any): any;
        onDragMove(evt: any, originalEvent: any): any;
        onDragEnd(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        move: Function;
        clone: Function;
        componentData: Record<string, any>;
        tag: string;
        list: unknown[];
        modelValue: unknown[];
    } & {
        itemKey?: string | Function | undefined;
    }>, {
        move: Function;
        clone: Function;
        componentData: Record<string, any>;
        tag: string;
        list: unknown[];
        modelValue: unknown[];
    }>;
    ControlKey: typeof ControlKey;
    FormItemDesignNode: import("vue").DefineComponent<{
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    options?: unknown;
    readonly?: unknown;
    disabled?: unknown;
    uiState?: unknown;
} & {
    uiState: UiState;
    disabled: boolean;
    readonly: boolean;
    options: FormItemOptions;
} & {}>, {
    disabled: boolean;
    readonly: boolean;
}>;
export default _sfc_main;
