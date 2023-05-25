///Trabalho Desenvolvido por Caio Enzo Menezes Machado dos Santos
function verificar() {
    
    const rowMateriaNova = document.createElement('tr')


    const rowInformationCodigoMateria = document.createElement('td')
    const codigoMateria = document.getElementById('codigoMateria').value
    rowInformationCodigoMateria.innerHTML = codigoMateria
    rowMateriaNova.appendChild(rowInformationCodigoMateria)

    const rowInformationPeriodo = document.createElement('td')
    const periodo = document.getElementById("periodo").value
    rowInformationPeriodo.innerHTML = periodo
    rowMateriaNova.appendChild(rowInformationPeriodo)

    const rowInformationCargaHoraria = document.createElement('td')
    const cargaHoraria = document.getElementById("chMateria").value
    rowInformationCargaHoraria.innerHTML = cargaHoraria
    rowMateriaNova.appendChild(rowInformationCargaHoraria)
    
    const rowInformationFrequencia = document.createElement('td')
    const frequencia = document.getElementById("frequencia").value
    rowInformationFrequencia.innerHTML = frequencia
    rowMateriaNova.appendChild(rowInformationFrequencia)

    const rowInformationNota = document.createElement('td')
    const nota = document.getElementById("nota").value
    rowInformationNota.innerHTML = nota
    rowMateriaNova.appendChild(rowInformationNota)
    

    document.getElementById('codigoMateria').value = ""

    
    tbody.appendChild(rowMateriaNova)
    
    

}


const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);




const row_1 = document.createElement('tr');
const heading_1 = document.createElement('th');
heading_1.innerHTML = "Codigo da matéria | ";
const heading_2 = document.createElement('th');
heading_2.innerHTML = "Periodo | ";
const heading_3 = document.createElement('th');
heading_3.innerHTML = "Carga Horária | ";

const heading_4 = document.createElement('th');
heading_4.innerHTML = "Frequencia | ";

const heading_5 = document.createElement('th');
heading_5.innerHTML = "Nota  ";


const createCell = ()=> {

    //codigo materia
    const rowMateriaNova = document.createElement('tr')


    const rowInformationCodigoMateria = document.createElement('td')
    const codigoMateria = document.getElementById('codigoMateria').value
    rowInformationCodigoMateria.innerHTML = codigoMateria
    rowMateriaNova.appendChild(rowInformationCodigoMateria)

    const rowInformationPeriodo = document.createElement('td')
    const periodo = document.getElementById("periodo").value
    rowInformationPeriodo.innerHTML = periodo
    rowMateriaNova.appendChild(rowInformationPeriodo)

    const rowInformationCargaHoraria = document.createElement('td')
    const cargaHoraria = document.getElementById("chMateria").value
    rowInformationCargaHoraria.innerHTML = cargaHoraria
    rowMateriaNova.appendChild(rowInformationCargaHoraria)
    
    const rowInformationFrequencia = document.createElement('td')
    const frequencia = document.getElementById("frequencia").value
    rowInformationFrequencia.innerHTML = frequencia
    rowMateriaNova.appendChild(rowInformationFrequencia)

    const rowInformationNota = document.createElement('td')
    const nota = document.getElementById("nota").value
    rowInformationNota.innerHTML = nota
    rowMateriaNova.appendChild(rowInformationNota)
    

    document.getElementById('codigoMateria').value = ""


    
    tbody.appendChild(rowMateriaNova)
}


row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4)
row_1.appendChild(heading_5)
thead.appendChild(row_1);




// Adding the entire table to the body tag
document.getElementById('res').appendChild(table);

function mostralista(){
    window.alert('bora')
}