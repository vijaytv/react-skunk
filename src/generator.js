
const  getRandomInt  = (min, max) =>  (Math.floor(Math.random() * (max - min + 1)) + min);


const generateRandomItem = (time) => {

    return {
        time: time,
        Volume: getRandomInt(0,4000),
        Average: getRandomInt(0,6000)
    };
}

const times = ['8:00AM', '8:15AM', '8:30AM', '8:45AM', '9:00AM','9:15AM','9:30AM'];
const types = ['Database', 'Network', 'Web', 'CPU'];

function  GenerateData() {
    var data = {};
    var items;
    for(var val of types) {
        items = [];
        for(var time of times) {
            items.push( generateRandomItem(time));
        };
        data[val] =  items;
    };
    return data;
}


function GenerateAlerts() {
    var data = {};
    var value;
    for(var val of types) {
        value = getRandomInt(0,100);
        data[val] = {
            value: value,
            type: value < 50 ? 'info' : value < 90 ? 'warning' : 'danger'
        }
    }
    return data;
}


export { GenerateAlerts, GenerateData };
