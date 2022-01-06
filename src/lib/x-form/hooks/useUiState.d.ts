import { ComputedRef, Ref } from 'vue';
import { UiState } from '../Controls/FormItemOptions';
export declare function useUiState(optionsUiState: Ref<UiState>, parentUiState: Ref<UiState>, responderCode: string | undefined, value: Ref<any> | undefined, formData: Ref<Object>, field: string, formFieldPath: string[] | '', controlFieldPath: string[] | ''): {
    readonly: ComputedRef<boolean>;
    disabled: ComputedRef<boolean>;
    currentUiState: ComputedRef<UiState>;
};
