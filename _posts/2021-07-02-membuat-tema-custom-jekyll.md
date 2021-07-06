---
title:  "Membuat Custom Theme Jekyll"
tags: jekyll
---

`Github` memiliki fitur hosting `static website` secara gratis. Pada fitur tersebut pengguna bisa membuat website menggunakan HTML, CSS dan JavaScript. 

Beberapa framework frontend seperti `React` atau `Jekyll` juga bisa melakukan hosting di sana.

Pada postingan ini akan dibahas bagaimana cara membuat tema Jekyll custom, mempublikasikan serta menggunakan tema custom yang telah di publikasikan.

<!--more-->

## 1. Inisialisasi template
Jekyll memiliki tools tersendiri untuk customasi tema, jalankan perintah di bawah ini pada terminal.
```bash
jekyll new-theme blog-mashanz-theme
```
> <b>Note:</b><br> `blog-mashanz-theme` merupakan nama thema yang akan dibuat pada postingan kali ini. Kalian bisa mengganti nya dengan nama thema kalian masing-masing misal `thema-ku`

## 2. Menambahkan File Base Template
Setelah Template berhasil di inisialisasi, ada beberapa hal yang perlu disiapkan yaitu menyiapkan `base` untuk template custom. Caranya, buat folder `_includes` dan tambahkan file berikut:
- `head.html`
- `header.html`
- `footer.html`

Kemudian buat folder `_layouts` sebagai base layout dan tambahkan file berikut:
- `default.html`
- `home.html`
- `post.html`
- `page.html`
> <b>Note:</b><br> `defaul`, `home`, `post`, dan `page` merupakan contoh layout yang akan di buat. Bila kalian menginginkan Halaman Khusus Galery yang menampilkan foto-foto dengan format tampilan berbeda. Kalian bisa menambahan `galery.html` pada folder `_layouts`

## 3. Menyiapkan Skeleton pada Template
Pada bagian ini, kita akan menggunakan `Bootstrap 5` sebagai styling di template custom yang akan kita buat. Pertama menyiapkan `head.html`. Isi file head.html dengan code berikut.
```html
<head>
  <meta charset="utf-8">
  <meta 
    name="viewport" 
    content="width=device-width, initial-scale=1">
  <link 
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
    rel="stylesheet" 
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
    crossorigin="anonymous">
</head>
```
Tambahkan kode di bawah pada `header.html`
```html
<header>
</header>
```
Tambahkan kode di bawah pada `footer.html`
```html
<footer>
</footer>
```
Setelah itu, tambahkan code pada file `default.html`
```html
<!DOCTYPE html>
<html>
  <!--INCLUDE_HEAD-->
  <body>
    <!--INCLUDE_HEADER-->
    <main class="page-content" aria-label="Content">
      <div class="wrapper">
        <!--CONTENT-->
      </div>
    </main>
    <!--INCLUDE_FOOTER-->
    <script 
      src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" 
      integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" 
      crossorigin="anonymous"></script>
    <script 
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" 
      integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" 
      crossorigin="anonymous"></script>
  </body>
</html>
```
