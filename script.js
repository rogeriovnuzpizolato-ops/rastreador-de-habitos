const dateToday= document.getElementById("data-hoje");
const inputHabit= document.getElementById("input-habito");
const btnAdd= document.getElementById("btn-add");
const listHabit= document.getElementById("lista-habitos");

let arrHabits= []

function mostrarHora(){
    const data= new Date();
    const dataFormada= {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    const dataCompleta= data.toLocaleDateString("pt-br", dataFormada);

    dateToday.innerHTML= dataCompleta;

    
}

function criaHabito(){
    const habits= {
        desc: inputHabit.value,
        id: Date.now(),
        finish: false
    };

    arrHabits.push(habits);


    listHabit.innerHTML= arrHabits.map(habit=> `
        <li class="habito-card">
         <input 
         type="checkbox"
         class="habito-check"
         >
         <span class="habito-nome">${habits.desc}</span>
         <button class="btn-excluir">✕</button>
        </li>`
    )
    .join("");

    let li= document.querySelector(".habito-card")

    const inputCheck= document.querySelectorAll(".habito-check");
    inputCheck.forEach(check=>{
        check.addEventListener("change", ()=>{
            li= check.closest(".habito-card");

            if(check.checked){
                li.classList.add("concluido")
            }else{
                li.classList.remove("concluido")
            }
        });
    });
}

btnAdd.addEventListener("click", criaHabito)

mostrarHora()