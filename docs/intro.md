---
sidebar_label: "Intro"
sidebar_position: 1
---


## Proekt bilan ishlashda qanday bilimlar (texnologiyalar) kerak bo'ladi:

- bu proektni tez va oson boshlashingiz uchun siz js frameworklardan (react, vue, angular) birini bilishingiz.

- backend bilan muloqot qilish uchun fetch apini bilishingiz

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

- avtorizatsiya va jwt token haqida habardor bo'lishingiz.
- o’z framwerkingizda global state management qanday qilinishi haqida boshlang’ich ma’lumot.

https://redux-toolkit.js.org/
https://pinia.vuejs.org/
https://ngrx.io/


- routing haqida tushuncha va o’z frameworkingizda routing qura olish.
https://reactrouter.com/en/main
https://router.vuejs.org/
https://angular.io/guide/router

- figma bilan ishlashni bilish.

- postman bilan ishlay olish (requestlarni korib tekshirish uchun)

- albatta programmist uchun eng muhimi, google yoki boshqa internet resurslar orqali mustaqil tarzda ma'lumotlarni qidirshga hohishingiz kerak bo'ladi

## Proekt init

birinchi navbatda o'z frameworkingiz uchun proektingizni init qilib olganingizdan so'ng, ko'dingiz uchun [githubda](https://github.com/) repository ochishingizni maslaxat beraman. 

https://www.nobledesktop.com/learn/git/what-is-git

githubda repositroy sizga o'z codingizdagi o'zgarishlar tarixini ko'rishga va sizda proektingiz bilan bog'liq muammolar bo'lganida ko'dingizni yuklab ko'rib tez va effektiv yordam berishimizga kerak bo'ladi.

githubda proektingiz uchun yangi repository ochish uchun o'z accauntingiz bilan kirganingizda chap sidebarda yashil "New" deb yozilgan tugma bo'ladi 

![Figma preview](./img/github_demo.png)

shu tugmani bosib o'z repositoriyingizni yaratishni boshlaysiz.
"Create repositroy" tugmasini bosishdan oldin repositroyni public qilib belgilashni unutmang

![Figma preview](./img/github_demo2.png)

aks holda proektingiz boshqa odamlar uchun berk boladi ba faqatgina siz ruxsat bergan odamlar proektni ko'ra oladi. Kelajakda hususiy proektlaringiz yo'ki ish joyingiz uchun proektlarda repositoryni private qilish yaxshi havfsizlikni yo'li hisoblanadi.

githubda proektni yaratganingizdan so'ng oz kompyuterizdagi local kodni github bilan ulab, oz'garishlarni o'sha repositoryga yuklay oladigan qilib to'girlaymiz.
buning uchun o'z code redactoringizga o'tib terminalni ochamiz va shu comandalarni yozamiz.

```
git init
git add .
git commit -m "birinchi commit"
git remote add origin https://${sizning repositoriyingizga bo'lgan ssilkangiz}.git
git push -u origin main
```

batafsil qilib aytganda 
`git init` butun proektingiz uchun gitni ishga tushurib uni sozlayabdi.
`git add .` sizning barcha faylardagi o'zgarishlarni saqlab qo'yadi. 
`git commit -m "birinchi commit"` saqlagan o'zgarishlaringizga nom berib ularni bir commitda yeg'adi.
`git remote add origin` siz ko'rsatayotgan repositoryni o'zgarishlarni yuklaydigon joy deb belgilaydi. Ssilkani githubda repoitoryga kirganingizda tepada, shu repositoryga olib kiradigan adress Url yozilgan joydan ko'chirib olishingiz mumkin
`git push -u origin main` barcha commitlarni githubdagi repositordagi "main" branchaga saqlaydi.


## Figma

kod yozishni boshlashdan oldin birinchi navbatda figma dizayni ochib butun proekt qanday tuzilgan va unda nimalar bolishi kerakligini bir boshidan ko’rib chiqishni maslaxat beraman. bunday qilish uchun figma dizaynga kirganingizda o'ng tepa burchakda "play" ikonkani bosasiz va live previewni ochasiz.

![Figma preview](./img/figma_demo.png)

live previewda siz butun saytni brauzerda interactiv korishinishda ko’ra olasiz. Uyerdagi knopkalarni bosib ekranlarni korinish ketma ketligi va qaysi holatda nima ko'rsatishi kerakligini bilib olasiz. bu yo'l bilan siz kod yozishdan avval sahifalar ketma-ketligini, holatlarini organib chiqib, so’ng reja tuzib olsangiz, keyin kutilmagan holatlarda uni o'zgartirib o'tirmaslikka va tog’ri arxitektura tanlashga yordam beradi.


