let string="";
var buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }else if(e.target.innerHTML=='AC'){
            string="";
            document.querySelector('input').value=string;
        }else if(e.target.innerHTML=='+/-'){
            if(e.target.innerHTML<'0'){
                string=eval('-1*string');
                document.querySelector('input').value=string;
            }else{
                string=eval('-1*string');
                document.querySelector('input').value=string;
            }
        }
        else{
        console.log(e.target);
        string+=e.target.innerHTML;
        document.querySelector('input').value=string;
        }
    })
})

