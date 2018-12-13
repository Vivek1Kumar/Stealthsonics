// import React,{ Component } from "react";

// class ReadModule extends Component {
//   selectedText() {
//         var txt = "";
//         if (window.getSelection) {
//                 txt = window.getSelection();
//         }
//         else if (document.getSelection) {
//             txt = document.getSelection();
//         } else if (document.selection) {
//             txt = document.selection.createRange().text;
//         }

//         alert("Selected text is " + txt);
//   }

//   render() {
//     return (
//           <div id="read-module" className="row">
//             <span>
//               <input type="submit" onMouseUp={this.selectedText}/>
//                 {this.props.reading}
//               </span>
//           </div>
//     );
//   }
// }

// export default ReadModule;