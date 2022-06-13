import React from "react"
class Assad extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
        
    }
    componentDidMount(){
        setInterval(()=> this.setState({count:this.state.count+1}), 1000);
        
    }

    render(){
        return(
            <div>
                <h2>{this.state.count}</h2>
                <h2>{this.props.Person.fullName}</h2>
                <h2>{this.props.Person.bio}</h2>
                <img src={this.props.Person.imgSrc}/>
                <h2>{this.props.Person.profession}</h2>


            </div>
        )
    }
}

export default Assad