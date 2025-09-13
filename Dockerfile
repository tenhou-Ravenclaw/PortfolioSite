FROM php:8.2-fpm

# 必要なパッケージのインストール
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    git \
    curl

# PHP拡張モジュールのインストール
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Composerのインストール
COPY --from=composer:2.5 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

CMD ["php-fpm"]
