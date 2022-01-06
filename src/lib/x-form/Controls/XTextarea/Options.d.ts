import { FormItemOptions } from '../FormItemOptions';
/** textarea组件属性 */
export interface TextareaFormItemOptions extends FormItemOptions {
    /** 最大长度 */
    maxlength?: number;
    /** 占位内容 */
    placeholder?: string;
    /** 默认值 */
    defaultValue?: string;
    /** 默认行数 */
    rows: number;
    /** 显示字数统计 */
    /** 自动高度 */
    autoSize?: boolean;
    /** 自动高度最小行数 */
    minRows?: number;
    /** 自动高度最大行数 */
    maxRows?: number;
    /** 可以点击清除图标删除内容 */
    allowClear?: boolean;
}
export declare const textareaFormItemOptions: TextareaFormItemOptions;
