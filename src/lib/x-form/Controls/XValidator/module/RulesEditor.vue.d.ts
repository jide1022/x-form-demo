import { PropType } from 'vue';
import { ValidatorRuleItem } from '../types';
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<ValidatorRuleItem[]>;
        required: false;
    };
}, {
    props: Readonly<{
        modelValue: ValidatorRuleItem[] | undefined;
        "onUpdate:modelValue": ((...args: any[]) => any) | undefined;
    }>;
    emits: (event: "update:modelValue", ...args: any[]) => void;
    exampleCode: string;
    state: {
        value: {
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
        }[];
        selectedKeys: never[];
        showLine: boolean;
        showIcon: boolean;
        triggerList: {
            label: string;
            value: string;
        }[];
        showJsEditor: boolean;
        code: string;
        currentIndex: number;
    };
    handleRuleAdd: () => void;
    handleRuleDelete: (index: number) => void;
    showJsEditor: (item: ValidatorRuleItem, index: number) => void;
    codeChange: (code: string) => void;
    handleOk: () => void;
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
            to: any; /**
            * 示例1
            * 直接返回true or false
            **/
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
    DragOutlined: import("@ant-design/icons-vue/lib/icons/DragOutlined").DragOutlinedIconType;
    DeleteOutlined: import("@ant-design/icons-vue/lib/icons/DeleteOutlined").DeleteOutlinedIconType;
    PlusOutlined: import("@ant-design/icons-vue/lib/icons/PlusOutlined").PlusOutlinedIconType;
    QuestionCircleOutlined: import("@ant-design/icons-vue/lib/icons/QuestionCircleOutlined").QuestionCircleOutlinedIconType;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
} & {} & {
    modelValue?: ValidatorRuleItem[] | undefined;
}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
