import { FormItemOptions } from '../FormItemOptions';
import { DataSource } from '../XDataSource/types';
/** radio组件属性 */
export interface RadioFormItemOptions extends FormItemOptions {
    /** 默认值 */
    defaultValue?: string;
    /** 是否按钮形式 */
    button?: boolean;
    /** 数据源 */
    dataSource: DataSource;
}
export declare const radioFormItemOptions: RadioFormItemOptions;
