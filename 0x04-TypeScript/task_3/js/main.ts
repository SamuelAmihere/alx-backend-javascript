import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const rw: RowElement = { firstName: "Guillaume", lastName: "Salva"};

const nwRowID: RowID = CRUD.insertRow(rw);
const updRow: RowElement = {
    ...rw, age: 23
};
CRUD.updateRow(nwRowID, updRow);
CRUD.deleteRow(nwRowID);