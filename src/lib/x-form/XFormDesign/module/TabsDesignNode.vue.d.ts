import { PropType, Ref } from 'vue';
import { DisplayState, FormItemOptions, UiState } from '../../Controls/FormItemOptions';
import { ControlType, ControlKey } from '../../Controls/FormItemOptions';
import { TabPaneFormItemOptions } from '../../Controls/XTabPane/Options';
declare const _sfc_main: import("vue").DefineComponent<{
    options: {
        type: PropType<FormItemOptions>;
        required: true;
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
        options: FormItemOptions;
    }>;
    children: import("vue").ComputedRef<TabPaneFormItemOptions[]>;
    renderChildren: import("vue").ComputedRef<TabPaneFormItemOptions[]>;
    state: {
        activeKey: string;
    };
    handleTabPaneAdd: () => void;
    handleTabPaneCopy: (id: string) => void;
    handleTabPaneDelete: () => void;
    ref: (arg0: {}) => import('vue').Ref<Object>;
    ControlKey: typeof ControlKey;
    TabPaneDesignNode: import("vue").DefineComponent<{
        options: {
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
        handleControlAdd: import("../injectionKeys").HandleControlAddFun | undefined;
        props: Readonly<{
            uiState: UiState;
            options: FormItemOptions;
            onTabPaneDelete: ((...args: any[]) => any) | undefined;
            onTabPaneCopy: ((...args: any[]) => any) | undefined;
        }>;
        emits: (event: "tabPaneDelete" | "tabPaneCopy", ...args: any[]) => void;
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
                /** 注入的对象 */
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
        CopyOutlined: import("@ant-design/icons-vue/lib/icons/CopyOutlined").CopyOutlinedIconType;
        DeleteOutlined: import("@ant-design/icons-vue/lib/icons/DeleteOutlined").DeleteOutlinedIconType;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("tabPaneDelete" | "tabPaneCopy")[], "tabPaneDelete" | "tabPaneCopy", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        options?: unknown;
        uiState?: unknown;
    } & {
        uiState: UiState;
        options: FormItemOptions;
    } & {}> & {
        onTabPaneDelete?: ((...args: any[]) => any) | undefined;
        onTabPaneCopy?: ((...args: any[]) => any) | undefined;
    }, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    options?: unknown;
    uiState?: unknown;
} & {
    uiState: UiState;
    options: FormItemOptions;
} & {}>, {}>;
export default _sfc_main;
