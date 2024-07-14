import { ComponentRef, Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import pdfMake from 'pdfmake/build/pdfMake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const EXCEL_TYPE =
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXT = '.xlsx';

@Injectable({
  providedIn: 'root',
})
export class ExporterService {
  constructor() {}

  exportToExcel(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ['data'],
    };
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    this.saveAsExcel(excelBuffer, excelFileName);
  }

  private saveAsExcel(buffer: any, filename: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(
      data,
      filename + '_export_' + new Date().getTime() + EXCEL_EXT
    );
  }

  async createPdf(data: any[]): Promise<void> {
    const pdfMake = (await import('pdfmake/build/pdfMake')).default;
    const pdfFonts = (await import('pdfmake/build/vfs_fonts')).default;
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const pdfDefinition: any = {
      content: [
        {
          table: {
            headerRows: 1,
            widths: ['auto', '*', '*', 'auto', '*', '*'],
            body: [
              [
                { text: 'ID', style: 'tableHeader' },
                { text: 'Nombre', style: 'tableHeader' },
                { text: 'Direccion', style: 'tableHeader' },
                { text: 'Estatus', style: 'tableHeader' },
                { text: 'UsuarioActualiza', style: 'tableHeader' },
                { text: 'FechaActualiza', style: 'tableHeader' },
              ],
              ...data.map((item) => [
                item.Id,
                item.Nombre,
                item.Direccion,
                item.Estatus,
                item.UsuarioActualiza,
                item.FechaActualiza,
              ]),
            ],
          },
          layout: {
            fillColor: function (
              rowIndex: number,
              node: any,
              columnIndex: number
            ) {
              return rowIndex === 0 ? '#CCCCCC' : null;
            },
          },
        },
      ],
      styles: {
        header: {
          fontSize: 25,
          bold: true,
          alignment: 'center',
          margin: [0, 0, 0, 10],
          color: 'black',
          fillColor: 'linear-gradient(to left,#ebaa1f, #8a4910, #ebaa1f)',
        },
        tableHeader: {
          bold: true,
          fontSize: 13,
          color: 'black',
          fillColor: '#ebaa1f',
          alignment: 'center',
          textShadow: '1px 1px 1px #000000',
        },
        tableBody: {
          fontSize: 11,
          color: 'black',
        },
      },
    };

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
  }
}
