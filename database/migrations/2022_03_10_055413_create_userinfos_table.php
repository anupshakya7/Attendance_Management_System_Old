<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserinfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('userinfos', function (Blueprint $table) {
            $table->userid();
            $table->string('badgenumber', 20);
            $table->integer('defaultdeptid')->nullable();
            $table->string('name', 40)->nullable();
            $table->string('Password', 20)->nullable();
            $table->string('Card', 255)->nullable();
            $table->integer('Privilege')->nullable();
            $table->integer('AccGroup')->nullable();
            $table->string('TimeZones', 20)->nullable();
            $table->string('Gender', 10)->nullable();
            $table->dateTime('Birthday')->nullable();
            $table->string('street', 40)->nullable();
            $table->string('zip', 6)->nullable();
            $table->string('ophone', 20)->nullable();
            $table->string('FPhone', 20)->nullable();
            $table->string('pager', 20)->nullable();
            $table->string('minzu', 8)->nullable();
            $table->string('title', 20)->nullable();
            $table->string('SN', 20)->nullable();
            $table->string('SSN', 20)->nullable();
            $table->dateTime('UTime')->nullable();
            $table->string('City', 20)->nullable();
            $table->smallInteger('securityflags')->nullable();
            $table->smallInteger('DelTag');
            $table->integer('RegisterOT')->nullable();
            $table->integer('AutoSchPlan')->nullable();
            $table->integer('MinAutoSchInterval')->nullable();
            $table->integer('image_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('userinfos');
    }
}
