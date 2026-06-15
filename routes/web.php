<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Test', [
        'name' => 'Sven',   // wird als Prop an React übergeben
    ]);
});

Route::get('/dashboard/', function () {
    return Inertia::render('Dashboard', [
        'name' => 'Sven',   // wird als Prop an React übergeben
    ]);
});

Route::get('/test/', function () {
    return Inertia::render('Test', [
        'name' => 'Sven',   // wird als Prop an React übergeben
    ]);
});
