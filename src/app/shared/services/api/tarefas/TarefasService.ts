import { Api } from '../ApiConfig';
import { ApiException } from '../ApiExeception';

export interface Itarefa{
  id: number;
  title: string;
  isCompleted: boolean;
}

const getAll = async (): Promise<Itarefa[] | ApiException> => {
    try {
        const { data } = await Api().get('/tarefas');
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao buscar as tarefas');
    }

};

const getById = async (id: number): Promise<Itarefa | ApiException> => {
    try {
        const { data } = await Api().get(`/tarefas/${id}`);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao buscar a tarefa');
    }
};

const create = async (dataToCreate: Omit<Itarefa, 'id'>): Promise<Itarefa | ApiException> => {
    try {
        const { data } = await Api().post<any>('/tarefas',dataToCreate);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao criar a tarefa');
    }

};

const updateById = async (id: number, dataToUpdate: Itarefa): Promise<Itarefa | ApiException> => {
    try {
        const { data } = await Api().put(`/tarefas/${id}`, dataToUpdate);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao atualizar a tarefa');
    }

};

const deleteById = async (id: number): Promise<boolean | ApiException> => {
    try {
        await Api().delete(`/tarefas/${id}`);
        return true;
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao deletar a tarefa');
    }
};

export const TarefasService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
};