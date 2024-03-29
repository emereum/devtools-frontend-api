declare global {
    interface HTMLElementTagNameMap {
        'devtools-button': Button;
    }
}
export declare const enum Variant {
    PRIMARY = "primary",
    TONAL = "tonal",
    SECONDARY = "secondary",
    TOOLBAR = "toolbar",
    PRIMARY_TOOLBAR = "primary_toolbar",
    ROUND = "round"
}
export declare const enum Size {
    SMALL = "SMALL",
    MEDIUM = "MEDIUM"
}
type ButtonType = 'button' | 'submit' | 'reset';
interface CommonButtonData {
    variant: Variant;
    iconUrl?: string;
    iconName?: string;
    size?: Size;
    disabled?: boolean;
    active?: boolean;
    spinner?: boolean;
    type?: ButtonType;
    value?: string;
    title?: string;
    jslogContext?: string;
}
export type ButtonData = CommonButtonData & ({
    variant: Variant.PRIMARY_TOOLBAR | Variant.TOOLBAR | Variant.ROUND;
    iconUrl: string;
} | {
    variant: Variant.PRIMARY_TOOLBAR | Variant.TOOLBAR | Variant.ROUND;
    iconName: string;
} | {
    variant: Variant.PRIMARY | Variant.SECONDARY | Variant.TONAL;
});
export declare class Button extends HTMLElement {
    #private;
    static formAssociated: boolean;
    static readonly litTagName: import("../../lit-html/static.js").Static;
    constructor();
    /**
     * Perfer using the .data= setter instead of setting the individual properties
     * for increased type-safety.
     */
    set data(data: ButtonData);
    set iconUrl(iconUrl: string | undefined);
    set iconName(iconName: string | undefined);
    set variant(variant: Variant);
    set size(size: Size);
    set type(type: ButtonType);
    set title(title: string);
    set disabled(disabled: boolean);
    set active(active: boolean);
    get active(): boolean;
    set spinner(spinner: boolean);
    get jslogContext(): string | undefined;
    set jslogContext(jslogContext: string | undefined);
    focus(): void;
    connectedCallback(): void;
    get value(): string;
    set value(value: string);
    get form(): HTMLFormElement | null;
    get name(): string | null;
    get type(): ButtonType;
    get validity(): ValidityState;
    get validationMessage(): string;
    get willValidate(): boolean;
    checkValidity(): boolean;
    reportValidity(): boolean;
}
export {};
