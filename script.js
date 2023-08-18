const url = './data.json';

//get data from json file
const getData = async () => {
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (e) {
        console.log('ERROR: ', e);
    }
}

//use the data in json file
const addData = async () => {
    try {
        const data = await getData();
        data.forEach(element => {
            const result = element.category;
            const text = result.toLowerCase();
            const skills = document.getElementById('skills');
            const div = document.createElement('div');
            div.classList.add('skill-item', `${text}`);
            skills.appendChild(div);
            div.innerHTML = `<img src=${element.icon} class="icon"></img><span>${element.category}</span><span class="rating"><strong>${element.score}</strong>  / 100</span>`;
            console.log(div);
        });
    } catch (e) {
        console.log('ERROR: ', e);
    }
}

window.addEventListener('load', () => {
    addData();
    
});



