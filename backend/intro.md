---
sidebar_label: "Intro"
sidebar_position: 1
---


## Proyekt bilan ishlashda qanday bilimlar (texnologiyalar) kerak bo‘ladi:

- bu proyektni tez va oson boshlashingiz uchun siz backend yoki backend frameworklardan (Laravel, Java, Django, Nodejs) birini bilishingiz.

- rest api bilishingiz

https://www.ibm.com/topics/rest-apis

- avtorizatsiya va JWT token haqida xabardor bo‘lishingiz.

- database qanday qilinishi haqida boshlang‘ich ma’lumot.

- sql database relations (one to one, one to many, many to many, polymorphic)

- CRUD operations ni bilishingiz

- postman bilan ishlay olish (requestlarni ko‘rib tekshirish uchun)

- albatta dasturchi uchun eng muhimi: google yoki boshqa internet resurslar orqali mustaqil tarzda ma’lumotlarni qidirishga xohishingiz kerak bo‘ladi.

## Proekt init
birinchi navbatda o‘z frameworkingiz uchun proyektingizni init qilib olganingizdan so‘ng, ko‘dingiz uchun [githubda](https://github.com/) repository ochishingizni maslahat beraman.

https://www.nobledesktop.com/learn/git/what-is-git

githubda repositroy sizga o‘z codingizdagi o‘zgarishlar tarixini ko‘rishga va sizda loyihangiz bilan bog‘liq muammolar bo‘lganida codingizni yuklab ko‘rib tez va samarali yordam berishimizga kerak bo‘ladi.

githubda proyektingiz uchun yangi repository ochish uchun o‘z akkauntingiz bilan kirganingizda chap sidebarda yashil "New" deb yozilgan tugma bo‘ladi

![Figma preview](./img/github_demo.png)

shu tugmani bosib o‘z repositoriyingizni yaratishni boshlaysiz.
"Create repositroy" tugmasini bosishdan oldin repositoriyni public qilib belgilashni unutmang.

![Figma preview](./img/github_demo2.png)

aks holda proyektingiz boshqa odamlar uchun berk bo‘ladi ba faqatgina siz ruxsat bergan odamlar proyektni ko‘ra oladi. Kelajakda xususiy proyektlaringiz yoki ish joyingiz uchun proyektlarda repositoryni private qilish yaxshi xavfsizlikni yo‘li hisoblanadi.

githubda proyektni yaratganingizdan so‘ng oz kompyuteridagi lokal kodni github bilan ulab, oz’garishlarni o‘sha repositoryga yuklay oladigan qilib to‘g‘rilaymiz.

buning uchun o‘z code redaktoringizga o‘tib terminalni ochamiz va shu komandalarni yozamiz.


```
git init
git add .
git commit -m "birinchi commit"
git remote add origin https://${sizning repositoriyingizga bo'lgan ssilkangiz}.git
git push -u origin main
```

batafsil qilib aytganda.
`git init` butun proyektingiz uchun gitni ishga tushirib uni sozlaydi.
`git add .` sizning barcha fayllardagi o‘zgarishlarni saqlab qo‘yadi.
`git commit -m "birinchi commit"` saqlagan o‘zgarishlaringizga nom berib ularni bir commitda yig‘adi.
`git remote add origin` siz ko‘rsatayotgan repositoryni o‘zgarishlarni yuklaydigon joy deb belgilaydi. Ssilkani githubda repoitoryga kirganingizda tepada, shu repositoryga olib kiradigan adres URL yozilgan joydan ko‘chirib olishingiz mumkin
`git push -u origin main` barcha commitlarni githubdagi repositordagi "main" branchaga saqlaydi.


## Figma

kod yozishni boshlashdan oldin birinchi navbatda figma dizayni ochib butun proyekt qanday tuzilgan va unda nimalar bolishi kerakligini bir boshidan ko‘rib chiqishni maslahat beraman. bunday qilish uchun figma dizaynga kirganingizda o‘ng tepa burchakda "play" ikonani bosasiz va live previewni ochasiz.

![Figma preview](./img/figma_demo.png)

live previewda siz butun saytni brauzerda interaktiv kirishilishda ko‘ra olasiz. U yerdagi tugmalarni bosib ekranlarni ko‘rinish ketma-ketligi va qaysi holatda nima ko‘rsatishi kerakligini bilib olasiz. bu yo‘l bilan siz kod yozishdan avval sahifalar ketma-ketligini, holatlarini o‘rganib chiqib, so‘ng reja tuzib olsangiz, keyin kutilmagan holatlarda uni o‘zgartirib o‘tirmaslikka va to‘g‘ri arxitektura tanlashga yordam beradi.


