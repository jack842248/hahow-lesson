$(document).ready(function(){

    var vm = new Vue({
        el: "#app",
        data:{
            items:[]
        }
    });

    $.ajax({
        url:"http://awiclass.monoame.com/api/command.php?type=get&name=hahowdata",
        success: function(res){
            vm.items=JSON.parse(res);
        }
    });








});