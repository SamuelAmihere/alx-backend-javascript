/*
import RowID and RowElement from interface.ts.
*/

import { RowElement, RowID } from "./interface";

export function insertRow(row: RowElement): number;
export function updatedRow(rowId: RowID, rw: RowElement): number;
export function deleteRow(rowId: RowID): SecurityPolicyViolationEventDisposition;
export function update(newRowID: number, updRow: RowElement) {
    throw new Error('Function not implemented.');
}
export function updateRow(newRowID: number, updatedRow: RowElement) {
    throw new Error('Function not implemented.');
}

