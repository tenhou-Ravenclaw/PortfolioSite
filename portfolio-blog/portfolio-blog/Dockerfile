FROM php:8.2-apache

# 必要なPHP拡張をインストール
RUN docker-php-ext-install pdo pdo_mysql mysqli

# Apacheのmod_rewriteを有効化（URLの書き換えに必要）
RUN a2enmod rewrite

# 設定ファイルのコピー（PHPの設定を上書き）
COPY docker/php/php.ini /usr/local/etc/php/php.ini

# コンテナのポートを公開
EXPOSE 80