export function ActorItems(props){
    let {item, removeFn}=props;
    console.log(props);

    return(
    <>
        
                <tr key={props.item.actorId}>
                        <td>{item.actorId}</td>
                        <td>{item.actorName}</td>
                        <td>{item.actorAge}</td>
                        <td>{item.actorGender}</td>
                        <td>
                            <img src={item.actorImageUrl} style={{width:'75px'}}/>
                        </td>
                        <td><button type="button" className="btn btn-outline-danger" onClick={()=>removeFn(item.fruitId)}>Remove</button></td>
                </tr>
                
        </>
    );
}