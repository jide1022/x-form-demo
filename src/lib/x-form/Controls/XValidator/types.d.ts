/** 校验对象 */
export interface ValidatorRuleItem {
    /** 唯一标识 */
    key: string;
    /** 内建校验类型 */
    type?: string;
    /** 触发方式 */
    trigger?: string;
    /** 错误提示 */
    message?: string;
    /** 正则 */
    pattern?: string;
    /** 最小值 */
    min?: number;
    /** 最大值 */
    max?: number;
    /** 是否必填 */
    required?: boolean;
    /** 是否允许空格 */
    whitespace?: boolean;
    /** 自定义校验 */
    validator?: Function;
    /** 自定义校验code */
    code?: string;
}
