import { PropType } from 'vue';
import { UploadFormItemOptions } from './Options';
interface FileItem {
    uid: string;
    name?: string;
    status?: 'uploading' | 'done' | 'error' | 'removed';
    response?: string;
    url?: string;
    size?: number;
    downloadUrl?: string;
    previewUrl?: string;
}
declare const _sfc_main: import("vue").DefineComponent<{
    value: {
        type: PropType<FileItem[]>;
    };
    options: {
        type: PropType<UploadFormItemOptions>;
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
        value: FileItem[] | undefined;
        disabled: boolean;
        readonly: boolean;
        options: UploadFormItemOptions;
    }>;
    uploadRef: import("vue").Ref<any>;
    emits: (event: "change", ...args: any[]) => void;
    value: import("vue").Ref<{
        uid: string;
        name?: string | undefined;
        status?: "done" | "error" | "uploading" | "removed" | undefined;
        response?: string | undefined;
        url?: string | undefined;
        size?: number | undefined;
        downloadUrl?: string | undefined;
        previewUrl?: string | undefined;
    }[]>;
    handleBeforeUpload: (file: FileItem) => boolean | undefined;
    hanldePreview: (e: any) => void;
    handleDownload: (e: any) => void;
    change: ({ file, fileList, event }: {
        file: FileItem;
        fileList: FileItem[];
        event: any;
    }) => void;
    UploadOutlined: import("@ant-design/icons-vue/lib/icons/UploadOutlined").UploadOutlinedIconType;
    PlusOutlined: import("@ant-design/icons-vue/lib/icons/PlusOutlined").PlusOutlinedIconType;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value?: unknown;
    options?: unknown;
    readonly?: unknown;
    disabled?: unknown;
} & {
    disabled: boolean;
    readonly: boolean;
    options: UploadFormItemOptions;
} & {
    value?: FileItem[] | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    readonly: boolean;
}>;
export default _sfc_main;
