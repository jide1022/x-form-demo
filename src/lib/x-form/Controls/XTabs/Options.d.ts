import { FormItemOptions } from '../FormItemOptions';
import { TabPaneFormItemOptions } from '../XTabPane/Options';
/** tabs组件属性 */
export interface TabsFormItemOptions extends FormItemOptions {
    /** 页签位置 */
    tabPosition: 'top' | 'right' | 'bottom' | 'left';
    /** 页签样式 */
    type: 'line' | 'card';
    /** 页签居中 */
    centered: boolean;
    /** 表格列 */
    children: TabPaneFormItemOptions[];
}
export declare const tabsFormItemOptions: TabsFormItemOptions;
