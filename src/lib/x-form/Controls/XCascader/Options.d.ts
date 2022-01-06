import { FormItemOptions } from '../FormItemOptions';
import { DataSource } from '../XDataSource/types';
/** cascader组件属性 */
export interface CascaderFormItemOptions extends FormItemOptions {
    /** 支持清除 */
    allowClear?: boolean;
    /** 支持搜索 */
    showSearch?: boolean;
    /** 占位内容 */
    placeholder?: string;
    /** 默认值 */
    defaultValue?: string;
    /** 数据源 */
    dataSource: DataSource;
}
export declare const cascaderFormItemOptions: CascaderFormItemOptions;
