import { DeleteForeverOutlined, DeleteOutlined, EditOutlined, VisibilityOutlined } from '@mui/icons-material';
import { Box, Button, IconButton, Tooltip } from '@mui/material';
import { MaterialReactTable } from 'material-react-table'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { MRT_Localization_ES } from 'material-react-table/locales/es';
import { Link } from 'react-router-dom';

const Table = (
    {data,
    fields,
    numberOfRows,
    enableTopToolBar,
    enableBottomToolBar,
    enablePagination,
    enableRowSelection,
    enableColumnFilters,
    enableEditing,
    enableColumnDragging,
    showPreview,
    routeLink,}
) => {
    const columns = useMemo(() => fields, []);
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
      setTableData(data)
    },[data])
    const handleDeleteRow = useCallback(
        (row) => {
          if (!confirm("Are you sure you want to delete")) {
            return;
          }
          data.splice(row.index, 1);
          setTableData([...tableData]);
        },
        [tableData]
      );
    
  return (
    <MaterialReactTable
      columns={columns}
      data={tableData.slice(0, numberOfRows)}
      getRowId={(row) => row.id}
      displayColumnDefOptions={{
        'mrt-row-actions': {
          size: 150, //set custom width
          muiTableHeadCellProps: {
            align: 'center', //change head cell props
          },
        },
      }}
      enableEditing={enableEditing}
      enableColumnDragging={enableColumnDragging}
      enableColumnOrdering
      enableRowSelection={enableRowSelection}
      enableColumnFilters={enableColumnFilters}
      enablePagination={enablePagination}
      localization={MRT_Localization_ES}
      enableBottomToolbar={enableBottomToolBar}
      enableTopToolbar={enableTopToolBar}
      enableRowActions
      renderRowActions={({ row }) => (
        <Box sx={{ display: "flex", justifyContent:'center', gap: 0.5}}>
          <Tooltip arrow placement="right" title="Eliminar">
            <IconButton color="error" onClick={() => handleDeleteRow(row)}>
              <DeleteOutlined/>
            </IconButton>
          </Tooltip>
          <Tooltip arrow placement='right' title='Actualizar'>
            <IconButton sx={{color:'status.orange'}}>
              <EditOutlined/>
            </IconButton>
          </Tooltip>
          {showPreview && routeLink && (
            <Tooltip arrow placement="right" title="View">
              <Link to={`/dashboard/${routeLink}/${row.id}`}>
                <IconButton sx={{color:'status.blue'}}>
                  <VisibilityOutlined/>
                </IconButton>
              </Link>
            </Tooltip>
          )}
        </Box>
      )}
      renderTopToolbarCustomActions={({ table }) => (
        <Button
          disableElevation
          color="error"
          // disabled={!table.getIsSomeRowsSelected()}
          variant="contained"
          // onClick={handleDelete}
        >
          Delete Selected
        </Button>
      )}
      muiTableBodyRowProps={{ hover: false }}
      muiTablePaperProps={{
        sx: {
          padding: "20px",
          borderRadius: "15px",
          borderStyle: "solid",  
          borderWidth: "1px",
          borderColor: "divider",
          backgroundImage:'none',
          boxShadow: "none !important",
        },
      }}
      muiTableContainerProps={{
        sx: { borderRadius: "15px"},
      }}
      muiTableHeadCellProps={{
        sx: {
          fontSize: "14px",
          fontWeight: "bold",
        },
      }}
      muiTableHeadProps={{
        sx: {
          "& tr th": {
            borderWidth: "1px",
            borderColor: "divider",
            borderStyle: "solid",
            bgcolor:'background.paper'
          },
        },
      }}
      muiTableBodyProps={{
        sx: {
          "& tr td": {
            borderWidth: "1px",
            borderColor: "divider",
            borderStyle: "solid",
            color:'text.secondary',
            bgcolor:'background.paper'
          },
        },
      }}

    />
  )
}

export default Table
