getBirthdayMessage();

function getBirthdayMessage() {
    let url = window.location.href;
    let regexName = new RegExp("name" + "(=([^&#]*))");
    let resultsName = regexName.exec(url);
    let regexSeg = new RegExp("seg" + "(=([^&#]*))");
    let resultsSeg = regexSeg.exec(url);

    if (resultsName == null) {
        birthdayName = "Nata";
    } else {
        birthdayName = decodeURIComponent(resultsName[2]);
    }

    if (resultsSeg == null) {
        birthdaySeg = "general";
    } else {
        birthdaySeg = decodeURIComponent(resultsSeg[2]);
    }

    if (birthdaySeg == "fundraisers") {
        document.getElementById('letter').innerHTML = "<div class='center-letter animate-reveal animate-first'> <h1>Happy valentine's day!</h1><br><p style='margin: 0 10px; line-height:160%;'Halo, call. Makasih ya buat coklat nya, lucu banget wahahaha.<br><br>Maaf ya belum bisa ngasih apa apa di hari valentine besok, btw kapan kita mau bikin trend yg di tik tok woi?? Aku nungguin lohh 😡. Happy val's day sygg, makasih udah mau jadi temen aku yaa. Maaf kalo aku suka bikin kamu kesel atau ada sifat aku yg bikin kamu benci sama aku, Maaf cmn bisa kasih kata² aja. Soalnya love language ku kan word of affirmation waokqka, that if ur batman wont give it then i will. i love u 3000 hunn 💐💖.</p></div><div class='animate-reveal animate-second' style='margin-top: 15px;'> <a href='placeholderlink' style='margin-top: 15px; font-family: Arial; background-color: #f79420; -webkit-border-radius: 4px; border-radius: 4px; color: #ffffff; display: block; margin: 0 auto; font-size: 22px; font-weight: 700; line-height: 36px; text-align: center; text-decoration: none; width: 280px; -webkit-text-size-adjust: none;' target='_blank'>Start Fundraising</a></div>"
    } else {
        document.getElementById('letter').innerHTML = "<div><div id='center-letter' class='center-letter animate-reveal animate-first'> <h1>Happy valentine's day!</h1><br><p style='margin: 0 10px;'>Halo, call. Makasih ya buat coklat nya, lucu banget wahahaha.<br><br>Maaf ya belum bisa ngasih apa apa di hari valentine besok, btw kapan kita mau bikin trend yg di tik tok woi?? Aku nungguin lohh 😡. Happy val's day sygg, makasih udah mau jadi temen aku yaa. Maaf kalo aku suka bikin kamu kesel atau ada sifat aku yg bikin kamu benci sama aku, Maaf cmn bisa kasih kata² aja. Soalnya love language ku kan word of affirmation waokqka, that if ur batman wont give it then i will. i love u 3000 hunn 💐💖.</p></div><div class='animate-reveal animate-second' style='margin-top: 15px;'> <a href='placeholderlink' style='font-family: Arial; background-color: #f79420; -webkit-border-radius: 4px; border-radius: 4px; color: #ffffff; display: block; margin: 0 auto; font-size: 22px; font-weight: 700; line-height: 36px; text-align: center; text-decoration: none; width: 280px; -webkit-text-size-adjust: none;' target='_blank'>Start Fundraising</a></div></div>"
    }
}