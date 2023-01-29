var resumeData = {
  name : "陳冠廷",
  nameEng : "Chen-Guan-Ting"
}

var label = {
  basic : "基本資料",
  basicEng : "Basic Information",
  contact : "聯絡資料",
  contactEng : "Contact Information",
  skills : "技能",
  skillsEng : "Skills",
  experiences : "經歷",
  experiencesEng : "Experiences",
  works : "工作經歷",
  worksEng : "Works"
}

var basicContent = [
  {id : 0 , content : "出生日期：1998年07月08日"},
  {id : 1 , content : "國立雲林科技大學 資訊管理系"},
  {id : 2 , content : "期間：2016年09月至2020年06月"}
];

var contactContent = [
  {id : 0 , content : "Tel：0975-780-154"},
  {id : 1 , content : "Mail：willy870708@gmail.com"}
];

var skillsContent = [
  {id : 0 , content : "Java" , level : 80},
  {id : 1, content : "SQL" , level : 80},
  {id : 2 , content : "C#.NET" , level : 50},
  {id : 3 , content : "C" , level : 50},
  {id : 4 , content : "Git" , level : 50},
  {id : 5 , content : "Python" , level : 50},
  {id : 6 , content : "Html/CSS/JS" , level : 50}
];
var experiencesContent2021 = [
  {id : 0 , content : "玉山銀行" , year : 2020 , position : "程式開發人員"},
];

var experiencesContent2020 = [
  {id : 0 , content : "新加坡商鈦坦科技" , year : 2020 , position : "實習生"},
];
var experiencesContent2019 = [
  {id : 0 , content : "全國學生專題製作競賽" , year : 2019, position : "佳作"},
  {id : 1 , content : "AIGO人才培育計畫成果發表" , year : 2019, position : "佳作"},
  {id : 2 , content : "AIGO人才培育計畫" , year : 2019, position : "實習生"},
  {id : 3 , content : "第八屆資管系管理學課程" , year : 2019, position : "大助教"},
  {id : 4 , content : "TQC電子商務" , year : 2019, position : "專業級合格"},
];

var experiencesContent2018 = [  
  {id : 0 , content : "雲科大 人工智慧研究中心  " , year : 2018, position : "工讀生"},
  {id : 1 , content : "第一屆 雲科資管營隊  " , year : 2018, position : "負責人"},
  {id : 2, content : "系學會幹部  ", year : 2018 , position : "執行秘書兼文書長"},
  {id : 3, content : "第七屆 資管系管理學課程   ", year : 2018 , position : "助教"}
];

var experiencesContent2017 = [  
  {id : 0 , content : "第一屆系上舉辦跨校活動" , year : 2017, position : "負責人"},
  {id : 1 , content : "雲科大 總務處保管組" , year : 2017, position : "工讀生"},
  {id : 2, content : "第六屆 資管系管理學課程", year : 2017 , position : "負責人"}
];

var worksContent =[
  {id : 0, content : "ASP.NET Core 專案開發"},
  {id : 1, content : "ASP.NET MVC 專案開發"},
  {id : 2, content : "Java Spring boot + Vue 專案開發"},
  {id : 2, content : "影像辨識 專案開發"},
  {id : 3, content : "敏捷開發經驗"},
]

var vm = new Vue({
  el: "#resume",
  data: {
    resume: resumeData,
    label: label
  }
})

function changeColor(name){
  $("#"+name).css({
      "font-weight": "bolder"
    });
}
function recoverColor(name){
  $("#"+name).css({
      "font-weight": "lighter"
    });
}