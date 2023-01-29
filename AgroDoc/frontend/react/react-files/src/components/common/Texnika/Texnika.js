import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Texnik from "./Texnika.json";

export default function Texnika() {
   return (
      <TableContainer style={{marginTop:"90px"}}  component={Paper}>
         <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
               <TableRow style={{ background: "#4778CC", color: "white" }}>
                  <TableCell style={{ color: "white" }}>ID</TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                     VILOYATLAR
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                     HAYDOV TRAKTORLAR SONI
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                     MINERAL OʼGʼIT SEPISH MASHINALARI SONI
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                     CHOPIQ TRAKTORLAR SONI
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                     TRANSPORT TRAKTORI SONI
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                     MINI TRAKTORLAR SONI
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                     GʼALLA KOMBAYN SONI
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                     OZUQA OʼRISH KOMBAYNLARI
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                     PAXTA TERISH MASHINASI
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                     TRAKTOR TIRKAMASI
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                     KULTIVATORLAR
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                     DON EKISH SEYALKASI
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                     CHIGIT EKISH SEYALKASI
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                     YER TEKISLAGICH
                  </TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {Texnik.map((row) => (
                  <TableRow key={row.ID} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                     <TableCell component="th" scope="row">
                        {row.ID}
                     </TableCell>
                     <TableCell align="left">{row.viloyatlar}</TableCell>
                     <TableCell align="left">{row["Haydov traktorlar soni"]}</TableCell>
                     <TableCell align="left">
                        {row["Mineral oʼgʼit sepish mashinalari soni"]}
                     </TableCell>
                     <TableCell align="left">{row["Chopiq traktorlar soni"]}</TableCell>
                     <TableCell align="left">{row["Transport traktori soni  "]}</TableCell>
                     <TableCell align="left">{row["Mini traktorlar soni"]}</TableCell>
                     <TableCell align="left">{row["Gʼalla kombayn soni"]}</TableCell>
                     <TableCell align="left">{row["Ozuqa oʼrish kombaynlari "]}</TableCell>
                     <TableCell align="left">{row["Paxta terish mashinasi"]}</TableCell>
                     <TableCell align="left">{row["Traktor tirkamasi"]}</TableCell>
                     <TableCell align="left">{row["Kultivatorlar "]}</TableCell>
                     <TableCell align="left">{row["Don ekish seyalkasi "]}</TableCell>
                     <TableCell align="left">{row["Chigit ekish seyalkasi"]}</TableCell>
                     <TableCell align="left">{row["Yer tekislagich"]}</TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
}
