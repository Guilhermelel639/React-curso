import { Api } from '../ApiConfig';
import { ApiException } from '../ApiExeception';

interface IUsuario{
    id: string;
    username: string;
    password: string;
}
const getByUsername = async (username: string): Promise<IUsuario | ApiException> => {
    try {
        const { data } = await Api().get(`/user?username=${username}`);
        if(data.length === 0){
            return new ApiException('Usuário não encontrado');
        };
        return data[0];
    } catch (error) {
        return new ApiException('Erro ao buscar usuário');
    }
};

export const UsuarioService = {
    getByUsername
};