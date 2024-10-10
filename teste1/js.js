var element1 = document.getElementById('arquivo1');
var element2 = document.getElementById('arquivo2');

const button1 = document.getElementById('download1')
const button2 = document.getElementById('download2')

var opt = {
    margin:       0,
    filename:     'myfile.pdf',
    image:        { type: 'jpeg', quality: 0.95 },
    html2canvas:  { scale: 4},
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
};

button1.addEventListener("click", () => {
    html2pdf().set(opt).from(this.element1).save()
    console.log('teste1')
})
button2.addEventListener("click", () => {
    html2pdf().set(opt).from(this.element2).save();
    console.log('teste2')
})

