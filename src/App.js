// import React from 'react';
// // import logo from './logo.svg';
// import './App.css';
// // import './Tugas-9/tugas9';
// // import FormDataBuah from './Tugas-9/tugas9';
// // import TableDataBuah from './Tugas-10/tugas10';
// // import Timer from './Tugas-11/tugas11';
// // import Lists from './Tugas-12/tugas12'
// // import DaftarBuah from './Tugas-13/tugas13'
// // import Tugas14 from './Tugas-14/tugas14'
// import { BrowserRouter as Router } from "react-router-dom";
// import Routes from './Tugas-15/./tugas15'


// function App() {
//   return (
//     <div>
// {/*       
//       <TableDataBuah/>
//       <FormDataBuah/>
//       <Timer/>
//       <Lists/> */}
// {/* <Tugas14/>
// <hr></hr>
// <DaftarBuah/> */}

//       <Router>
//         <Routes/>
//       </Router>  
//     </div>

//   );
// }

// export default App;

import React from "react";
import Tugas15 from "./Tugas-15/tugas15";

function App() {
  return (
    <div className="App">
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* <Tugas9 />
        <Tugas10 />
        <Tugas11 start={110} />
        <Tugas12 />
        <Tugas13 />
        <Tugas14 /> */}
        <Tugas15 />
      </div>
    </div>
  );
}

export default App;