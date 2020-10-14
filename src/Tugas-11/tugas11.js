import React, {Component} from 'react'

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: 10000,
      showTime: true,
      date: new Date()
    }
  }

//   Date
  currentTime(){
    this.setState({
        date: new Date(),
    })
}

componentDidMount(){
    setInterval(() => this.currentTime(), 1000)
    this.myInterval = setInterval(() =>{
        this.setState(({time}) => ({
            time: time -1
        }))
    }, 1000)
}


  hideTime(){
      this.setState({showTime: false})
  }

  componentWillUpdate(){
    if(this.state.time === 0){
        this.state.showTime=false
        this.hideTime()

    }
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

//   tick() {
//     this.setState({
//       time: this.state.time + 1 
//     });
//   }


  render(){
    return(
      <>
        <h1 style={{textAlign: "center"}}>
        Sekarang Jam: {this.state.date.toLocaleTimeString("id-ID",{hour12:true})} / Hitung Mundur: {this.state.time}
        </h1>
      </>
    )
  }
}

export default Timer