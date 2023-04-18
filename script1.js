function _$(id){
  return document.getElementById(id);
}
const statusDisplay = document.querySelector('.game--container');
const val=document.querySelector('div')
btn.addEventListener('click',updataBtn);

let commencer=true;
const gagner=()=>'Player ${User} has won';
const tour=()=>'It is ${User}s turn';
let User="User1"||"User2";

StatusDisplay.InneHTML=tour();

const condition=[
  [0,1,2,3]=0 &&
  [4,5,6,7],
  [8,9,10,11]=0 &&
  [12,13,14,15]
  ];

  const initialisation=[
    [0,1,2,3]=3,
    [4,5,6,7]=3,
    [8,9,10,11]=3,
    [12,13,14,15]=3
  ]

 var valeur=Document.GetElementById("2");
  Document.getElementById(val).InnerHTML=3;
  
 function commencement(valeur,val){
    document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellClicke));
    if(initialisation){
      for(let i=1;i<= 36;i++){
        valeur+=1;
        if (condition)
          break;
      }
    }
    return commencement();
  }

  if (condition) {
    StatusDisplay.innerHTML = gagner();
    commencer = false;
    return;
}
