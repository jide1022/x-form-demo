import { PropType } from 'vue';
import { TimeRangeFormItemOptions } from './Options';
import dayjs, { Dayjs } from 'dayjs';
declare const _sfc_main: import("vue").DefineComponent<{
    value: {
        type: PropType<string[]>;
    };
    options: {
        type: PropType<TimeRangeFormItemOptions>;
        required: true;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    props: Readonly<{
        onChange: ((...args: any[]) => any) | undefined;
        value: string[] | undefined;
        disabled: boolean;
        readonly: boolean;
        options: TimeRangeFormItemOptions;
    }>;
    emits: (event: "change", ...args: any[]) => void;
    value: import("vue").Ref<{
        clone: () => dayjs.Dayjs;
        isValid: () => boolean;
        year: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        month: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        date: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        day: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        hour: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        minute: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        second: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        millisecond: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        set: (unit: dayjs.UnitType, value: number) => dayjs.Dayjs;
        get: (unit: dayjs.UnitType) => number;
        add: (value: number, unit?: dayjs.ManipulateType | undefined) => dayjs.Dayjs;
        subtract: (value: number, unit?: dayjs.ManipulateType | undefined) => dayjs.Dayjs;
        startOf: (unit: dayjs.OpUnitType) => dayjs.Dayjs;
        endOf: (unit: dayjs.OpUnitType) => dayjs.Dayjs;
        format: (template?: string | undefined) => string;
        diff: (date?: string | number | Date | dayjs.Dayjs | null | undefined, unit?: "M" | "year" | "month" | "date" | "day" | "hour" | "minute" | "second" | "millisecond" | "week" | "quarter" | "milliseconds" | "seconds" | "minutes" | "hours" | "days" | "months" | "years" | "dates" | "d" | "y" | "h" | "m" | "s" | "ms" | "weeks" | "w" | "quarters" | "Q" | undefined, float?: boolean | undefined) => number;
        valueOf: () => number;
        unix: () => number;
        daysInMonth: () => number;
        toDate: () => Date;
        toJSON: () => string;
        toISOString: () => string;
        toString: () => string;
        utcOffset: () => number;
        isBefore: (date: string | number | Date | dayjs.Dayjs | null | undefined, unit?: dayjs.OpUnitType | undefined) => boolean;
        isSame: (date: string | number | Date | dayjs.Dayjs | null | undefined, unit?: dayjs.OpUnitType | undefined) => boolean;
        isAfter: (date: string | number | Date | dayjs.Dayjs | null | undefined, unit?: dayjs.OpUnitType | undefined) => boolean;
        locale: {
            (): string;
            (preset: string | ILocale, object?: Partial<ILocale> | undefined): dayjs.Dayjs;
        };
        localeData: () => dayjs.InstanceLocaleDataReturn;
        weekday: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        week: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        weekYear: () => number;
    }[]>;
    readonlyValue: import("vue").ComputedRef<string>;
    change: (date: Dayjs, dateString: string[]) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value?: unknown;
    options?: unknown;
    readonly?: unknown;
    disabled?: unknown;
} & {
    disabled: boolean;
    readonly: boolean;
    options: TimeRangeFormItemOptions;
} & {
    value?: string[] | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    readonly: boolean;
}>;
export default _sfc_main;
