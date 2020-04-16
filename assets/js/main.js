$(document).ready(function () {
    

    var todoItem = ['Seguire la lezione', "Fare l'esercizio pomeridiano","Consegnare l'esercizio"];

    var list = $('.todo');
    var newItem = $('.input-text');

    for (var i = 0; i < todoItem.length; i++){

        // clonare il template della lista
        var elementList = $('.template li').clone();

        // aggiunge testo alla lista della
        elementList.prepend(todoItem[i]);

        list.append(elementList);

    };


    /* 
    Rimozione item dalla lista
    In questo caso riusciamo a eleminare tutti gli elementi 
    sia quelli inseriti in precedenza che quelli inseriti dall'utente 
    */

    $('body').on('click', '.todo li i', function(){
        $(this).parent().remove();
    });


    // Aggiungo un nuovo item
    newItem.keyup(function(event){

        if(event.which ==13){
            var testo = $(this).val().trim();

            if (testo !== ''){
                var newElement = $('.template li').clone();
                newElement.prepend(testo);
                list.append(newElement);
            
                // pulire l'input dopo l'invio
                newItem.val('');
            }
        }
    });

    // Rendiamo il ToDo completato
    $('body').on('click', '.todo li', function(){
        $(this).toggleClass('completed');
        $(this).toggleClass('fas fa-check');
    });


});