var Party_Vue = new Vue({
    el: '#info_displayer',
    data: {
        Partys: {},
        input_message: {
            'uid': '',  //识别码
            'college': '', //学院
            'grade': '',  //班级
            'stdID': '',  //学号
            'stdName': '',  //姓名
            'address': '',   //家庭住址
            'isJDLK': '',   //是否建档立卡
            'marks': '',     //评定分数
            'result': '',     //本次级别
            'whichGrade': '',   // 年级标识
            'numInOne': '',
            'numInTwo': '',
            'numInThree': '',
            'numInFour': ''
        },
        order: 'uid',

    },
    methods: {
        Re_Order: () => {
            console.log('单击', Party_Vue.order)
            Party_Vue.Partys = {};
            ReadPartys(Party_Vue.order);
        },
        Botton_ADD_Party: () => {

            if (Party_Vue.input_message.college == "" ||
                Party_Vue.input_message.grade == "" ||
                Party_Vue.input_message.stdID == "" ||
                Party_Vue.input_message.stdName == "" ||
                Party_Vue.input_message.whichGrade == ""
            ) {
                Alert("错误", "学院、班级、学号、姓名、所属年级为必填项", "warning", "#bottonaddptalert");
            } else {
                $("#newpartymodal").modal('hide');
                console.log(Party_Vue.input_message);
                maxuid++;
                switch(Party_Vue.input_message.whichGrade){
                    case "1":one++; break;
                    case "2":two++; break;
                    case "3":three++; break;
                    case "4":four++; break;
                    default:break;
                }
                let newparty = {};
                for (var obj in Party_Vue.input_message) {
                    newparty[obj] = Party_Vue.input_message[obj];
                }

                switch(Party_Vue.input_message.whichGrade){
                    case "1":newparty.numInOne = one;
                    break;
                    case "2":newparty.numInTwo=two;
                    break;
                    case "3":newparty.numInThree=three;
                    break;
                    case "4":newparty.numInFour=four;
                    break;
                    default:break;
                }

                newparty.uid = maxuid;
                console.log(newparty);
                Vue.set(Party_Vue.Partys, newparty.uid, newparty);
                window.ADD_Party_sql(newparty);

                Alert("成功", "增加学生\"" + newparty.stdName + "\"成功", "success");

            }
        },
        Botton_Refrash_input_message: () => {
            for (var obj in Party_Vue.input_message)
                Vue.set(Party_Vue.input_message, obj, '');
            $('#newpartymodal').modal({
                backdrop: 'static',
                keyboard: true
            });
        },
        Botton_DEL_Party: (uid) => {
            var name = Party_Vue.Partys[uid].stdName;
            Vue.delete(Party_Vue.Partys, uid);
            window.DEL_Party(uid);
            ReadPartys();
            Alert("成功", "删除学生\"" + name + "\"成功", "success");
        },
        Botton_Re_Party: (uid) => {                                        //按钮功能：输出缓存->输入缓存，响应按钮打开户修改框
            for (obj in Party_Vue.input_message)
                Vue.set(Party_Vue.input_message, obj, Party_Vue.Partys[uid][obj]);
            $('#repartymodal').modal({
                backdrop: 'static',
                keyboard: true
            });
        },
        Botton_Cg_Party: () => {
            if (Party_Vue.input_message.college == "" ||
                Party_Vue.input_message.grade == "" ||
                Party_Vue.input_message.stdID == "" ||
                Party_Vue.input_message.stdName == "" ||
                Party_Vue.input_message.whichGrade == ""
            ) {
                Alert("错误", "学院、班级、学号、姓名、所属年级为必填项", "warning", "#bottoncgptalert");
            } else {


                $("#repartymodal").modal('hide');
                var uid = Party_Vue.input_message.uid;

                switch (Party_Vue.Partys[uid].whichGrade) {
                    case '1':
                        Vue.set(Party_Vue.Partys[uid], Party_Vue.Partys[uid].numInOne, '');
                        break;
                    case '2':
                        Vue.set(Party_Vue.Partys[uid], Party_Vue.Partys[uid].numInTwo, '');
                        break;
                    case '3':
                        Vue.set(Party_Vue.Partys[uid], Party_Vue.Partys[uid].numInThree, '');
                        break;
                    case '4':
                        Vue.set(Party_Vue.Partys[uid], Party_Vue.Partys[uid].numInFour, '');
                        break;
                    default:
                        break;
                }

                window.DEL_Party(uid);
                for (let obj in Party_Vue.input_message)
                    Vue.set(Party_Vue.Partys[uid], obj, Party_Vue.input_message[obj]);
                switch (Party_Vue.Partys[uid].whichGrade) {
                    case '1':
                        Vue.set(Party_Vue.Partys[uid], Party_Vue.Partys[uid].numInOne, ++one);
                        break;
                    case '2':
                        Vue.set(Party_Vue.Partys[uid], Party_Vue.Partys[uid].numInTwo, ++two);
                        break;
                    case '3':
                        Vue.set(Party_Vue.Partys[uid], Party_Vue.Partys[uid].numInThree, ++three);
                        break;
                    case '4':
                        Vue.set(Party_Vue.Partys[uid], Party_Vue.Partys[uid].numInFour, ++four);
                        break;
                    default:
                        break;
                }
                var fir = 0,sec = 0,thi = 0,fou = 0;
                for(let obj in Party_Vue.Partys){
                    switch (Party_Vue.Partys[obj].whichGrade) {
                        case 1:
                            Vue.set(Party_Vue.Partys[obj], Party_Vue.Partys[obj].numInOne, ++fir);
                            break;
                        case 2:
                            Vue.set(Party_Vue.Partys[obj], Party_Vue.Partys[obj].numInTwo, ++sec);
                            break;
                        case 3:
                            Vue.set(Party_Vue.Partys[obj], Party_Vue.Partys[obj].numInThree, ++thi);
                            break;
                        case 4:
                            Vue.set(Party_Vue.Partys[obj], Party_Vue.Partys[obj].numInFour, ++fou);
                            break;
                        default:
                            break;
                    }
                }


                let temp  = Party_Vue.Partys[uid];
                temp.uid = ++maxuid;
                delete Party_Vue.Partys[uid];
                uid = temp.uid;
                Vue.set(Party_Vue.Partys,uid,temp);

                window.ADD_Party_sql(Party_Vue.Partys[uid]);
                ReadPartys(uid);

                Alert("成功", "修改成功", "success");

            }
        }
    }
});


var Construction_Vue = new Vue({
    el: '#happyNewYear',
    data: {
        Constructions: {},
        input_message: {
            'uid': '',  // 识别码
            'numID': '', // 学号
            'stdName': '',  // 姓名
            'sourse' : '',// 组
            'photoSrc':'' , //照片路径
            'photoName':''
        },
        order: 'uid',
    },
    methods: {
        Re_Order: () => {
            console.log('单击', Construction_Vue.order)
            Construction_Vue.Constructions = {};
            ReadConstructions(Construction_Vue.order);
        },
        Botton_ADD_Construction: () => {
            if (Construction_Vue.input_message.numID == "" ||
                Construction_Vue.input_message.stdName == ""||
                Construction_Vue.input_message.sourse==""
            ) {
                Alert("错误", "学号、姓名、所属情况为必填项", "warning", "#bottonaddptalert");
            } else {
                $("#newconstructionmodal").modal('hide');
                Cmaxuid++;
                let input_message = Construction_Vue.input_message;
                let newconstruction = {};
                for (obj in input_message)
                    newconstruction[obj] = input_message[obj];
                newconstruction.uid = Cmaxuid;
    //            console.log(newconstruction);
                Vue.set(Construction_Vue.Constructions, newconstruction.uid, newconstruction);
                window.ADD_Construction_sql(newconstruction);
                Alert("成功", "添加学生成功", "success");
                /*
                for(obj in Persons_Vue.input_message)
                    Vue.set(Persons_Vue.input_message,obj,'');
                */
            }
        },
        Botton_Refrash_input_message: () => {
            for (obj in Construction_Vue.input_message)
                Vue.set(Construction_Vue.input_message, obj, '');
            $('#newconstructionmodal').modal({
                backdrop: 'static',
                keyboard: true
            });
        },
        Botton_DEL_Construction: (uid) => {
            var name = Construction_Vue.Constructions[uid].name;
            Vue.delete(Construction_Vue.Constructions, uid);
            window.DEL_Construction(uid);
            Alert("成功", "删除学生成功", "success");
        },
        Botton_Re_Construction: (uid) => {                                        //按钮功能：输出缓存->输入缓存，响应按钮打开户修改框
            for (obj in Construction_Vue.input_message)
                Vue.set(Construction_Vue.input_message, obj, Construction_Vue.Constructions[uid][obj]);
            $('#reconstructionmodal').modal({
                backdrop: 'static',
                keyboard: true
            });
        },
        Botton_Show_Photo:()=>{
             if(Construction_Vue.input_message.photoSrc == ""){
                 console.log(Construction_Vue.input_message.photoSrc);
                 Alert("错误", "请勿选择重复照片", "warning", "#bottoncgctalert");
             }
             else {
                 $('#reconstructionmodal').modal('hide');
                 var uid = Construction_Vue.input_message.uid;
                 //      console.log(Construction_Vue.input_message.photoSrc);
                 //Construction_Vue.input_message.photoSrc = "./" + Construction_Vue.input_message.photoSrc;
                 window.DEL_Construction(uid);
                 for (let obj in Construction_Vue.input_message)
                     Vue.set(Construction_Vue.Constructions[uid], obj, Construction_Vue.input_message[obj]);
                 let temp = Construction_Vue.Constructions[uid];
                 temp.uid = ++Cmaxuid;

                 delete Construction_Vue.Constructions[uid];
                 uid = temp.uid;
                 window.COPY_Photo(temp.stdName);
                 temp.photoName = "dataPhoto/" + temp.stdName + ".jpg";
                 Vue.set(Construction_Vue.Constructions, uid, temp);
                 window.ADD_Construction_sql(Construction_Vue.Constructions[uid]);
                 Alert("成功", "设置图片成功", "success");
                 //  var fs = require([fs]);
                 //copyPhoto(Construction_Vue.input_message.photoSrc,"dataPhoto/"+String(uid)+".jpg");
             }

        }




    }
});

flag = 0;
