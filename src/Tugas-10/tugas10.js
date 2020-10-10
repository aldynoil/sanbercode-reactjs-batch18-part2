import React from 'react';

class Name extends React.Component{
    render(){
    return <p>{this.props.nama}</p>
    }
}

class Price extends React.Component{
    render(){
    return <p>{this.props.harga}</p>
    }
}

class Weight extends React.Component{
    render(){
    return <p>{this.props.berat}</p>
    }
}

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
] 



class TableDataBuah extends React.Component{
    render(){
        return(    
    <>
    <div style={{fontFamily:"Times New Roman", padding:"20px"}}>
        <div>
            <h1 style={{ textAlign:"center"}}>Tabel Harga Buah</h1>
        </div>

        <div>
            <table style={{margin:"0px auto", border:"1px solid black"}}>
                <thead style={{backgroundColor:"gray"}}>
                    <tr style={{fontWeight:"bold", textAlign:"center"}}>
                        <td style={{padding:"5px 0"}}>Nama</td>
                        <td>Harga</td>
                        <td>Berat</td>
                    </tr>                
                </thead>

                <tbody style={{backgroundColor:"tomato"}}>
                {dataHargaBuah.map(data=>{
                return(
                    <tr>
                        <td style={{padding:"0 120px 0 0"}}><Name nama={data.nama}/></td>
                        <td style={{padding:"0 120px 0 0"}}><Price harga={data.harga}/></td>
                        <td style={{padding:"0 120px 0 0"}}><Weight berat={data.berat / 1000 + "kg"}/></td>
                    </tr>
        )
            })}
            </tbody>
        </table>
            </div>                
        
            </div>
            



    </>
        )
    }
}

export default TableDataBuah