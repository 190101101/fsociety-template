function sidebarsearchinput() {
    var search, filter, wapperNotice, x,  noticeValue;
    search = document.getElementById("sidebarsearchinput");
    filter = search.value.toUpperCase();

    wapperNotice = document.getElementById("wrappernotice");

    notice = wapperNotice.getElementsByClassName("notice");

   for (i = 0; i < notice.length; i++) {
        x = notice[i].getElementsByClassName("not-card-head")[0];
        noticeValue = x.textContent || x.innerText;
        if (noticeValue.toUpperCase().indexOf(filter) > -1) {
            notice[i].style.display = "";
        } else {
            notice[i].style.display = "none";
        }
    }
}

function sidesidebarsearchinput() {
    var search, filter, sidewrappernotice, x,  noticeValue;
    search = document.getElementById("sidesidebarsearchinput");
    filter = search.value.toUpperCase();

    sidewrappernotice = document.getElementById("sidewrappernotice");
    notice = sidewrappernotice.getElementsByClassName("notice");

   for (i = 0; i < notice.length; i++) {
        x = notice[i].getElementsByClassName("not-card-head")[0];
        noticeValue = x.textContent || x.innerText;
        if (noticeValue.toUpperCase().indexOf(filter) > -1) {
            notice[i].style.display = "";
        } else {
            notice[i].style.display = "none";
        }
    }
}

