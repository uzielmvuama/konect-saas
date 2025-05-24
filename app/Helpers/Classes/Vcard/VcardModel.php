<?php

namespace App\Helpers\Classes\Vcard;

use App\Helpers\Classes\Vcard\VcardProperty\Properties\{
    EmailVcard,
    LocationVcard,
    NameVcard,
    NoteVcard,
    SocialVcardItemAll,
    UrlVcard
};
use App\Helpers\Classes\Vcard\VcardProperty\Properties\SocialVcardItem\SocialVcardItem;
use App\Helpers\Classes\Vcard\VcardProperty\Properties\VideoLinkVcard;

abstract class VcardModel
{
    public NameVcard $names;
    public array $email = [];
    public SocialVcardItemAll $socialProfils;
    public array $urls = [];
    public array $videoLinks = [];
    public NoteVcard $note;
    public LocationVcard $location;

    public function __construct($vinfo = null)
    {
        if (empty($vinfo)) {
            $this->initializeEmptyProperties();
        } else {
            $vinfo = json_decode($vinfo);
            $this->initializeProperties($vinfo);
        }
    }

    private function initializeEmptyProperties(): void
    {
        $this->names = new NameVcard(givenName: "", familyName: "", middleName: "", prefix: "", suffix: "");
        $this->email[] = new EmailVcard(type: "", text: "");
        $this->location = new LocationVcard();
        $this->socialProfils = new SocialVcardItemAll(
            facebook: new SocialVcardItem(uri: ""),
            instagram: new SocialVcardItem(uri: ""),
            twitter: new SocialVcardItem(uri: ""),
            youtube: new SocialVcardItem(uri: ""),
            tiktok: new SocialVcardItem(uri: ""),
            linkedin: new SocialVcardItem(uri: ""),
            pinterest: new SocialVcardItem(uri: "")
        );
        $this->note = new NoteVcard(text: "");
    }

    private function initializeProperties($vinfo): void
    {
        $this->names = new NameVcard(
            givenName: $vinfo->names->givenName,
            familyName: $vinfo->names->familyName,
            middleName: $vinfo->names->middleName,
            prefix: $vinfo->names->prefix,
            suffix: $vinfo->names->suffix
        );
        if (isset($vinfo->email)) {
            if (is_array($vinfo->email)) {
                foreach ((array) $vinfo->email as $em) {
                    $this->email[] = new EmailVcard(type: $em->type, text: $em->text);
                }
            } elseif (is_object($vinfo->email)) {
                $this->email[] = new EmailVcard(type: $vinfo->email->type, text: $vinfo->email->text);
            }
        }

        $this->socialProfils = new SocialVcardItemAll(
            facebook: new SocialVcardItem(uri: $vinfo->socialProfils->facebook->uri, type: "facebook"),
            instagram: new SocialVcardItem(uri: $vinfo->socialProfils->instagram->uri, type: "instagram"),
            twitter: new SocialVcardItem(uri: $vinfo->socialProfils->twitter->uri, type: "twitter"),
            youtube: new SocialVcardItem(uri: $vinfo->socialProfils->youtube->uri, type: "youtube"),
            tiktok: new SocialVcardItem(uri: $vinfo->socialProfils->tiktok->uri, type: "tiktok"),
            linkedin: new SocialVcardItem(uri: $vinfo->socialProfils->linkedin->uri, type: "linkedin"),
            pinterest: new SocialVcardItem(uri: $vinfo->socialProfils->pinterest->uri ?? "", type: "pinterest")
        );
        $this->note = new NoteVcard(text: $vinfo->note->text);
        $this->urls = array_map(fn($url) => new UrlVcard(type: $url->type, uri: $url->uri), $vinfo->urls);
        $this->location = new LocationVcard(
            ip: $vinfo->location->ip,
            iso_code: $vinfo->location->iso_code,
            country: $vinfo->location->country,
            city: $vinfo->location->city,
            state: $vinfo->location->state,
            state_name: $vinfo->location->state_name,
            postal_code: $vinfo->location->postal_code,
            lat: $vinfo->location->lat,
            lon: $vinfo->location->lon,
            timezone: $vinfo->location->timezone,
            continent: $vinfo->location->continent,
            currency: $vinfo->location->currency,
            deFault: $vinfo->location->deFault
        );
        $this->videoLinks = array_map(fn($video) => new VideoLinkVcard(type: $video->type, uri: $video->uri), $vinfo->videoLinks);
    }

    public function array_gen(): array
    {
        return (array)$this;
    }

    public function json_gen(): string|false
    {
        return json_encode($this);
    }

    public function addName(NameVcard $names)
    {
        $this->names = $names;
    }

    public function addNote(NoteVcard $note)
    {
        $this->note = $note;
    }

    public function addEmail(EmailVcard $email)
    {
        $this->email[] = $email;
    }

    public function addAdress(LocationVcard $location)
    {
        $this->location = $location;
    }

    public function addSocialProfil(SocialVcardItemAll $socialProfils)
    {
        $this->socialProfils = $socialProfils;
    }

    public function addUrl(UrlVcard $url): void
    {
        $this->urls[] = $url;
    }

    public function addVideoLink(VideoLinkVcard $video): void
    {
        $this->videoLinks[] = $video;
    }
}
