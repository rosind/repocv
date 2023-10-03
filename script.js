var btn = document.querySelector("button");
    btn.onclick = () =>{
        window.print();
    }

/*var typed = new Typed('p .ok', {
    strings: ["Je suis un humain", "et j'exprime mon mécontentement"],
    typeSpeed: 20,
  });
// TYPED
var typed = new Typed('.typed', {
    strings: ["Je suis un humain", "et j'exprime mon mécontentement"],
    typeSpeed: 20,
  });*/
/*change image click function*/

$("#image-container").click(function() {
  if($("#two").hasClass("okok")){
      $("#one").addClass("okok");
      $("#two").removeClass("okok");
  }else{
      $("#two").addClass("okok");
      $("#one").removeClass("okok");
  }
});
/*english/french*/

$(document).ready(function(){
  if($('#englishflag').click(function(){
  $(".navbar h2").text("CV - English - Guillaume - 2023");
  $("#etude").text("Student at the Haute Ecole in Hainaut");
  $('#school').text("School contact");
  $('#information').text("Informations");
  $('#address').text("Cuesmes street, 186");
  $('#born').text("Born January 12, 2003");
  $('#permit').text("Driving licence B");
  $('#assets').text("Assets");
  $('#asset1').text("Conscientious");
  $('#asset2').text("Relational");
  $('#asset3').text("Team spirit");
  $('#asset4').text("Adaptability");
  $('#skills').text("Skills");
  $('#skill1').text("Perseverance");
  $('#skill2').text("Direction of contact");
  $('#skill3').text("Dynamic");
  $('#skill4').text("Observer");
  $('#langues').text("Languages");
  $('#lang1').text("French");
  $('#lang2').text("English");
  $('#lang3').text("Dutch");
  $(".myprofil span").text("Currently studying for a bachelor's degree in computer science and systems oriented networks and telecommunications, I want to train in the security of computer systems");
  $('#studies').text("STUDIES");
  /*ecole*/
  $('#heh').text("Haute Ecole en Hainaut at the Science and Computer Technology campus in Mons");
  $('#date1').text("Sept. 2021 - June. 2024");
  $('#diplome1').text("Bachelor in Computer Science & Systems Orientation Networks and Telecommunications");
  $('#option1').text("Security");
  $('#partenaire').text("School in partnership with Cisco Networking Academy");
  $('#Ido1').text("Linux, Windows Server 2019");
  $('#Ido2').text("Web Development (Front-end/Back-end)");
  $('#Ido3').text("IT infrastructure");
  $('#Ido4').text("Programming (C#, Python, JS, React)");
  $('#ipes').text("Provincial Institute of Education in Ath");
  $('#date2').text("Sept. 2019 - June. 2021");  
  $('#option2').text("Computer technician");
  $('#diplome2').text("Diploma obtained: CQ6 / CESS");
  $('#do1').text("Microsoft 365");
  $('#do2').text("Troubleshooting, fixed and laptop PC configuration");
  $('#do3').text("Cloud technology");
  $('#do4').text("Configuring Windows Server 2012");
  $('#csm').text("Sainte-Marie College in Saint-Ghislain");
  $('#date3').text("Sept. 2014 - June. 2018");
  $('#option3').text("Economy/Science");
  /*exp professionelles*/
  $('#exp-pro').text("PROFESSIONAL EXPERIENCE");
  $('#job1').text("From 2016 – 2020: Sale on market (Italian Trade)");
  $('#caract1').text("In Bakery/Pastry");
  $('#job2').text("Since 2021: Student job at Colruyt Mons");
  $('#caract2').text("Checkout and restocking in store");
  $('#exp-annexe').text("ANNEX EXPERIENCES");
  $('#orga1').text("Since 2019: Sports event organizer (Airsoft)");
  $('#orga2').text("Getting in touch");
  $('#orga3').text("Animation");
  $('#hobbies').text("INTERESTS");
  $('#run').text("Running");
  $('#run2').text("Hiking");
  $('#run3').text("Travel");
  $('#run4').text("Web programming");
  $('#button').text("CV in PDF");
      }));
    
  if($('#frenchflag').click(function(){
    location.reload(true);
  }));
  });


