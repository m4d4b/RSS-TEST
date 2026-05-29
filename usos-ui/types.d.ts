import * as element_internals_polyfill_dist_ValidityState from 'element-internals-polyfill/dist/ValidityState';
import * as lit from 'lit';
import { LitElement, PropertyValues, PropertyDeclaration, TemplateResult } from 'lit';

/**
 * A text field inspired by Material Design.
 *
 * @slot tooltip - Optional content to show in tooltip on the right of the text field
 *
 * @cssproperty [--accent=#0076AD] - focused element color
 */
declare class TextField extends LitElement {
    static shadowRootOptions: ShadowRootInit;
    static styles: lit.CSSResult;
    /**
     * The `<input>` type to use, defaults to "text".
     * Note that only some of the `<input>` types (and a `textarea` type) are supported,
     * whereas some other types *may* work, but with weird styling or visual artifacts.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
     */
    type: 'email' | 'text' | 'password' | 'tel' | 'number' | 'url' | 'textarea' | 'date' | 'datetime-local' | 'file' | 'month' | 'time' | 'week' | 'color';
    /**
     * The floating Material label of the textfield component. It informs the user
     * about what information is requested for a text field. It is aligned with
     * the input text, is always visible, and it floats when focused or when text
     * is entered into the textfield.
     */
    label: string;
    hasTooltip: boolean;
    /**
     * Conveys additional information below the text field, such as how it should
     * be used.
     */
    supportingText: string;
    /**
     * The number of rows to display for a `type="textarea"` text field.
     * Defaults to 5.
     */
    rows: number;
    /**
     * The number of cols to display for a `type="textarea"` text field.
     * Defaults to 20.
     */
    cols: number;
    /**
     * Should the textarea be auto resized based on content?
     */
    autoResize: boolean;
    /**
     * The minimum number of characters that can be entered.
     */
    minLength: Optional<number>;
    /**
     * The maximum number of characters that can be entered.
     */
    maxLength: Optional<number>;
    /**
     * Input mode for virtual keyboard.
     */
    inputMode: string;
    /**
     * Minimum value of input.
     */
    min: string;
    /**
     * Maximum value of input.
     */
    max: string;
    /**
     * Returns or sets the element's step attribute, which works with min and max
     * to limit the increments at which a numeric or date-time value can be set.
     */
    step: string;
    /**
     * Indicates whether or not a user should be able to edit the text field's
     * value.
     */
    readOnly: boolean;
    /**
     * Describes what, if any, type of autocomplete should be provided.
     */
    autocomplete: Optional<AutoFill>;
    /**
     * Indicates whether the text field is disabled.
     */
    disabled: boolean;
    /**
     * Indicates whether filling the text field is required.
     */
    required: boolean;
    /**
     * A regular expression the input value should match.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/pattern
     */
    pattern: string;
    /**
     * Space-separated list of custom validators' names.
     * Available validators are listed in toolbox/validators.
     * Loads ValidatorsToolbox when used.
     */
    uiValidators: string;
    /**
     * Name of this text field.
     */
    name: string;
    /**
     * Initial value of the text field.
     */
    initialValue: string;
    /**
     * Indicates whether the text field should receive focus automatically.
     */
    autofocus: boolean;
    xl: boolean;
    /**
     * Indicates whether the text field value should be trimmed.
     * Value 'auto' means 'on' since version 1.10.0.
     */
    trim: 'on' | 'off' | 'auto';
    get valueAsNumber(): number;
    set valueAsNumber(value: number);
    get valueAsDate(): Optional<Date>;
    set valueAsDate(value: Optional<Date>);
    value: string;
    static readonly formAssociated = true;
    constructor();
    formResetCallback(): void;
    render(): lit.TemplateResult<1>;
    updated(changedProperties: PropertyValues<this>): void;
    requestUpdate(name?: PropertyKey, oldValue?: unknown, options?: PropertyDeclaration): void;
    get validityAnchor(): HTMLElement | undefined;
    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/willValidate)
     */
    get willValidate(): boolean;
    get validity(): element_internals_polyfill_dist_ValidityState.ValidityState;
    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/checkValidity)
     */
    checkValidity(): boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/reportValidity) */
    reportValidity(): boolean;
    /**
     * Makes the selection equal to the current object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/select)
     */
    select(): void;
    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param error Sets a custom error message that is displayed when a form is submitted.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/setCustomValidity)
     */
    setCustomValidity(error: string): void;
    firstUpdated(changed: PropertyValues): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "text-field": TextField;
    }
}

declare class SelectFieldOption extends LitElement {
    text: string;
    value: string;
    disabled: boolean;
    selected: boolean;
    render(): lit.TemplateResult<1>;
    updated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "select-field-option": SelectFieldOption;
    }
}

type Option = {
    text: string;
    value: string;
    disabled?: boolean;
    element?: SelectFieldOption;
};
/**
 * A select field with full text search inspired by Material Design.
 *
 * @slot - Options for the element
 */
declare class SelectField extends LitElement {
    static shadowRootOptions: ShadowRootInit;
    static styles: lit.CSSResult;
    /**
     * The floating Material label.
     */
    label: string;
    /**
     * Conveys additional information below the select field, such as how it should
     * be used.
     */
    supportingText: string;
    /**
     * Name of this select field.
     */
    name: string;
    /**
     * Should we use "xl" mode of {@link TextField}?
     */
    xl: boolean;
    /**
     * Indicates whether the select field is disabled.
     */
    disabled: boolean;
    /**
     * Indicates whether selecting a non-empty value from the select field is required.
     */
    required: boolean;
    static formAssociated: boolean;
    constructor();
    render(): lit.TemplateResult<1>;
    /**
     * Set list of available options. Note that this list will override a list created from HTML children options.
     *
     * @param options options to include in this select field
     */
    setOptions(options: Option[]): void;
    /** Get current input value. */
    get value(): string;
    set value(value: string);
    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/willValidate)
     */
    get willValidate(): boolean;
    get validity(): element_internals_polyfill_dist_ValidityState.ValidityState;
    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/checkValidity)
     */
    checkValidity(): boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/reportValidity) */
    reportValidity(): boolean;
    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param error Sets a custom error message that is displayed when a form is submitted.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/setCustomValidity)
     */
    setCustomValidity(error: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "select-field": SelectField;
    }
    interface HTMLElementEventMap {
        'select-field:optionChanged': CustomEvent<{
            text: string;
            value: string;
            disabled: boolean;
            selected: boolean;
        }>;
    }
}

/**
 * Spinner providing animation for loading.
 */
declare class UsosSpinner extends LitElement {
    static styles: lit.CSSResult;
    ariaLabel: string;
    /**
     * When set, the spinner scales to the current font size
     * instead of using its default large dimensions.
     */
    inline: boolean;
    render(): lit.TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "usos-spinner": UsosSpinner;
    }
}

type SelectorItem = AnyObject;
/**
 * Search field simple popup list of results.
 */
declare class UsosSelector extends LitElement {
    static styles: lit.CSSResult;
    /**
     * HTTP method for query.
     */
    method: 'get' | 'post';
    /**
     * Query URL.
     */
    url: Optional<string>;
    /**
     * Form field name which exposes query string.
     */
    name: Optional<string>;
    /**
     * Param for search query call. If null, {@link name} is used.
     */
    searchParam: Optional<string>;
    /**
     * Extra params to be passed in query. Must be URL-encoded string.
     */
    extraParams: Optional<string>;
    /**
     * Key field of retrieved items, passed as key param of {@link onItemSelect} and {@link renderItem}.
     */
    elementKey: string;
    /**
     * Should query be cleared on focus out?
     */
    clearOnFocusOut: boolean;
    /**
     * Minimum number of characters to run query.
     */
    minSearchLength: number;
    /**
     * Value of search field.
     */
    value: string;
    /**
     * Delay in milliseconds between last keypress and query start.
     */
    updateDelay: number;
    /**
     * Allow also empty search query.
     */
    allowEmpty: boolean;
    /**
     * @deprecated Use labels and supporting text
     */
    placeholder: string;
    /**
     * Label for text field.
     */
    label: string;
    /**
     * Conveys additional information below the text field, such as how it should
     * be used.
     */
    supportingText: string;
    /**
     * Should we use "xl" mode of {@link TextField}?
     */
    xl: boolean;
    /**
     * Text shown as hint in results box when query was not started. Defaults to prompt for {@link minSearchLength} character input.
     */
    hint: string;
    /**
     * Allow submitting external form after selecting item.
     */
    allowExternalForm: boolean;
    /**
     * Called when item was selected from results.
     * @param item Selected item (as returned from itemsSelector)
     * @param key Key for item (elementKey)
     */
    onItemSelect: (item: SelectorItem, key: unknown) => void;
    /**
     * Render item to HTML.
     * @param item Selected item (as returned from itemsSelector)
     * @param key Key for item (elementKey)
     * @returns Item presentation as string, possibly with HTML tags
     */
    renderItem: (item: SelectorItem, key: unknown) => string;
    /**
     * Select items from query response.
     * @param response query response object
     * @returns list of items to show to user
     */
    itemsSelector: (response: AnyObject) => SelectorItem[];
    /**
     * Choose whether there are more results than to be shown to user.
     * @param response query response object
     * @returns true if there are more results
     */
    hasMoreItems: (response: AnyObject) => boolean;
    static formAssociated: boolean;
    constructor();
    render(): TemplateResult<1>;
    /**
     * Configure selector to send {@link elementKey} value as query param on item select.
     * @param paramName name of query param
     */
    selectItemAsQueryParam(paramName: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "usos-selector": UsosSelector;
    }
}

type MaterialIconType = 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone';
/**
 * Provides access to icon assets with standardized tinting and positioning.
 */
declare class UsosIcon extends LitElement {
    static styles: lit.CSSResult;
    /**
     * Type of icon from Material Icons.
     */
    iconType: Optional<MaterialIconType>;
    /**
     * Name of icon from Material Icons.
     * If the name is specified as `<type>.<name>`, then the `<type>` Material Icons variant will be used.
     */
    iconName: string | null;
    /** URL to icon asset. Note that either this attribute or `icon-url` is required. */
    iconUrl: string | null;
    /**
     * Accessible label or empty if the icon should be hidden from accessibility tools.
     */
    label: string;
    /**
     * Should this icon be treated as a button?
     */
    isButton: boolean;
    constructor();
    updated(): void;
    render(): lit.TemplateResult<1>;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "usos-icon": UsosIcon;
    }
}

/**
 * A lightweight, accessible banner component used to display
 * messages in a consistent way.
 *
 * @slot - banner content
 */
declare abstract class UsosBanner extends LitElement {
    static styles: lit.CSSResult;
    /**
     * Defines the semantic type of the banner.
     * The value affects both the visual styling and the default icon.
     *
     * Available types:
     * - info — neutral informational messages
     * - notice — warnings or attention‑required messages
     * - success — confirmation of successful actions,
     * - error — information about unsuccessful actions
     *
     * For accessibility reasons, the `success` and `error` types
     * are rendered with `role="alert"`
     *
     * Default: 'info'
     */
    type: 'info' | 'notice' | 'success' | 'error';
    /**
     * Overrides the default icon used for the banner.
     * If not provided, an icon appropriate for the current `type` is used.
     *
     * Note: overriding the icon is intended for exceptional cases only,
     * e.g. when a different symbol carries important semantic meaning
     * and improves user comprehension of the message.
     */
    iconName: Optional<string>;
    render(): lit.TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'usos-banner': UsosBanner;
    }
}

/**
 * Preconfigured button-like link for "go to" navigation.
 *
 * @slot - link contents
 */
declare class UsosLink extends LitElement {
    static shadowRootOptions: {
        delegatesFocus: boolean;
        clonable?: boolean;
        customElementRegistry?: CustomElementRegistry | null;
        mode: ShadowRootMode;
        serializable?: boolean;
        slotAssignment?: SlotAssignmentMode;
    };
    static styles: lit.CSSResult;
    /** Icon location. Can be ommited not to show icon. */
    iconLocation: 'right' | 'left' | null;
    /** Icon name, {@see UsosLink.iconName} */
    iconName: Optional<string>;
    /** Should link have button-like border? */
    bordered: boolean;
    /**
     * Should link be inline?
     * If link is not inline, it has predefined minimum height (to meet accessibility standards). However, links inside longer
     * text can have smaller height, if this is desired, this attribute can be set.
     */
    inline: boolean;
    assignedLinks: HTMLAnchorElement[];
    render(): lit.TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'usos-link': UsosLink;
    }
}

/**
 * Type of response from server after uploading a file, containing necessary information about
 * uploaded file to display it in attachments panel and provide download link.
 */
type UploadedFile = {
    fileID: string;
    fileName: string;
    fileSize: number | null;
    mimeType: string;
    comment?: string;
};
/**
 * A form-associated web component providing a complete UI for managing file attachments.
 *
 * The component supports uploading multiple files, displaying previously uploaded files,
 * downloading single or all files, and removing files. All network operations are fully
 * configurable through URL attributes, allowing the component to be used in various modes
 * (upload-only, read-only, mixed).
 *
 * Uploaded files returned by the backend must follow the `UploadedFile` structure.
 * The component automatically updates its form value by exposing each uploaded file ID
 * under the name specified in the `name` attribute.
 *
 * File type and size constraints can be displayed to the user and partially enforced
 * on the client side. Additional POST parameters may be passed using `extra-post-params`,
 * which must be provided as a correctly encoded query-string fragment.
 *
 * Drag & drop is supported for uploading files. If no upload URL is provided, the entire
 * upload interface is hidden. Similarly, delete and download features are disabled when
 * their respective URLs are not set.
 */
declare class AttachmentsPanel extends LitElement {
    static shadowRootOptions: ShadowRootInit;
    static styles: lit.CSSResult;
    /**
     * URL for uploading files.
     */
    fileUploadURL: string;
    /**
     * URL for removing files. May contain `{{FILE_ID}}` placeholder, which will
     * be replaced with actual file ID when making delete request.
     */
    fileDeleteURL: string;
    /**
     * URL for downloading a single file, with `{{FILE_ID}}` placeholder for file ID.
     */
    fileDownloadURL: string;
    /**
     * URL for downloading all files.
     */
    downloadAllFilesURL: string;
    /**
     * Name of the parameter used for file upload in POST request. Default is "file".
     */
    uploadFileParamName: string;
    /**
     * Name of the parameter used for delete file in POST request. Default is "fileID".
     */
    deleteFileParamName: string;
    /**
     * Extra POST parameters to include in upload and delete requests, in
     * URL-encoded format (e.g. `param1=value1&param2=value2`).
     * Note: this is a simple string and the component does not do any
     * validation or encoding of it, so it should be properly encoded by the caller.
     */
    extraPostParams: string;
    /**
     * Name of the form parameter containing the uploaded file ID.
     * The parameter will be repeated for each uploaded file.
     */
    name: string;
    /**
     * Comma-separated list of allowed file types for upload, each item must be a uppercase
     * file types (e.g. `PDF,JPEG`).
     * When accessed as a property, this is an array of strings.
     */
    fileTypes: string[];
    /**
     * Minimum number of files that must be uploaded.
     * This is only used for displaying requirements to the user, the component does not enforce it.
     */
    minFilesCount: Optional<number>;
    /**
     * Maximum number of files that can be uploaded.
     * This is only used for displaying requirements to the user and disabling the upload button.
     */
    maxFilesCount: Optional<number>;
    /**
     * Maximum allowed file size in bytes. This is used for displaying requirements to the user and to
     * prevent uploading files that exceed this size, but it still should be also validated on the server side.
     */
    maxFileSize: Optional<number>;
    static formAssociated: boolean;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): lit.TemplateResult<1>;
    /**
     * Set previously uploaded files
     * @param files
     */
    setInitialFiles(files: UploadedFile[]): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'attachments-panel': AttachmentsPanel;
    }
}

declare const validators: {
    pesel: (value: string) => string;
    nip: (value: string) => string;
};
declare function applyValidators(textField: TextField): void;

declare const __validators_applyValidators: typeof applyValidators;
declare const __validators_validators: typeof validators;
declare namespace __validators {
  export {
    __validators_applyValidators as applyValidators,
    __validators_validators as validators,
  };
}

/**
 * Dynamic area with an option to load content automatically when element becomes visible.
 *
 * @fires {Event} dynamic-area:urlLoaded - when dynamic-area loaded its dynamic contents.
 */
declare class DynamicArea extends LitElement {
    static styles: lit.CSSResult;
    /**
     * Whether the dialog content should be loaded automatically when element becomes visible.
     */
    autoload: boolean;
    /**
     * Whether the dialog content should be reloaded automatically every time element becomes visible.
     */
    autoreload: boolean;
    /**
     * If set to non-zero value, it forces soft reload every given number of seconds,
     * regardless of visibility.
     * Note that this property should not be used with autoload nor autoreload.
     */
    autorefreshInterval: number;
    /**
     * Whether the content should be kept when element becomes invisible.
     * If false, the content will be cleared, and loaded again when element becomes visible again.
     * Note that this property affects only autoreload.
     */
    keepContent: boolean;
    /**
     * Dynamic contents' URL.
     */
    url: string;
    /**
     * aria-live property to be passed to loaded content container.
     */
    arialive: 'off' | 'polite' | 'assertive';
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): lit.TemplateResult<1>;
    /**
     * Manually reloads area.
     *
     * @param options - options for reloading.
     * @param options.soft - if true, the area won't be cleared before loading new content, and loading spinner won't be shown.
     *      Useful when you want to reload content without flickering, but it may have consequences if the new content
     *      is significantly different from the old one.
     * @returns Promise - resolved when area loaded correctly, rejected with
     * `${response.status}: ${response.statusText}` after fetch error.
     */
    reload(options?: {
        soft?: boolean;
    }): Promise<string>;
}
declare global {
    interface HTMLElementTagNameMap {
        "dynamic-area": DynamicArea;
    }
    interface HTMLElementEventMap {
        'dynamic-area:urlLoaded': Event;
        'dynamic-area:loadAbort': Event;
    }
}

/**
 * Navigation bar for static paginated data tables.
 * Note that this component provides only navigation between static pages containing subsequent pages
 * of table, dynamic reloading is available only by providing JavaScript URL-syntax call in attributes or
 * by onClickFn property.
 *
 * @slot - extra content to show in navigation bar
 * @fires table-nav-bar:click - when user clicks on navigation buttons, with detail {button: 'first' | 'previous' | 'next' | 'last', originalEvent: Event}
 */
declare class TableNavBar extends LitElement {
    static styles: lit.CSSResult;
    /** Is current page the first in dataset? */
    isFirst: boolean;
    /** Is current page the last in dataset? */
    isLast: boolean;
    /** URL to view with first page of this table. */
    firstPageUrl: string;
    /** URL to view with previous page of this table. */
    previousPageUrl: string;
    /** URL to view with next page of this table. */
    nextPageUrl: string;
    /** URL to view with last page of this table. */
    lastPageUrl: string;
    /** Current elements shown in table, in syntax 'N..M'. */
    currentElementsNumber: string;
    /** Total element count in table. */
    elementsCount: Optional<number>;
    /** Is this list empty? */
    empty: boolean;
    /**
     * Whether to use buttons for navigation instead of links. This mode ignores link URLs,
     * but still honors `isFirst` and `isLast`.
     * Useful for navigation without page reloads, see Table toolbox.
     */
    useButtons: boolean;
    /**
     * Optional callback fired on click on navigation buttons.
     * If `false` is returned, link default action will be prevented.
     *
     * @deprecated This property is deprecated and should not be used in new code.
     * It is recommended to listen to `table-nav-bar:click` event instead, which provides
     * more information about the click and does not interfere with default link behavior.
     */
    onClickFn: (evt: Event) => boolean | void;
    render(): lit.TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "table-nav-bar": TableNavBar;
    }
    interface HTMLElementEventMap {
        "table-nav-bar:click": CustomEvent<{
            button: 'first' | 'previous' | 'next' | 'last';
            originalEvent: Event;
        }>;
    }
}

/**
 * Wire up pagination for a table. This function will set up the provided nav bars and dynamic area
 * to work together to provide server-side dynamic (AJAX) pagination functionality.
 *
 * @param params pagination parameters
 * @param params.currentPage the current page number (1-based)
 * @param params.itemsPerPage the number of items displayed per page
 * @param params.maxItems the total number of items (or null if unknown)
 * @param params.bars one or more TableNavBar elements to use for pagination controls
 * @param params.targetArea the DynamicArea to load paginated content into
 * @param params.urlTemplate a function that takes a page number and returns the URL to load that page
 */
declare function pagination(params: {
    currentPage: number;
    itemsPerPage: number;
    maxItems: number | null;
    bars: TableNavBar | TableNavBar[];
    targetArea: DynamicArea;
    urlTemplate: (page: number) => string;
}): void;

declare const __table_pagination: typeof pagination;
declare namespace __table {
  export {
    __table_pagination as pagination,
  };
}

declare function protectForm(form: HTMLFormElement): void;
declare function pauseFormProtection(form: HTMLFormElement): void;
declare function resumeFormProtection(form: HTMLFormElement): void;

declare const __form_protection_pauseFormProtection: typeof pauseFormProtection;
declare const __form_protection_protectForm: typeof protectForm;
declare const __form_protection_resumeFormProtection: typeof resumeFormProtection;
declare namespace __form_protection {
  export {
    __form_protection_pauseFormProtection as pauseFormProtection,
    __form_protection_protectForm as protectForm,
    __form_protection_resumeFormProtection as resumeFormProtection,
  };
}

/**
 * "?" button opening usos-dialog with help.
 *
 * @slot - Slot for usos-dialog content
 */
declare class HelpDialog extends LitElement {
    static styles: lit.CSSResult;
    /** Title for usos-dialog */
    dialogTitle: string;
    ariaLabel: string;
    role: string;
    _dialog: UsosDialog;
    render(): lit.TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "help-dialog": HelpDialog;
    }
}

/**
 * Accessible dialog with an option to load content dynamically by the HTTP GET request.
 *
 * @slot title - dialog title
 * @slot title-trailing-content - extra title content to be displayed next to the close button
 * @slot - dialog contents
 * @fires {Event} dialog:open - when dialog is opened
 * @fires {Event} dialog:cancel - when dialog is about to be closed, cancellable
 * @fires {Event} dialog:close - when dialog is closed
 * @fires {Event} dialog:urlLoaded - when dialog loaded its dynamic contents
 */
declare class UsosDialog extends LitElement {
    static styles: lit.CSSResult;
    /**
     * Whether the dialog content should be loaded dynamically.
     */
    dynamic: boolean;
    /**
     * Dynamic contents' URL. Required if `dynamic` is true.
     */
    url: string;
    /**
     * Name of icon from Material Icons displayed in front of dialog's title.
     * For possible name option {@see UsosIcon.iconName}.
     */
    titleIconName: string;
    /**
     * Whether the dialog should create button that opens it.
     */
    withButton: boolean;
    /**
     * If with-button then this attribute contains button text content.
     */
    buttonLabel: string;
    /**
     * If with-button then this attribute contains button class attribute.
     * Possible classes are those defined by USOS-UI: positive | neutral | negative and outlined.
     */
    buttonClass: string;
    /**
     * If with-button then whether button should be disabled.
     * Works only with <button> mode, not with <usos-icon is-button>.
     */
    buttonDisabled: boolean;
    /**
     * If with-button then icon-button replaces button with <usos-icon is-button>.
     */
    iconButton: boolean;
    /**
     * Icon name used for button or usos-icon that opens dialog.
     * For possible name option {@see UsosIcon.iconName}.
     */
    buttonIconName: string;
    constructor();
    render(): lit.TemplateResult<1>;
    firstUpdated(): void;
    /**
     * Open this dialog.
     */
    open(): void;
    openWithContents(content: string): void;
    isOpened(): boolean;
    /**
     * Close this dialog.
     * @fires cancel on HTMLDialogElement (and dialog:cancel on this) to enable preventing
     */
    close(): false | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        "usos-dialog": UsosDialog;
    }
    interface HTMLElementEventMap {
        'dialog:open': Event;
        'dialog:cancel': Event;
        'dialog:close': Event;
        'dialog:urlLoaded': Event;
    }
}

declare function openDialog(hrefOrContent: string | HTMLElement, title?: string): Promise<UsosDialog>;

declare const __dialog_openDialog: typeof openDialog;
declare namespace __dialog {
  export {
    __dialog_openDialog as openDialog,
  };
}

/**
 * Exported function allowing to manually run AS validation
 */
declare function checkAccessibilityStatement(): boolean;

declare const __a11y_checkAccessibilityStatement: typeof checkAccessibilityStatement;
declare namespace __a11y {
  export {
    __a11y_checkAccessibilityStatement as checkAccessibilityStatement,
  };
}

type Manifest<Module> = {
    shouldAutoload: () => boolean;
    load: () => Promise<Module>;
    onModuleLoaded: (module: Module) => void;
};
type Tool<M> = M extends Manifest<infer T> ? T : never;
declare const tools: {
    A11y: Manifest<typeof __a11y>;
    Dialog: Manifest<typeof __dialog>;
    FormProtection: Manifest<typeof __form_protection>;
    Table: Manifest<typeof __table>;
    Validators: Manifest<typeof __validators>;
};
type Tools = typeof tools;
type ToolsModules = {
    [Key in keyof Tools]: Tool<Tools[Key]>;
};
declare function loadTool<Name extends keyof ToolsModules>(name: Name): Promise<ToolsModules[Name]>;

/**
 * Language switch widget for CasBar.
 */
declare class CasLang extends LitElement {
    static styles: lit.CSSResult;
    /**
     * Language switch URL.
     */
    changeUrl: string;
    render(): lit.TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'cas-lang': CasLang;
    }
}

/**
 * Header bar for login status and CAS links.
 * @slot service-name - Name of CAS service
 * @slot other - Extra text to be placed on center of CAS bar
 */
declare class CasBar extends LitElement {
    static styles: lit.CSSResult;
    /**
     * Name of currently logged in user or empty if nobody is logged in.
     * @default ''
     */
    loggedUser: string;
    /**
     * URL for login link, if empty, the link will not be shown.
     * @default ''
     */
    loginUrl: string;
    /**
     * URL for logout link, if empty, the link will not be shown.
     * @default ''
     */
    logoutUrl: string;
    /**
     * URL for password change, if empty, the link will not be shown.
     * @default ''
     */
    passwdUrl: string;
    /**
     * URL for language switch, if empty, the link will not be shown.
     * @default ''
     */
    langSwitchUrl: string;
    /**
     * Login mode. Possible values:
     * - "admin" - current user is an administrator and we want to stress out that caution is required
     * - "impostor" - an administrator has logged in to another user's account
     * - "token" - user is logged in via token instead of CAS account.
     * - "user" - standard user is logged in
     * - "anon" - anonymous session, nobody is logged in
     * - "none" - no logging in, show only link for language switch
     * @default 'anon'
     */
    mode: "admin" | "impostor" | "token" | "user" | "anon" | "none";
    render(): lit.TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'cas-bar': CasBar;
    }
}

declare class LocalTime extends LitElement implements HTMLTimeElement {
    dateTime: string;
    format: 'date' | 'datetime' | 'datetime-seconds' | 'datetime-tz' | 'time' | 'time-tz';
    constructor();
    render(): lit.TemplateResult<1>;
}

/**
 * Floating button providing quick scroll to top of the page.
 */
declare class TopScroller extends LitElement {
    static styles: lit.CSSResult;
    /**
     * How many screenfuls should we scroll past before showing the button?
     */
    minScreens: number;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): lit.TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'top-scroller': TopScroller;
    }
}

/**
 * Tab navigation accessible "navigate to" links.
 */
declare class SkipLinks extends LitElement {
    static styles: lit.CSSResult;
    render(): lit.TemplateResult<1>;
    updated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "skip-links": SkipLinks;
    }
}

/**
 * Component showing short content with coloured background
 *
 * @slot - content
 */
declare class UsosTag extends LitElement {
    static styles: lit.CSSResult;
    /**
     * Color of tag.
     */
    color: '1' | '2' | '3' | '4' | '5' | '6';
    /**
     * Should use slim variant?
     */
    slim: boolean;
    /**
     * Should preserve text case?
     */
    preserveCase: boolean;
    render(): lit.TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "usos-tag": UsosTag;
    }
}

/**
 * Simple styled progress bar. Note that
 */
declare class UsosProgress extends LitElement implements HTMLProgressElement {
    static styles: lit.CSSResult;
    max: number;
    value: number;
    label: string;
    get position(): number;
    get labels(): NodeListOf<HTMLLabelElement>;
    render(): lit.TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "usos-progress": UsosProgress;
    }
}

/**
 * Component representing a process flow or timeline.
 * {@link UsosFlowStep} elements are used
 */
declare class UsosFlow extends LitElement {
    static styles: lit.CSSResult;
    selectedStep: string;
    constructor();
    render(): lit.TemplateResult<1>;
    willUpdate(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "usos-flow": UsosFlow;
    }
    interface HTMLElementEventMap {
        'usos-flow:select': CustomEvent<{
            stepNumber: string;
        }>;
        'usos-flow:numberChanged': CustomEvent<{
            oldNumber: string;
            newNumber: string;
        }>;
    }
}

declare class UsosFlowStep extends LitElement {
    static styles: lit.CSSResult;
    topLabel: string;
    bottomLabel: string;
    stepNumber: string;
    status: 'done' | 'active' | 'future';
    isOpen: boolean;
    isLastStep: boolean;
    constructor();
    render(): lit.TemplateResult<1>;
    updated(changedProperties: PropertyValues<this>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "usos-flow-step": UsosFlowStep;
    }
}

/**
 * Frame for content with header and optional footer.
 *
 * @slot - frame content
 * @slot title - title of frame
 * @slot trailing-content - extra content to put on the right side of the header
 * @slot foot - content for footer
 */
declare class UsosFrame extends LitElement {
    static styles: lit.CSSResult;
    hasHeader: boolean;
    /**
     * URL to leading icon.
     */
    leadingIconUrl: string | null;
    /**
     * Leading icon name, {@see UsosIcon.iconName}.
     */
    leadingIcon: string | null;
    /**
     * Should the component be expadable
     */
    expandable: boolean;
    /**
     * If usos-frame is expandable, then this attribute indicates whether it is expanded or not.
     */
    expanded: boolean;
    /** Should the footer be sticky? */
    footerSticky: boolean;
    /** Should frame width fit content? */
    fitContent: boolean;
    render(): lit.TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "usos-frame": UsosFrame;
    }
}

/**
 * Section with title to be used as usos-frame's child
 *
 * @slot - frame content
 */
declare class UsosFrameSection extends LitElement {
    static styles: lit.CSSResult;
    /**
     * Title of the section.
     */
    sectionTitle: string;
    /**
     * Leading icon name, default 'outlined.label', {@see UsosIcon.iconName}.
     */
    leadingIcon: string | null;
    /**
     * Should the component be expadable.
     */
    expandable: boolean;
    /**
     * If usos-frame is expandable, then this attribute indicates whether it is expanded or not.
     */
    expanded: boolean;
    /**
     * Should behave as subgrid
     */
    subgrid: boolean;
    level: Optional<number>;
    render(): lit.TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "usos-frame-section": UsosFrameSection;
    }
}

declare enum ExpandState {
    Expanding = 0,
    Expanded = 1,
    Collapsing = 2,
    Collapsed = 3
}
/**
 * Parent class for box-decorated information.
 *
 * @slot - box content
 * @slot expandable-content - optional extra content hidden by default
 */
declare abstract class UsosBox extends LitElement {
    hasExpandableContent: boolean;
    expandState: ExpandState;
    render(): lit.TemplateResult<1>;
}

/**
 * Error box information. Registers as alert for accessibility tools.
 */
declare class ErrorBox extends UsosBox {
    static styles: lit.CSSResult[];
    /** Predefined alert role. */
    role: string;
}
declare global {
    interface HTMLElementTagNameMap {
        'error-box': ErrorBox;
    }
}

/**
 * Neutral box information.
 */
declare class InfoBox extends UsosBox {
    static styles: lit.CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        'info-box': InfoBox;
    }
}

/**
 * Notice/warning box information.
 */
declare class NoticeBox extends UsosBox {
    static styles: lit.CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        'notice-box': NoticeBox;
    }
}

/**
 * Success box information. Registers as alert for accessibility tools.
 */
declare class SuccessBox extends UsosBox {
    static styles: lit.CSSResult[];
    /** Predefined alert role. */
    role: string;
}
declare global {
    interface HTMLElementTagNameMap {
        'success-box': SuccessBox;
    }
}

/**
 * Application header component.
 *
 * @slot logo-img - You can insert USOS (or any else) logo here
 */
declare class AppHeader extends LitElement {
    static shadowRootOptions: ShadowRootInit;
    static styles: lit.CSSResult;
    /**
     * Text to display on header.
     */
    displayName: string;
    /**
     * URL of image to show on the right side of header. Can be ommited.
     */
    backgroundImageUrl: string;
    /**
     * Target URL for link on logo and header text.
     */
    href: string;
    /** Should app width be responsive? Set by usos-layout */
    responsive: boolean;
    /** Should the header be slim? This disables background image */
    slim: boolean;
    render(): lit.TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "app-header": AppHeader;
    }
}

/**
 * Single column of footer.
 *
 * @slot - Slot for items in this column. Use `footer-row` in this slot.
 */
declare class FooterPanel extends LitElement {
    static styles: lit.CSSResult;
    /**
     * Header of this panel. You can use `\n` in value of this attribute to force line break.
     */
    header: string;
    render(): lit.TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'footer-panel': FooterPanel;
    }
}

/**
 * Single item of footer.
 *
 * @slot - footer item content
 */
declare class FooterRow extends LitElement {
    static styles: lit.CSSResult;
    /**
     * Optional icon prepending footer item.
     */
    icon: string;
    render(): lit.TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'footer-row': FooterRow;
    }
}

/**
 * Main app panel, consisting of left menu and page body.
 *
 * @slot left-menu - Slot for left menu
 * @slot page-body - Slot for main content
 */
declare class MainPanel extends LitElement {
    static styles: lit.CSSResult;
    /** Should left menu be hidden? */
    leftMenuHidden: boolean;
    /** Should app width be responsive? Set by usos-layout. */
    responsive: boolean;
    render(): lit.TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "main-panel": MainPanel;
    }
}

/**
 * Tag holder for left menu.
 *
 * @slot - Left menu content
 */
declare class MenuLeft extends LitElement {
    static styles: never[];
    contents: Node[];
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): lit.TemplateResult<1>;
    focus(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "menu-left": MenuLeft;
    }
}

/**
 * Left menu collapse button.
 */
declare class MenuTopHamburger extends LitElement {
    static shadowRootOptions: {
        delegatesFocus: boolean;
        clonable?: boolean;
        customElementRegistry?: CustomElementRegistry | null;
        mode: ShadowRootMode;
        serializable?: boolean;
        slotAssignment?: SlotAssignmentMode;
    };
    static styles: lit.CSSResult;
    toggleLeftMenu(): void;
    render(): lit.TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "menu-top-hamburger": MenuTopHamburger;
    }
}

/**
 * Top menu component. Contains left menu collapse button.
 *
 * @slot - top menu items
 */
declare class MenuTop extends LitElement {
    static shadowRootOptions: {
        delegatesFocus: boolean;
        clonable?: boolean;
        customElementRegistry?: CustomElementRegistry | null;
        mode: ShadowRootMode;
        serializable?: boolean;
        slotAssignment?: SlotAssignmentMode;
    };
    static styles: lit.CSSResult;
    /** Should hamburger not be rendered? */
    noHamburger: boolean;
    connectedCallback(): void;
    render(): lit.TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "menu-top": MenuTop;
    }
}

/**
 * Item for top menu.
 */
declare class MenuTopItem extends LitElement {
    static styles: lit.CSSResult;
    /**
     * Target URL. Can be ommited for greyed item.
     */
    href: string;
    /**
     * Item name.
     */
    name: string;
    /**
     * Should this item be greyed as inactive item?
     */
    greyed: boolean;
    /** Predefined listitem role. */
    role: string;
    render(): lit.TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "menu-top-item": MenuTopItem;
    }
}

declare class TabLayout extends LitElement {
    static styles: lit.CSSResult;
    updateLabel(tabId: number | string, newLabel: string | ((lastName: string) => string)): void;
    updated(changedProperties: PropertyValues): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'tab-layout': TabLayout;
    }
}

/**
 * Copyright row and debug data holder.
 *
 * @slot debug - Slot for extra debug data, links, etc.
 */
declare class UsosCopyright extends LitElement {
    static styles: lit.CSSResult;
    render(): lit.TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'usos-copyright': UsosCopyright;
    }
}

/**
 * Footer container. Provides accessibility role and styling.
 */
declare class UsosFooter extends LitElement {
    static styles: lit.CSSResult;
    render(): lit.TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'usos-footer': UsosFooter;
    }
}

/**
 * Basis of app view.
 */
declare class UsosLayout extends LitElement {
    static styles: lit.CSSResult;
    /** Should app width be expanded to fit the browser viewport? */
    expanded: boolean;
    /** Should app width be responsive? */
    responsive: boolean;
    render(): lit.TemplateResult<1>;
    updated(changedProperties: Map<string, any>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "usos-layout": UsosLayout;
    }
}

/**
 * Key–value list rendered using a grid layout.
 *
 * This component accepts two types of children:
 *  - a direct `dl` element
 *  - a `usos-frame-section` element containing a `dl` inside
 *
 * @slot - kv-list content
 */
declare class KeyValueList extends LitElement {
    static styles: lit.CSSResult;
    /**
     * Enables compact width mode.
     * In this mode the key column is constrained between its min-content width
     * and a maximum of 25% of the available space.
     */
    compact: boolean;
    /**
     * Enables fit-label mode.
     * The key column may expand up to 50% of the available width
     * to keep the label and value on a single line when possible.
     */
    fitLabel: boolean;
    /**
     * Enables fixed-width mode.
     * The attribute value (1–99, default 25) specifies the percentage width
     * allocated to the key column.
     */
    fixed: Optional<number>;
    static supportsSubgrid: boolean;
    render(): lit.TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "kv-list": KeyValueList;
    }
}

/**
 * Tile for module navigation.
 *
 * @slot title - Element title
 * @slot text - Element description
 * @cssproperty [--module-link-tile-text-content-line-height=1] - Line height for text in description
 */
declare class UsosModuleLinkTile extends LitElement {
    static styles: lit.CSSResult;
    /** Target URL for this tile. */
    href: string;
    /** Image to be used as tinted icon on the left side of tile. */
    maskImage: string;
    render(): lit.TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "usos-module-link-tile": UsosModuleLinkTile;
    }
}

/**
 * Container providing layout settings for `usos-module-link-tile`.
 *
 * @slot - Slot for tiles.
 */
declare class UsosModuleLinkTileContainer extends LitElement {
    static styles: lit.CSSResult;
    render(): lit.TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'usos-module-link-tile-container': UsosModuleLinkTileContainer;
    }
}

/**
 * Timetable component
 * @slot - should contains HTML structure like
 * <div>
 *   <div><h[2-6]>Day</h[2-6]></div>
 *   <timetable-day>(...)</timetable-day>
 * </div>
 * for every day
 *
 * @cssproperty [--timetable-row-height] - height of quaters' spacing; default: 1.25rem or 0.125rem for [mini]
 * @cssproperty [--timetable-border-color=var(--border)] - timetable lines' color
 */
declare class Timetable extends LitElement {
    static styles: lit.CSSResult;
    /** Show mini timetable, to be used e.g. as a thumbnail */
    mini: boolean;
    /** Hour to draw timetable from */
    startTime: number;
    /** Last full hour to be drawn on timetable  */
    endTime: number;
    render(): lit.TemplateResult<1>;
    updated(_: Map<string, unknown>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'usos-timetable': Timetable;
    }
}

/**
 * Component for a timetable entry tile
 * When any of the dialog-* attributes is set, clicking an entry opens dialog with extra information
 *
 * @slot info - slot for base information presented on a tile
 * @slot time - slot for time information presented on a tile
 *
 * @slot dialog-info - slot for information presented in a dialog: general info
 * @slot dialog-event - slot for information presented in a dialog: entry occurrences
 * @slot dialog-person - slot for information presented in a dialog: lecturers
 * @slot dialog-place - slot for information presented in a dialog: entry place
 */
declare class TimetableEntry extends LitElement {
    static styles: lit.CSSResult;
    /**
     * Show mini timetable, to be used e.g. as a thumbnail
     * managed by containing usos-timetable
     */
    mini: boolean;
    /**
     * Should this entry be highlighted (font-weight and border) on timetable?
     */
    highlighted: boolean;
    /** Title of the tile and dialog */
    name: string;
    /** Item ID presented in tile's title */
    nameId: string;
    /** Number from 1 to 8 to choose tile color */
    color: number;
    constructor();
    render(): lit.TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'timetable-entry': TimetableEntry;
    }
}

/**
 * List component containing list of timetable-entry
 */
declare class TimetableDay extends LitElement {
    static styles: lit.CSSResult;
    /** Hour to draw timetable from */
    startTime: number;
    /** Last full hour to be drawn on timetable  */
    endTime: number;
    /**
     * Show mini timetable, to be used e.g. as a thumbnail
     * managed by containing usos-timetable
     */
    mini: boolean;
    constructor();
    render(): lit.TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'timetable-day': TimetableDay;
    }
}

/**
 * Simple tooltip as (i) icon with popup text on hover/focus and persisting on click.
 *
 * @slot - tooltip contents
 */
declare class UsosTooltip extends LitElement {
    static styles: lit.CSSResult;
    static allElements: UsosTooltip[];
    static hideAll(except?: UsosTooltip | null, hidePersistent?: boolean): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /** Tooltip position. 'auto' means "top if possible, bottom otherwise" */
    position: 'top' | 'bottom' | 'auto';
    /**
     * If set to `true`, the tooltip will not calculate its width.
     * User must then style the component with proper fixed width.
     */
    constSize: boolean;
    show(e: Event): void;
    hide(e?: Event): void;
    render(): lit.TemplateResult<1>;
    /**
     * Notify the tooltip that its content has changed and it should recalculate its width.
     */
    notifyContentChanged(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "usos-tooltip": UsosTooltip;
    }
}

/**
 * A layout component grouping and positioning buttons into two distinct areas.
 *
 * @slot back-buttons - Reserved for buttons such as “Previous step”.
 * @slot - The main area for buttons.
 */
declare class ButtonsPanel extends LitElement {
    static styles: lit.CSSResult;
    render(): lit.TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'buttons-panel': ButtonsPanel;
    }
}

declare global {
    interface HTMLElementEventMap {
        /** if single is true then only closest container should respond */
        'usos-ui:lockScroll': CustomEvent<{
            single: boolean;
        }>;
        /** if single is true then only closest container should respond */
        'usos-ui:unlockScroll': CustomEvent<{
            single: boolean;
        }>;
    }
}

declare const getLocale: (() => string) & {
    _LIT_LOCALIZE_GET_LOCALE_?: never;
};
declare const setLocale: ((newLocale: string) => Promise<void>) & {
    _LIT_LOCALIZE_SET_LOCALE_?: never;
};
/**
 * Get quantity (cardinal) string, per https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/language_plural_rules.html.
 */
declare function quantityString(str: QuantityString, number: number): string | null;

declare global {
    var USOS: {
        UI: Partial<ToolsModules> & {
            version: string;
            loadTool: typeof loadTool;
        };
    };
}

export { AppHeader, AttachmentsPanel, ButtonsPanel, CasBar, CasLang, DynamicArea, ErrorBox, FooterPanel, FooterRow, HelpDialog, InfoBox, KeyValueList, LocalTime, MainPanel, MenuLeft, MenuTop, MenuTopHamburger, MenuTopItem, NoticeBox, SelectField, SelectFieldOption, SkipLinks, SuccessBox, TabLayout, TableNavBar, TextField, Timetable, TimetableDay, TimetableEntry, TopScroller, UsosBanner, UsosCopyright, UsosDialog, UsosFlow, UsosFlowStep, UsosFooter, UsosFrame, UsosFrameSection, UsosIcon, UsosLayout, UsosLink, UsosModuleLinkTile, UsosModuleLinkTileContainer, UsosProgress, UsosSelector, UsosSpinner, UsosTag, UsosTooltip, getLocale, quantityString, setLocale };
