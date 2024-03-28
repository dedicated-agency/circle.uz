---
sidebar_label: "Product Page"
sidebar_position: 4
---


bu pageda asosan biz productni konfiguratsiyasini yigamiz. productni configuratsiyasini tanlab olish uchun ozgina algoritm yozishimizga togri keladi.
postmanda ko'rishingiz bo'yicha biz productni olish uchun bizga uning `slug` i kerak bo'ladi. siz product pageni qurish uchun routingizni `product/{slug}` korinishda qilib qurishingiz kerak buy yerda `slug` sizning ko'rmoqchi bo'lgan productingizni slugi bo'lib xizmat qiladi. pagega o'tish vaqti siz routing o'rqali shu `slug`ni olib backendan produktni olasiz.

`/products/{slug}` bilan product `obejct` ini olganingizda uning ichida  `attributes` nomli `array` bo'ladi. Bu `array` da shu productga tegishli barcha configuratsiyalarni olishingiz mumkin.

ko'rishingiz bo'yicha configuratsiyalari ko'rsatish uchun siz birinchi bo'lib `attributes` ni olasiz va uni map qilasiz, kegin `attributes` ichidagi `data` ni map qilasiz

![Figma preview](./img/priduct_attribute_demo.png)

sezgan bo'sangiz rang uchun blocklar boshqa blocklarga qaraganda sal boshqa ko'rinishda. Dizayn bo'yicha ko'rishingiz mumkinki faqatgina rang bloklari boshqa `style` da yasalgan. Bu holatda biz shu `attribute` lar orasidan `color` degan slugli atrrbutni kutib, agar attributlar to'g'ri kelsa dumaloq rangli ko'rinishdagi blokni boshqa holatda odduy bloklarni yaratamiz.

har bir attribut uchun ko'rishlarni yaratib olganingizdan kegin birinchi `default` ya'ni bizning configuratisyalarimiz orasida eng minimal va do'konda bor configuratsiyani tanlab uni soni va narixini chiqazishimiz kerak bo'ladi.

![Figma preview](./img/product_stock_demo.png)

bu qisimni qilish uchun sizga product obyektidagi `stocks` degan `array` kerak bo'ladi. Bu `array` o'z ichida bizni do'kondagi bor barcha configuratsiyalarni narxi va sonini saqlaydi. Misol uchun siz qora va `256 gb ram` lik macbook olmoqchisiz, lekin faqat `512 gb ram` lik configuratsiya qolgan bo'kishi mumkin. Saytdan foydalanayotgan odam notog'ri informatsiya olmasligi kerak shuning ichun unga bizda yo'q configuratsiyalarni tanlay olish imkoniyatini cheklashimiz kerak.

