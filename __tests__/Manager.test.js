const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

test('creates an manager object', () => {
    const manager = new Manager('Jimmy', '1234', 'sampleMail@life.it', 343)

    expect(manager.name).toBe('Jimmy')
    expect(manager.id).toBe('1234')
    expect(manager.email).toBe('sampleMail@life.it')
    expect(manager.officeNumber).toBe(343)

})

test('check office number', () =>{
    const manager = new Manager('Jimmy', '1234', 'sampleMail@life.it', 343)

    expect(manager.getOfficeNumber()).toBe(343);
})

test('check role', () =>{
    const manager = new Manager('Jimmy', '1234', 'sampleMail@life.it', 343)

    expect(manager.getRole()).toBe('Manager')
})