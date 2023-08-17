const url = './data.json';
const d = document.querySelector('.score');
const newP = document.createElement('p'); 

//get data from json file
const getData = async () => {
    try {
        const res = await axios.get(url);
        console.log(res.data);
        newP.append(res.data.score);
        d.append(newP);

    } catch (e) {
        console.log('ERROR: ', e);
    }
}

//use the data in json file
const addData = async () => {
    try {
        const data = await getData();
        console.log(data);
    } catch (e) {
        console.log('ERROR: ', e);
    }
}

window.addEventListener('load', () => {
    addData();
});


