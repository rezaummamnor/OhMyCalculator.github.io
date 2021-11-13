var screen=document.querySelector('#screen');
var btn=document.querySelectorAll('.btn');

    /*============ For getting the value of btn, Here we use for loop ============*/
    for(item of btn)
    {
        item.addEventListener('click',(e)=>{
            btntext=e.target.innerText;
            screen.value+=btntext;

        });
    }

    function operan(param)
    {
        var a = screen.value.length;
        if (screen.value[a-1]=='*') 
        {
            var b=screen.value.substr(0,screen.value.length-1);
            screen.value=b+param;
        }   else 
            {  
                if (screen.value[a-1]=='/') 
                {
                    var b=screen.value.substr(0,screen.value.length-1);
                    screen.value=b+param;
                }   else 
                    {
                        if (screen.value[a-1]=='+') 
                        {
                            var b=screen.value.substr(0,screen.value.length-1);
                            screen.value=b+param;
                        }   else 
                            {
                                if (screen.value[a-1]=='-') 
                                {
                                    var b=screen.value.substr(0,screen.value.length-1);
                                    screen.value=b+param;
                                }   else 
                                    {
                                    screen.value+=param
                                    }
                            }

                    }
            }
    }

    function sin()
    {
        screen.value=Math.sin(screen.value);
    }

    function prosen()
    {
        screen.value=0.01*screen.value;
    }

    function cos()
    {
        screen.value=Math.cos(screen.value);
    }

    function tan()
    {
        screen.value=Math.tan(screen.value);
    }

    function pow()
    {
        screen.value=Math.pow(screen.value,2);
    }

    function sqrt()
    {
        screen.value=Math.sqrt(screen.value,2);
    }

    function log()
    {
        screen.value=Math.log(screen.value);
    }

    function pi()
    {
        screen.value= 3.14159265359;
    }

    function e()
    {
        screen.value=2.71828182846;
    }

    function fact()
    {
        var i, num, f;
        f=1
        num=screen.value;
        for(i=1; i<=num; i++)
        {
            f=f*i;
        }

        i=i-1;

        screen.value=f;
    }

    function backspc()
    {
        screen.value=screen.value.substr(0,screen.value.length-1);
    }
