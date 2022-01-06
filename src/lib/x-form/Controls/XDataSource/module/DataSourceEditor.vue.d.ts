import { AntTreeNodeDropEvent, AntTreeNodeSelectedEvent } from 'ant-design-vue/lib/tree/Tree';
import { PropType } from 'vue';
import { DataSource, DataSourceItem } from '../types';
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<DataSource>;
        required: true;
    };
}, {
    props: Readonly<{
        modelValue: DataSource;
        "onUpdate:modelValue": ((...args: any[]) => any) | undefined;
    }>;
    emits: (event: "update:modelValue", ...args: any[]) => void;
    privateKeys: string[];
    state: {
        value: {
            [x: string]: any;
            key?: string | undefined;
            label?: string | undefined;
            value?: string | undefined;
            children?: any[] | undefined;
        }[];
        selectedItem: {
            [x: string]: any;
            key?: string | undefined;
            label?: string | undefined;
            value?: string | undefined;
            children?: any[] | undefined;
        } | null;
        selectedKeys: never[];
        showLine: boolean;
        showIcon: boolean;
        keyValueList: {
            key: string;
            value: string | boolean | number;
        }[];
    };
    treeData: import("vue").ComputedRef<DataSourceItem[]>;
    hanldeNodeAdd: () => void;
    handleKeyValueAdd: () => void;
    onNodeSelect: (selectedKeys: string[], e: {
        selected: boolean;
        selectedNodes: DataSourceItem[];
        node: DataSourceItem;
        event: AntTreeNodeSelectedEvent;
    }) => void;
    hanldeKeyValueChange: () => void;
    onDrop: (info: AntTreeNodeDropEvent) => void;
    handleNodeDelete: (dataRef: DataSourceItem) => void;
    handelKeyDelete: (key: string, index: number) => void;
    PlusOutlined: import("@ant-design/icons-vue/lib/icons/PlusOutlined").PlusOutlinedIconType;
    DeleteOutlined: import("@ant-design/icons-vue/lib/icons/DeleteOutlined").DeleteOutlinedIconType;
    XMultipleTypeInput: import("vue").DefineComponent<{
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
} & {
    modelValue: DataSource;
} & {}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
