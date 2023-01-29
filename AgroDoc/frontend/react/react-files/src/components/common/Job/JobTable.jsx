import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Job from "./job.json";

export default function JobTable() {
   console.log(Job);

   return (
      <TableContainer style={{marginTop:"90px"}} component={Paper}>
         <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
               <TableRow style={{ background: "#4778CC", color: "white" }}>
                  <TableCell style={{ color: "white" }}>ID</TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                     O‘ZBEKISTON RESPUBLIKASI QISHLOQ XO‘JALIGI VAZIRLIGI
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                     VAKANT LAVOZIMI
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                     SHTAT SONI
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                     MANZILI
                  </TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {Job.map((row) => (
                  <TableRow key={row.ID} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                     <TableCell component="th" scope="row">
                        {row.ID}
                     </TableCell>
                     <TableCell align="left">
                        {row.OzbekistonRespublikasiQishloqXojaligiVazirligi}
                     </TableCell>
                     <TableCell align="left">{row.Vakantlavizimi}</TableCell>
                     <TableCell align="left">{row.Shtatsoni}</TableCell>
                     <TableCell align="left">{row.Manzili}</TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
}
