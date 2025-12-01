# React GA4 Demo – Advanced

Questo progetto è una demo avanzata di un eCommerce React integrato con Google Analytics 4.

## 📦 Funzionalità principali
- Routing avanzato (Home, Products, Product Detail, Cart, Checkout, Contact)
- Carrello persistente con localStorage
- Flusso checkout simulato
- Eventi GA4:
  - page_view
  - view_item
  - add_to_cart
  - view_cart
  - begin_checkout
  - purchase
  - form_submit
  - promo_click
  - scroll_depth
- Pronto per deploy su GitHub Pages

---

## 🚀 Installazione

```bash
npm install
npm start
```

---

## 🏗 Build

```bash
npm run build
```

---

## 🌐 Deploy su GitHub Pages

1. Modifica `package.json` aggiungendo la tua repo:

```json
"homepage": "https://USERNAME.github.io/REPO_NAME"
```

2. Aggiungi i seguenti script (se non già presenti):

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

3. Esegui:

```bash
npm run deploy
```

---

## 📊 Configurazione GA4

Modifica lo script in `public/index.html` con il tuo Measurement ID:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');
</script>
```

---

## 📁 Struttura del progetto

```
src/
  pages/
  components/
  utils/
  data/
public/
README.md
```

Buon lavoro!
