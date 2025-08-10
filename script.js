const todoList = [{
    name: "tes",
    tanggal: "2025-12-3"
}];

const namaInput = document.querySelector(".input");
const button = document.querySelector(".button");
const tanggalInput = document.querySelector(".tanggal");

main();

button.addEventListener("click", function(){
    const name= namaInput.value;
    const tanggal= tanggalInput.value;
    todoList.push({
        name,
        tanggal
        });
    console.log(todoList);
    namaInput.value = "";
    tanggalInput.value = "";
    main();
});

function main(){
    let todoListHTML="";
    
    todoList.forEach(function (item,index) {
        const {name,tanggal} = item;
        const html = `
            <div>
                ${name} 
            </div>
            <div>
                ${tanggal}
            </div>
            <button onclick = "
                todoList.splice(${index},1);
                main();
            " class ="hapus">Hapus</button>
            `;
        todoListHTML += html;
    
    });
    document.querySelector(".daftar")
        .innerHTML = todoListHTML;
}
