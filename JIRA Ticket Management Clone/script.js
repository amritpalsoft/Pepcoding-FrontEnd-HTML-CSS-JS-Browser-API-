console.log('linked');

let addBtn=document.querySelector('.add-btn');
let removeBtn=document.querySelector('.remove-btn');
let addFlag=false;
let removeFlag=false;
let colors=['lightpink','lightblue','lightgreen','lightblack']
let modalPriorityColor=colors[colors.length-1];
let allPriorityColor=document.querySelectorAll('.priority-color')
let modalCont=document.querySelector('.modal-cont')
let mainCont=document.querySelector('.main-cont');
let textAreaCont=document.querySelector('.textarea-cont')


//listener for modal priority color
allPriorityColor.forEach((colorElem,index) => {
    colorElem.addEventListener('click',(e)=>{
        allPriorityColor.forEach((priorityColorElem,index)=>{
            priorityColorElem.classList.remove('border')
        })
        colorElem.classList.add('border')

        modalPriorityColor=colorElem.classList[0];
    })
});

removeBtn.addEventListener('click',(e)=>{
    removeFlag=!removeFlag;

})

addBtn.addEventListener('click',(e)=>{
    //display modal
    //generate ticket

    //addFlag-->true >>Modal display
    //addFlag-->false >>Modal none
    addFlag=!addFlag;
    if (addFlag) {
        modalCont.style.display='flex'
    }else{
        modalCont.style.display='none'
    }

})
modalCont.addEventListener('keydown',(e)=>{
    let key=e.key;
    if(key==='Shift'){
        // console.log();
        createTicket(modalPriorityColor,textAreaCont.value,shortid());
        modalCont.style.display='none'
        textAreaCont.value=''

    }
})
function createTicket(ticketColor,ticketTask,ticketId){
    let ticketCont=document.createElement('div');
    ticketCont.setAttribute('class','ticket-cont');
    ticketCont.innerHTML=`
        <div class="ticket-color ${ticketColor}"></div>
        <div class="ticket-id">${ticketId}</div>
        <div class="task-area">${ticketTask}</div>
        <div class="ticket-lock">
            <i class="fas fa-lock"></i>

        </div>`;
        
        mainCont.appendChild(ticketCont)

        handleRemoval(ticketCont)
        handleLock(ticketCont)
    }

    function handleRemoval(ticket){
        //removeFlag->true->remove
        if (removeFlag) {
            
            ticket.remove();
        }


    }


    function handleLock(ticket){
        let ticketLockElem=document.querySelector('.ticket-lock')
        let ticketLock=ticketLockElem.children[0]
        ticketLock.addEventListener(click,(e)=>{
            
        })





    }