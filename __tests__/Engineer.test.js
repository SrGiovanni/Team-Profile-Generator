const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('create an engineer object', () =>{
    const engineer = new Engineer("Hank", '123', 'turret@engi.org', 'RUStillThere');

    expect(engineer.github).toBe('RUStillThere');
});