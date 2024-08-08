let toggle=true;

document.querySelector('.btn').addEventListener('click', function(e){

    if(toggle){
        document.body.style.backgroundColor='black';
        document.body.style.color='white';
        document.querySelector('.btn').style.backgroundColor='white';
    }
        else{
            document.body.style.backgroundColor='white';
            document.body.style.color='black';
            document.querySelector('.btn').style.backgroundColor='black';
        }
        toggle=!toggle;

    }
    )

document.querySelectorAll('.button').forEach(function(button){
    button.addEventListener('click', function(e){
        document.body.style.backgroundColor=e.target.id;
    })
});
