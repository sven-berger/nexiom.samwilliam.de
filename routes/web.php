<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'name' => 'Sven',
        'phpVersion' => PHP_VERSION,
        'mysqlVersion' => DB::select('SELECT VERSION() as version')[0]->version,
        'apacheVersion' => $_SERVER['SERVER_SOFTWARE'] ?? null,
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
