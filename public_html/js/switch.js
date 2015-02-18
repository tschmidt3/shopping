

$(document).ready(function(){
    $('.content').on( "click", '.switch', function() {
        //moves the switch to either the right or left
        $(this).toggleClass("switchOn");
        //cross out the item
        $(this).parent().parent().toggleClass("selected");
    });
    //Save a new item
    $(".item").keypress(function(e) {
        if(e.which == 13) {
            //Check to make sure that the value has changed
            if($(this).val() == "Enter the quantity and item you are looking for"){
                
            }
            else{
                //Save the inputed value into the list
                $(".content").append(
                        '<li><label><input type="checkbox"'+ 
                        'name="checkboxName" class="checkbox"/>'+
                        '<div class="switch"></div></label><p>'+
                        $(".item").val()+
                        '<i class="fa fa-minus-square"></i></p></li> ');
                //Reset the input value of the text box
                $(".item").val("Enter the quantity and item you are looking for");
                //Select the input box
                $(".item").select();
            }
        }
    });
    //Delete an item
    $(".content").on("click", ".fa-minus-square", function() {
        $(this).parent().parent().remove();
    });
});


