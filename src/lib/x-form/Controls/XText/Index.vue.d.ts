import { PropType } from 'vue';
import { TextFormItemOptions } from './Options';
declare const _sfc_main: import("vue").DefineComponent<{
    options: {
        type: PropType<TextFormItemOptions>;
        required: true;
    };
}, {
    props: Readonly<{
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        options: TextFormItemOptions;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    options?: unknown;
} & {
    options: TextFormItemOptions;
} & {}>, {}>;
export default _sfc_main;
