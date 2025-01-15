import { Locale } from "./i18n";
interface Quill {
    container: HTMLElement;
    root: HTMLElement;
    on: any;
}
interface HansQuillImageResizerOptions {
    [index: string]: any;
    locale?: Locale;
}
declare function HansQuillImageResizer(quill: Quill, options?: HansQuillImageResizerOptions): void;
export default HansQuillImageResizer;
