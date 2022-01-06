import { DeepReadonly, InjectionKey, Ref } from 'vue';
import { FormOptions } from '../Controls/FormOptions';
/** 当前表单的配置项 KEY */
export declare const FormOptionsKey: InjectionKey<DeepReadonly<Ref<FormOptions>>>;
/** 当前表单的值 */
export declare const FormDataKey: InjectionKey<DeepReadonly<Ref<Object>>>;
/** 触发自定义事件 */
export declare const TriggerCustomEventKey: InjectionKey<Function>;
