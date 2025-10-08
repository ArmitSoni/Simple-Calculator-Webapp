let input= document.getElementById('inputbox');

let buttons=document.querySelectorAll('button');

let string="";
let arr=Array.from(buttons); // this will create a array of buttons

arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value=string;
        }
        else if(e.target.innerHTML=='AC'){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length()-1);
            input.value=string;
        }
        else{
        string+=e.target.innerHTML;
        input.value=string;
        } // yhi sb ko add,sub,multply,divide krega and at the end = press then input.value=string
    })
});