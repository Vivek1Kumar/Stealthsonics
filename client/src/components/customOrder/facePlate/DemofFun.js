// import React, { Componet } from 'react';

// // class DemoFun extends Componet {
// // 	render(){
// // 		return(
// // 			<div>
// // 				<h1>jsfdsh</h1>
// // 			</div>
// // 		)
// // 	}
// // }





// // class DemoFun extends React.Component {
// // 	constructor(){
// // 		super()
// // 		this.state={
// // 			color: "green"
// // 		}
// // 	}
// //    render() {
// //     return (
// //       <div     
// //       >{this.state.color}</div>
// //     );
// //   }
// // }
// // export default DemoFun
// const STYLE = {
//     infoColor: {
//         color: 'green'
//     },
//     warningColor: {
//         color: 'orange'
//     },
//     errorColor: {
//         color: 'red'
//     }
// };

// /**
//  * Component
//  */
// class Welcome extends React.Component {

//     	constructor(props){
// 			super(props)
// 			this.state={
// 				name: 'blue'
// 			}
// 		}
// 		inrCount = () =>{
// 			this.setState({
// 				count:this.state.count
// 			})
// 		}
//      componentDidMount() {
//      	console.log("willMount");
//     }
//     render() {
//     	const style={
//     		backgroundColor:this.state.name,
//     		borderRadius:"50%",
//     		marginLeft:"5%",
//     		width:"40px",
//     		height:"200px",
//     		color:"green"
//     	}
//         return (
//             <div>
//             	<span style={style}>dsf</span>
//             	<input             		
//             		type="text"
//                     onClick={this.inrCount}/>
//                 <button onClick={this.inrCount}>count</button>
//             </div>
//         )
//     }
// }
// export default Welcome