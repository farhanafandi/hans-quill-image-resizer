import { Locale } from "./i18n";
interface Quill {
    container: HTMLElement;
    root: HTMLElement;
    on: any;
}
interface QuillImageResizerOptions {
    [index: string]: any;
    locale?: Locale;
}
declare function QuillImageResizer(quill: Quill, options?: QuillImageResizerOptions): void;
export default QuillImageResizer;
