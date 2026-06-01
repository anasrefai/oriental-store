/*
 ╔═══════════════════════════════════════════════════════╗
 ║  SETUP: Replace placeholder values below with your   ║
 ║  Firebase config from:                               ║
 ║  console.firebase.google.com → Project Settings      ║
 ║                                                      ║
 ║  FIRESTORE SECURITY RULES                            ║
 ║  Paste these in Firebase Console → Firestore → Rules ║
 ║                                                      ║
 ║  rules_version = '2';                                ║
 ║  service cloud.firestore {                           ║
 ║    match /databases/{database}/documents {           ║
 ║      match /products/{id} {                          ║
 ║        allow read;                                   ║
 ║        allow write: if request.auth != null;         ║
 ║      }                                               ║
 ║      match /heroImages/{id} {                        ║
 ║        allow read;                                   ║
 ║        allow write: if request.auth != null;         ║
 ║      }                                               ║
 ║      match /orders/{id} {                            ║
 ║        allow create;                                 ║
 ║        allow read, update: if request.auth != null;  ║
 ║      }                                               ║
 ║      match /settings/{id} {                          ║
 ║        allow read;                                   ║
 ║        allow write: if request.auth != null;         ║
 ║      }                                               ║
 ║    }                                                 ║
 ║  }                                                   ║
 ╠═══════════════════════════════════════════════════════╣
 ║  KILL SWITCH: set settings/license { active: false } ║
 ║  in Firestore to instantly blank the storefront.     ║
 ╚═══════════════════════════════════════════════════════╝
*/
/*
  CDN script tags — add these in order before </body> in both HTML files:

  <script src="https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.14.1/firebase-storage-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.14.1/firebase-auth-compat.js"></script>
  <script src="./firebase-config.js"></script>
*/

const firebaseConfig = {
  apiKey:            "AIzaSyDDGt8Qf6goD6i19IY973AowYXiszasvhk",
  authDomain:        "oriental-store-4b6e4.firebaseapp.com",
  projectId:         "oriental-store-4b6e4",
  storageBucket:     "oriental-store-4b6e4.firebasestorage.app",
  messagingSenderId: "299843158425",
  appId:             "1:299843158425:web:32fd969cf8ed671c60d308"
};

firebase.initializeApp(firebaseConfig);
const db      = firebase.firestore();
const storage = firebase.storage();
const auth    = firebase.auth();
// Kill switch — reads settings/license from Firestore immediately on load
db.collection('settings').doc('license').get().then(function(doc) {
  if (doc.exists && doc.data().active === false) {
    document.body.innerHTML = '';
    document.body.style.background = '#000';
  }
}).catch(function(){});


window.StorageHelper = {
  uploadImage(file, folder) {
    const ref = storage.ref(folder + '/' + Date.now() + '_' + file.name);
    return ref.put(file).then(() => ref.getDownloadURL());
  },
  deleteImageByUrl(url) {
    return storage.refFromURL(url).delete().catch(() => {});
  }
};

window.DataLayer = {

  // ── Products ──────────────────────────────────────────
  getProducts(cb) {
    return db.collection('products').onSnapshot(snap =>
      cb(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    );
  },
  addProduct(data) {
    return db.collection('products').add({ ...data, createdAt: new Date() });
  },
  updateProduct(id, data) {
    return db.collection('products').doc(id).update(data);
  },
  async deleteProduct(id) {
    const doc  = await db.collection('products').doc(id).get();
    const urls = (doc.data() && doc.data().imageUrls) || [];
    await Promise.all(urls.map(u => window.StorageHelper.deleteImageByUrl(u)));
    return db.collection('products').doc(id).delete();
  },
  getProductById(id) {
    return db.collection('products').doc(id).get()
      .then(d => ({ id: d.id, ...d.data() }));
  },

  // ── Hero Images ───────────────────────────────────────
  getHeroImages(cb) {
    return db.collection('heroImages').onSnapshot(snap =>
      cb(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    );
  },
  async addHeroImage(file) {
    const imageUrl = await window.StorageHelper.uploadImage(file, 'hero');
    return db.collection('heroImages').add({ imageUrl, fileName: file.name, uploadedAt: new Date() });
  },
  deleteHeroImage(id, url) {
    return window.StorageHelper.deleteImageByUrl(url)
      .then(() => db.collection('heroImages').doc(id).delete());
  },

  // ── Orders ────────────────────────────────────────────
  getOrders(cb) {
    return db.collection('orders').orderBy('createdAt', 'desc').onSnapshot(snap =>
      cb(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    );
  },
  addOrder(data) {
    return db.collection('orders').add({ ...data, createdAt: new Date() });
  },
  updateOrderStatus(id, status) {
    return db.collection('orders').doc(id).update({ status });
  },

  // ── Stock ─────────────────────────────────────────────
  updateStock(productId, qty) {
    return db.collection('products').doc(productId).update({ stock: qty });
  },

  // ── Auth ──────────────────────────────────────────────
  login(email, pw) {
    return auth.signInWithEmailAndPassword(email, pw);
  },
  logout() {
    return auth.signOut();
  },
  onAuthChange(cb) {
    return auth.onAuthStateChanged(cb);
  }
};
