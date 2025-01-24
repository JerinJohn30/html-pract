import { Component } from "react";
import { SportsItem } from "./SportsItem";

export class SportsList  extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        allSports:[
            {
                sportId:101,
                sportName:"Cricket",
                sportEmoji:"🏏"
            },
            {
                sportId:102,
                sportName:"Football",
                sportEmoji:"⚽"
            },
            {
                sportId:103,
                sportName:"Hockey",
                sportEmoji:"🏑"
            }
        ]
    }
    mappedAllSports=this.state.allSports.map((eachSports)=>{
        <SportsItem
            key={eachSports.sportId}
            item={eachSports}
            removefn={(sportId)=>this.deleteSports(sportId)}
        ></SportsItem>
    });
    deleteSports(sId){
        this.state.allSports=this.state.allSports.filter((eachSports)=>eachSports.sportId!=sId);
    }
    render() { 
        return (
            <>
                <div className="conatiner m-5">
                    <h3>List Of Sports</h3>
                    <ul className="list-group">
                        {this.mappedAllSports}
                    </ul>
                </div>
            </>
        );
    }
}
 