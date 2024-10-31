$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbwQtQCjiePWVNoBnxEBb7C_e6PLWGJftLqRnqmpC_Tjc0HzlCMhu2eQUJcMkbrWXbjG/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})

// $().ready(function(){
//     $("#submit-form").validate({
//         rules:{
//             Name:{
//                 required:true,
                
//             },
//             Email:{
//                 required:true,
                
//             },
//             Message:{
//                 required:true,
                
//             }

//         }
//     })

// })


// $(document).ready(function() {
//     $("#sbmit-form").validate({
//         rules: {
//             Name: {
//                 required: true,
//                 minlength: 2
//             },
//             Email: {
//                 required: true,
//                 email: true
//             },
//             Message: {
//                 required: true,
//                 minlength: 10
//             }
//         },
//         messages: {
//             Name: {
//                 required: "Please enter your name",
//                 minlength: "Your name must be at least 2 characters long"
//             },
//             Email: {
//                 required: "Please enter your email",
//                 email: "Please enter a valid email address"
//             },
//             Message: {
//                 required: "Please enter a message",
//                 minlength: "Your message must be at least 10 characters long"
//             }
//         },
        
//     });
// });