const dateToday= document.getElementById("data-hoje");
const inputHabit= document.getElementById("input-habito");
const btnAdd= document.getElementById("btn-add");
const listHabit= document.getElementById("lista-habitos");
const startTotal= document.getElementById("stat-total");
const startPending= document.getElementById("stat-pendentes");
const startDone= document.getElementById("stat-concluidos");
const totalPercentage= document.getElementById("progresso-texto");

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
    if(inputHabit.value === "") return;

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
        <li class="habito-card ${habit.finish? "concluido": ""}" data-id="${habit.id}">
         <input type="checkbox" class="habito-check" ${habit.finish? "checked": ""}/>
         <span class="habito-nome">${habit.desc}</span>
         <button class="btn-excluir">✕</button>
        </li>
    `).join("");

    const arrDone= arrHabits.filter(habit=> habit.finish === true);
    const arrPending= arrHabits.filter(habit=> habit.finish === false);

    startTotal.innerHTML= Number(arrHabits.length);
    startPending.innerHTML= Number(arrPending.length);
    startDone.innerHTML= Number(arrDone.length);

    const totalHabits= arrHabits.length;
    const totalDone= arrHabits.filter(habit=> habit.finish === true);
    const persentage= parseInt((totalDone.length / totalHabits) * 100);

    totalPercentage.innerHTML= `${persentage}%`

}

listHabit.addEventListener("click", (event)=>{
    const id= Number(event.target.parentElement.dataset.id);

    if(event.target.className === "habito-check"){
    const habitFound= arrHabits.find(habit=> habit.id === id)
    habitFound.finish = !habitFound.finish
    const li= event.target.parentElement;
    li.classList.toggle("concluido");
    renderHabit()
    }
    
    if(event.target.className === "btn-excluir"){
        arrHabits= arrHabits.filter((habit)=> habit.id !== id)
        renderHabit()
    }
});



btnAdd.addEventListener("click", ()=>{
    createHabit();
    renderHabit()
})


mostrarHora()