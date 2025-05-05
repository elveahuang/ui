export {};

declare module 'vue' {
    export interface GlobalComponents extends JSX.IntrinsicElements {
        'scroll-view': JSX.IntrinsicElements['scroll-view'];
        view: JSX.IntrinsicElements['view'];
    }
}
