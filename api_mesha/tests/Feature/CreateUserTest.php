<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

use App\Http\Controllers\UserController;
use App\Models\User;

class TestCreateuser extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */

    // Função para inserir um usuário de teste no banco de dados
    protected function insert_test_user($name, $email, $cpf, $phone, $knowledge)
    {
        $user = new User();
        $user->name = $name;
        $user->email = $email;
        $user->cpf = $cpf;
        $user->phone = $phone;
        $user->knowledge = $knowledge;
        $user->save();
    }

    // Função para testar se a validação do email está ocorrendo corretamente
    public function test_check_email()
    {
        $userController = new UserController();

        $email = "gabrielgmail.com";

        $check = $userController->checkEmail($email);

        $this->assertFalse($check);

        $email = "gabriel@gmail.com";

        $check = $userController->checkEmail($email);

        $this->assertTrue($check);
    }

    // Função para testar se a validação do CPF está ocorrendo corretamente
    public function test_check_cpf()
    {
        $userController = new UserController();

        $cpf = "12345678910";

        $check = $userController->checkCpf($cpf);

        $this->assertFalse($check);

        $cpf = "965.216.950-10";

        $check = $userController->checkCpf($cpf);

        $this->assertTrue($check);
    }

    // Função para testar se o usuário está sendo criado corretamente
    public function test_create_user()
    {
        $name = "Gabriel";
        $email = "gabriel@gmail.com";
        $cpf = "12247032435";
        $phone = "82912345678";
        $knowledge = "Laravel, PHP, JavaScript";

        $this->insert_test_user($name, $email, $cpf, $phone, $knowledge);

        $this->assertDatabaseHas('users', [
            'name' => $name,
            'email' => $email,
            'cpf' => $cpf,
            'phone' => $phone,
            'knowledge' => $knowledge
        ]);

        User::where('name', $name)->delete();
    }

    // Função para testar se a validação do usuário está ocorrendo corretamente
    public function test_validate_user()
    {

        $name = "Gabriel";
        $email = "gabriel@gmail.com";
        $cpf = "12247032435";
        $phone = "82912345678";
        $knowledge = "Laravel, PHP, JavaScript";

        $this->insert_test_user($name, $email, $cpf, $phone, $knowledge);

        $user = User::where('name', $name)->first();

        $user->validated = 1;
        $user->save();

        $this->assertDatabaseHas('users', [
            'name' => $name,
            'email' => $email,
            'cpf' => $cpf,
            'phone' => $phone,
            'knowledge' => $knowledge,
            'validated' => 1
        ]);

        User::where('name', $name)->delete();
    }

    // Função para testar se o usuário está sendo buscado corretamente pelo ID
    public function test_get_user()
    {
        $name = "Gabriel";
        $email = "gabriel@gmail.com";
        $cpf = "12247032435";
        $phone = "82912345678";
        $knowledge = "Laravel, PHP, JavaScript";

        $this->insert_test_user($name, $email, $cpf, $phone, $knowledge);

        $user = User::where('name', $name)->first();

        $getUser = User::find($user->id);

        $this->assertEquals($getUser->name, $name);

        User::where('name', $name)->delete();

        $this->assertDatabaseMissing('users', [
            'name' => $name,
            'email' => $email,
            'cpf' => $cpf,
            'phone' => $phone,
            'knowledge' => $knowledge
        ]);
    }
}
