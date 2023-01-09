// import {React,Component} from 'react';
// import { useState,useEffect } from 'react';
import MenuItem from '../menu-item/menu-item.component';

// const Directory = (props) => (
//     render(){
//     return(
//     <div className="menu-item">
//         <div className="content">
//             <h1 className="title">Hat</h1>
//             <span className="subtitle">Hat subtitle</span>
//         </div>
//     </div>
//     )
//     }
// );

// class Directory extends Component{
//     render(){
//         console.log(this.props.pages);
//         const {post_title,ID} = this.props.pages;
//         return(
//             <div className="menu-item">
//             <div className="content">
//                 <h1 className="title">{post_title}</h1>
//                 <span className="subtitle">Hat subtitle</span>
//             </div>
//         </div>
//         )
//     }
// }

const Directory = (props) => {
    const page_list = props.page_list; 
    return (
        <div className="directory-menu" key={page_list.length}>
            {page_list.map((page_list,i) => {
                return(
                    <MenuItem key={i} page_list={page_list}/>
            )})}
        </div>
    )
}
export default Directory;