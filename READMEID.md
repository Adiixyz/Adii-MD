# Adii-MD

<a href="https://github.com/Adiixyz/Adii-MD/network/members"><img title="Forks" src="https://img.shields.io/github/forks/Adiixyz/Adii-MD?label=Forks&color=blue&style=flat-square"></a>
<a href="https://github.com/Adiixyz/Adii-MD/watchers"><img title="Watchers" src="https://img.shields.io/github/watchers/Adiixyz/Adii-MD?label=Watchers&color=green&style=flat-square"></a>
<a href="https://github.com/Adiixyz/Adii-MD/stargazers"><img title="Stars" src="https://img.shields.io/github/stars/Adiixyz/Adii-MD?label=Stars&color=yellow&style=flat-square"></a>
<a href="https://github.com/Adiixyz/Adii-MD/graphs/contributors"><img title="Contributors" src="https://img.shields.io/github/contributors/Adiixyz/Adii-MD?label=Contributors&color=blue&style=flat-square"></a>
<a href="https://github.com/Adiixyz/Adii-MD/issues"><img title="Issues" src="https://img.shields.io/github/issues/Adiixyz/Adii-MD?label=Issues&color=success&style=flat-square"></a>
<a href="https://github.com/Adiixyz/Adii-MD/issues?q=is%3Aissue+is%3Aclosed"><img title="Issues" src="https://img.shields.io/github/issues-closed/Adiixyz/Adii-MD?label=Issues&color=red&style=flat-square"></a>
<a href="https://github.com/Adiixyz/Adii-MD/pulls"><img title="Pull Request" src="https://img.shields.io/github/issues-pr/Adiixyz/Adii-MD?label=PullRequest&color=success&style=flat-square"></a>
<a href="https://github.com/Adiixyz/Adii-MD/pulls?q=is%3Apr+is%3Aclosed"><img title="Pull Request" src="https://img.shields.io/github/issues-pr-closed/Adiixyz/Adii-MD?label=PullRequest&color=red&style=flat-square"></a>

#### Deploy ke Heroku
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/BochilGaming/games-wabot)

#### Heroku Buildpack
| BuildPack | LINK |
|--------|--------|
| **FFMPEG** |[here](https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest) |
| **IMAGEMAGICK** | [here](https://github.com/DuckyTeam/heroku-buildpack-imagemagick) |

### Untuk pengguna termux
```bash
pkg update && pkg upgrade
pkg install bash && pkg install wget
wget -O - https://raw.githubusercontent.com/Adiixyz/Adii-MD/multi-device/install2.sh | bash
```

---------

## Untuk pengguna ubuntu-termux

[ Menginstal Ubuntu ]

```bash
apt update && apt full-upgrade
apt install wget curl git proot-distro
proot-distro install ubuntu
echo "proot-distro login ubuntu" > $PREFIX/bin/ubuntu
ubuntu
```
---------

[ Menginstal Paket yang Diperlukan ]

```bash
ubuntu
apt update && apt full-upgrade
apt install wget curl git ffmpeg imagemagick build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev dbus-x11 ffmpeg2theora ffmpegfs ffmpegthumbnailer ffmpegthumbnailer-dbg ffmpegthumbs libavcodec-dev libavcodec-extra libavcodec-extra58 libavdevice-dev libavdevice58 libavfilter-dev libavfilter-extra libavfilter-extra7 libavformat-dev libavformat58 libavifile-0.7-bin libavifile-0.7-common libavifile-0.7c2 libavresample-dev libavresample4 libavutil-dev libavutil56 libpostproc-dev libpostproc55 graphicsmagick graphicsmagick-dbg graphicsmagick-imagemagick-compat graphicsmagick-libmagick-dev-compat groff imagemagick-6.q16hdri imagemagick-common libchart-gnuplot-perl libgraphics-magick-perl libgraphicsmagick++-q16-12 libgraphicsmagick++1-dev
```

---------

[ Meninstal NODEJS & ADII-MD ]

```bash
ubuntu
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
apt install -y nodejs gcc g++ make
git clone https://github.com/Adiixyz/Adii-MD
cd Adii-MD
npm install
```

---------

## Untuk pengguna VPS
```cmd
apt install nodejs git ffmpeg imagemagick
git clone https://github.com/Adiixyz/Adii-MD
cd Adii-MD
npm i
```

## Untuk pengguna WINDOWS/RDP

* Unduh dan pasang Git [`Click Here`](https://git-scm.com/downloads)
* Unduh dan pasang NodeJS [`Click Here`](https://nodejs.org/en/download)
* Unduh dan pasang FFmpeg [`Click Here`](https://ffmpeg.org/download.html) (**Jangan Lupa Tambahkan FFmpeg ke variabel lingkungan PATH**)
* Unduh dan pasang ImageMagick [`Click Here`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/Adiixyz/Adii-MD
cd Adii-MD
npm install
```

- If you want to Clone to `C:\`
```bash
cd C:\
git clone https://github.com/Adiixyz/Adii-MD
cd Adii-MD
npm install
```
---------

## Jalankan bot

```bash
node .
```

---------

## Argumen `node . [--options] [<session name>]`
### Contoh : `node. --gconly Adii`

### `--self`

Aktifkan mode self (Abaikan yang lain)

### `--pconly`

Jika obrolan itu bukan dari obrolan pribadi, bot akan mengabaikan

### `--gconly`

Jika obrolan itu bukan dari grup, bot akan mengabaikan

### `--swonly`

Jika obrolan itu bukan dari status, bot akan mengabaikan

### `--prefix <prefixes>`

* `prefixes` dipisahkan oleh masing-masing karakter atur awalan

### `--server`

Digunakan untuk [heroku](https://heroku.com/) atau pindai melalui situs web

### `--big-qr`

Jika qr unicode kecil tidak mendukung

### `--restrict`

Mengaktifkan plugin terbatas (yang dapat menyebabkan nomor Anda **banned** jika terlalu sering digunakan)

* Administrasi Grup `add, kick`

### `--img`

Aktifkan pemeriksa gambar melalui terminal

### `--autoread`

Jika diaktifkan, semua pesan masuk akan ditandai sebagai telah dibaca

### `--nyimak`

Tidak ada bot, cukup cetak pesan yang diterima dan tambahkan pengguna ke database

### `--test`

**Development** Testing Mode

### `--trace`

```js
conn.logger.level = 'trace'
```

### `--debug`

```js
conn.logger.level = 'debug'
```

---------


### Terimakasih untuk 
[![BochilGaming](https://github.com/BochilGaming.png?size=100)](https://github.com/BochilGaming)

#### Penyumbang
[![Adiixyz](https://github.com/Adiixyz.png?size=100)](https://github.com/Adiixyz)
