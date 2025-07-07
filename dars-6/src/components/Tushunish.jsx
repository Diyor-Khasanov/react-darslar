import React from 'react'

const Tushunish = () => {
  return (
    <div>
      📚 Axios tushuntirishi (Oddiy odam tilida)
✅ Axios nima?
Axios — bu brauzer va Node.js da ishlaydigan, API bilan bog‘lanish uchun eng ko‘p ishlatiladigan JavaScript kutubxonasi.

Yani, Axios yordamida server bilan gaplashamiz:

Ma'lumot yuboramiz.

Ma'lumot so‘raymiz.

Ma'lumotni o‘chiramiz.

Ma'lumotni yangilaymiz.

1️⃣ Axios Methods (Asosiy metodlar)
📤 POST
Yangi ma'lumot yuborish.

Masalan: yangi foydalanuvchi ro‘yxatdan o‘tishi, yangi mahsulot qo‘shish.

javascript
Копировать
Редактировать
axios.post('https://api.com/products', { name: 'Phone' });
👉 Yangi mahsulot yuborilyapti.

✏️ PUT yoki PATCH
Mavjud ma'lumotni yangilash.

PUT — butun ma'lumotni yangilaydi.

PATCH — faqat bitta yoki bir nechta maydonni yangilaydi.

javascript
Копировать
Редактировать
axios.put('https://api.com/products/1', { name: 'New Phone' });
👉 Id=1 bo‘lgan mahsulotni butunlay yangilayapti.

❌ DELETE
Ma'lumotni o‘chirish.

javascript
Копировать
Редактировать
axios.delete('https://api.com/products/1');
👉 Id=1 bo‘lgan mahsulotni o‘chiradi.

2️⃣ Axios Instance (Maxsus sozlangan Axios)
Har safar bir xil baseURL yozmaslik uchun shaxsiy axios yaratamiz.

Bu qulay, chunki kod qisqaradi va umumiy sozlamalarni bir joyda saqlaymiz.

javascript
Копировать
Редактировать
const request = axios.create({
  baseURL: 'https://api.com',
  timeout: 1000, // 1 sekund kutadi
});
👉 Endi request orqali GET, POST, PUT chaqirsak, bu baseURL avtomatik ishlaydi.

3️⃣ Interceptors (Tutib olish)
Interceptors bu xatolarni yoki javoblarni oldindan tekshirish yoki o‘zgartirish.

Misol: API xatolarini tutish va foydalanuvchiga ko‘rsatish.

javascript
Копировать
Редактировать
axios.interceptors.response.use(
  response => response, // agar hammasi yaxshi bo‘lsa, shunchaki javobni qaytar
  error => {
    console.log(error.response) // agar xato bo‘lsa, konsolga chiqar
  }
);
👉 Bu nima qiladi?

Har safar server javob berganda, bu funksiya tekshiradi:

Javob to‘g‘ri bo‘lsa — hech narsa qilmaydi.

Javob xato bo‘lsa — konsolga xato ma'lumotini chiqaradi.

🔥 Qisqacha xulosa:
Funksiya	Ma’nosi	Misol
POST	Ma’lumot yuborish	Yangi mahsulot qo‘shish
PUT / PATCH	Ma’lumot yangilash	Mahsulot nomini o‘zgartirish
DELETE	Ma’lumot o‘chirish	Mahsulotni o‘chirish
Instance	Maxsus axios yaratish	Qulay bazaga ulanish
Interceptors	Javob yoki xatoni oldindan tutish	Xatolarni ushlash

Agar xohlasangiz, men sizga Axios bilan to‘liq CRUD amaliy mini loyiha ham tayyorlab berishim mumkin.

👉 Yordamni davom ettiraymi? 😊







Вы сказали:
amaliy crud loyiha qil va menga uni tushuntir


ChatGPT сказал:
Keling, sizga Axios bilan local CRUD mini loyiha yasab beraman va har bir qismini sodda va to‘liq tushuntirib beraman.

Bu loyiha:

🔄 Create – Ma'lumot qo‘shish

📖 Read – Ma'lumotlarni o‘qish

✏️ Update – Ma'lumotlarni tahrirlash

❌ Delete – Ma'lumotlarni o‘chirish
barcha funksiyalarni o‘z ichiga oladi.

👉 Bu loyihada jsonplaceholder.typicode.com fake API serverdan foydalanamiz (bu test qilish uchun ishlatiladi).

    </div>
  )
}

export default Tushunish
