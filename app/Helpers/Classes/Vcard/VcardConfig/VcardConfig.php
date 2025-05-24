<?php

namespace App\Helpers\Classes\Vcard\VcardConfig;

class VcardConfig
{
    public bool $isCardActivated;
    public VcardConfigTheme $configTheme;
    public bool $showKonects;
    public bool $showLocalization = true;

    public function __construct(bool $isCardActivated = true, bool $showLocalization = true, bool $showKonects = true, VcardConfigTheme $configTheme = new VcardConfigTheme())
    {
        $this->showLocalization = $showLocalization;
        $this->showKonects = $showKonects;
        $this->configTheme = $configTheme;
        $this->isCardActivated = $isCardActivated;

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
