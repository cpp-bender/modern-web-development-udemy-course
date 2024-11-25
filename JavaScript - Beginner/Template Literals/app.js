const name = "Ahmet";
const department = "IT";
const salary = "40.000";


const value = `Name:${name}\nDepartment:${department}\nSalary:${salary}`;

console.log(value);

function test(){
    return "aye";
}

const html= `<ul style="list-style-type: none;">
            <li>${name}</li>
            <li>${department}</li>
            <li>${salary}</li>
            <li>${test()}</li>
            </ul>`;

document.body.innerHTML = html;