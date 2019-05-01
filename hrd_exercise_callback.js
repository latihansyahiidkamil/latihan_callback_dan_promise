// Latihan callback 
// Ngebuat callback2 yang beranak supaya berasa callback-hellnya yg nantinya dibandingin sama promise

// Belum jadi dipakai <= notifberkas=false;
// Belum jadi dipakai <= loopcheck=true;
// Varsi simple dulu ceritanya

// Random untuk delay supaya terlihat lebih realistis dan untuk pembuktian callback
var random = Math.random() * 5000 + 1000;

//1 Pelamar submit data ke HR
function pelamarSubmit(data,callback){
    console.log("1. Pelamar mensubmit "+data);
    callback(data);
}

//2 HR notif Pelamar untuk Psikotest
function hrdMerespon(data,callback){
    setTimeout(() => {
        console.log("2. Hr menerima "+data+" dari pelamar dan kemudian memberikan notifikasi kepada pelamar");
        callback();
    },random);
}

//3 Pelamar datang untuk Psikotest
function pelamarDatang(callback){
    setTimeout(() => {
       console.log("3. Pelamar datang, disuruh menunggu, kemudian diberikan soal psikotest");
       callback(); 
    },2000);
}

//4 Pelamar menyerahkan hasil test ke HR
function pelamarSerahkan(callback){
    setTimeout(() => {
        console.log("4. Pelamar mengerjakan dan kemudian menyerahkan hasil psikotest");
        callback();    
    }, 4000);
}

//5 HR followup hasil Psikotest ke User
function hrFollowup(callback){
    setTimeout(() => {
        console.log("5. HR followup hasil Psikotest ke User");
        callback();        
    }, random);
}

//6 User konfirmasi ok ke HR soal Pelamar
function userKonfirmasi(callback){
    setTimeout(() => {
        console.log("6. User konfirmasi ok ke HR soal Pelamar");
        callback();
    }, random);
}

//7 HR notif ke Pelamar untuk interview dengan User
function notifInterview(callback){
    setTimeout(() => {
        console.log("7. HR notif ke Pelamar untuk interview dengan User");
        callback();
    }, random);
}

//8 Pelamar datang ke User untuk interview
function interviewUser(callback){
    setTimeout(() => {
        console.log("8. Pelamar datang ke User untuk interview");
        callback();
    }, random);
}

//9 User konfirmasi ok ke HR soal Pelamar lulus interview
function userOk(callback){
    setTimeout(() => {
        console.log("9. User konfirmasi ok ke HR soal Pelamar lulus interview");
        callback();
    }, random);
}

//10 HR Notif ke Pelamar untuk mulai bekerja
function notifDiterima(callback){
    setTimeout(() => {
        console.log("10. HR Notif ke Pelamar untuk mulai bekerja");
        callback();
    }, random);
}

//11 Pelamar mulai masuk bekerja
function pelamarBekerja(callback){
    setTimeout(() => {
        console.log("11. Pelamar mulai masuk bekerja");
        callback();
    }, random);
}

function happyEnding(){
    setTimeout(() => {
        console.log("12. Happy Ending! Usaha yang keras takkan menghianati hasil")
    }, random);
}

pelamarSubmit("CV ku",(data)=>{
    hrdMerespon(data, ()=>{
        pelamarDatang( ()=>{
            pelamarSerahkan( ()=>{
                hrFollowup( ()=>{
                    userKonfirmasi( ()=>{
                        notifInterview( ()=>{
                            interviewUser( ()=>{
                                userOk( ()=>{
                                    notifDiterima( ()=>{
                                        pelamarBekerja(happyEnding)
                                    } )
                                })
                            })
                        })
                    })
                })
            })
        })
    })
});