
function Cal(){
    
var salary =document.getElementById("BS").value;
var totalWorkinghour = document.getElementById("TDT").value;
var totalWorkingMinute = document.getElementById("TDM").value;
var totalWorkingMinutes =Number(( totalWorkinghour*60 )+ Number(totalWorkingMinute));
var salaryPerMinute = (salary/totalWorkingMinutes);

if(isNaN(salary) || salary == ''){

alert("Input Data First");

}
const nf=Intl.NumberFormat('en-US',{
  minimumFractionDigits:0,
  maximumFractionDigits:0

});

var totalPayableMinutes =Number(( document.getElementById("TH").value*60 )+ Number(document.getElementById("TM").value));

var totalPayableSalary = totalPayableMinutes * salaryPerMinute;

document.getElementById("PS").value= nf.format(totalPayableSalary);

Swal.fire({
  title: 'Payable SALARY!',
  text:nf.format(totalPayableSalary),
  type:'success',
  icon: 'success',
  imageUrl: 'https://i.postimg.cc/6pgFry0M/logo.jpg',
  imageWidth:150,
  imageHeight:150,
  imageAlt: 'Custom image',
})
}
