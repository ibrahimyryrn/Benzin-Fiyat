const detailsDiv = document.getElementById('details');
const city = document.getElementById('city');
const cityButton = document.getElementById('city-button');


//const apiUrl = 'https://api.collectapi.com/gasPrice/turkeyGasoline?city=izmir';
const apiKey = "apikey 7w3MpDqsuXJALL9Bvizs59:2obPTr78QBMnq8AYnPwzoT";

const options = {
    method: 'GET',
    headers: {
        "authorization" : apiKey,
    },
};

cityButton.addEventListener('click',(e)=>{
    e.preventDefault();
    const cityValue = city.value;
    gasoline(cityValue); 
});



async function gasoline(){
    
    try {
        const cityValue = city.value;
        const response = await fetch(`https://api.collectapi.com/gasPrice/turkeyGasoline?city=${cityValue}`,options);
        const data = await response.json();
        // console.log(data);
    
        const details = [
            `Shell : ${data.result[7].benzin}`,
            `Petrol Ofisi : ${data.result[5].benzin}`,
            `Total : ${data.result[8].benzin}`,
        ];

        let detailsNew = details.map((detail) => `<div>${detail}</div>`).join('');
        //console.log(detailsNew);

        detailsDiv.innerHTML = detailsNew;
    
    } catch (error) {
        detailsDiv.innerHTML = '';
        
    }
    
}


