<?php

namespace App\Helpers\Traits\Vcard;

use App\Helpers\Enums\PointActions;

trait VcardNormalizable
{
    /**
     * Accepts JSON string | array | object and returns a normalized array
     * that matches your current schema: names, emails[], phones[], socialProfils{...},
     * urls[], videoLinks[], imageLinks[], note{text}, location{...}, title.
     */
    public static function normalize(array|object|string|null $input): array
    {
        if (is_null($input) || $input === '') {
            return self::emptyPayload();
        }

        if (is_string($input)) {
            $decoded = json_decode($input);
            $input = $decoded ?: [];
        }

        // Force array shape
        if (is_object($input)) {
            $input = json_decode(json_encode($input), true);
        }

        // --- Old keys → New keys (compat) ---
        // email -> emails
        if (array_key_exists('email', $input) && !array_key_exists('emails', $input)) {
            $input['emails'] = $input['email'];
            unset($input['email']);
        }
        // phone -> phones
        if (array_key_exists('phone', $input) && !array_key_exists('phones', $input)) {
            $input['phones'] = $input['phone'];
            unset($input['phone']);
        }

        // Base scaffold
        $out = self::emptyPayload();

        // names
        $names = $input['names'] ?? [];
        $out['names'] = [
            'givenName' => (string)($names['givenName'] ?? ''),
            'familyName' => (string)($names['familyName'] ?? ''),
            'middleName' => (string)($names['middleName'] ?? ''),
            'prefix' => (string)($names['prefix'] ?? ''),
            'suffix' => (string)($names['suffix'] ?? ''), // tolerate missing field
        ];

        // emails (ensure array of {text, type})
        $out['emails'] = self::normalizeTextTypeArray($input['emails'] ?? []);

        // phones (ensure array of {text, type})
        $out['phones'] = self::normalizeTextTypeArray($input['phones'] ?? []);

        // socialProfils (ensure each provider exists with uri+type)
        $providers = ['facebook', 'instagram', 'twitter', 'youtube', 'tiktok', 'linkedin', 'pinterest'];
        $out['socialProfils'] = [];
        foreach ($providers as $p) {
            $node = $input['socialProfils'][$p] ?? [];
            $uri = (string)($node['uri'] ?? '');
            $out['socialProfils'][$p] = [
                'uri' => $uri,
                'type' => $node['type'] ?? $p,
            ];
        }

        // urls [{type, uri}]
        $out['urls'] = self::normalizeTypeUriArray($input['urls'] ?? []);

        // videoLinks/imageLinks [{type, uri}]
        $out['videoLinks'] = self::normalizeTypeUriArray($input['videoLinks'] ?? []);
        $out['imageLinks'] = self::normalizeTypeUriArray($input['imageLinks'] ?? []);

        // note {text}
        $note = $input['note']['text'] ?? ($input['note'] ?? '');
        $out['note'] = ['text' => (string)$note];

        // location
        $loc = $input['location'] ?? [];
        $out['location'] = [
            'ip' => $loc['ip'] ?? null,
            'iso_code' => $loc['iso_code'] ?? null,
            'country' => $loc['country'] ?? null,
            'city' => $loc['city'] ?? null,
            'state' => $loc['state'] ?? null,
            'state_name' => $loc['state_name'] ?? null,
            'postal_code' => $loc['postal_code'] ?? null,
            'lat' => $loc['lat'] ?? null,
            'lon' => $loc['lon'] ?? null,
            'timezone' => $loc['timezone'] ?? null,
            'continent' => $loc['continent'] ?? null,
            'currency' => $loc['currency'] ?? null,
            'deFault' => $loc['deFault'] ?? null,
        ];

        // title (string)
        $out['title'] = (string)($input['title'] ?? '');

        return $out;
    }

    // ---------- helpers ----------

    private static function emptyPayload(): array
    {
        return [
            'names' => [
                'givenName' => '',
                'familyName' => '',
                'middleName' => '',
                'prefix' => '',
                'suffix' => '',
            ],
            'emails' => [],
            'phones' => [],
            'socialProfils' => [
                'facebook' => ['uri' => '', 'type' => 'facebook'],
                'instagram' => ['uri' => '', 'type' => 'instagram'],
                'twitter' => ['uri' => '', 'type' => 'twitter'],
                'youtube' => ['uri' => '', 'type' => 'youtube'],
                'tiktok' => ['uri' => '', 'type' => 'tiktok'],
                'linkedin' => ['uri' => '', 'type' => 'linkedin'],
                'pinterest' => ['uri' => '', 'type' => 'pinterest'],
            ],
            'urls' => [],
            'videoLinks' => [],
            'imageLinks' => [],
            'note' => ['text' => ''],
            'location' => [
                'ip' => null, 'iso_code' => null, 'country' => null, 'city' => null,
                'state' => null, 'state_name' => null, 'postal_code' => null,
                'lat' => null, 'lon' => null, 'timezone' => null, 'continent' => null,
                'currency' => null, 'deFault' => null,
            ],
            'title' => '',
        ];
    }

    /**
     * Accept scalar/object/array; return array of ['text'=>..., 'type'=>...]
     */
    private static function normalizeTextTypeArray($value): array
    {
        if (empty($value)) return [];
        if (!is_array($value)) {
            // single object? make array
            $value = [$value];
        }
        $out = [];
        foreach ($value as $row) {
            if (is_object($row)) $row = (array)$row;
            if (is_string($row)) {
                // If only string given, treat as text
                $out[] = ['text' => $row, 'type' => null];
                continue;
            }
            $out[] = [
                'text' => isset($row['text']) ? (string)$row['text'] : '',
                'type' => $row['type'] ?? null,
            ];
        }
        return $out;
    }

    /**
     * Normalize to array of ['type'=>..., 'uri'=>...]
     */
    private static function normalizeTypeUriArray($value): array
    {
        if (empty($value)) return [];
        if (!is_array($value)) $value = [$value];
        $out = [];
        foreach ($value as $row) {
            if (is_object($row)) $row = (array)$row;
            if (is_string($row)) {
                // If only URL provided, infer a generic type
                $out[] = ['type' => null, 'uri' => $row];
                continue;
            }
            $out[] = [
                'type' => $row['type'] ?? null,
                'uri' => isset($row['uri']) ? (string)$row['uri'] : '',
            ];
        }
        return $out;
    }


}
