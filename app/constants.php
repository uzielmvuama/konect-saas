<?php
define('ORDER_ASSETS', 'gagets-assets' . DIRECTORY_SEPARATOR);
define('CUSTOM_LOGO_PATH', ORDER_ASSETS . 'custom-logos');  # Right format
define("FILE_DRIVER", env('APP_ENV') == "local" ? "public" : "local");
define("FILES_APP_URL", "https://ikonect.info");
define("VCARD_ROOT_PATH", "vcards");
define("PROFILE_IMG_ROOT_PATH", "profile-photos");
define("COMP_PROFILE_IMG_ROOT_PATH", "compressed-photo");
define("COMP_COMPANY_IMG_ROOT_PATH", "compressed-companies-photo");
