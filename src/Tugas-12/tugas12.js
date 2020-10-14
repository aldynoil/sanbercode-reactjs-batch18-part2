import React, {Component} from "react"


class Lists extends Component{

  constructor(props){
    super(props)
    this.state ={
     dataHargaBuah : [ 
        {nama: "Semangka", harga: 10000, berat: 1000},
        {nama: "Anggur", harga: 40000, berat: 500},
        {nama: "Strawberry", harga: 30000, berat: 400},
        {nama: "Jeruk", harga: 30000, berat: 1000},
        {nama: "Mangga", harga: 30000, berat: 500} ],
     inputName : "",
     inputPrice : "",
     inputWeight : ""

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

//   Method with normal function
  handleSubmit(event){
    event.preventDefault()
    console.log(this.state.inputName)
    this.setState({
    dataHargaBuah: [...this.state.dataHargaBuah, [this.state.inputName, this.state.inputPrice, this.state.inputWeight]],
      inputName: "",
      inputPrice: "",
      inputWeight:""
    })
  }

//   Method with arrow function 
handleChange = (event) =>{
    // let index = event.target.value;
    let inputName = event.target.value;
    let inputPrice = event.target.value;
    let inputWeight = event.target.value;
    this.setState({
        inputName: event.target.value,
        inputPrice: event.target.value,
        inputWeight: event.target.value
    });
  }

handDelete = (event) => {
let index = event.target.value;
this.state.dataHargaBuah.splice(index, 1)
this.setState({dataHargaBuah: this.state.dataHargaBuah})
}



//   Table
  render(){
    return(
      <>
      <div style={{textAlign:"center", margin:"auto 0"}}>
      <h1>Tabel Harga Buah</h1>
        <table style={{margin:"0px auto", border:"1px solid black"}}>
          <thead style={{textAlign:'center', backgroundColor:'grey'}}>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
              <th colSpan="2">Action</th>
              
            </tr>
          </thead>
          <tbody>
              {
                this.state.dataHargaBuah.map((val, index)=>{
                  return(                    
                    <tr>
                      <td>{index+1}</td>
                      <td>{val.name}</td>
                      <td>{val.price}</td>
                      <td>{val.weigth}</td>
                      <td><button onClick={this.handleEdit} value={index}>Edit</button></td>
                      <td><button onClick={this.handleDelete} value={index}>Delete</button></td>
                    </tr>
                  )
                })
              }
          </tbody>
        </table>



        {/* Form */}
        <h1>Form Data Buah</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Masukkan nama buah:
          </label>          
          <input style={{marginLeft:"10px"}} type="text" required value={this.state.inputName} onChange={this.handleChange}/>
<br/>
<br/>
          <label>
            Masukkan harga buah:
          </label>          
          <input style={{marginLeft:"10px"}} type="text" required value={this.state.inputPrice} onChange={this.handleChange}/>
<br/>
<br/>
          <label>
            Masukkan berat buah:
          </label>          
          <input style={{marginLeft:"10px"}} type="text" required value={this.state.inputWeight} onChange={this.handleChange}/>
<br/>
<br/>
          <button>submit</button>
        </form>
      </div>
        
      </>
    )
  }
}

export default Lists