
/*
    全局功能，信息提示
    参数：
        title:标题
        str:输出语句
        form:样式 of{
            "success"
            "info"
            "waring"
        }
        displaypostion:输出位置的标签id = "#main_alert_display"
*/
var Alert = (title,str,form,displaypostion="#main_alert_display")=>{
    var date = new Date();
    var time = date.getHours()+''+date.getMinutes()+date.getSeconds();
    $(displaypostion).append("<div class=\""+time+
    " bottonaddgpalert alert alert-"+form+" alert-dismissible fade show\" role=\"alert\" style=\"position:center;\">"+
    "<strong>"+title+"</strong> ，"+str+
    "<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">"+
    "<span aria-hidden=\"true\">&times;</span></button></div>");
    $('.'+time).css({opacity:0.8});
    $("."+time).delay(1900).slideUp(700);
        //$("."+time).show('slow');
        //$("."+time).delay(1900).slideUp( 700 );
}





var ReadPartys = (order='uid')=>{
    maxuid = 0;
    one = 0;
    two = 0;
    three = 0;
    four = 0;
    window.GETALL_Party((party_rows)=>{
        for(index in party_rows){
            var uid = party_rows[index].uid;
            if (party_rows[index].whichGrade == '1') {
                party_rows[index].numInOne = ++one;
                party_rows[index].numInTwo = 'wq648a52vke1';
                party_rows[index].numInThree ='wq648a52vke1';
                party_rows[index].numInFour = 'wq648a52vke1';
            }
            else if (party_rows[index].whichGrade == '2') {
                party_rows[index].numInTwo = ++two;
                party_rows[index].numInOne = 'wq648a52vke1';
                party_rows[index].numInThree = 'wq648a52vke1';
                party_rows[index].numInFour = 'wq648a52vke1';
            }
            else if (party_rows[index].whichGrade == '3'){
                party_rows[index].numInThree = ++three;
                party_rows[index].numInOne ='wq648a52vke1';
                party_rows[index].numInTwo = 'wq648a52vke1';
                party_rows[index].numInFour = 'wq648a52vke1';
            }
            else if (party_rows[index].whichGrade == '4') {
                party_rows[index].numInFour = ++four;
                party_rows[index].numInOne = 'wq648a52vke1';
                party_rows[index].numInTwo = 'wq648a52vke1';
                party_rows[index].numInThree = 'wq648a52vke1';
            }
            Vue.set(Party_Vue.Partys,uid,party_rows[index]);

            for(obj in Party_Vue.Partys[uid]) {
                if (Party_Vue.Partys[uid][obj] == 'wq648a52vke1')
                    Party_Vue.Partys[uid][obj] = '';
            }
            if(Number(uid)>Number(maxuid))  maxuid = uid;
        }
    },order);
}
ReadPartys();


var ReadConstructions = (order='uid')=>{
    Cmaxuid = 0;
    window.GETALL_Construction((construction_rows)=>{
        for(index in construction_rows){
            var uid = construction_rows[index].uid;
            Vue.set(Construction_Vue.Constructions,uid,construction_rows[index]);
            for(obj in Construction_Vue.Constructions[uid])
                if(Construction_Vue.Constructions[uid][obj]=='wq648a52vke1')
                    Construction_Vue.Constructions[uid][obj]='';

            if(Number(uid)>Number(Cmaxuid))
                Cmaxuid = uid;
            console.log(uid +" ---" + Cmaxuid);
        }
    },order);
}
ReadConstructions();




