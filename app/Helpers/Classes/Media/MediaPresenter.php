<?php

// app/Support/MediaPresenter.php
namespace App\Helpers\Classes\Media;

use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Illuminate\Support\Carbon;

class MediaPresenter
{
    public static function item(Media $m, array $conversions = ['thumb','large']): array
    {
        $isS3 = $m->disk === 's3';

        $urls = [];
        foreach ($conversions as $c) {
            $urls[$c] = $m->hasGeneratedConversion($c)
                ? ($isS3 ? $m->getTemporaryUrl(now()->addMinutes(10), $c) : $m->getUrl($c))
                : null;
        }

        // URL “originale” (attention si disque privé → préférer une route signée)
        $urls['original'] = $isS3 ? $m->getTemporaryUrl(now()->addMinutes(10)) : $m->getUrl();

        return [
            'id'         => $m->id,
            'name'       => $m->name,
            'mime'       => $m->mime_type,
            'size'       => $m->human_readable_size,
            'width'      => $m->getCustomProperty('width'),   // si tu les stockes
            'height'     => $m->getCustomProperty('height'),
            'created_at' => $m->created_at?->toIso8601String(),
            'urls'       => $urls,
        ];
    }

    public static function collection($media, array $conversions = ['thumb','large']): array
    {
        return collect($media)->map(fn ($m) => self::item($m, $conversions))->values()->all();
    }
}
