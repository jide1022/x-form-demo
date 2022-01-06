import { PropType } from 'vue';
import { ArrayTableColumnFormItemOptions } from '../../Controls/XArrayTableColumn/Options';
declare const _sfc_main: import("vue").DefineComponent<{
    options: {
        type: PropType<ArrayTableColumnFormItemOptions>;
        required: true;
    };
}, {
    setSelectedControlOptions: Function | undefined;
    selectedControlOptionsId: import("vue").Ref<any> | undefined;
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
export default _sfc_main;
