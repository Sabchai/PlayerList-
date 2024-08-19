import Players from "./players";
import Player from "./Player";

const PlayerList = () => {

 return(
    <div style={{display:"flex", justifyContent:"space-around", margin: 30}}>
        
        {Players.map((el, i) => (

        <Player   {...el}    />  )
    )
        }
    </div>
 )
}

export default PlayerList