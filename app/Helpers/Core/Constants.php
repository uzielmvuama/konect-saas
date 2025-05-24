<?php

namespace App\Helpers\Core;

class Constants
{
    // File paths
    const STORAGE_IMG_PATH = DIRECTORY_SEPARATOR . 'storage' . DIRECTORY_SEPARATOR;
    const COMPRESSED_IMG_PATH = self::STORAGE_IMG_PATH . 'compressed-photo' . DIRECTORY_SEPARATOR;


    // Status Codes
    const UNAUTHORIZED_STATUS_CODE = "401";
    const FETCH_STATUS_CODE = "200";
    const CREATED_STATUS_CODE = "201";
    const ACCEPTED_STATUS_CODE = "202";
    const NO_CONTENT_STATUS_CODE = "204";
    const BAD_REQUEST_STATUS_CODE = "400";
    const NOT_FOUND_STATUS_CODE = "404";
    const FORBIDDEN_STATUS_CODE = "403";
    const INTERNAL_SERVER_ERROR_STATUS_CODE = "500";
    const UNPROCESSABLE_ENTITY_STATUS_CODE = "422";

    // MultiPayment Methods
    const PAYMENT_METHOD_STRIPE = "stripe";
    const PAYMENT_METHOD_PAYPAL = "paypal";
    const PAYMENT_METHOD_OTHER = "other";

    // URLs
    const IONOS_ROOT_PATH = "http://s1004216347.online-home.ca" . DIRECTORY_SEPARATOR;
    const FTP_ASSET_URL = "https://ikonect.info/assets" . DIRECTORY_SEPARATOR;
    const FTP_ROOT_URL = "https://ikonect.info" . DIRECTORY_SEPARATOR;

    // Accepted Languages
    const ACCEPTED_LANGUAGES = [
        "en" => "English",
        "fr" => "French"
    ];

    // Notification Types
    const NOTIFICATION_TYPE_USER_SHARE = "App\Notifications\ContactShareNotification";
    const NOTIFICATION_TYPE_USER_CONNECT = "App\Notifications\KonectSuccessNotification";
    const NOTIFICATION_TYPE_TEAM_INVITATION = "App\Notifications\TeamMemberInvitationNotification";

    // Miscellaneous
    const COPY_ = "App\Notifications\ContactShareNotification";
    const INSERTING_FIELD = "__inserting__";

    // User roles
    const ROLE_ADMIN_ROLE= "admin";
    const ROLE_PERSONAL_ROLE = "personal";
    const ROLE_COMPANY_ROLE = "company";



}
