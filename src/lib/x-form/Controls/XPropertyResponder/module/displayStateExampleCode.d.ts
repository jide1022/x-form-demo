declare const exampleCode = "/** \u4EE3\u7801\u793A\u4F8B\u53CA\u8BF4\u660E */\n/**\n* js\u4EE3\u7801\u4E2D\u53EF\u4EE5\u4F7F\u7528\u7684\u5185\u7F6E\u53D8\u91CF\n*\n* \u6574\u4E2A\u8868\u5355\u7684\u503C\uFF0C\u662F\u4E00\u4E2A\u5BF9\u8C61\n* $formData = {};\n*\n* \u5F53\u524D\u63A7\u4EF6\u5B57\u6BB5\uFF0C\u662F\u5B57\u7B26\u4E32\n* $field = null;\n*\n* \u5F53\u524D\u63A7\u4EF6\u7684\u503C\uFF0C\u503C\u7C7B\u578B\u53D6\u51B3\u4E8E\u63A7\u4EF6\u7C7B\u578B\n* $value = null;\n*\n* \u5F53\u524D\u8868\u5355\u5B57\u6BB5\u8DEF\u5F84\u6570\u7EC4,\u6BD4\u5982['table',0,'name']\n* \u5C55\u793A\u7EC4\u4EF6\u3001\u5E03\u5C40\u7EC4\u4EF6\u8BE5\u5B57\u6BB5\u4E3A\u7A7A\u5B57\u7B26\u4E32\n* $formFieldPath = [];\n*\n* \u5F53\u524D\u63A7\u4EF6\u5B57\u6BB5\u8DEF\u5F84\u6570\u7EC4,\u6BD4\u5982['table','name']\n* $controlFieldPath = [];\n*\n* js\u4EE3\u7801\u5FC5\u987B\u8FD4\u56DE\u503C\u5FC5\u987B\u662F\u5982\u4E0B\u5B57\u7B26\u4E32\u4E2D\u7684\u4E00\u4E2A\n* \u5176\u4F59\u975E\u6CD5\u8FD4\u56DE\u5C06\u7EDF\u4E00\u5904\u7406\u4E3A\u663E\u793A\n* \u663E\u793A: visible\n* \u9690\u85CF: hidden\n**/\n\n/**\n* \u793A\u4F8B1\n* \u76F4\u63A5\u8FD4\u56DE\n**/\n\nreturn 'hidden';\n\n/**\n* \u793A\u4F8B2\n* \u8FD4\u56DE\u8868\u8FBE\u5F0F\n**/\n\nreturn $value === '1'?'hidden': 'visible';\n\n/**\n* \u793A\u4F8B3\n* \u590D\u6742\u5224\u65AD\n**/\n\nif ($formData.name == '1') {\n    return 'hidden';\n} else {\n    return $formData.age === 2?'hidden': 'visible';\n}";
export default exampleCode;