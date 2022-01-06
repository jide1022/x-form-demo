import { FormItemOptions } from '../FormItemOptions';
import { DataSource } from '../XDataSource/types';
/** checkbox组件属性 */
export interface CheckboxFormItemOptions extends FormItemOptions {
    /** 默认值 */
    defaultValue?: string[];
    /** 数据源 */
    dataSource: DataSource;
}
export declare const checkboxFormItemOptions: CheckboxFormItemOptions;
