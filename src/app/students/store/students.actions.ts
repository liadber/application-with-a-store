import {createAction, props} from '@ngrx/store';
import {Dictionary} from '@ngrx/entity';
import {Student} from '../../common/student.model';

export const enum studentsActionsTypes {
  GET_STUDENTS = '[Students] Get Students',
  GET_STUDENTS_SUCCESS = '[Students] Get Students success',
  GET_STUDENTS_ERROR = '[Students] Get Students success',
}

export const getStudents = createAction(studentsActionsTypes.GET_STUDENTS);
export const getStudentsSuccess = createAction(studentsActionsTypes.GET_STUDENTS_SUCCESS, props<Dictionary<Student>>());
export const getStudentsError = createAction(studentsActionsTypes.GET_STUDENTS_ERROR);

export type StudentsAction =
  studentsActionsTypes.GET_STUDENTS |
  studentsActionsTypes.GET_STUDENTS_SUCCESS |
  studentsActionsTypes.GET_STUDENTS_ERROR;
