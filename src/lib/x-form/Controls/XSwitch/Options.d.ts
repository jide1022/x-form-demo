import { FormItemOptions } from '../FormItemOptions';
/** switch组件属性 */
export interface SwitchFormItemOptions extends FormItemOptions {
    /** 选中时的内容 */
    checkedChildren?: number;
    /** 非选中时的内容 */
    unCheckedChildren?: string;
    /** 默认值 */
    defaultValue?: boolean;
}
export declare const switchFormItemOptions: SwitchFormItemOptions;
