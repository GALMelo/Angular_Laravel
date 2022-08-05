<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use illuminate\Http\Request;
use illuminate\Support\Facades\DB;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Show the profile for a given user.
     *
     * @param  int  $id
     * @return \Illuminate\View\View
     */

    public function checkEmail($email)
    {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return true;
        } else {
            return false;
        }
    }

    public function checkCpf($cpf)
    {
        // Extrai somente os números
        $cpf = preg_replace('/[^0-9]/is', '', $cpf);

        // Verifica se foi informado todos os digitos corretamente
        if (strlen($cpf) != 11) {
            return false;
        }

        // Verifica se foi informada uma sequência de digitos repetidos. Ex: 111.111.111-11
        if (preg_match('/(\d)\1{10}/', $cpf)) {
            return false;
        }

        // Faz o calculo para validar o CPF
        for ($t = 9; $t < 11; $t++) {
            for ($d = 0, $c = 0; $c < $t; $c++) {
                $d += $cpf[$c] * (($t + 1) - $c);
            }
            $d = ((10 * $d) % 11) % 10;
            if ($cpf[$c] != $d) {
                return false;
            }
        }
        return true;
    }

    public function register(Request $request)
    {
        //Primeiro pegamos todos os dados enviados para a API
        $data = json_decode($request->getContent());

        //Colocamos os dados nas suas devidas váriaveis
        $name = $data->name;

        //Verificamos se o email e CPF são válidos
        $email = $data->email;
        $this->checkEmail($email) ?: abort(400, 'Email inválido');
        $cpf = $data->cpf;
        $this->checkCpf($cpf) ?: abort(400, 'CPF inválido');


        $phone = $data->phone ? $data->phone : '';
        $knowledge = $data->knowledge;

        //Verificamos se o usuário já existe no banco de dados
        $user = User::where('email', $email)->first();
        if ($user) {
            abort(400, 'Usuário já existe');
        }
        //Criamos o usuário
        $user = new User();
        $user->name = $name;
        $user->email = $email;
        $user->cpf = $cpf;
        $user->phone = $phone;
        $user->knowledge = $knowledge;
        $user->save();
        return view('welcome');
    }

    //Retorna todos os usuários
    public function getAll()
    {
        $users = User::all();
        return response()->json($users, 200);
    }

    //Retorna um usuário pelo ID
    public function getById($id)
    {
        $user = User::find($id);
        if (!$user) {
            abort(404, 'Usuário não encontrado');
        }
        return response()->json($user, 200);
    }

    //Atualiza um usuário para ser validado ou não
    public function validateUser($id)
    {

        $user = User::find($id);
        if (!$user) {
            abort(404, 'Usuário não encontrado');
        }
        //Checamos se o usário já foi validado se sim ele vai para não validado, caso não vai para validado
        $user->validated = !$user->validated;
        $user->save();
        return response()->json($user, 200);
    }
}
