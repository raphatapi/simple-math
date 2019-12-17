$( document ).ready(function() {
    $('#entry_1').focus();
    let startTime = null;
    $('.entry').blur(function() {
        if(startTime == null){
            startTime =  new Date();
            let st = startTime.toLocaleTimeString();
            $("#startTime").html(st);
        }
        let entryID = this.id;
        let problemID = entryID.replace('entry','#problem');
        let resultID = entryID.replace('entry','result');
        let entryValue = document.getElementById(entryID).value;
        let resultValue = document.getElementById(resultID).value;
        if(parseInt(entryValue) == parseInt(resultValue)) {
            $(problemID).css("background-color","Aquamarine ");
            if(isComplete()){
                let resultElems = document.getElementsByClassName('result');
                let entryElems = document.getElementsByClassName('entry');
                let entryValues = [];
                $.each(entryElems, function( index, value ) {
                    entryValues.push(value.value);
                });
                let resultValues = [];
                $.each(resultElems, function( index, value ) {
                    resultValues.push(value.value);
                });
                if(arraysEqual(entryValues, resultValues)){
                    let endTime = new Date();
                let et = endTime.toLocaleTimeString();
                $("#endTime").html(et);
                let timeDiff = endTime - startTime;
                $("#timeDiff").html(timeDiff/1000);
                }
            }
        }
    });

    function arraysEqual(a, b) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length != b.length) return false;
        for (let i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }

    function isComplete() {
        let isValid = true;
        $("input").each(function() {
            let element = $(this);
            if (element.val() == "") {
                isValid = false;
            }
        });
        return isValid;
    }
});