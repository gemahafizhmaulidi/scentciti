# Scent Citi static deployment

Website ini adalah static site. PM2 harus melayani seluruh root folder, bukan menjalankan `index.html` sebagai script.

## Jalankan di server

```bash
cd /path/to/scentciti
npm install -g pm2
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```

Website berjalan di port `3215`:

- `/` → company profile
- `/catalog/` → fragrance catalogue

Sesudah menjalankan `pm2 startup`, jalankan command tambahan yang dicetak PM2, kemudian ulangi `pm2 save`.

## Update deployment

```bash
cd /path/to/scentciti
git pull
pm2 restart scentciti-web
```

## Reverse proxy

Arahkan domain dari Nginx atau control panel hosting ke `http://127.0.0.1:3215`. SSL sebaiknya ditangani oleh Nginx/Cloudflare, bukan PM2.

Jangan mengaktifkan SPA fallback. Landing page dan katalog memakai dua file HTML berbeda, sehingga `/catalog/` perlu membaca `catalog/index.html` secara langsung.
