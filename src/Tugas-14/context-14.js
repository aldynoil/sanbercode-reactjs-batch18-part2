import React, {createContext,useState, useEffect } from "react";
import axios from "axios";

export const subContext = createContext;
export  const subProvider = (props) => {

    const [daftarBuah, setDaftarBuah] =  useState(null)
    const [input, setInput]  =  useState({name: "", price: "", weight: 0, id: null})

const [dataHargaBuah, setDataHargaBuah] = useState([]);
const [response, setResponse] = useState("");
}
const getData = () => {
    axios
    .get(`http://backendexample.sanbercloud.com/api/fruits`)
    .then((res) => {
        if (res.status === 200) {
        setDataHargaBuah(res.data);
        }
    })
    .catch((error) => {
        setResponse(error.message);
    });
};

useEffect(() => {
    getData();
}, []);

return (
    <subContext.Provider value={[daftarBuah,setDaftarBuah,input,setInput,objectData,setObjectData,response,setResponse,getData,]}>
    {props.children}
    </subContext.Provider>
);
