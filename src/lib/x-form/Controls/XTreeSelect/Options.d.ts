import { FormItemOptions } from '../FormItemOptions';
import { DataSource } from '../XDataSource/types';
export declare enum TreeCheckShowType {
    SHOW_ALL = "SHOW_ALL",
    SHOW_PARENT = "SHOW_PARENT",
    SHOW_CHILD = "SHOW_CHILD"
}
/** tree-select组件属性 */
export interface TreeSelectFormItemOptions extends FormItemOptions {
    /** 支持清除 */
    allowClear?: boolean;
    /** 占位内容 */
    placeholder?: string;
    /** 默认值 */
    defaultValue?: string;
    /** 数据源 */
    dataSource: DataSource;
    /** 是否多选 */
    multiple?: boolean;
    /** 显示checkbox */
    treeCheckable?: boolean;
    /** 选中项回填的方式 */
    showCheckedStrategy?: TreeCheckShowType;
}
export declare const treeSelectFormItemOptions: TreeSelectFormItemOptions;
