import { FormItemOptions } from '../FormItemOptions';
/** Alert组件属性 */
export interface AlertFormItemOptions extends FormItemOptions {
    /** 类型 */
    type: 'success' | 'info' | 'warning' | 'error';
    /** 边框 */
    banner?: boolean;
    /** 可关闭 */
    closable?: boolean;
    /** 显示图标 */
    showIcon?: boolean;
    /** 警告提示内容 */
    message: string;
    /** 警告提示的辅助性文字介绍 */
    description?: string;
}
export declare const alertFormItemOptions: AlertFormItemOptions;
