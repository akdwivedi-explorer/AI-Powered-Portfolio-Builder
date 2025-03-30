declare module 'html2pdf.js' {
  interface Options {
    margin?: number | [number, number] | [number, number, number, number];
    filename?: string;
    image?: { type?: string; quality?: number };
    enableLinks?: boolean;
    html2canvas?: { scale?: number; useCORS?: boolean };
    jsPDF?: { unit?: string; format?: string; orientation?: string };
  }

  interface Html2PdfInstance {
    from(element: HTMLElement | string): Html2PdfInstance;
    set(options: Options): Html2PdfInstance;
    save(): Promise<void>;
    toPdf(): any;
    output(type: string, options?: any): any;
  }

  function html2pdf(): Html2PdfInstance;
  export = html2pdf;
}
