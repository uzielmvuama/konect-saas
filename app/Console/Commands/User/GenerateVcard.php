<?php

namespace App\Console\Commands\User;

use App\Helpers\Services\UserService;
use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Contracts\Console\PromptsForMissingInput;

class GenerateVcard extends Command implements PromptsForMissingInput
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'user:generate-vcard {user* : The ID(s) of the user(s)}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command to manually generate vcard for user';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $arguments = $this->argument("user");

        foreach ($arguments as $id) {
            try {
                $user = User::findOrFail($id);
                $uService = new UserService();
                $uService->vcardGenerate($user);
                $this->info("Vcard successfully generated for user $id");
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
