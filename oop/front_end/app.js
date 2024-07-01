var id;


function add_data(){
    $.ajax({
        url: 'https://localhost/test/oop/back_end/users',
        method: 'POST',
        data:{
            name: $("#add_name").val(),
            email: $("#add_email").val(),
            phone: $("#add_phone").val()

        },
        success: function(response) {
            // Handle the API response here
            console.log(response);
            alert('add success');
            location.reload(true);
            
 
        },
        error: function(xhr, status, error) {
            // Handle errors here
            console.error(status, error);
            alert('add error');
        }
    });
}

function open_edit_data(index,name,email,phone){
    $("#modal_edit").css("display","flex")

    $("#edit_name").val(name);
    $("#edit_email").val(email);
    $("#edit_phone").val(phone);
    id = index;
}

function edit_data(){
    $.ajax({
        url: 'https://localhost/test/oop/back_end/users/'+ id,
        method: 'PUT',
        data:{
            name: $("#edit_name").val(),
            email: $("#edit_email").val(),
            phone: $("#edit_phone").val()

        },
        success: function(response) {
            // Handle the API response here
            console.log(response);
            alert('add success '+ id);
            location.reload(true);
            
 
        },
        error: function(xhr, status, error) {
            // Handle errors here
            console.error(status, error);
            alert('add error');
        }
    });

}

function close_edit(){
    $("#modal_edit").css("display","none")
}


function open_delete(index){
    $("#modal_delete").css("display","flex")
    console.log(index);
    id = index;
    console.log(id);
}

function delete_data(){
    $.ajax({
        url: 'https://localhost/test/oop/back_end/users/'+id,
        method: 'DELETE',
        
        success: function(response) {
            // Handle the API response here
            console.log(response);
            alert('delete success '+id);
            location.reload(true);
            
 
        },
        error: function(xhr, status, error) {
            // Handle errors here
            console.error(status, error);
            alert('delete error');
        }
    });
}

function close_delete(){
    $("#modal_delete").css("display","none")
}