const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('create intern object', () =>{
    const intern = new Intern('Kevin', '556', 'kev@uofs.edu', 'University of Science');

    expect(intern.school).toBe('University of Science');
});

test('check Intern getSchool', () =>{
    const intern = new Intern('Kevin', '556', 'kev@uofs.edu', 'University of Science');

    expect(intern.getSchool()).toBe('University of Science');
});

test('check role', () =>{
    const intern = new Intern('Kevin', '556', 'kev@uofs.edu', 'University of Science');

    expect(intern.getRole()).toBe('Intern');
});