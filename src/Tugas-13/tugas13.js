import React, { useState, useEffect } from "react";
import axios from "axios";

const HooksWithAxios = () => {

    const [dataBuah, setDataBuah] = useState(null);
    const [name, setName] = useState({ name: "", id: null });
    const [price, setPrice] = useState({ price: "", id: null });
    const [weight, setWeight] = useState({ weight: "", id: null });

useEffect(() => {
    axios
    .get("http://backendexample.sanbercloud.com/api/fruits")
    .then((res) => {
        let dataBuah = res.data;
        setDataBuah(
        dataBuah.map((el) => {
            return {
            id: el.id,
            name: el.name,
            price: el.price,
            weight: el.weight,
            };
        })
        );
    });
}, [dataBuah]);


const inputBuah = (e) => {
    let value = e.target.value;
    let inputName = e.target.name;
    setName({ ...name, [inputName]: value });
    setPrice({ ...price, [inputName]: value });
    setWeight({ ...weight, [inputName]: value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://backendexample.sanbercloud.com/api/fruits";
    const editUrl =
        "http://backendexample.sanbercloud.com/api/fruits/{ID_FRUIT}";
    const buahNama = name.name;
    const buahHarga = price.price;
    const buahBerat = weight.weight;
    const buahBaru = {
        name: buahNama,
        price: buahHarga,
        weight: buahBerat,
    };
    if (buahNama.id === null) {
        axios.post(url, buahBaru);
    } else {
        axios.put(editUrl, buahBaru);
    }
};

const handleEdit = (e) => {
    let idBuah = parseInt(e.target.value);
    const buahNama = name.name;
    const buahHarga = price.price;
    const buahBerat = weight.weight;
    // const buahBaru = dataBuah.find((item) => item.id === idBuah);
    setName({
        id: idBuah,
        name: buahNama,
        price: buahHarga,
        weight: buahBerat,
    });
};

const handleDelete = (event) => {
    let idBuah = parseInt(event.target.value);
    axios
        .delete("http://backendexample.sanbercloud.com/api/fruits/{ID_FRUIT}")
        .then((res) => {
        let buahDelete = dataBuah.filter((item) => item.id !== idBuah);
        setDataBuah(buahDelete);
    });
};

// Table
return (
    <div clasName="container-hooks">
        <table className="table-hooks">
            <thead>
                <tr>
                    <td>No</td>
                    <td>Nama</td>
                    <td>Harga</td>
                    <td>Berat</td>
                    <td>Aksi</td>
                </tr>
            </thead>
            <tbody>
            {dataBuah !== null &&
            dataBuah.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.weight}</td>
                <td>
                    <button value={item.id} onClick={handleEdit}>
                    Edit
                    </button>
                    <button value={item.id} onClick={handleDelete}>
                    Delete
                    </button>
                </td>
                </tr>
            );
            })}
            </tbody>
        </table>
    
        {/* Form */}
        <h1 style={{textAlign:"center"}}>Form Daftar Harga Buah</h1>
            <form onSubmit={handleSubmit} style={{border: "1px solid #aaa", padding: "20px", width: "50%", margin: "0 auto", display: "block"}} >
                <label style={{float: "left"}}>
                Nama:
                </label>
                <input style={{float: "right"}} type="text" required name="name" value={name.name} onChange={inputBuah}/>
            <br/>
            <br/>
                <label style={{float: "left"}}>
                Harga:
                </label>
                <input style={{float: "right"}} type="text" required name="price" value={price.price} onChange={inputBuah}/>
            <br/>
            <br/>
                <label style={{float: "left"}}>
                Berat (dalam gram):
                </label>
                <input style={{float: "right"}} type="number" required name="weight" value={weight.weight} onChange={inputBuah}/>
            <br/>
            <br/>
                <div style={{width: "100%", paddingBottom: "20px"}}>
                <button style={{ float: "right"}}>submit</button>
                </div>
            </form>
    </div>
);
};

export default HooksWithAxios;