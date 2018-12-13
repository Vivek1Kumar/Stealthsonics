import React,{ Component } from "react";

 
class TestProps extends Component{
	constructor(props){
		super(props);
		
		this.filterColor = this.filterColor.bind(this)
	}

	filterColor(){
		alert("nfgkd")
	}
	render(){
		return (
			<div>
				<div >
					<div className="btn btn-info" onClick = {this.filterColor}>left</div>
				</div>
			</div>
		)
	}
}
export default TestProps