var queryUrl = "https://api.openbrewerydb.org/breweries?by_city=";
var breweryCity = ""

$.ajax({
    url: queryUrl,
    method: "GET"
})

    .then(function (response) {

        console.log(queryUrl);
        console.log(response);
    })

$("#click-me").on("click", function (brew) {
    fetch(inputValue.value)
})

$( "#inputId" ).keydown(function (key){
    var code = key.keyCode || key.which;
    if( code == 32 ) { 
        $( this ).val(
            function( index, value ){
                return value.substr( 0, value.length - 1 );
        })
        setTimeout(
            function(){
                $(this).val($(this).val() + "_");
            }, 10
        )
    }
})