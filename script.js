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

function createHabit(){
    const habits= {
        id: Date.now(),
        desc: inputHabit.value,
        finish: false
    };

    arrHabits.push(habits);

   renderHabit()

    inputHabit.value= "";
}

function renderHabit(){
    listHabit.innerHTML= arrHabits.map(habit=>`
        <li class="habito-card" data-id="${habit.id}">
         <input type="checkbox" class="habito-check" />
         <span class="habito-nome">${habit.desc}</span>
         <button class="btn-excluir">✕</button>
        </li>
    `).join("");
}

listHabit.addEventListener("click", (event)=>{
    const id= Number(event.target.parentElement.dataset.id)
    const habitFound= arrHabits.find(habit=> habit.id === id)
    habitFound.finish = !habitFound.finish
    const li= event.target.parentElement;
    li.classList.toggle("concluido");

    if(event.target.className === "btn-excluir"){
        arrHabits= arrHabits.filter((habit)=> habit.id !== id)
        renderHabit()
    }
});

btnAdd.addEventListener("click", createHabit)

mostrarHora()