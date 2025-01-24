import { Component } from "react";

export class SportsItem extends Component{
    constructor(props){
        super(props);
    }
    state = {};
    render(){
        return(
            <>
                <li className="list-group-item">
                    {this.props.item.sportId}:{this.props.item.sportName}{" "}
                    {this.props.item.sportEmoji}
                    <button type="button" className="btn btn-outline-danger mx-3" onClick={()=>this.props.removeFn(this.props.item.sportId)}>
                        Remove
                    </button>
                </li>
            </>
        )
    }
}
