/** 响应属性Key枚举 */
export declare enum EventResponderKey {
    /** 值改变 */
    Change = "change",
    /** 数据源改变 */
    DataSourceChange = "dataSourceChange"
}
/** 响应对象 */
export declare type EventResponder = {
    [key in EventResponderKey]: string;
};
