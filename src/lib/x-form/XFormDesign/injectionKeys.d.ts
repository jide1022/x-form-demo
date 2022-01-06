import { DeepReadonly, InjectionKey, Ref } from 'vue';
import { FormItemOptions } from '../Controls/FormItemOptions';
import { FormOptions } from '../Controls/FormOptions';
/** 当前选择的组件配置项ID KEY */
export declare const SelectedControlOptionsIdKey: InjectionKey<Ref>;
/** 设置当前选择的组件配置项KEY */
export declare const SetSelectedControlOptionsKey: InjectionKey<Function>;
/** 当前表单的配置项 KEY */
export declare const FormOptionsKey: InjectionKey<DeepReadonly<Ref<FormOptions>>>;
export interface HandleControlAddFun {
    (evt: {
        newIndex: number;
    }, arr: FormItemOptions[]): void;
}
export interface HandleControlDeleteFun {
    (id: string): void;
}
export interface HandleControlCopyFun {
    (id: string): void;
}
/** 向组件数添加组件 */
export declare const HandleControlAddKey: InjectionKey<HandleControlAddFun>;
/** 删除选中组件 */
export declare const HandleControlDeleteKey: InjectionKey<HandleControlDeleteFun>;
/** 复制当前组件 */
export declare const HandleControlCopyKey: InjectionKey<HandleControlCopyFun>;
