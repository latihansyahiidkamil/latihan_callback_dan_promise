// Varsi simple dulu ceritanya biar pola nya terlihat jelas secara intuitif

// Random untuk delay supaya terlihat lebih realistis dan untuk pembuktian callback
var random = Math.random() * 5000 + 1000;

//1 Pelamar submit data ke HR
function pelamarSubmit(data) {
    return new Promise(function(resolve, reject) {
        console.log("1. Pelamar mensubmit "+data);
        setTimeout(() => resolve(data), 4000);
    });
}
  
//2 HR notif Pelamar untuk Psikotest
function hrdMerespon(data) {
    return new Promise(function(resolve, reject) {
        console.log("2. Hr menerima "+data+" dari pelamar dan kemudian memberikan notifikasi kepada pelamar");
        setTimeout(() => resolve(data), 2000);
    });
}

//3 Pelamar datang untuk Psikotest
function pelamarDatang(data) {
    return new Promise(function(resolve, reject) {
        console.log("3. Pelamar datang, disuruh menunggu, kemudian diberikan soal psikotest");
        setTimeout(() => resolve(data), 500);
    });
}

//4 Pelamar menyerahkan hasil test ke HR
function pelamarSerahkan(data) {
    return new Promise(function(resolve, reject) {
        console.log("4. Pelamar mengerjakan dan kemudian menyerahkan hasil psikotest");
        setTimeout(() => resolve(data), 2500);
    });
}

//5 HR followup hasil Psikotest ke User
function hrFollowup(data) {
    return new Promise(function(resolve, reject) {
        console.log("5. HR followup hasil Psikotest ke User");
        setTimeout(() => resolve(data),random);
    });
}

//6 User konfirmasi ok ke HR soal Pelamar
function userKonfirmasi(data) {
    return new Promise(function(resolve, reject) {
        console.log("6. User konfirmasi ok ke HR soal Pelamar");
        setTimeout(() => resolve(data),random);
    });
}

//7 HR notif ke Pelamar untuk interview dengan User
function notifInterview(data) {
    return new Promise(function(resolve, reject) {
        console.log("7. HR notif ke Pelamar untuk interview dengan User");
        setTimeout(() => resolve(data),random);
    });
}

//8 Pelamar datang ke User untuk interview
function interviewUser(data) {
    return new Promise(function(resolve, reject) {
        console.log("8. Pelamar datang ke User untuk interview");
        setTimeout(() => resolve(data),random);
    });
}

//9 User konfirmasi ok ke HR soal Pelamar lulus interview
function userOk(data) {
    return new Promise(function(resolve, reject) {
        console.log("9. User konfirmasi ok ke HR soal Pelamar lulus interview");
        setTimeout(() => resolve(data),random);
    });
}

//10 HR Notif ke Pelamar untuk mulai bekerja
function notifDiterima(data) {
    return new Promise(function(resolve, reject) {
        console.log("10. HR Notif ke Pelamar untuk mulai bekerja");
        setTimeout(() => resolve(data),random);
    });
}

//11 Pelamar mulai masuk bekerja
function pelamarBekerja(data) {
    return new Promise(function(resolve, reject) {
        console.log("11. Pelamar mulai masuk bekerja");
        setTimeout(() => resolve(data),random);
    });
}

//12 Happy Ending Hore
function happyEnding(data) {
    return new Promise(function(resolve, reject) {
        console.log("12. Happy Ending! Usaha yang keras takkan menghianati hasil");
        setTimeout(() => resolve(data),random);
    });
}

pelamarSubmit("CV syahiid")
.then(hrdMerespon)
.then(pelamarDatang)
.then(pelamarSerahkan)
.then(hrFollowup)
.then(userKonfirmasi)
.then(notifInterview)
.then(interviewUser)
.then(userOk)
.then(notifDiterima)
.then(pelamarBekerja)
.then(happyEnding)
