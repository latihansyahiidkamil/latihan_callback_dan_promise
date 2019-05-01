latihan_callback_dan_promise

terdapat 2 file javascript, satu file untuk penyelesaian menggunakan callback file lainnya menggunakan promise

setelah fungsi didefinisikan,

pemanggilan versi callback=

//Callback Hell !!!

pelamarSubmit("CV syahiid",(data)=>{
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


pemanggilan versi promise=

//promise lebih terlihat rapi

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
