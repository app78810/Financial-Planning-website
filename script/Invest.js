/**
 * Created by Amita on 5/24/2016.
 */


// if(document.getElementsByTagName('select')[0].selectedIndex)


function validate()
{
    console.log("hello");
    var riskSelected = document.getElementById("Risk").value;
    var percentage = document.getElementById("percent").value;
    var totalPercentage = 100;
    var Amount = parseInt(document.getElementById("amt").value);
    var InvestAmt = "";
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    if((riskSelected == 0) || (riskSelected == 1) || (riskSelected == 2 ) )
    {
       if(percentage < totalPercentage)
       {
            if(riskSelected == 0)
            {
                InvestAmt = Amount * 10/100 + Amount;

                document.getElementsByName("Amont").innerHTML = InvestAmt;

                cell1.innerHTML = "NEW CELL1";
                cell2.innerHTML = "NEW CELL2";
                cell3.innerHTML = "NEW CELL3";

            }
           if(riskSelected == 1)
           {
               InvestAmt = Amount * 7.5/100 + Amount;
           }
           if(riskSelected == 2)
           {
               InvestAmt = Amount * 5/100 + Amount;
           }

       }
        else{
           if(riskSelected == 0) {
               InvestAmt = Amount * 10 / 100 + Amount;
           }
           if(riskSelected == 1) {
               InvestAmt = Amount * 7.5 / 100 + Amount;
           }
           if(riskSelected == 2) {
               InvestAmt = Amount * 5 / 100 + Amount;
           }

       }

    }

}