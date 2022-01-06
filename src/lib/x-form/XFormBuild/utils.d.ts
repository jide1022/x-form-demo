/**
 * 指定动态js代码
 * @param code js代码
 * @param argNames 参数名称数组
 * @param argDatas 参数值数组
 * @returns
 */
declare const execCode: (code: string, argNames: string[], argDatas: any[]) => any;
/**
 * 通过字段路径设置对象值
 * @param data 数据对象
 * @param path 字段路径数组
 * @param value 值
 * @returns
 */
declare const setValueByPath: (data: any, path: string[], value: any) => void;
/**
 * 通过字段路径获取对象值
 * @param data 数据对象
 * @param path 字段路径数组
 * @returns
 */
declare const getValueByPath: (data: any, path: string[]) => any;
export { execCode, setValueByPath, getValueByPath };
