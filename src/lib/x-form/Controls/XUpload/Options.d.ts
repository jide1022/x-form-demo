import { FormItemOptions } from '../FormItemOptions';
/** upload组件属性 */
export interface UploadFormItemOptions extends FormItemOptions {
    /** 文件参数名 */
    name: string;
    /** 占位内容 */
    placeholder?: string;
    /** 是否多选 */
    multiple?: boolean;
    /** 按钮文本 */
    btnText: string;
    /** 上传地址 */
    action: string;
    /** 文件大小 bite */
    maxSize?: number;
    /** 文件数量 */
    maxCount?: number;
    /** 上传列表的内建样式 */
    listType: 'text' | 'picture' | 'picture-card';
    /** 文件类型限制 */
    fileAcceptTypes?: string;
    /** 显示下载按钮 */
    showDownloadIcon?: boolean;
}
export declare const uploadFormItemOptions: UploadFormItemOptions;
