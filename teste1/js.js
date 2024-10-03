var element = document.getElementById('arquivo');

const button = document.getElementById('download')

var opt = {
    margin:       0,
    filename:     'myfile.pdf',
    image:        { type: 'jpeg', quality: 0.95 },
    html2canvas:  { scale: 4},
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
};

button.addEventListener("click", () => {
    handleclick(element)
    console.log('teste1')
})

function handleclick(element) {
    html2pdf().set(opt).from(this.element).save();
}
