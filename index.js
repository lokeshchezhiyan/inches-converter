function convert(){
    const input = Number(document.getElementById("input").value)
    const cnv   = input/2.54
    const output=document.getElementById("result")
    output.innerHTML=cnv.toFixed(3) + "inches"
}
