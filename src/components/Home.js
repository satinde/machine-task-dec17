import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { dataAction } from '../actions/dataAction'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Home = () =>{
    const dispatch = useDispatch()
    const {data} = useSelector((state=>state.data))

    useEffect(()=>{
        dispatch(dataAction())
    },[])
    return(
        <>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Avatar</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>FirstName</TableCell>
            <TableCell>LastName</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
        {data?.map((res)=>(
            <TableRow
              key={res.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
               {res.id}
              </TableCell>
              <TableCell>
              <img src={res.avatar}  alt="image" style={{width:"50px",height:"50px"}} />
              </TableCell>
              <TableCell>{res.email}</TableCell>
              <TableCell>{res.first_name}</TableCell>
              <TableCell>{res.last_name}</TableCell>
            </TableRow>
         
         ))}
        </TableBody>
      </Table>
    </TableContainer>
        </>
    )
}

export default Home