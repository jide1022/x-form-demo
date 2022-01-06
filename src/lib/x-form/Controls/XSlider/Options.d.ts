import { FormItemOptions } from '../FormItemOptions';
/** slider组件属性 */
export interface SliderFormItemOptions extends FormItemOptions {
    /** 默认值 */
    defaultValue?: number;
    /** 最大值 */
    max?: number;
    /** 最小值 */
    min?: number;
    /** 步长 */
    step?: number;
}
export declare const sliderFormItemOptions: SliderFormItemOptions;
