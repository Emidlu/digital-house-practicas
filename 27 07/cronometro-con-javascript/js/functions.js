window.onload = () => {

    let start = document.querySelector(".start");
    let pause = document.querySelector('.pause');
    let reset = document.querySelector(".reset");


    let min = document.querySelector(".minutes");
    let seg = document.querySelector(".seconds");
    m=0;
    s=0;
    reloj = ()=>{};

    start.addEventListener('click',()=>{
        reloj = setInterval(contando,1000);

    })

    function contando(){
        s++;
        if (s>59){m++;s=0;};
        min.innerHTML = m;
        seg.innerHTML = s;

    }

    pause.addEventListener('click',()=>{
        clearInterval(reloj);
    })


    















}