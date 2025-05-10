<?php

class CurrencyConverter {
    private static array $rates = [];

    public static function addRate($from, $to, $rate) {
        return self::$rates[$from][$to] = $rate;
    }

    public static function convert(float $amount, string $from, string $to): float {
        $rate = self::$rates[$from][$to];
        return round($amount * $rate , 2);
    }
}

// CurrencyConverter::addRate("MAD" , "ESD" , 3.5);
// CurrencyConverter::addRate("EUR" , "MAD" , 11.2);

// echo CurrencyConverter::convert(10, "EUR" , "MAD");


class UserSessionManager {
    private static array $users = [
        'mouad' => '1234',
        'admin' => 'adminpass',
    ];

    private static bool $isLoggedIn = false;
    private static ?string $currentUser = null;

    public static function login(string $username, string $password): bool {
        if (array_key_exists($username, self::$users) && self::$users[$username] === $password) {
            self::$isLoggedIn = true;
            self::$currentUser = $username;
            echo "Bienvenue : {$username}" . PHP_EOL;
            return true;
        }
        echo "Identifiants incorrects" . PHP_EOL;
        return false;
    }

    public static function logout(): void {
        self::$isLoggedIn = false;
        self::$currentUser = null;
        echo "Déconnexion effectuée." . PHP_EOL;
    }

    public static function isAuthenticated(): bool {
        return self::$isLoggedIn;
    }

    public static function getCurrentUser(): ?string {
        return self::$currentUser;
    }
}


UserSessionManager::login('mouad', '1234');
echo UserSessionManager::isAuthenticated(); // true
// echo UserSessionManager::getCurrentUser(); // mouad

UserSessionManager::logout();
// echo UserSessionManager::isAuthenticated(); // false
