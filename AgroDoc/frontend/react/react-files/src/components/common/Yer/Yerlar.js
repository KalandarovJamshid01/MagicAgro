import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Yer from "./Yerlar.json";

export default function YerTable() {
   console.log(Yer);

   return (
      <TableContainer style={{ marginTop: "90px" }} component={Paper}>
         <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
               <TableRow style={{ background: "#4778CC", color: "white" }}>
                  <TableCell style={{ color: "white" }}>ID</TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                     VILOYATLAR
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                     JAMI SUGʼORILADIGAN MAYDONLAR
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                     MAYDONLAR SHOʼRLANMAGAN MAYDON
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                     JAMI SHOʼRLANGANMAYDON
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                     KAM SHOʼRLANGAN
                  </TableCell>{" "}
                  <TableCell style={{ color: "white" }} align="left">
                     OʼRTA SHOʼRLANGAN
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                     KUCHLI SHOʼRLANGAN
                  </TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {Yer.map((row) => (
                  <TableRow key={row.ID} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                     <TableCell component="th" scope="row">
                        {row.ID}
                     </TableCell>
                     <TableCell align="left">{row.viloyatlar}</TableCell>
                     <TableCell align="left">{row.Jamisugoriladiganmaydonlarminggektar}</TableCell>
                     <TableCell align="left">{row.Shorlanmaganmaydonminggektar}</TableCell>
                     <TableCell align="left">{row.Jamishorlanganmaydonminggektar}</TableCell>
                     <TableCell align="left">{row.Kamshorlanganminggektar}</TableCell>
                     <TableCell align="left">{row.Ortashorlanganminggektar}</TableCell>
                     <TableCell align="left">{row.Kuchlishorlanganminggektar}</TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
}
