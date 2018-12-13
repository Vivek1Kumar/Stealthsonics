// import React, { Component } from 'react';
// import $ from 'jquery';
// // import Konva from 'konva';
// // import { Rect } from 'react-konva';
// const imagesPath = {
//   minus: "https://images.vexels.com/media/users/3/131484/isolated/preview/a432fa4062ed3d68771db7c1d65ee885-minus-inside-circle-icon-by-vexels.png",
//   plus: "https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/plus-big-512.png",
//   mul: "../../../assets/image/AboutB.jpg"
// }

// // export default class ColoredRect extends Component {
// //   state = {
// //     color: ''
// //   };
// //   handleClick = () => {
// //     this.setState({
// //       color: "../../assets/EarImages/ls01.png"
// //     });
// //   };
// //   render() {
// //     return (  
// //       <div>
// //         <div className="btn btn-success" onClick = {this.handleClick}>valueSet</div>
// //         <div ><img style={{maxWidth: '50px'}} src={this.state.color}/></div>
// //       </div>
// //     );
// //   }
// // }
// export default class ColoredRect extends React.Component {
//  constructor(porps){
//   super(porps);
//   this.state={
//     users:[]
//   }
//    this.onClickDemo = this.onClickDemo.bind(this);
//  }
//   // state = {
//   //   open: true
//   // }
//   // toggleImage = () => {
//   //   this.setState(state => ({ open: !state.open }))
//   // }

//   onClickDemo() {
//        this.setState({name:this.state.users})
//     }
//   //getImageName = () => this.state.open ? 'plus' : 'mul'
//   componentDidMount(){
//     $.ajax({
//       url:"https://api.punkapi.com/v2/beers",
//       success:(data) =>{
//         this.setState({
//           users:data
//         })
//   }
// })
//   }
//   render() {
//     const { users } = this.state;
//     return (
//       <div>
      
//       </div>
//     );
//   }
// }

