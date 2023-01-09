import React, { Component }  from 'react'; 
import { useState ,useEffect} from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
import { Link, Route } from 'react-router-dom';

// const HomePage = ({props}) => (
    // <div className="homepage">
        
    //     <div className="directory-menu">
    //     <Directory />
    //         {
    //             console.log(props.pages)
    //             // props.pages.map((page) => {
    //             //     <h1 key={page.ID}>{page.post_title}</h1>
    //             // })
    //         }
    //         <div className="menu-item">
    //             <div className="content">
    //                 <h1 className="title">Hat</h1>
    //                 <span className="subtitle">Hat subtitle</span>
    //             </div>
    //         </div>
    //         <div className="menu-item">
    //             <div className="content">
    //                 <h1 className="title">Hat2</h1>
    //                 <span className="subtitle">Hat subtitle</span>
    //             </div>
    //         </div>
    //         <div className="menu-item">
    //             <div className="content">
    //                 <h1 className="title">Hat3</h1>
    //                 <span className="subtitle">Hat subtitle</span>
    //             </div>
    //         </div>
    //         <div className="menu-item">
    //             <div className="content">
    //                 <h1 className="title">Hat4</h1>
    //                 <span className="subtitle">Hat subtitle</span>
    //             </div>
    //         </div>
    //         <div className="menu-item">
    //             <div className="content">
    //                 <h1 className="title">Hat5</h1>
    //                 <span className="subtitle">Hat subtitle</span>
    //             </div>
    //         </div>
    //     </div>
    // </div>
// );
// class HomePage extends Component {

//     constructor(){
//       super();
//       this.state = {
//           pages:[],
//       };
//     } 
  
//     componentDidMount() {
//       fetch('http://192.168.11.61/woocommerce/wp-json/wp-get-pages/v1/page-list/')
//       .then((res) =>  res.json())
//       .then((res) => console.log(res))
//       .then((data) =>
//           this.setState(() => {
//               return {pages: data};
//           }
//       ));
//     }

//     render(){
//         return(
//             <div className="homepage">
//                 <div className="directory-menu">
//                     {
//                         this.pages.map((page) =>{
//                             console.log(page);
//                         })
//                     }
//                 </div>
//             </div>
//         )
//     }
// }

// class HomePage extends Component {
//     constructor() {
//         super();
//         this.state = {
//             pages: [],
//         };
//     }

//     componentDidMount() {
//         fetch('http://192.168.11.61/woocommerce/wp-json/wp-get-pages/v1/page-list/')
//                 .then((response) => response.json())
//                 .then((data) =>
//                     this.setState(() => {
//                         return {pages: data };
//                     }
//                     ));
//     }

//     render() {
//         const {pages} = this.state;
//         return (
//             <div className="homepage">
//                 <div className="directory-menu">
//                 {pages.map((page_list) => {
//                         return(
//                             <Directory pages={page_list}/>
//                     )})}
//                 </div>
//             </div>
//                 );
//     }
// }


const HomePage = () => {
    const [pages,setPages] = useState([]);

    useEffect( () => {
        fetch('http://192.168.11.61/woocommerce/wp-json/wp-get-pages/v1/page-list/')
                        .then((response) => response.json())
                        .then((data) =>(setPages(data)));
    },[]);

    return (
        <div className="homepage">
            <Directory page_list={pages}/>
        </div>
    ); 
}

export default HomePage;