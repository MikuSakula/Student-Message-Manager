// Botton_Cg_Party: () => {
//     if (Party_Vue.input_message.college == "" ||
//         Party_Vue.input_message.grade == "" ||
//         Party_Vue.input_message.stdID == "" ||
//         Party_Vue.input_message.stdName == "" ||
//         Party_Vue.input_message.whichGrade == ""
//     ) {
//         Alert("错误", "学院、班级、学号、姓名、所属年级为必填项", "warning", "#bottoncgptalert");
//     } else {
//
//
//         $("#repartymodal").modal('hide');
//         var uid = Party_Vue.input_message.uid;
//
//         switch (Party_Vue.Partys[uid].whichGrade) {
//             case '1':
//                 Vue.set(Party_Vue.Partys[uid], Party_Vue.Partys[uid].numInOne, '');
//                 break;
//             case '2':
//                 Vue.set(Party_Vue.Partys[uid], Party_Vue.Partys[uid].numInTwo, '');
//                 break;
//             case '3':
//                 Vue.set(Party_Vue.Partys[uid], Party_Vue.Partys[uid].numInThree, '');
//                 break;
//             case '4':
//                 Vue.set(Party_Vue.Partys[uid], Party_Vue.Partys[uid].numInFour, '');
//                 break;
//             default:
//                 break;
//         }
//
//         window.DEL_Party(uid);
//         for (let obj in Party_Vue.input_message)
//             Vue.set(Party_Vue.Partys[uid], obj, Party_Vue.input_message[obj]);
//         switch (Party_Vue.Partys[uid].whichGrade) {
//             case '1':
//                 Vue.set(Party_Vue.Partys[uid], Party_Vue.Partys[uid].numInOne, ++one);
//                 break;
//             case '2':
//                 Vue.set(Party_Vue.Partys[uid], Party_Vue.Partys[uid].numInTwo, ++two);
//                 break;
//             case '3':
//                 Vue.set(Party_Vue.Partys[uid], Party_Vue.Partys[uid].numInThree, ++three);
//                 break;
//             case '4':
//                 Vue.set(Party_Vue.Partys[uid], Party_Vue.Partys[uid].numInFour, ++four);
//                 break;
//             default:
//                 break;
//         }
//         var fir = 0,sec = 0,thi = 0,fou = 0;
//         for(let obj in Party_Vue.Partys){
//             switch (Party_Vue.Partys[obj].whichGrade) {
//                 case 1:
//                     Vue.set(Party_Vue.Partys[obj], Party_Vue.Partys[obj].numInOne, ++fir);
//                     break;
//                 case 2:
//                     Vue.set(Party_Vue.Partys[obj], Party_Vue.Partys[obj].numInTwo, ++sec);
//                     break;
//                 case 3:
//                     Vue.set(Party_Vue.Partys[obj], Party_Vue.Partys[obj].numInThree, ++thi);
//                     break;
//                 case 4:
//                     Vue.set(Party_Vue.Partys[obj], Party_Vue.Partys[obj].numInFour, ++fou);
//                     break;
//                 default:
//                     break;
//             }
//         }
//
//
//         let temp  = Party_Vue.Partys[uid];
//         temp.uid = ++maxuid;
//         delete Party_Vue.Partys[uid];
//         uid = temp.uid;
//         Vue.set(Party_Vue.Partys,uid,temp);
//
//
//         window.ADD_Party_sql(Party_Vue.Partys[uid]);
//         ReadPartys(uid);
//
//
//         Alert("成功", "修改成功", "success");
//
//     }