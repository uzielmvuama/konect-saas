<?php

namespace App\Helpers\Classes\Vcard\VcardConfig;

use App\Helpers\Enums\KPreview\KPreviewThemMode;
use App\Helpers\Enums\KPreview\KPreviewZoom;

class VcardConfigTheme
{
    public string $primaryColor;
    public KPreviewZoom $kpZoom;
    public KPreviewThemMode $themeMode;

    public function __construct(string $primaryColor = "#0f0f0f", KPreviewZoom $kpZoom = KPreviewZoom::NORMAL, KPreviewThemMode $themeMode = KPreviewThemMode::LIGHT)
    {
        $this->primaryColor = $primaryColor;
        $this->kpZoom = $kpZoom;
        $this->themeMode = $themeMode;
    }

    public function array_gen(): array
    {
        return (array)$this;
    }

    public function json_gen(): string|false
    {
        return json_encode($this);
    }
}
