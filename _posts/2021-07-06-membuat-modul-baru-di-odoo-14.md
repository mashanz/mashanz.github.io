---
title: Membuat Modul Baru di Odoo 14
tags: Odoo-14 Odoo 
---

![Odoo Header](media/header-odoo.svg)

Odoo memiliki fitur modul yang _plug-and-play_ yang artinya developer bisa memodifikasi aplikasi Odoo sesuai kebutuhan.  Berikut ini langkah-langkah membuat modul baru di Odoo 14

## 1. Membuat Folder Modul Odoo
Pada tahap ini. Developer akan membuat folder baru dengan format snake_case, artinya penamaan menggunakan format huruf kecil bersambung dengan _underscore_. contoh nama folder modul `modul_jual_beli_sayur`.

<!--more-->

## 2. Membuat File dan Folder di Dalam Folder Module
Odoo memiliki standard dalam membuat module. Di dalam folder tersebut harus terdiri dari `__init__.py` dan `__manifest__.py`. Berikut adalah contoh isi folder module `modul_jual_beli_sayur`
```
modul_jual_beli_sayur
├── __init__.py                 # mandatory
└── __manifest__.py             # mandatory
```
setelah membuat file `__init__.py` dan `__manifest__.py`. sekarang waktunya mengisi file `__manifest__.py` dengan script berikut:
```py
{
  'name': 'Jual Beli Sayuran',
  'author': 'Mashanz',
  'version': '0.1',
  'summary': 'Modul Web Aplikasi Jual Beli Sayuran',
  'description': """
Jual Beli Sayuran
=================
Adalah modul dari aplikasi jual beli sayuran secara online. Dikembangkan dengan sepenuh cinta dan kasih sayang.
  """,
  'website': 'https://mashanz.com/',
  'category': 'Uncategorized',
  'depends': [],
  'data': [],
  'qweb': []
  'external_dependencies': {}
  'installable': True,
  'application': True,
  'auto_install': False
}

```
## 3. Install Modul
Setelah folder dengan struktur kusus di buat. Saatnya jalankan Odoo server dan masuk ke `Menu > Aplikasi` kemudian install modul yang baru saja di buat.

> Selesai