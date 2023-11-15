const { get } = require("lodash");

const user = {
    name: [{
        first: '123'
    }]
};

console.log(get(user,'name[0]["first"]'));


console.log([{"123":"test"}].toString().replace(/./gis,"8"))
