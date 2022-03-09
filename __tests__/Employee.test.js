const { test, expect } = require('@jest/globals')
const Employee = require('../lib/Employee')



test('creates an employee object', () => {
    const employee = new Employee('Jimmy', '1234', 'sampleMail@life.it')

    expect(employee.name).toBe('Jimmy')
    expect(employee.id).toBe('1234')
    expect(employee.email).toBe('sampleMail@life.it')
})

test('checks employee name', () =>{
    const employee = new Employee('Jimmy', '1234', 'sampleMail@life.it')

    expect(employee.getName()).toBe('Jimmy')
})

test('check employee ID', () => {
    const employee = new Employee('Jimmy', '1234', 'sampleMail@life.it')

    expect(employee.getID()).toBe('1234')
})

test('check employee email', () => {
    const employee = new Employee('Jimmy', '1234', 'sampleMail@life.it')

    expect(employee.getEmail()).toBe('sampleMail@life.it')
})

test('check employee role', () => {
    const employee = new Employee('Jimmy', '1234', 'sampleMail@life.it')

    expect(employee.getRole()).toBe('Employee')
})