/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component} from 'react'
import {Players} from "../shared/ListOfPlayers"
export default class player extends Component {
    render() {
        return (
            <div className='container'>
                {Players.map((player) => (
                    <div className='column'>
                        <div className='card'>
                            <img src={player.img} />
                            <h3>{player.name}</h3>
                            <p className='title'>{player.club}</p>
                            <p className='btn'><button>Detail</button></p>
                        </div>

                    </div>
                ))}
            </div>
        )
    }
}


          // <div className="container">
          //     <div className="column">
          //         <div className="card">
          //             <img src='assets/images/cr.jpg'/>
          //             <h3>Cristiano Ronaldo</h3>
          //             <p className="title">Manchester United</p>
          //             <p className="btn"><button>Detail</button></p>
          //         </div>
          //     </div>
          //     <div className="column">
          //         <div className="card">
          //         <img src='assets/images/kante.jpg'/>
          //             <h3>Kante</h3>
          //             <p className="title">Chelsea</p>
          //             <p className="btn"><button>Detail</button></p>
          //         </div>
          //     </div>
          //     <div className="column">
          //         <div className="card">
          //         <img src='assets/images/messi.jpg'/>
          //             <h3>Messi</h3>
          //             <p className="title">PSG</p>
          //             <p className="btn"><button>Detail</button></p>
          //         </div>
          //     </div>
          //     <div className="column">
          //         <div className="card">
          //         <img src='assets/images/neymar.jpg'/>
          //             <h3>Neymar</h3>
          //             <p className="title">PSG</p>
          //             <p className="btn"><button>Detail</button></p>
          //         </div>
          //     </div>
          //     <div className="column">
          //         <div className="card">
          //         <img src='assets/images/kane.jpg'/>
          //             <h3>Kane</h3>
          //             <p className="title">Totteham</p>
          //             <p className="btn"><button>Detail</button></p>
          //         </div>
          //     </div>
          //     <div className="column">
          //         <div className="card">
          //         <img src='assets/images/haaland.jpg'/>
          //             <h3>Haaland</h3>
          //             <p className="title">Manchester City</p>
          //             <p className="btn"><button>Detail</button></p>
          //         </div>
          //     </div>
          // </div>
//         ))}
//       </div>
//     );
//   }
// }

// import React from 'react';
// import { Players } from '../shared/ListOfPlayers';
// export default class PlayersList extends React.Component {
//   render() {
//     return (
//       <div className='container'>
//         {Players.map((player) => (
//           <div className='column'>
//             <div className='card'>
//               <img src={player.img} alt={player.name} />
//               <h3>{player.name}</h3>
//               <p className='title'>{player.club}</p>
//               <p className='btn'>
//                 <button>Detail</button>
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }
