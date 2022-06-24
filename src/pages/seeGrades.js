import * as React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Navbar } from "../components/stateless/navbar";

export const GradesPage = () => {

    return (
        <>
            <Navbar></Navbar>
            <h1>Pagina de Notas</h1>
            <DataGrid
                rows={5}
                columns={5}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </>
    )
}