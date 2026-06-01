# Digital World Computers — متجر ديجيتال وورلد للحاسوب

## العربية

متجر إلكتروني احترافي لبيع أجهزة الكمبيوتر ومستلزماتها، مبني بتقنية HTML/JS خالصة مع Firebase كخلفية سحابية.
يتضمن واجهة عملاء كاملة (RTL عربي) ولوحة تحكم إدارية محمية بتسجيل الدخول.
أي تعديل من لوحة التحكم — منتجات، صور الهيرو، حالة الطلبات — يظهر فوراً في المتجر عبر Firestore Realtime.

## English

A professional Arabic-first e-commerce storefront for computer hardware, powered by vanilla HTML/JS and Firebase.
Includes a customer-facing store (RTL, Cairo font) and a login-protected admin dashboard.
All dashboard changes — products, hero images, order status — reflect instantly in the store via Firestore onSnapshot.

---

## File Structure | هيكل الملفات

| File | Purpose |
|------|---------|
|  | Customer storefront — live Firebase data, cart, checkout |
|  | Admin dashboard — Firebase Auth required |
|  | Edit this: paste your Firebase config + see Firestore security rules |
|  | One-time product migration script (browser console) |

---

## Setup Steps | خطوات الإعداد

1. Go to console.firebase.google.com → Add project (e.g. oriental-store)
2. Enable Firestore Database → Start in test mode
3. Enable Storage → Start in test mode
4. Enable Authentication → Sign-in method → Email/Password → Enable
5. Project Settings → Your apps → Web app → copy firebaseConfig → paste into firebase-config.js
6. Paste the Firestore security rules (from the comment block inside firebase-config.js) into Firebase Console → Firestore → Rules → Publish
7. Authentication → Users → Add user → enter your admin email & password

---

## Seeding Products | تعبئة المنتجات الأولية

Open oriental-store.html in a browser → F12 → Console tab → type runSeed() → Enter
Run once only. Migrates all hardcoded products into Firestore.

---

## Kill Switch | مفتاح الإيقاف

Set settings/license active: false in Firestore to instantly blank the storefront (black page).
Set it back to true to restore. No redeployment needed.

---

## Tech Stack | التقنيات المستخدمة

- Vanilla HTML / CSS / JavaScript (no build system)
- Firebase v10 — Firestore · Storage · Authentication (compat SDK)
- Cairo font (Google Fonts) · Arabic RTL · Dark theme #1a1a2e · Accent #D4FF00
