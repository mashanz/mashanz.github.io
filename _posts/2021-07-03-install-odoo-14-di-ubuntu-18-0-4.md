---
title: Install Odoo 14 di Ubuntu 18.04
tags: Odoo-14 Odoo 
---

Odoo merupakan Perangkat lunak ERP (___Enterprise Resource Planning___) yang dulunya bernama adalah OpenERP. Odoo memiliki 2 versi yaitu Community dan Enterprise. Perbedaan nya adalah Community dibagikan gratis serta enterprise adalah versi berbayarnya dengan fitur ___pre-made___ lebih banyak. Namun jangan khawatir, walaupun versi gratis. Developer dapat menambahkan modul untuk menambahkan fitur-fitus sesuai kebutuhan.

Dalam artikel ini akan ditunjukan cara instalasi _Source Code_ __Odoo 14 Community Edition__ pada Sistem Operasi Ubuntu 18.04 x64.

## 1. Setup Update

Sebelum melakukan instalasi, pastikan package ubuntu sudah ter-___update___. Caranya ketikan command berikut pada terminal sesuai urutan.

```sh
sudo apt-get update -y
sudo apt install software-properties-common -y
sudo add-apt-repository universe -y
sudo apt-get update -y
sudo apt-get upgrade -y
```

<!--more-->

## 2. Install Odoo Dependencies

Setelah package terupdate, saatnya install dependencie perangkat lunak Odoo 14 dengan menjalankan perintah berikut pada terminal.

```sh
sudo apt-get install python3 python3-dev python3-pip python3-suds \
    python-dev libldap2-dev \
    wget git bzr python-pip gdebi-core \
    libxml2-dev libxslt1-dev zlib1g-dev \
    libsasl2-dev libldap2-dev libssl-dev \
    python-pypdf2 python-dateutil python-feedparser \
    python-ldap python-libxslt1 python-lxml python-mako \
    python-openid python-psycopg2 python-babel python-pychart \
    python-pydot python-pyparsing python-reportlab \
    python-simplejson python-tz python-vatnumber \
    python-vobject python-webdav python-werkzeug python-xlwt \
    python-yaml python-zsi python-docutils python-psutil \
    python-mock python-unittest2 python-jinja2 \
    python-decorator python-requests python-passlib python-pil \
    node-clean-css node-less python-gevent postgresql -y
```

## 3. install ___wkhtmltopdf___

WKHTMLTOPDF adalah library dependency yang dibutuhkan pada perangkat lunak Odoo ini karna dibutuhkan untuk fitur Cetak Report, Invoice, Quotation dan lain Dalam Bentuk PDF.

```sh
wget https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6-1/wkhtmltox_0.12.6-1.bionic_amd64.deb
sudo apt-get install wkhtmltox_0.12.6-1.bionic_amd64.deb
sudo ln -s /usr/local/bin/wkhtmltopdf /usr/bin
sudo ln -s /usr/local/bin/wkhtmltoimage /usr/bin
sudo rm ./wkhtmltox_0.12.6-1.bionic_amd64.deb
```

## 4. Install Virtual Environment (Optional)

Karena Odoo dibuat menggunakan Pemrograman Python, disarankan agar menginstall virtual environment agar tidak merusak Library Python bawaan. Dalam artikel ini akan menggunakan Virtual Environment dari Anaconda. Developer juga bisa menggunakan Virtual Environment lain sesuai kebutuhan/preferensi.

Berikut cara install Virtual Environment Miniconda

```sh
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
chmod +x Miniconda3-latest-Linux-x86_64.sh
./Miniconda3-latest-Linux-x86_64.sh
```

## 5. Download Odoo 14
```sh
sudo git clone --depth 1 --branch 14.0 https://www.github.com/odoo/odoo.git
```

## 6. Install Odoo Python Requirement
```sh
cd odoo
python -m pip install -r requirements.txt
cd ~
```

## 7. Persiapkan File Log
```sh
touch odoo.log
```

## 8. Persiapkan File Konfigurasi
`odoo.conf`
```conf
[options]
admin_passwd = admin
xmlrpc_port = 8069
logfile = odoo.log
```

## 9. Persiapkan Postgres SQL User
```
sudo su - postgres 
createuser NAMA-USER-KAMU --interactive --pwprompt
exit
```

## 10. persiapkan skript untuk eksekusi
`odoo.sh`
```sh
/home/NAMA-USER-KAMU/odoo/odoo-bin -c /home/NAMA-USER-KAMU/odoo.conf -r "NAMA-USER-KAMU" -w "PASSWORD-POSTGRES" --db_host "127.0.0.1" --limit-time-real=0 -s
```

## 11. Persiapkan Service
`/lib/systemd/system/odoo.service`

```conf
[Unit]
Description=Odoo Server.

[Service]
Type=simple
Restart=always
ExecStart=/bin/bash /home/NAMA-USER-KAMU/odoo.sh

[Install]
WantedBy=multi-user.target
```

```sh
sudo systemctl enable odoo
sudo systemctl start odoo
sudo systemctl stop odoo
sudo systemctl restart odoo
```

> SELESAI
