type LocalCityType ={
    title:string
    countryTitle:string
}
type AddressType = {
    streetTitle:string
    city:LocalCityType
}
type TechType={
    id:number
    title:string
}
type StudentType = {
    id:number
    name:string
    age:number
    isActive:boolean
    address:AddressType
    technologies:Array<TechType>
}

const student:StudentType ={
    id:1,
    name: "Nick",
    age: 32,
    isActive: false,
    address: {
        streetTitle:"Taubergasse",
        city:{
            title:"Wien",
            countryTitle:"Austria"
        }
    },
    technologies:[
        {
            id:1,
            title:"HTML"
        },
        {
            id:2,
            title:"SCC"
        },
        {
            id:3,
            title:"React"
        }
    ]
}


console.log(student.address.city.title)
console.log(student.technologies[2].title)
export default student
