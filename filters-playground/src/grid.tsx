'use strict';

import {useMemo, StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {
    ColDef,
} from 'ag-grid-community';
import {ComplexDataType} from './interfaces';

const GridExample = () => {
    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);

    const rowData = useMemo<ComplexDataType[]>(() => [
        {complexField: {value: 'a1', filterValue: 'the A'}},
        {complexField: {value: 'a2', filterValue: 'the A'}},
        {complexField: {value: 'b1', filterValue: 'the B'}},
        {complexField: {value: 'b2', filterValue: 'the B'}},
        {complexField: {value: 'c', filterValue: 'the C'}},
    ], []);

    const columnDefs = useMemo<ColDef<ComplexDataType>[]>(() => [
        {
            field: 'complexField',
            minWidth: 150,
            filter: true,
            filterValueGetter: (params)=> params.data.complexField.filterValue,
            valueGetter: (params)=> params.data.complexField.value
        },
    ], []);

    return (
        <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine">
                <AgGridReact<ComplexDataType>
                    rowData={rowData}
                    columnDefs={columnDefs}

                />
            </div>
        </div>
    );
};

const root = createRoot(document.getElementById('root')!);
root.render(
    <StrictMode>
        <GridExample />
    </StrictMode>
);
