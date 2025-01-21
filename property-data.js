let allProperties=[
    {
        propertyId:801,
        propertyName:"Trinity Flats",
        propertyLocation:"Delhi",
        propertyPrice:10000000,
        propertyImageUrl:"https://winworldrealty.in/wp-content/uploads/2024/02/Trinity-Infratech-Enters-Gurugram-Real-Estate-Market-With-Three-New-Projects.jpg"
    },
    {
        propertyId:802,
        propertyName:"Garden Villa",
        propertyLocation:"Mumbai",
        propertyPrice:15000000,
        propertyImageUrl:"https://images.nobroker.in/images/8a9f8a03936c6f5201936cc3a8ba2457/8a9f8a03936c6f5201936cc3a8ba2457_63657_418798_medium.jpg"
    },
    {
        propertyId:803,
        propertyName:"De Crib",
        propertyLocation:"Kochi",
        propertyPrice:8000000,
        propertyImageUrl:"https://cdn.confident-group.com/wp-content/uploads/2022/06/02101449/Listing_Tumb.jpg"
    }
];

export function getAllProperties(){
    return allProperties;
}

export function getPropertyById(propertyId){
    return allProperties.find((property)=>property.propertyId==propertyId);
}

export function addProperty(newProperty){
    newProperty.propertyId = allProperties[allProperties.length - 1].propertyId+1;
    allProperties.push(newProperty);
}

export function updateProperty(updatedProperty){
    let index = allProperties.findIndex((property) => property.propertyId == updatedProperty.propertyId);
    allProperties[index] = updatedProperty;
}

export function deleteProperty(propertyId){
    allProperties=allProperties.filter((property)=>property.propertyId!=propertyId);
}