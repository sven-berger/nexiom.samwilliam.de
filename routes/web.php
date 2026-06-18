<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'name' => 'Sven',
        'phpVersion' => PHP_VERSION,
        'laravelVersion' => app()->version(),
        'mysqlVersion' => DB::select('SELECT VERSION() as version')[0]->version,
        'apacheVersion' => $_SERVER['SERVER_SOFTWARE'] ?? null,
    ]);
});