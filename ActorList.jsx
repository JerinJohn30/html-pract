import { useState } from "react";
import { ActorItems } from "./ActorItems";

export function ActorList(){
    let [allActors,setAllActors]=useState(
    [
        {
            actorId:1001,
            actorName:"Tom Holland",
            actorAge:36,
            actorGender:"Male",
            actorImageUrl:"https://images.hellomagazine.com/horizon/original_aspect_ratio/cc8138b7ae99-tom-holland-crowded-room-premiere.jpg"
        },
        {
            actorId:1002,
            actorName:"Robert Downey Jr.",
            actorAge:63,
            actorGender:"Male",
            actorImageUrl:"https://th.bing.com/th/id/R.a974526b0d8e713d6d10c6dbc35a5c91?rik=PxQRbin%2fOhnx2Q&riu=http%3a%2f%2fbr.web.img2.acsta.net%2fpictures%2f18%2f06%2f29%2f00%2f35%2f0101925.jpg&ehk=CSN0w13UxlvwbfQVwIRgLcU1NDeetirwL0F0KpsbOI0%3d&risl=&pid=ImgRaw&r=0"
        },
        {
            actorId:1003,
            actorName:"Mrunal Thakur",
            actorAge:27,
            actorGender:"Female",
            actorImageUrl:"https://th.bing.com/th/id/OIP.JG2gZB4JeU9o5uyo2MuQFwHaLG?rs=1&pid=ImgDetMain"
        }
    ]);
    let mappedAllActors=allActors.map((eachActor)=>(
        <ActorItems key={eachActor.actorId} 
        item={eachActor}
        removeFn={()=>deleteActor(eachActor.actorId)}></ActorItems>
    ));
    function deleteActor(aId){
        setAllActors(allActors.filter((eachActor)=>eachActor.actorId!=aId));
    }
    return(
        <>
            <div className="container m-4">
                <h2>Actor List</h2>
                <table className="table table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Image</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className="light">
                        {mappedAllActors}
                    </tbody>
                </table>
            </div>
        </>
        );
}