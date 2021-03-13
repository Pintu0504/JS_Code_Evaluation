let inpcode = document.getElementById('inpcode');
let btnEncode = document.getElementById('encode')
let btnEncrypt = document.getElementById('encrypt')
let code = document.getElementById('code')

btnEncode.onclick = function(){
    let data = inpcode.value
    data = btoa(data)
    code.value = data
}
