<?php

namespace App\Console\Commands\User;

use App\Helpers\Classes\Vcard\VcardModel;
use App\Helpers\Services\UserService;
use App\Models\User;
use Illuminate\Console\Command;

class FixVcardFormat extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'user:fix-vcard {user* : The ID(s) of the user(s)}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command to manualy fix vcard format for user';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $arguments = $this->argument("user");

        foreach ($arguments as $id) {
            try {
                $user = User::findOrFail($id);
                $vinfo= json_decode($user->vinfo);

              $normalized=  VcardModel::normalize($vinfo);
              $user->vinfo= json_encode($normalized);
              $user->save();
              $this->info("Vcard format successfully fixed for user $id");
            } catch (\Throwable $th) {
                $this->fail("No user was found for id $id: [ ". $th->getMessage()." ].");
            }
        }
    }

    /**

     * Prompt for missing input arguments using the returned questions.

     *

     * @return array<string, string>

     */

    protected function promptForMissingArgumentsUsing(): array

    {

        return [
            'user' => 'For which user do you want to generate vcard ?',
        ];

    }
}
