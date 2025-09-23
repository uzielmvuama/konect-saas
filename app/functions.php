<?php


function normalize_url(string $url, string $defaultScheme = 'https'): ?string
{
    // 1) trim guillemets/espaces/contrôles
    $url = trim($url, " \t\n\r\0\x0B\"'");

    // 2) backslashes -> slashes
    $url = str_replace('\\', '/', $url);

    // 3) si schéma absent, on tente d’en déduire un
    if (!preg_match('#^[a-z][a-z0-9+\-.]*://#i', $url)) {
        // supporte //example.com
        if (str_starts_with($url, '//')) {
            $url = $defaultScheme . ':' . $url;
        } else {
            // cas "example.com/..." -> préfixer
            $url = $defaultScheme . '://' . ltrim($url, '/');
        }
    }

    // 4) parse
    $parts = parse_url($url);
    if ($parts === false || empty($parts['host'])) {
        return null;
    }

    $scheme = $parts['scheme'] ?? $defaultScheme;
    $host = $parts['host'];
    $port = isset($parts['port']) ? ':' . $parts['port'] : '';
    $user = $parts['user'] ?? null;
    $pass = isset($parts['pass']) ? ':' . $parts['pass'] : null;
    $auth = $user ? $user . ($pass ? $pass : '') . '@' : '';

    // 5) path: compacter les slashes + résoudre ./ et ../
    $path = $parts['path'] ?? '/';
    // compacter les /// sauf après schéma
    $path = preg_replace('#/+#', '/', $path);
    // normaliser . et ..
    // supprime "/./"
    $path = preg_replace('#/\.(?=/|$)#', '/', $path);
    // résout "/a/../"
    while (str_contains($path, '/..')) {
        $path = preg_replace('#/(?!\.\.)[^/]+/\.\.(?=/|$)#', '/', $path);
    }
    if ($path === '') $path = '/';

    // 6) query/fragment
    $query = isset($parts['query']) ? '?' . $parts['query'] : '';
    $fragment = isset($parts['fragment']) ? '#' . $parts['fragment'] : '';

    $normalized = "{$scheme}://{$auth}{$host}{$port}{$path}{$query}{$fragment}";

    // 7) validation finale
    return filter_var($normalized, FILTER_VALIDATE_URL) ? $normalized : null;
}
