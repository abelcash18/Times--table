function showTable(){
    let start= document.getElementById("start").value
    let end = document.getElementById("end").value
    let row = document.getElementById("row").value
    let show =""
    for(let i = start; i <= end; i++){
       show += `<td><table><tr><th>${i} Times Table</tr></table><table>`
        for (let j= 1; j <=row ; j++){
            show +=`  
            <tr><td>${i} x ${j} = ${i * j}</td></tr>
            `
            console.log(`${i} x ${j} = ${i * j}  `)
                 }
           show += `</table></td>`
    }
    document.getElementById("table-display").innerHTML= show
}
