import { ArrayTableColumnFormItemOptions } from '../XArrayTableColumn/Options';
import { FormItemOptions } from '../FormItemOptions';
/** ArrayTable组件属性 */
export interface ArrayTableFormItemOptions extends FormItemOptions {
    /** 显示索引 */
    showIndex?: boolean;
    /** 表格大小 */
    size: 'default' | 'middle' | 'small';
    /** 显示边框 */
    bordered: boolean;
    /** 子组件 */
    children: ArrayTableColumnFormItemOptions[];
}
export declare const arrayTableFormItemOptions: ArrayTableFormItemOptions;
