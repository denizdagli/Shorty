const axios = require('axios');
const test = require('ava');

test('should return login page and 200 code', async t => {
    const response = await axios.get('http://localhost:3000/');
    t.is(response.status, 200);
    //t.is(response.text, 'login page');
    }
);