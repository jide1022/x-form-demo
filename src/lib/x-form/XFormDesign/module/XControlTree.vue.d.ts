import { PropType, Ref } from 'vue';
import { FormItemOptions } from '../../Controls/FormItemOptions';
declare const _sfc_main: import("vue").DefineComponent<{
    controls: {
        type: PropType<FormItemOptions[]>;
        default: () => never[];
        required: true;
    };
}, {
    setSelectedControlOptions: Function | undefined;
    selectedControlOptionsId: Ref<any> | undefined;
    props: Readonly<{
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        controls: FormItemOptions[];
    }>;
    state: {
        fieldNames: {
            key: string;
        };
        selectedKeys: string[];
    };
    queryOptionsById: (id: string) => FormItemOptions | null;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    controls?: unknown;
} & {
    controls: FormItemOptions[];
} & {}>, {
    controls: FormItemOptions[];
}>;
export default _sfc_main;
