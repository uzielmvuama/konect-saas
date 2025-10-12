<?php
define('ORDER_ASSETS', 'gagets-assets' . DIRECTORY_SEPARATOR);
define('CUSTOM_LOGO_PATH', ORDER_ASSETS . 'custom-logos');  # Right format
define("FILE_DRIVER",  config('app.env') === "local" ? "sftp" : "sftp");
define("FILES_APP_URL", "https://ikonect.info");
define("FILES_APP_URL_TEST", "https://ikonect.info/test");
define("FILES_APP_URL_LIVE", "https://ikonect.info/live");
define("VCARD_ROOT_PATH", "vcards");
define("PROFILE_IMG_ROOT_PATH", "profile-photos");
define("COVER_IMG_ROOT_PATH", "cover-photos");
define("ACTIVITY_IMG_ROOT_PATH", "activity-photos");
define("ACTIVITY_VIDEO_ROOT_PATH", "activity-videos");
define("COMP_PROFILE_IMG_ROOT_PATH", "compressed-photo");
define("COMP_COMPANY_IMG_ROOT_PATH", "compressed-companies-photo");
define("SFTP_ROOT_PATH", config('app.env') === 'local' ? FILES_APP_URL_TEST: FILES_APP_URL);
