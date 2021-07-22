let A = false;
let B = true;
const myCssHead = `
background: #ddeeff;
font-family: Arial, Helvetica, sans-serif;
font-weight: bold;
border: 1px solid #aaa;
padding: 10px 10px 10px 10px;
`;
const myCssHea = `
    background: #eeddff;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    border: 1px solid #aaa;
    padding: 10px 10px 10px 10px;
`;
let myCssBoby = `

    background: #dfd;
    font-family: cursive;
    border: 1px solid #aaa;
`;
// console.log(`%cOperadores AND`,myCssHead);
// console.log(`%c1. A: ${!(!A)} (OPERADOR AND) B: ${!B} A && B = ${!(!A) && !B}`,myCssBoby);
// console.log(`%c2. A: ${A} (OPERADOR AND) B: ${B} A && B = ${A && B}`,myCssBoby);
// console.log(`%c3. A: ${!A} (OPERADOR AND) B: ${!B} A && B = ${!A && !B}`,myCssBoby);
// console.log(`%c4. A:${!A} (OPERADOR AND) B:${B} A && B = ${!A && B}`,myCssBoby);
// console.log(`%cA: ${A} B: ${B} Datos verdaderos`,myCssBoby);

console.log(`%cOperadores AND`, myCssHead);
console.log(`%c1. A: ${!(!A)} (OPERADOR AND) B: ${!B} A && B = ${!(!A) && !B}`,myCssBoby);
console.log(`%c2. A: ${A} (OPERADOR AND) B: ${B} A && B = ${!(!A) && B}`,myCssBoby);
console.log(`%c3. A: ${!A} (OPERADOR AND) B: ${!B} A && B = ${(!A) && !B}`,myCssBoby);
console.log(`%c4. A: ${!A} (OPERADOR AND) B: ${B} A && B = ${(!A) && B}`,myCssBoby);
console.log(`%cA: ${A} B: ${B} Datos verdaderos`,myCssHea);

console.log(`%cOperadores OR`, myCssHead);
console.log(`%c1. A: ${!(!A)} (OPERADOR OR) B: ${!B} A || B = ${!(!A) || !B}`,myCssBoby);
console.log(`%c2. A: ${A} (OPERADOR OR) B: ${B} A || B = ${!(!A) || B}`,myCssBoby);
console.log(`%c3. A: ${!A} (OPERADOR OR) B: ${!B} A || B = ${(!A) || !B}`,myCssBoby);
console.log(`%c4. A: ${!A} (OPERADOR OR) B: ${B} A || B = ${(!A) || B}`,myCssBoby);
console.log(`%cA: ${A} B: ${B} Datos verdaderos`,myCssHea);

console.log(`%cOperadores NOT`, myCssHead);
console.log(`%c1. A: ${A} (OPERADOR NOT)  !A = ${!A}`,myCssBoby);
console.log(`%c1. B: ${B} (OPERADOR NOT)  !B = ${!B}`,myCssBoby);
console.log(`%cA: ${A} B: ${B} Datos verdaderos`,myCssHea);

let tablaAND = document.querySelector("#myTablaAND");
tablaAND.innerHTML= `
    <tr>
        <td>${(!(!A)) ? '1' : '0'}</td>
        <td>${(!B) ? '1' : '0'}</td>
        <td>${(!(!A)&& !B) ? '1' : '0'}</td>
    </tr>
    <tr>
        <td>${(A) ? '1' : '0'}</td>
        <td>${(B)? '1' : '0'}</td>
        <td>${(A && B) ? '1' : '0'}</td>
    </tr>
    <tr>
        <td>${(!A) ? '1' : '0'}</td>
        <td>${(!B) ? '1' : '0'}</td>
        <td>${(!A && !B) ? '1' : '0'}</td>
    </tr>
    <tr>
        <td>${(!A) ? '1' : '0'}</td>
        <td>${(B) ? '1' : '0'}</td>
        <td>${(!A && B) ? '1' : '0'}</td>
    </tr>
    <tr>
    <td>${(A) ? '1' : '0'}</td>
    <td>${(B) ? '1' : '0'}</td>
    <td>Valores verdaderos</td>
</tr>
`;
//Operador OR (||)
let tablaOR = document.querySelector("#myTablaOR");
tablaOR.innerHTML= `
    <tr>
        <td>${(!(!A)) ? '1' : '0'}</td>
        <td>${(!B) ? '1' : '0'}</td>
        <td>${(!(!A)|| !B) ? '1' : '0'}</td>
    </tr>
    <tr>
        <td>${(A) ? '1' : '0'}</td>
        <td>${(B)? '1' : '0'}</td>
        <td>${(A || B) ? '1' : '0'}</td>
    </tr>
    <tr>
        <td>${(!A) ? '1' : '0'}</td>
        <td>${(!B) ? '1' : '0'}</td>
        <td>${(!A || !B) ? '1' : '0'}</td>
    </tr>
    <tr>
        <td>${(!A) ? '1' : '0'}</td>
        <td>${(B) ? '1' : '0'}</td>
        <td>${(!A || B) ? '1' : '0'}</td>
    </tr>
    <tr>
    <td>${(A) ? '1' : '0'}</td>
    <td>${(B) ? '1' : '0'}</td>
    <td>Valores verdaderos</td>
</tr>
`;
//Operador NOT o XOR (!)
let tablaNOT = document.querySelector("#myTablaNOT");
tablaNOT.innerHTML = `
    <tr>
    <td>${(A) ? '1' : '0'}</td>
    <td>${(!A) ? '1' : '0'}</td>
    </tr>
    <tr>
    <td>${(!A) ? '1' : '0'}</td>
    <td>${(A) ? '1' : '0'}</td>
    </tr>
`;