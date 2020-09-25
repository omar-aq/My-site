let theme = localStorage.getItem('theme')
if(theme == null){
    changeTheme('default')
}else{
    changeTheme(theme)
}
// color mode changer------------------------------------------
let themeDot = document.getElementsByClassName('theme-dot');

for (var i = 0;i < themeDot.length;i++)
{
    themeDot[i].addEventListener('click',function()
    {
        let mode = this.dataset.mode
        changeTheme(mode)
    }
    )
    
}
function changeTheme(mode){
    if(mode == 'blue'){
        document.getElementById('theme-style').href="blue.css"
    }
    if(mode == 'light'){
        document.getElementById('theme-style').href="light.css"
    }
    if(mode == 'green'){
        document.getElementById('theme-style').href="green.css"
    }
    if(mode == 'purple'){
        document.getElementById('theme-style').href="default.css"
    }

    localStorage.setItem('theme', mode);
}
let emailBtn = document.getElementById("email-btn");
emailBtn.addEventListener('click', function(){
    window.open('mailto:omar.1997aq@gmail.com');
})

// copy button----------------------------------------
// function copyToClipboard(element) {
//     var $temp = $("<input>");
//     $("body").append($temp);
//     $temp.val($(element).text()).select();
//     document.execCommand("copy");
//     $temp.remove();
//     swal("send me email","Copied the text: omar.1997aq@gmail.com","success");
//     window.open('mailto:omar.1997aq@gmail.com');
//   }

// let submitBtn = document.getElementById('submit-btn');


// submitBtn.addEventListener('click',function(e){
//     e.preventDefault();
//     window.alert("Massage sending success")
// })
// let name = document.getElementById('name');
// let email = document.getElementById('email');
// let subject = document.getElementById('subject');
// let massage = document.getElementById('massage');
// e.preventDefault()
// if(!name.value || !email.value || !massage.value){
//     window.alert('Please check your entries')
//     return false
// }
// else{
//     $.ajax
//     method: 'POST'
//     url: '//formspree.io/omar.1997aq@gmail.com'
//     data: $('#contact-form').serialize()
//     datatype: 'json'
// }

// $(this).get(0).reset()
// windows.alert('Message sent' )
// console.log("WTF");
// e.preventDefault();
// window.open('mailto:test@example');