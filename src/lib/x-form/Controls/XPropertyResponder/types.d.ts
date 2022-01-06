/** 响应属性Key枚举 */
export declare enum PropertyResponderKey {
    /** UI状态 */
    UiState = "uiState",
    /** 显示状态 */
    DisplayState = "displayState"
}
/** 响应对象 */
export declare type PropertyResponder = {
    [key in PropertyResponderKey]?: string;
};
