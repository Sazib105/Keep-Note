
// button call

const btn=document.querySelector(".btn");


const addNote=(text="")=>{
    const note=document.createElement("div");
    note.classList.add('main');
    const htmlData=`
    <div class="main_top">
        <div class="edit pointer" title="Edit"> 
          <i class="fas fa-edit"></i> 
        </div>
        <div class="delete pointer" title="Delete">
            <i class="fas fa-trash-alt"></i>
        </div>
    </div>
    <wr>
    <div class="note ${text ? "" : "hidden"}">
    </div> <textarea class=" ${text ? "hidden" : ""}" rows="10" cols="50"></textarea>`;
    
    note.insertAdjacentHTML("afterbegin",htmlData);

    // console.log(note);

    const edit = note.querySelector('.edit'); 
    const delet = note.querySelector('.delete');
    const mainDiv=note.querySelector('.note');
    const textare  =note.querySelector('textarea');

    delet.addEventListener("click", () =>{
        if(confirm("Are You Sure!! Delete This Note")){
            note.remove();
            update();
        }
    });

    // toggle

    edit.addEventListener("click", () =>{
        mainDiv.classList.toggle('hidden');
        textare.classList.toggle('hidden');
    }); 

    mainDiv.innerHTML=text;
    textare.innerHTML=text;
    const update =()=>{
        const textArea=document.querySelectorAll('textarea');
        const ar=[];

        textArea.forEach((val)=>{
            return ar.push(val.value);
        })
        localStorage.setItem('ar',JSON.stringify(ar));
    }

    textare.addEventListener('change',(event)=>{
        const value=event.target.value;
        mainDiv.innerHTML=value;
        update();
    })
    
   document.body.appendChild(note);
}

const notes=JSON.parse(localStorage.getItem('ar'));

// console.log(notes);
if(notes){notes.forEach((note)=>addNote(note))};


btn.addEventListener("click", ()=>addNote());
