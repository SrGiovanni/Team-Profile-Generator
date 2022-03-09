const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('create intern object', () =>{
    const intern = new Intern('Kevin', '556', 'kev@uofs.edu', 'University of Science');

    expect(intern.school).toBe('University of Science');
});