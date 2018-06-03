<script type="text/javascript">
    var check = true;
    window.onload = function(){
        if(sessionStorage.getItem('timeSite') === null){
            sessionStorage.setItem('timeSite', new Date().getTime());
        }
        setInterval(clock, 1000);
        
    }
    function boom(){
        $("body").append('<div class="overlay"><h1 class="text-st">Complete the Payment!!!</h1></div>');
    }

    function clock(){
        if(check && Math.abs(sessionStorage.getItem('timeSite') - new Date().getTime()) >= 30000){
            boom();
            check = false;
        }
    }
    
</script>
