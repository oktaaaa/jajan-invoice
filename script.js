

function printInvoice(){
    window.print()
}

function addRow(){
    // body.innerHTML += '<th scope="row"></th><td><input type="text" class="form-control" ></td> <td><input type="number" class="form-control text-end" name="qty" onchange="Calc(this);"></td> <td><input type="number" class="form-control text-end" name="rate"  onchange="Calc(this);"></td> <td><input type="number" class="form-control text-end" name="amt" value="0" disabled=""></td> <td class="NoPrint"><button type="button" class="btn btn-sm btn-danger" onclick="BtnDel(this)">X</button></td>'
    
    let row = $("#TRow").clone().appendTo("#TBody") ;
    $(row).find("input").val('');
    $(row).removeClass("d-none");
    $(row).find("th").first().html($('#TBody tr').length - 1);
}

function deleteRow(row){
    $(row).parent().parent().remove()
    countTotal();

    $("#TBody").find("tr").each(
    function(index)
    {
        $(this).find("th").first().html(index);
    }

    );
}

function add(row){
    let getNum =  $(row).parent().parent().index()

    let qty = document.getElementsByName("qty")[getNum].value
    let rate = document.getElementsByName("rate")[getNum].value

    let amount =  qty * rate
    document.getElementsByName("amt")[getNum].value = amount

    GetTotal()
}

function countTotal(){
    let sum =  0
    let totals = document.getElementsByName("amt")

    for (let i = 0; i < totals.length; i++){
        let amt = totals[i].value
        sum = + (sum)+ +(amt)
    }

    document.getElementById("FTotal").value = sum

    var gst =  document.getElementById("FGST").value;
    var net = +(sum) + +(gst);
    document.getElementById("FNet").value = net;
}