import { FormItemOptions } from '../FormItemOptions';
import { DataSource } from '../XDataSource/types';
/** select组件属性 */
export interface SelectFormItemOptions extends FormItemOptions {
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
}
export declare const selectFormItemOptions: SelectFormItemOptions;
