declare const _sfc_main: import("vue").DefineComponent<{}, {
    emits: (event: "start" | "handleControlPush", ...args: any[]) => void;
    state: {
        activeKeys: string[];
        comGroupList: {
            groupName: string;
            key: string;
            list: {
                controlKey: import("../../Controls/FormItemOptions.js").ControlKey;
                name: string;
                icon?: {
                    new (...args: any[]): any;
                    __isFragment?: undefined;
                    __isTeleport?: undefined;
                    __isSuspense?: undefined;
                } | import("vue").FunctionalComponent<any, any> | {
                    [x: string]: any;
                    setup?: ((this: void, props: Readonly<{
                        [x: string]: any;
                    }>, ctx: import("vue").SetupContext<any>) => any) | undefined;
                    name?: string | undefined;
                    template?: string | object | undefined;
                    render?: Function | undefined;
                    components?: {
                        [x: string]: {
                            new (...args: any[]): any;
                            __isFragment?: undefined;
                            __isTeleport?: undefined;
                            __isSuspense?: undefined;
                        } | import("vue").FunctionalComponent<any, any> | any;
                    } | undefined;
                    directives?: {
                        [x: string]: import("vue").FunctionDirective<any, any> | {
                            created?: import("vue").DirectiveHook<any, null, any> | undefined;
                            beforeMount?: import("vue").DirectiveHook<any, null, any> | undefined;
                            mounted?: import("vue").DirectiveHook<any, null, any> | undefined;
                            beforeUpdate?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                [key: string]: any;
                            }>, any> | undefined;
                            updated?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                [key: string]: any;
                            }>, any> | undefined;
                            beforeUnmount?: import("vue").DirectiveHook<any, null, any> | undefined;
                            unmounted?: import("vue").DirectiveHook<any, null, any> | undefined;
                            getSSRProps?: ((binding: import("vue").DirectiveBinding<any>, vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                                [key: string]: any;
                            }>) => {
                                [x: string]: unknown;
                            } | undefined) | undefined;
                            deep?: boolean | undefined;
                        };
                    } | undefined;
                    inheritAttrs?: boolean | undefined;
                    emits?: any;
                    expose?: string[] | undefined;
                    serverPrefetch?: (() => Promise<any>) | undefined;
                    compilerOptions?: {
                        isCustomElement?: ((tag: string) => boolean) | undefined;
                        whitespace?: "preserve" | "condense" | undefined;
                        comments?: boolean | undefined;
                        delimiters?: [string, string] | undefined;
                    } | undefined;
                    call?: ((this: unknown, ...args: unknown[]) => never) | undefined;
                    __isFragment?: undefined;
                    __isTeleport?: undefined;
                    __isSuspense?: undefined;
                    __defaults?: {} | undefined;
                    compatConfig?: {
                        GLOBAL_MOUNT?: boolean | "suppress-warning" | undefined;
                        GLOBAL_MOUNT_CONTAINER?: boolean | "suppress-warning" | undefined;
                        GLOBAL_EXTEND?: boolean | "suppress-warning" | undefined;
                        GLOBAL_PROTOTYPE?: boolean | "suppress-warning" | undefined;
                        GLOBAL_SET?: boolean | "suppress-warning" | undefined;
                        GLOBAL_DELETE?: boolean | "suppress-warning" | undefined;
                        GLOBAL_OBSERVABLE?: boolean | "suppress-warning" | undefined;
                        GLOBAL_PRIVATE_UTIL?: boolean | "suppress-warning" | undefined;
                        CONFIG_SILENT?: boolean | "suppress-warning" | undefined;
                        CONFIG_DEVTOOLS?: boolean | "suppress-warning" | undefined;
                        CONFIG_KEY_CODES?: boolean | "suppress-warning" | undefined;
                        CONFIG_PRODUCTION_TIP?: boolean | "suppress-warning" | undefined;
                        CONFIG_IGNORED_ELEMENTS?: boolean | "suppress-warning" | undefined;
                        CONFIG_WHITESPACE?: boolean | "suppress-warning" | undefined;
                        CONFIG_OPTION_MERGE_STRATS?: boolean | "suppress-warning" | undefined;
                        INSTANCE_SET?: boolean | "suppress-warning" | undefined;
                        INSTANCE_DELETE?: boolean | "suppress-warning" | undefined;
                        INSTANCE_DESTROY?: boolean | "suppress-warning" | undefined;
                        INSTANCE_EVENT_EMITTER?: boolean | "suppress-warning" | undefined;
                        INSTANCE_EVENT_HOOKS?: boolean | "suppress-warning" | undefined;
                        INSTANCE_CHILDREN?: boolean | "suppress-warning" | undefined;
                        INSTANCE_LISTENERS?: boolean | "suppress-warning" | undefined;
                        INSTANCE_SCOPED_SLOTS?: boolean | "suppress-warning" | undefined;
                        INSTANCE_ATTRS_CLASS_STYLE?: boolean | "suppress-warning" | undefined;
                        OPTIONS_DATA_FN?: boolean | "suppress-warning" | undefined;
                        OPTIONS_DATA_MERGE?: boolean | "suppress-warning" | undefined;
                        OPTIONS_BEFORE_DESTROY?: boolean | "suppress-warning" | undefined;
                        OPTIONS_DESTROYED?: boolean | "suppress-warning" | undefined;
                        WATCH_ARRAY?: boolean | "suppress-warning" | undefined;
                        PROPS_DEFAULT_THIS?: boolean | "suppress-warning" | undefined;
                        V_ON_KEYCODE_MODIFIER?: boolean | "suppress-warning" | undefined;
                        CUSTOM_DIR?: boolean | "suppress-warning" | undefined;
                        ATTR_FALSE_VALUE?: boolean | "suppress-warning" | undefined;
                        ATTR_ENUMERATED_COERCION?: boolean | "suppress-warning" | undefined;
                        TRANSITION_CLASSES?: boolean | "suppress-warning" | undefined;
                        TRANSITION_GROUP_ROOT?: boolean | "suppress-warning" | undefined;
                        COMPONENT_ASYNC?: boolean | "suppress-warning" | undefined;
                        COMPONENT_FUNCTIONAL?: boolean | "suppress-warning" | undefined;
                        COMPONENT_V_MODEL?: boolean | "suppress-warning" | undefined;
                        RENDER_FUNCTION?: boolean | "suppress-warning" | undefined;
                        FILTERS?: boolean | "suppress-warning" | undefined;
                        PRIVATE_APIS?: boolean | "suppress-warning" | undefined;
                        MODE?: 2 | 3 | ((comp: import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions> | null) => 2 | 3) | undefined;
                    } | undefined;
                    data?: ((this: any, vm: any) => any) | undefined;
                    computed?: {
                        [x: string]: import("vue").ComputedGetter<any> | {
                            get: import("vue").ComputedGetter<any>;
                            set: import("vue").ComputedSetter<any>;
                        };
                    } | undefined;
                    methods?: {
                        [x: string]: Function;
                    } | undefined;
                    watch?: {
                        [x: string]: string | import("vue").WatchCallback<any, any> | {
                            handler: string | import("vue").WatchCallback<any, any>;
                            immediate?: boolean | undefined;
                            deep?: boolean | undefined;
                            flush?: "pre" | "post" | "sync" | undefined;
                            onTrack?: ((event: import("vue").DebuggerEvent) => void) | undefined;
                            onTrigger?: ((event: import("vue").DebuggerEvent) => void) | undefined;
                        } | (string | import("vue").WatchCallback<any, any> | {
                            handler: string | import("vue").WatchCallback<any, any>;
                            immediate?: boolean | undefined;
                            deep?: boolean | undefined;
                            flush?: "pre" | "post" | "sync" | undefined;
                            onTrack?: ((event: import("vue").DebuggerEvent) => void) | undefined;
                            onTrigger?: ((event: import("vue").DebuggerEvent) => void) | undefined;
                        })[];
                    } | undefined;
                    provide?: Function | {
                        [x: string]: unknown;
                    } | undefined;
                    inject?: string[] | {
                        [x: string]: string | symbol | {
                            from?: string | symbol | undefined;
                            default?: unknown;
                        };
                        [x: symbol]: string | symbol | {
                            from?: string | symbol | undefined;
                            default?: unknown;
                        };
                    } | undefined;
                    filters?: {
                        [x: string]: Function;
                    } | undefined;
                    mixins?: any[] | undefined;
                    extends?: any;
                    beforeCreate?: (() => void) | undefined;
                    created?: (() => void) | undefined;
                    beforeMount?: (() => void) | undefined;
                    mounted?: (() => void) | undefined;
                    beforeUpdate?: (() => void) | undefined;
                    updated?: (() => void) | undefined;
                    activated?: (() => void) | undefined;
                    deactivated?: (() => void) | undefined;
                    beforeDestroy?: (() => void) | undefined;
                    beforeUnmount?: (() => void) | undefined;
                    destroyed?: (() => void) | undefined;
                    unmounted?: (() => void) | undefined;
                    renderTracked?: ((e: import("vue").DebuggerEvent) => void) | undefined;
                    renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | undefined;
                    errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | undefined;
                    delimiters?: [string, string] | undefined;
                    __differentiator?: string | number | symbol | undefined;
                    __isBuiltIn?: boolean | undefined;
                    __file?: string | undefined;
                } | undefined;
            }[];
        }[];
    };
    draggable: import("vue").DefineComponent<{
        list: {
            type: ArrayConstructor;
            required: boolean;
            default: any;
        };
        modelValue: {
            type: ArrayConstructor;
            required: boolean;
            default: any;
        };
        itemKey: {
            type: (StringConstructor | FunctionConstructor)[];
            required: boolean;
        };
        clone: {
            type: FunctionConstructor;
            default: (original: any) => any;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
        move: {
            type: FunctionConstructor;
            default: any;
        };
        componentData: {
            type: ObjectConstructor;
            required: boolean;
            default: any;
        };
    }, any, {
        error: boolean;
    }, {
        realList(): any;
        getKey(): any;
    }, {
        getUnderlyingVm(domElement: any): any;
        getUnderlyingPotencialDraggableComponent(htmElement: any): any;
        emitChanges(evt: any): void;
        alterList(onList: any): void;
        spliceList(): void;
        updatePosition(oldIndex: any, newIndex: any): void;
        getRelatedContextFromMoveEvent({ to, related }: {
            to: any;
            related: any;
        }): any;
        getVmIndexFromDomIndex(domIndex: any): any;
        onDragStart(evt: any): void;
        onDragAdd(evt: any): void;
        onDragRemove(evt: any): void;
        onDragUpdate(evt: any): void;
        computeFutureIndex(relatedContext: any, evt: any): any;
        onDragMove(evt: any, originalEvent: any): any;
        onDragEnd(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        move: Function;
        clone: Function;
        componentData: Record<string, any>;
        tag: string;
        list: unknown[];
        modelValue: unknown[];
    } & {
        itemKey?: string | Function | undefined;
    }>, {
        move: Function;
        clone: Function;
        componentData: Record<string, any>;
        tag: string;
        list: unknown[];
        modelValue: unknown[];
    }>;
    comGroupList: import("../config/canPickControls").ControlPickGroup[];
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("start" | "handleControlPush")[], "start" | "handleControlPush", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}> & {
    onStart?: ((...args: any[]) => any) | undefined;
    onHandleControlPush?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
