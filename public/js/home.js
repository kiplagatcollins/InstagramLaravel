$(function() {
    $.validator.addMethod("noSpace", function(value, element) {
        return value == '' || value.trim().length != 0
    }, "No space allowed");
    $("#addform").validate({
        rules: {
            name: {
                required: true,
                minlength: "4",
                noSpace: true
            },
            quantity: {
                required: true,
                noSpace: true
            },
            image: {
                required: true,
                noSpace: true
            },
            price: {
                required: true,
                noSpace: true
            },
            description: {
                required: true,
                noSpace: true
            }
        },
        messages: {
            name: {
                required: 'First Name is required',
                minlength: 'The name should be 4 letters long'
            },
            image: {
                required: 'The flower image is required'
            },
            quantity: {
                required: 'Quantity is mandatory'
            },
            description: {
                required: 'Please give the description of the flower'
            },
            price: {
                required: 'The price of the flower is required'
            }
        }

    });
    $("#register").validate({
        rules: {
            fname: {
                required: true,
                noSpace: true
            },
            lname: {
                required: true,
                noSpace: true
            },
            password: {
                required: true,
                minlength: "8",
            },
            dob: {
                required: true
            },
            address: {
                required: true,
                noSpace: true
            },
            email: {
                required: true,
                email: true
            },
            user: {
                required: true
            },
            phone: {
                required: true,
                noSpace: true
            },
            username: {
                required: true,
                minlength: "4",
                noSpace: true
            }

        },
        messages: {
            username: {
                required: 'Your username is required',
                minlength: 'The user name should be 4 letters long'
            },
            address: {
                required: 'Your address location is required'
            },
            quantity: {
                required: 'Quantity is mandatory'
            },
            email: {
                required: 'Please enter the e-mail'
            },
            phone: {
                required: 'please enter your phone number'
            },
            fname: {
                required: 'Your first name is required'
            },
            lname: {
                required: 'Your last name is required'
            },
            password: {
                required: 'Password is required',
                minlength: 'The minimum length should be 8 characters'
            },
            dob: {
                required: 'Choose your birth date is required'
            },
        }

    });

});