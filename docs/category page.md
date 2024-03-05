---
sidebar_label: "Category Page"
sidebar_position: 3
---

headerdagi logikani keginroqqa olib qoysak ham boladi

keying navbatda category page routinga /category:id pageni qoshamiz 
:id paramtr bizga routingdan categoriya id sini olib backendan shu categoriyani sorashga kerak boladi.

kegin dizaynini boshlaymiz
biricnchi yaratib olgan layoutimiz bilan pageni oraymiz. kegin cardlar listini qurib olamiz 
ahamiyat bersangiz bu yerda pagination, filtrlar va sorting ishlatilgan. shuning uchun api ulashni boshlagandaham postmandan bu request uchun qery parametrlar bormi va ularni qanday qoyishni qarab qoyamiz. bu page uchun yoki global state ishlatasiz yoki qerylarni statini componentlarni eng tepasida ushlaysiz. bu page da shu categoriyalar ro’yxatidan boshqa narsa kop emas shuning uchun qaysi yol performanc uchun yaxshi oylab otirmasakham boladi, ozingizga qulayini tanlang. har query parametr ozgarishida, oz pagegingizni urlni ozgartitishni unutmang, bu orqali siz boshqa stranitsadan qaytganda shu url qurylarni olib eski pageni eski holatini qaytarib olasiz va sgu ssilkani share qilsangiz boshqa odamlardaham sizdaka filtrlar turgan boladi

categoriyalardan kegin o'xshash productlar seksiyasi ko'rsangiz bo'ladi.

![Figma preview](./img/similar_section_demo.png)


Axamiyat bergan bolsangiz bunday seksiya productning pagedaham bor. shuning uchun uni aloxida lazy component qilib olsak boladi. uning vazifasi faqatgina  user pasga scroll qilganda o'xshash productlarni olib ko'rsatish bo'ladi