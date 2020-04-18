        $("#startDate").datebox({
            onSelect:function(date){
                $("#startDate").datebox('setText',date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate() + ' 00:00')
            }
        });

        var startDate = $("#startDate").datebox("getText");