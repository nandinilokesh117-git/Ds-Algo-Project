import XLSX from 'xlsx';

export function readExcel(filePath, sheetName) {
    const workbook = XLSX.readFile(filePath);
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);

//     // defval:'' keeps empty cells, raw:false preserves line breaks
//   const data = xlsx.utils.sheet_to_json(sheet, {
//     defval: '',
//     raw: false
//   });
    return data;  // returns an array of objects
}
