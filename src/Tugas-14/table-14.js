import React, { useContext } from "react";
import { subContext } from "./context-14";
import axios from "axios";

const subTable = () => {
    const [daftarBuah,setDaftarBuah,input,setInput,setResponse,getData,] = useContext(subContext);
}

const handleEdit = (val) => {
    const index = dataBuah.indexOf(val);
    let object = {...objectData,id: val.id,name: val.name,price: val.price,weight: val.weight,};
    setObjectData(object);
    setInput(index);
};

const handleDelete = (val) => {
    axios
    .delete(`http://backendexample.sanbercloud.com/api/fruits/${val.id}`)
    .then((res) => {
        if (res.status === 200) {
    getData();
        }
    })
    .catch((error) => {
    setResponse(error.message);
    });
};

return(
    <>
    <h1>Daftar Harga Buah</h1>
    <table>
        <thead>
        <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
            <th>Aksi</th>
        </tr>
        </thead>

        <tbody>
        {
        daftarBuah !== null && daftarBuah.map((item, index)=>{
        return(                    
            <tr key={index}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.weight/1000} Kg</td>
                <td>
                <button onClick={handleEdit} value={item.id}>Edit</button>
                &nbsp;
                <button onClick={handleDelete} value={item.id}>Delete</button>
                </td>
            </tr>
            )
        })}
        </tbody>
    </table>
    </>
)