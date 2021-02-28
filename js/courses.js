
/* courses page */
function showAll() {
    document.getElementById('uiux1').style.display = 'inline-block';    /* show all courses */
    document.getElementById('uiux2').style.display = 'inline-block';
    document.getElementById('java1').style.display = 'inline-block';
    document.getElementById('java2').style.display = 'inline-block';
    document.getElementById('db1').style.display = 'inline-block';
    document.getElementById('db2').style.display = 'inline-block';
    var x = document.getElementById('changeFooter');
    x.style.display = 'initial';    /* give the footer initial value */
}

function showUIUX() {
    document.getElementById('uiux1').style.display = 'inline-block';
    document.getElementById('uiux2').style.display = 'inline-block';
    document.getElementById('java1').style.display = 'none';    /* hide irrelevant courses */
    document.getElementById('java2').style.display = 'none';
    document.getElementById('db1').style.display = 'none';
    document.getElementById('db2').style.display = 'none';
    var x = document.getElementById('changeFooter');
    x.style.display = 'none';   /* hide footer */
}

function showJAVA() {
    document.getElementById('uiux1').style.display = 'none';
    document.getElementById('uiux2').style.display = 'none';
    document.getElementById('java1').style.display = 'inline-block';
    document.getElementById('java2').style.display = 'inline-block';
    document.getElementById('db1').style.display = 'none';
    document.getElementById('db2').style.display = 'none';
    var x = document.getElementById('changeFooter');
    x.style.display = 'none';
}

function showDB() {
    document.getElementById('uiux1').style.display = 'none';
    document.getElementById('uiux2').style.display = 'none';
    document.getElementById('java1').style.display = 'none';
    document.getElementById('java2').style.display = 'none';
    document.getElementById('db1').style.display = 'inline-block';
    document.getElementById('db2').style.display = 'inline-block';
    var x = document.getElementById('changeFooter');
    x.style.display = 'none';
}
