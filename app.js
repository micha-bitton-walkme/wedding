function myFunction() {
    var jsonfile = JSON.parse('./seats.json');
    var fname = 'יוסי חכמון';
    // var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var t = JSON.parse('{"name": "Micha", "table": "4"}');
    var uniqname = t['name']
    var table = t['table']
    for (var key, value in jsonfile) {
        if (json.hasOwnProperty(key)) {
            if (fname + lname.test(key)) {
                console.log('match!', jsonfile[key]); // do stuff here!
            }
            if ( value == fname ) {
            swal("Table "  + value + "!", key + " thank you for coming, enjoy :)", "success");
            }
        }
    }
    console.log(table)
    swal("Table "  + table + "!", fname + " thank you for coming, enjoy :)", "success");
    // alert(t['jobtitel'])
    var form =   {"first_name":document.getElementById("fname").value,
                     "last_name":document.getElementById("lname").value};
  
    console.log(form.first_name);
    console.log(JSON.stringify(form));
    console.log(data.name)
  }