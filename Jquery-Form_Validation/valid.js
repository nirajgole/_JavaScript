$().ready(function(){
    $("#myForm").validate({
        rules:{
            username:{
                required:true,
                minlength:5
            },
            password:{
                required:true,
                minlength:8
            },
            email:{
                required:true,
                myMail:true
            },
            skills:{
                required:true
            }
            // city:{
            //     required:true,
            //     selectcheck:true
            // }
        },
        messages:{
            username:{
                required:"<br>Please Enter Username",
                minlength:"<br>Please Enter Minimum 5 characters"
                
            },
            password:{
                required:"<br>Please enter password",
                minlength:"<br>Minimum 8 characters required"
            },
            email:{
                required:"<br>Please Enter Email"
            },
            skills:{
                required:"<br>Please choose your skill"
            }
            // city:{
            //     required:"<br>Enter city"
            // }
        },
        errorClass:"error"
    })
})

$.validator.addMethod("myMail",function(value,element){
    return this.optional(element)||/^.+@cybage.com$/.test(value);
},"<br>Only cybage.com mail addresses are allowed.");



$( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#skills" ).autocomplete({
      source: availableTags
    });
    
    //   chosen plugin
    $('.city-select').chosen();
  } );



//   $.validator.addMethod('selectcheck', function (value) {
//     return (value != '0');
// }, "<br>city required");
