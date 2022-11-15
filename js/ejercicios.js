function inicializa()
{
    var obj={
        clicks:0,
        init:function(){
            console.log("init: ", this);
            $("#elemento").click(function(){
                console.log("Clicked: ",this);
                this.clicks+=1;
                console.log("Clicks: "+this.clicks);
            });
        }
    };
    obj.init();
}
