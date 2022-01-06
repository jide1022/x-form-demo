import { FormItemOptions } from '../FormItemOptions';
/** date组件属性 */
export interface DateRangeFormItemOptions extends FormItemOptions {
    /** 占位内容1 */
    placeholder1?: string;
    /** 占位内容2 */
    placeholder2?: string;
    /** 是否显示清除按钮 */
    allowClear?: boolean;
    /** 日期面板的状态 */
    mode: 'time' | 'date' | 'month' | 'year' | 'decade';
    /** 组件类型 */
    picker: 'date' | 'week' | 'month' | 'quarter' | 'year';
    /** 增加时间选择功能 */
    showTime?: boolean;
    /** 默认值 */
    defaultValue?: string;
    /** 格式化 */
    format?: string;
}
export declare const dateRangeFormItemOptions: DateRangeFormItemOptions;
