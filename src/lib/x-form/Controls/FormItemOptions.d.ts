import { DataSource } from './XDataSource/types';
import { PropertyResponder } from './XPropertyResponder/types';
import { ValidatorRuleItem } from './XValidator/types';
/** 所有组件分类Key */
export declare enum ControlKey {
    Input = "input",
    Textarea = "textarea",
    Number = "number",
    Select = "select",
    Checkbox = "checkbox",
    Radio = "radio",
    Date = "date",
    Rate = "rate",
    DateRange = "dateRange",
    Time = "time",
    TimeRange = "timeRange",
    Slider = "slider",
    Upload = "upload",
    TreeSelect = "treeSelect",
    Cascader = "cascader",
    Switch = "switch",
    Alert = "alert",
    Text = "text",
    Divider = "divider",
    ArrayTable = "arrayTable",
    ArrayTableColumn = "arrayTableColumn",
    ArrayCard = "arrayCard",
    Card = "card",
    Tabs = "tabs",
    TabPane = "tabPane",
    Flex = "flex",
    DataSource = "dataSource",
    PropertyResponder = "propertyResponder",
    EventResponder = "eventResponder",
    Validator = "validator",
    CustomValue = "customValue",
    Button = "button"
}
/** 控件类型 */
export declare enum ControlType {
    /** 表单组件 */
    Form = "form",
    /** 展示组件 */
    View = "view",
    /** 布局组件 */
    Layout = "layout",
    /** 容器组件 */
    Container = "container",
    /**  配置组件 */
    Config = "config"
}
/** 展示状态 */
export declare enum DisplayState {
    /**显示 */
    Visible = "visible",
    /** 隐藏 */
    Hidden = "hidden"
}
/** UI形态 */
export declare enum UiState {
    /**可编辑 */
    Editable = "editable",
    /** 禁用 */
    Disabled = "disabled",
    /** 只读 */
    Readonly = "readonly",
    /** 继承 */
    Inherit = "inherit"
}
/** 表单组件公共属性 */
export interface FormItemOptions {
    /** 唯一ID */
    id: string;
    /** 组件名称 */
    controlName: string;
    /** 组件类型标识 */
    controlKey: ControlKey;
    /** 组件分类 */
    controlType: ControlType;
    /** 组件字段 */
    field: string;
    /** 组件标签 */
    label: string;
    /** 是否渲染标签 */
    renderLabel?: boolean;
    /** 标签宽度 */
    labelWidth?: number;
    /** 提示信息 */
    tip?: string;
    /** 额外提示信息 */
    extra?: string;
    /** 校验数组 */
    rules?: ValidatorRuleItem[];
    /** 展示状态 */
    displayState?: DisplayState;
    /** UI形态 */
    uiState?: UiState;
    /** 子组件 */
    children?: FormItemOptions[];
    /** 数据源 */
    dataSource?: DataSource;
    /** 响应器 */
    propertyResponder?: PropertyResponder;
    /** 其他属性 */
    [key: string]: any;
}
