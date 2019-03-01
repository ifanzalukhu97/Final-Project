let movies = [
  {
    id: 568709,
    title: "Preman Pensiun",
    poster_path:
      "https://image.tmdb.org/t/p/w500/7xfWyoz4SF5LHZ713eMtC2aZ0lT.jpg",
    overview:
      "Gobang kembali ke Bandung, mengundang teman-temannya, para mantan preman untuk bertemu kembali. Mereka yang diundang adalah Ujang, Murad, Pipit, Cecep, Bohim, Mang Uu, Dikdik dan Joni. Dikdik kemudian tidak jadi datang karena masalah dengan istrinya.  Dalam pertemuan yang disebut “reuni kecil-kecilan” itu, Gobang meminta bantuan teman-temannya untuk melakukan penyelidikan, siapa pelaku pembantaian terhadap adik iparnya hingga tewas.  Pelaku pembantaian kemudian diketahui adalah Darman dan kawan-kawan yang hanya sebagai orang suruhan. Dalang di balik kejadian itu ternyata teman mereka sendiri, sesama bekas anak buah Muslihat (Epy Kusnandar) yang sebenarnya juga sudah pensiun.  Muslihat mencoba mencegah terjadinya perang saudara, tapi Gobang sudah terlanjur datang dengan membawa dendam, “darah dibayar darah, nyawa dibayar nyaw",
    release_date: "2019-01-17",
    genre: "comedy",
    price: 30000
  },
  {
    id: 491854,
    title: "Foxtrot Six",
    poster_path:
      "https://image.tmdb.org/t/p/w500/uiMkCQMIccWk0b42YZXZ9xXyuC0.jpg",
    overview:
      "Escalating climate change is turning the world economy upside down. With crops dying and food price spiking, FOOD has replaced oil as the world's most valuable commodity. Among the very few lands still left fertile, Indonesia is quickly rising as the next economic superpower, when its government is suddenly and ruthlessly overtaken by a popular rogue political party. In just three days, six former Marines must work together, find their long-lost brotherhood, stop a nationwide government- sanctioned genocide, and save millions of lives, for one last shot at redemption. Or die trying.",
    release_date: "2019-02-21",
    genre: "action",
    price: 45000
  },
  {
    id: 554733,
    title: "Orang Kaya Baru",
    poster_path:
      "https://image.tmdb.org/t/p/w500/nesDPKzwk4QnG6SpPjUhZXXNGyK.jpg",
    overview:
      "Cerita tentang kaya mendadak yang dialami oleh sebuah keluarga yaitu Ibu (Cut Mini), Ayah (Lukman Sardi) dan tiga anak mereka: Tika (Raline Shah), Duta (Derby Romero), dan Dodi (Fatih Unru). Keluarga ini selalu menjalani kehidupan sehari-sehari mereka dengan serba apa adanya. Ketika sang ayah meninggal, barulah diketahui bahwa selama ini ia ternyata orang yang sangat kaya. Hartanya diwariskan kepada keluarga yang ia tinggalkan  Uang kaget tersebut kemudian digunakan oleh istri dan anak-anaknya. Mereka yang tadinya hidup susah, kini membeli rumah, mobil hingga barang-barang mewah lainnya.",
    release_date: "2019-01-24",
    genre: "drama",
    price: 60000
  },
  {
    id: 535526,
    title: "Antologi Rasa",
    poster_path:
      "https://image.tmdb.org/t/p/w500/6EILpfK4c1ekAUTGo9ApU6s2Lgz.jpg",
    overview:
      "The story of four bankers who have been friends for years: Harris, Keara, Ruly, and Denise, who secretly love each other. Harris is in love with Keara; Keara believes Ruly is her soul mate; Ruly’s heart has been engraved on Denise, and Denise had married someone else.",
    release_date: "2019-02-14",
    genre: "drama",
    price: 50000
  },
  {
    id: 578723,
    title: "Calon Bini",
    poster_path:
      "https://image.tmdb.org/t/p/w500/72Xk4cjiKy74AINaJ6T0HhRulLz.jpg",
    overview: `Because of the ambition and greed to become the village chief, Paklik Agung forces Ningsih to marry Sapto. Ningsih herself is more concerned about how to continue her studies, but her parents could not afford it. When it is decided that Ningsih would get married, she goes to Jakarta. Paklik Agung is confused. Sapto cries every day. Ningsih finds moral support and finally fall in love with a character in a virtual world called "Footsteps". Ningsih works for Prawira and Andini. In this family, in-law and daughter-in-law relations do not get along. The only thing that fits is Satria Bagus who is sent to school in London.`,
    release_date: "2019-02-14",
    genre: "drama",
    price: 50000
  },
  {
    id: 583600,
    title: "Kain Kafan Hitam",
    poster_path:
      "https://image.tmdb.org/t/p/w500/dDJxeXzvLP8amOUCs7F4yM7Jih9.jpg",
    overview:
      "Evelyn, a student, has two younger siblings: Arya and Maya who are still in elementary and middle school. Evelyn has a boyfriend, Bimo, who has a hobby of horror. In fact, he has a strange community on campus, a demon search community. Bimo is accompanied by Angeline and Roy in the community. Evelyn says that after her parents died in an accident, she has to move from her house because the house had been mortgaged to the bank for a long time. They find a house that was in line with Evelyn's financial abilities. Mysteries happen in that house.",
    release_date: "2019-02-14",
    genre: "horor",
    price: 45000
  },
  {
    id: 572667,
    title: "Terlalu Tampan",
    poster_path:
      "https://image.tmdb.org/t/p/w500/nAervZUh0oosR06cZtNrRWKIGBs.jpg",
    overview:
      "Witing Tresno Jalaran Soko Kulino alias Mas Kulin (Ari Irham) yang terlalu tampan selalu menghindari masuk ke sekolah regular dan memilih menghabiskan hampir 100% hidupnya di dalam rumah. Hal itu yang membuat ayahnya, Pak Archewe (Marcelino Lefrandt), ibunya, Bu Suk (Iis Dahlia), dan kakaknya, Mas Okis (Tarra Budiman), khawatir. Mereka menyusun skenario yang berhasil membuat Mas Kulin setuju untuk menghabiskan tahun terakhir masa SMA-nya di sekolah khusus pria, SMA Horridson. Ketampanan Mas Kulin terekspos ke dunia luar hingga hari-harinya berjalan tidak biasa: guru-guru wanita pingsan dan menjadi incaran siswi-siswi SMA BBM. Termasuk seorang gadis terlalu cantik: Amanda (Nikita Willy). Namun, di tengah semua itu, Mas Kulin menemukan Kibo (Calvin Jeremy) dan Rere (Rachel Amanda), yang membuatnya percaya bahwa masih ada orang yang dapat melihat dirinya apa adanya.",
    release_date: "2019-01-31",
    genre: "comedy",
    price: 40000
  },
  {
    id: 578854,
    title: "Satu Suro",
    poster_path:
      "https://image.tmdb.org/t/p/w500/oLlGIbXhDOIWF8u2Ro0VbDwiY2s.jpg",
    overview:
      "Adinda, who is pregnant, has just moved to a house on the edge of town along with Bayu, her husband. However, strange events are felt in the house, Adinda is often disturbed by spirits and hallucinating.One day Adinda experiences a severe contraction. Bayu takes his wife to the nearest hospital. The doctor assures Adinda that she is not quite ready to give birth so Bayu returns home to pick up items for her stay in hospital. However, upon his return, Bayu finds only an empty, uninhabited old building. Local residents claim that the hospital has not operated for 15 years. The building seems to have been badly burnt, He hears strange sounds, but he has to stay to find his wife who is about to give birth soon.",
    release_date: "2019-02-07",
    genre: "horor",
    price: 43000
  },
  {
    id: 573106,
    title: "Mata Batin 2",
    poster_path:
      "https://image.tmdb.org/t/p/w500/lW8Rf0Sma0qu8DziaDgYRLtXstq.jpg",
    overview:
      "After her sister died, Alia decides to start a new life by living in an orphanage owned by Mrs Laksmi and Mr Fadli as well as doing social work there. But Alia feels something wrong with the orphanage. Moreover, Nadia, one of the orphanage who apparently also has an inner eyes like Alia, can hears mysterious voices asking for help from all over the walls of the house. Alia and Nadia open a mysterious locked room. Since then disasters begin. It turns out that Alia and Nadia had made a big mistake and releases Darmah, a vengeful spirit that was deliberately locked in the room. Together with Mrs Windu, the paranormal and mentor of her inner eyes, Alia must confront Darmah and save the orphanage.",
    release_date: "2019-01-17",
    genre: "horor",
    price: 62000
  },
  {
    id: 572083,
    title: "After Met You",
    poster_path:
      "https://image.tmdb.org/t/p/w500/8Ml1eEKGuBDCjumYpRJuZJNx8de.jpg",
    overview:
      "Ari, the coolest and most handsome guy at his school, is challenged by his friends, The Daks, to find a girlfriend who is definitely not interested in him. Ara, an introverted and smart girl in school, is Ari's target. It turns out that Ara is the daughter of Ari’s producer as a DJ. Ari is shocked because all of Ara's views about him. This make him question himself. Azka, Ari's old friend, then moves to Ari’s school and close to Ara. Ari, who tries to hide his inner wounds because of his family's condition, also has to try to win Ara's heart. The truth about the betting is finally revealed.",
    release_date: "2019-01-10",
    genre: "romance",
    price: 53000
  },
  {
    id: 577538,
    title: "Tembang Lingsir",
    poster_path:
      "https://image.tmdb.org/t/p/w500/pE53v1b5pg1O7L2lpABF5JWc2sF.jpg",
    overview:
      "Mala always deals with Tembang Lingsir, a song taught by her mother from her childhood. After a mysterious fire incident that killed her mother, Mala lost her voice. Then, Mala lives in her uncle's house, Gatot, and his wife Gladys with their two children, Daisy and his younger brother, Ronald. At the house, Mbok Rahma also takes care of their needs. Daisy is disturbed by Mala's presence, while Ronald is happy. Since Mala's arrival, the atmosphere of the house is no longer the same. Many strange events appear. Mbok Rahma accuses Mala of causing all this chaos. Mala feels that there is a big secret in this house that make all the terror appear. Especially when she discovers that she has a twin sister she has never known before.",
    release_date: "2019-01-31",
    genre: "horor",
    price: 35000
  },
  {
    id: 577713,
    title: "PSP: Gaya Mahasiswa",
    poster_path:
      "https://image.tmdb.org/t/p/w500/6ba0i86XWO3kMUUrCL7bij6d0Fn.jpg",
    overview:
      "Monos, Rojali, Ade, Andra, Adit, Dindin, James, and Omen are students who are crazy, ignorant, but cool in music and are members of the OM Pancaran Sinar Petromaks (PSP). They are always agree in all matters, but in romance they make bets, as do Rojali, Monos and Ade. Ade has fallen in love with Fatima, a beautiful and sexy boarding house nanny. Dindin, Andra, and Adit are the trouble maker. They like to make pranks on campus so they are subject to sanctions for dropping out. They are shocked by the case of robber. This case developes into a hoax, which involved their college friends. Omen and James are moved to investigate this case with the help of PSP friends.",
    release_date: "2019-01-31",
    genre: "comedy",
    price: 43000
  },
  {
    id: 573501,
    title: "Matt & Mou",
    poster_path:
      "https://image.tmdb.org/t/p/w500/ha9dnlYV1mZMtcKeYOQ6H5JaCEN.jpg",
    overview:
      "Matt & Mou, have been friends since childhood. Their nature is in contradiction. Matt is very protective of Mou, even in choosing her boyfriend. Mou has admirers: Reza. The two become close. When introduced, Matt shows his dislike to Reza which he said is 'too good to be true'. This time Mou feels his love for Reza is serious. She wants Matt to approve it. Therefore, Mou pairs Matt with Retha, Reza's cousin. There is a quadrilateral love story. However, Reza suddenly disappears. Mou suspects that Matt is hiding something.",
    release_date: "2019-01-24",
    genre: "romance",
    price: 60000
  },
  {
    id: 573096,
    title: "Terimakasih Cinta",
    poster_path:
      "https://image.tmdb.org/t/p/w500/zfJcOyLNGXnn3dJlub8qOU4eRov.jpg",
    overview:
      "Eva just enters high school when she meets Ryan, because both belong to a group of student who have a disease during the School Orientation Period. Ryan thinks that Eva is just pretending to be sick like him. An incident makes Ryan take Eva to the hospital and has to be treated. Lupus is the doctor's diagnosis of Eva's disease after a series of tests. Sugiarti and Badarudin, Eva's parents, hesitate to tell Eva about her illness. Her roommate, Dewi, a patient with pancreatic cancer, makes a beautiful friendship. Eva continues to wait for Ryan who does not come again because he is banned by his parents. Dewi also always awaits the presence of her brother, Nanan, who always comes at night when Dewi falls asleep, Nanan is unable to see Dewi suffer. Dewi is devastated when Dewi leaves and Ryan ends their relationship. The same feeling of loss makes Eva and Nanan close.",
    release_date: "2019-01-17",
    genre: "drama",
    price: 55000
  },
  {
    id: 572092,
    title: "Lagi-Lagi Ateng",
    poster_path:
      "https://image.tmdb.org/t/p/w500/310AoB3CiwnK0l68lDsJP0w4ZUY.jpg",
    overview:
      "The story of Ateng and his twin Agung who have been separated for a long time. Ateng and Iskak, his friend, go to Jakarta for the first time. Unexpectedly, Ateng meets Agung who has the same body and face as himself. Iskak and Agung's personal assistant, Cemplon are also surprised. It is revealed the fact that they are twin brothers who were separated. Ateng and Agung later realize that their parents were still complete even though they were divorced. So the idea arises to exchange places to meet with parents they have never met. The plan is made to reunite the family.",
    release_date: "2019-01-10",
    genre: "comedy",
    price: 40000
  },
  {
    id: 573110,
    title: "Laundry Show",
    poster_path:
      "https://image.tmdb.org/t/p/w500/uxjSP5CR9d6LBkUpeK4tavBZ68i.jpg",
    overview:
      "Uki or familiarly called Kokoh chooses to resign from his office to set up a laundry business. At the beginning, he has to deal with his employees who have various ridiculous personalities: Tiur, a receptionist who is very ignorant, Kendi and Deden who always make troubles at the ironing table .. However, Kokoh's biggest challenge is unexpected competition from Agustina, who suddenly sets up a laundry business right in front of her kiosk. Now, Kokoh must choose between business or the seed of love that slowly begins to grow.",
    release_date: "2019-02-07",
    genre: "comedy",
    price: 70000
  },
  {
    id: 584566,
    title: "Anak Hoki",
    poster_path:
      "https://image.tmdb.org/t/p/w500/6swPx5BBCU8VtjQWOzP93QNOU3t.jpg",
    overview:
      "In his early teens, Ahok has to leave the comfort of his life in Belitung and start living independently in Jakarta. Ahok then gets to know Daniel, Bayu, and Eva who become his closest friends. Ahok is determined to apply all the moral values and goodness he learned from his father. But doing good is not as simple as he thought. When Bayu begins to fall in love with Eva and is jealous of Ahok, when Daniel begins to involve Ahok in his lies with his family, and when Eva apparently keeps a big secret and runs away from home, Ahok realizes, there were times when doing right needed sacrifice and struggle. Not to mention when Ahok realizes that he could not fulfill his father's hopes of becoming a doctor.",
    release_date: "2019-02-21",
    genre: "comedy",
    price: 35000
  },
  {
    id: 572088,
    title: "Perjanjian Dengan Iblis",
    poster_path:
      "https://image.tmdb.org/t/p/w500/v1tiTnHfsbERg7DQOUSGLDZv2n2.jpg",
    overview:
      "Annisa married Bara, a widower with a daughter named Lara. Bara takes a picnic to the island that is still rarely visited by tourists, Bengalor Island, so that his wife and child could get familiar with each other. The island of Bengalor turns out to be a mystery. Annisa is surprised by the appearance of a scary child. Lara also sees a figure similar to her biological mother who is dead. Bara doesn't believe the story of Annisa and Lara. This scary and tense atmosphere actually bring Lara closer to Annisa. Both are determined to protect each other.",
    release_date: "2019-01-10",
    genre: "horor",
    price: 45000
  },
  {
    id: 573104,
    title: "The Way I Love You",
    poster_path:
      "https://image.tmdb.org/t/p/w500/az957ttWseZEiFFkc9MZ8pJqkk0.jpg",
    overview:
      "Senja does not know the man named BadBoy who often chat with her on blog. She always smiles remembering their conversation. Bara is the most annoying guy in school and her cousin’s boyfriend. He is arrogant and pretentious. Senja can only hope that her cousin quickly kmows the reality. When Senja meets the real BadBoy, Rasya, she then understands all the madness that could occur in the name of love: sneaking out of the house just to meet him, to pretend to be hit for the sake of being close together. However, getting closer to Rasya, Senja begins to wonder ... Why is the feeling different when talking to BadBoy on the screen and with Rasya in the real world?",
    release_date: "2019-02-07",
    genre: "romance",
    price: 50000
  }
];
