<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name')->default('Ryosuke Kawamura'); // 氏名
            $table->string('title')->default('Software Engineer / Product Manager'); // 役職
            $table->text('bio')->default('近畿大学情報学部2回生'); // 自己紹介
            $table->string('profile_image')->default('images/profile.jpg'); // プロフィール画像パス
            $table->string('twitter_link')->default('https://twitter.com/tenhou_0126');
            $table->string('linkedin_link')->default('https://www.linkedin.com/in/彩翔-藤田-595a16352/');
            $table->string('github_link')->default('https://github.com/tenhou-Ravenclaw');
            // 他のSNSリンクなど
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
