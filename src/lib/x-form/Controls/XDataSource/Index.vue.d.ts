import { PropType } from 'vue';
import { FormItemOptions } from '../FormItemOptions';
import { DataSource } from './types';
declare const _sfc_main: import("vue").DefineComponent<{
    value: {
        type: PropType<DataSource>;
    };
    options: {
        type: PropType<FormItemOptions>;
        required: true;
    };
}, {
    props: Readonly<{
        onChange: ((...args: any[]) => any) | undefined;
        value: DataSource | undefined;
        options: FormItemOptions;
    }>;
    emits: (event: "change", ...args: any[]) => void;
    state: {
        visible: boolean;
        dataSource: {
            [x: string]: any;
            key?: string | undefined;
            label?: string | undefined;
            value?: string | undefined;
            children?: any[] | undefined;
        }[];
    };
    handelEditorShow: () => void;
    handleOk: () => void;
    DataSourceEditor: import("vue").DefineComponent<{
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
                value: string | number | boolean;
            }[];
        };
        treeData: import("vue").ComputedRef<import("./types").DataSourceItem[]>;
        hanldeNodeAdd: () => void;
        handleKeyValueAdd: () => void;
        onNodeSelect: (selectedKeys: string[], e: {
            selected: boolean;
            selectedNodes: import("./types").DataSourceItem[];
            node: import("./types").DataSourceItem;
            event: import("ant-design-vue/lib/tree").AntTreeNodeSelectedEvent;
        }) => void;
        hanldeKeyValueChange: () => void;
        onDrop: (info: import("ant-design-vue/lib/tree").AntTreeNodeDropEvent) => void;
        handleNodeDelete: (dataRef: import("./types").DataSourceItem) => void;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value?: unknown;
    options?: unknown;
} & {
    options: FormItemOptions;
} & {
    value?: DataSource | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
