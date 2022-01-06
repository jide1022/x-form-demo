import { FormItemOptions } from '../FormItemOptions';
/** TabPane组件属性 */
export interface TabPaneFormItemOptions extends FormItemOptions {
    /** 面板标题 */
    title: string;
    /** 控件组 */
    children?: FormItemOptions[];
}
export declare const tabPaneFormItemOptions: TabPaneFormItemOptions;
