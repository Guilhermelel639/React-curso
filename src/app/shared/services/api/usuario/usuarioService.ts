import { Api } from '../ApiConfig';
import { ApiException } from '../ApiExeception';

export interface IUsuario{
    id: string;
    username: string;
    password: string;
}
const getByUsername = async (username: string): Promise<IUsuario | ApiException> => {
    try {
        const { data } = await Api().get('/user');
        const user = data.find((user: IUsuario) => user.username === username);
        if(!user){
            return new ApiException('Usuário não encontrado');
        };
        return user;
    } catch (error) {
        return new ApiException('Erro ao buscar usuário');
    }
};

export const UsuarioService = {
    getByUsername
};