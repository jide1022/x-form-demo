import { Component } from 'vue';
import { ControlKey } from '../../Controls/FormItemOptions';
/** 可选组件类型 */
export interface ControlPickItem {
    controlKey: ControlKey;
    name: string;
    icon?: Component;
}
/** 可选组件分组类型 */
export interface ControlPickGroup {
    /** 分组名称 */
    groupName: string;
    /** 分组key */
    key: string;
    /** 分组组件数组 */
    list: ControlPickItem[];
}
/** 可选组件分组 */
declare const canPickControlGroup: ControlPickGroup[];
export default canPickControlGroup;
