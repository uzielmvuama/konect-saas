<?php

namespace App\Console\Commands\User;

use App\Helpers\Services\UserService;
use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

class ResetPassword extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'user:generate-vcard {user* : The ID(s) of the user(s)} {--emailed : Send email to user} {--no-default= : Disable default laravel password}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Manually generate reset password for user';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $arguments = $this->argument("user");
        $emailed = $this->option('emailed');
        $noDefault= $this->option('no-default');


        foreach ($arguments as $id) {
            try {
                $user = User::findOrFail($id);
                $newPassword= isset($noDefault) ? generateSimplePassword() : "password";

                if($emailed){

                }else{
                    $user->password= Hash::make($newPassword);
                    $user->save();
                }
                $this->info("Successfully, new password : $newPassword ");

            } catch (\Throwable $th) {
                $this->fail("No user was found for id $id: [ ". $th->getMessage()." ].");
            }
        }
    }


    /**
     * Prompt for missing input arguments using the returned questions.*
     * @return array<string, string>
     */
    protected function promptForMissingArgumentsUsing(): array
    {

        return [
            'user' => 'For which user do you want to generate vcard ?',
        ];

    }
}
