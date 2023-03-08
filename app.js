var url = 'https://www.php.engenius.com.co/DatabaseIE.php'

//      Caso 1      //

var data1 =  {
    User: 'etr',
    Password: '111111111',
    option: 'instituciones'
}   

fetch(url,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data1)
}).then(res => res.json())
.catch(error => console.error('login:', error))
.then(response => console.log('login:', response))

//      Caso 2      //

var data2 =  {
    User: 'etraining',
    Password: 'explorandoando2020%',
    option: 'institucion'
}

fetch(url,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data2)
}).then(res => res.json())
.catch(error => console.error('login:', error))
.then(response => console.log('login:', response))

//      caso 3      //

var data3 = {
    User: 'etraining',
    Password: 'explorandoando2020%',
    option: 'municipios'
}

fetch(url,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data3)
}).then(res => res.json())
.catch(error => console.error('login:', error))
.then((response) => {
    console.log('login:', response) 
    let tabla_muni = document.getElementById('lista-muni')
    for (const i in response.data) {
        console.log(response.data[i])
        tabla_muni.innerHTML += `<tr>
            <td>
                <a href='instituciones.html'>${response.data[i].nombre}</a>
            </td>
        </tr>`;  
    }
})

//      caso 4      //

var data4 =  {
    User: 'etraining',
    Password: 'explorandoando2020%',
    option: 'instituciones',
    CodMun: '73168'
}

fetch(url,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data4)
}).then(res => res.json())
.catch(error => console.error('login:', error))
.then((response) => {
    console.log('login:', response) 
    let tabla_muni = document.getElementById('lista-inst')
    for (const i in response.data) {
        console.log(response.data[i])
        tabla_muni.innerHTML += `<tr>
            <td>
                <a href='sedes.html'>${response.data[i].nombre}</a>
            </td>
        </tr>`;  
    }
})

//      caso 5      //

var data5 =   {
    User: 'etraining',
    Password: 'explorandoando2020%',
    option: 'sedes',
    CodInst: '273168002111'
}

fetch(url,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data5)
}).then(res => res.json())
.catch(error => console.error('login:', error))
.then((response) => {
    console.log('login:', response) 
    let tabla_muni = document.getElementById('lista-sed')
    for (const i in response.data) {
        console.log(response.data[i])
        tabla_muni.innerHTML += `<tr>
            <td>
                <a href='grupos.html'>${response.data[i].nombre}</a>
            </td>
        </tr>`;  
    }
})

//      caso 6      //

var data6 = {
    User: 'etraining',
    Password: 'explorandoando2020%',
    option: 'grupos',
    CodSede: '273268001201' 
}

fetch(url,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data6)
}).then(res => res.json())
.catch(error => console.error('login:', error))
.then((response) => {
    console.log('login:', response) 
    let tabla_muni = document.getElementById('lista-grup')
    for (const i in response.data) {
        console.log(response.data[i])
        tabla_muni.innerHTML += `<tr>
            <td>
                <a href='info_grup.html'>${response.data[i].nombre}</a>
            </td>
        </tr>`;  
    }
})

//      caso 7      //

var data7={
    User: 'etraining',
    Password: 'explorandoando2020%',
    option: 'infoGrupo',
    IdGrupo: '10028'
}

fetch(url,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data7)
}).then(res => res.json())
.catch(error => console.error('login:', error))
.then((response) => {
    console.log('login:', response) 
    let tabla_muni = document.getElementById('lista-info')
    for (const i in response.data) {
        console.log(response.data[i])
        tabla_muni.innerHTML += `<tr>
            <td>
                ${response.data[i].institución}
            </td>
            <td>
                ${response.data[i].municipio}
            </td>
            <td>
                ${response.data[i].nombre}
            </td>
            <td>
                ${response.data[i].numGrupo}
            </td>
            <td>
                ${response.data[i].sede}
            </td>
        </tr>`;  
    }
})
