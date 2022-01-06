/** 数据源类型 */
export declare enum DataSourceType {
    /** 静态数据 */
    JSON = "JSON",
    /** SQL语句 */
    SQL = "SQL",
    /** API接口 */
    API = "API"
}
/** 数据对象 */
export interface DataSourceItem {
    /** 唯一标识 */
    key?: string;
    /** 标签 */
    label?: string;
    /** 值 */
    value?: string;
    /** 子节点 */
    children?: DataSourceItem[];
    /** 其余属性 */
    [key: string]: any;
}
/** 数据源 */
export declare type DataSource = DataSourceItem[];
