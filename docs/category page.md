---
sidebar_label: "Category Page"
sidebar_position: 3
---

headerdagi logikani keginroqqa olib qoysak ham boladi

keying navbatda category page. routinga `/category/{id}` pageni qoshamiz. `id` bizga productalrni categoriyaga qarab filtr qilishga kerak bo'ladi.

kegin dizaynini boshlaymiz
birinchi yaratib olgan layoutimiz bilan pageni oraymiz. kegin cardlar listini qurib olamiz va backenddan productlarini olish uchun postmanga qaraymiz. 

![Figma preview](./img/category_list_demo.png)

ahamiyat bersangiz bizning productlar oladigan apiyimizda `page`, `categories`, `tags`, `brands` degan paramterlar bor. bu parametrlar orqali biz o'layotgan productlarimizni categoriya, brand va teglarga filtrlab olishimiz mumkin. `page` parametr esa biz olayotgan ma'lumotlarimizni bo'laklarga ajratib kerakli qisimni faqat zaruriyat payti olishga yordam beradi.

bu page uchun `global state manager` ishlatganingiz yaxshi. Chunki siz filtrlaringiz holatini bir necha joyda ko'rsatasiz va o'zgartira olishingiz kerak bo'ladi.

1
![Figma preview](./img/filters_demo.png)

2
![Figma preview](./img/filters_footer_demo.png)

3
![Figma preview](./img/sorting_demo.png)

qisq qilib aytganda siz o'z `global state`ingizda productlarni ro'yxatini olshingiz va saqlashingiz va shu ro'yxatni olish uchun `user` tanlagan  `page`, `categories`, `tags`, `brands` va `sorting` o'zgaruvchilarni holatini saqlashingiz kerak.


hamma filtralr logikasini qilib bo'lsangiz `query parametr` larni sozlashingiz kerak bo'ladi. har query parametr ozgarishida, oz pagegingizni `url` ni o'zgartitishni unutmang, bu orqali siz boshqa stranitsadan qaytganda shu url querylarni olib eski pageni eski holatini qaytarib olasiz va shu ssilkani share qilsangiz boshqa odamlardaham sizdaka filtrlar turgan boladi

category productlardan kegin o'xshash productlar seksiyasi ko'rsangiz bo'ladi.

![Figma preview](./img/similar_section_demo.png)


Axamiyat bergan bolsangiz bunday seksiya productning pagedaham bor. shuning uchun uni aloxida lazy component qilib olsak boladi. uning vazifasi faqatgina  user pasga scroll qilganda o'xshash productlarni olib ko'rsatish bo'ladi