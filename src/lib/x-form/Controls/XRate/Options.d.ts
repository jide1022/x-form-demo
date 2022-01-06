import { FormItemOptions } from '../FormItemOptions';
/** rate组件属性 */
export interface RateFormItemOptions extends FormItemOptions {
    /** 默认值 */
    defaultValue?: number;
    /** 是否允许再次点击后清除 */
    allowClear?: boolean;
    /** 是否允许半选 */
    allowHalf?: boolean;
    /** star 总数 */
    count?: number;
    /** 每项的提示信息 */
    tooltips?: string[];
}
export declare const rateFormItemOptions: RateFormItemOptions;
