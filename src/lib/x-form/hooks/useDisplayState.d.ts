import { ComputedRef, Ref } from 'vue';
import { DisplayState } from '../Controls/FormItemOptions';
export declare function useDisplayState(displayState: Ref<DisplayState>, responderCode: string | undefined, value: Ref<any> | undefined, formData: Ref<Object>, field: string, formFieldPath: string[] | '', controlFieldPath: string[] | ''): {
    displayVisible: ComputedRef<boolean>;
};
