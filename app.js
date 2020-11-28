const apiData = [
    {
        name : "David",
        age : 21,
        sex  : "Male",
        looking_for : "Male",
        pic : "https://randomuser.me/portraits/men/43.jpg"
    },
    {
        name : "Raj Patel",
        age : 18,
        sex  : "Male",
        looking_for : "Female",
        pic : "https://randomuser.me/portraits/men/78.jpg"
    },
    {
        name : "Rency",
        age : 22,
        sex  : "Female",
        looking_for : "Male",
        pic : "https://randomuser.me/portraits/women/43.jpg"
    },
    {
        name : "Sara",
        age : 21,
        sex  : "Female",
        looking_for : "Male",
        pic : "https://randomuser.me/portraits/women/34.jpg"
    },
];

function iterateProfile(profiles){
    let nextIndex = 0;

    return {
        nextValue : ()=>{
            return nextIndex < profiles.length ? {value : profiles[nextIndex++],
            hasDone : false } : { hasDone : true}
        }
    }
}

const pros = iterateProfile(apiData)
getNext()

document.getElementById('next').addEventListener('click', getNext)


function getNext(){

    const current = pros.nextValue().value
    if(current !== undefined)
    {
        document.getElementById('profileImg').innerHTML = `<img src="${current.pic}" width=250px />`
        document.getElementById('profileInfo').innerHTML = `
        <ul class="list-group">
        <li class="list-group-item-success mb-4"> <h4> Name : ${current.name} </h4></li>
        <li class="list-group-item-danger mb-4"> <h4> Age : ${current.age} </h4></li>
        <li class="list-group-item-success mb-4"> <h4> Sex : ${current.sex} </h4></li>
        <li class="list-group-item-danger "> <h4> Looking For : ${current.looking_for} </h4></li>

    
        </ul>
        
        
        
        `
    }else{
        window.location.reload()
    }
}