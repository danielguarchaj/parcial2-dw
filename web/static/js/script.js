/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const records = []
const entryError = document.getElementById('entryError')
const tbody = document.getElementById('tbody')

const addRegister = inputData => {
    const data = inputData.value
    entryError.classList.add('hidden')
    const cleanArray = cleanData(data)
    if (!cleanArray) {
        entryError.classList.remove('hidden')
        return
    }
    updateTable(cleanArray)
    inputData.value = ''
}

const updateTable = newRecord => {
    records.push(newRecord)
    const sortedRecords = records.sort((a, b) => Number(a[2]) - Number(b[2]))
    tbody.innerHTML = sortedRecords.reduce((html, record, index)=> html += `
        <tr>
            <td>${index + 1}</td>
            <td>${record[0]}</td>
            <td>${record[1]}</td>
            <td>${record[2]}</td>
            <td>${record[3]}</td>
        </tr>
    ` , '')
}

const cleanData = data => {
    const array = data.split(',')
    if (array.length !== 4) {
        return false
    }
    let validEntry = true
    for (let i = 0; i < 4; i++) {
        if (i !== 1 && isNaN(Number(array[i]))) {
            validEntry = false
        }
    }
    if (!validEntry) {
        return validEntry
    }
    return array
}