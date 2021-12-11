function hello(){  
    alert("hello javatpoint user");  
    
}  
function loadPage() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", 'ques.html', false);
    xmlhttp.send();
    return xmlhttp.responseText;
};

function show_chapter(chapter_no) {
	switch(chapter_no) {
		case 1:
            document.getElementById('a1').innerHTML = 
            "<p >آيا از ارسال پیام خود اطمینان دارید؟</p>" +
            "<button name='button' value='ok' onclick='show_chapter(2)' type='button' >بله</button>" +
            "<button name='button' value='ok' onclick='show_chapter(3)' type='button' >خبر</button>";
            break;
		case 2:
			alert("پیام شما با موفقیت ارسال شد");
            document.getElementById('a1').innerHTML =
            "<button name='button' value='ok' onclick='show_chapter(1)' type='button' >ارسال پیام</button>"
			break;
        case 3:
            document.getElementById('a1').innerHTML =
            "<button name='button' value='ok' onclick='show_chapter(1)' type='button' >ارسال پیام</button>"
			break;
		
	}
}
