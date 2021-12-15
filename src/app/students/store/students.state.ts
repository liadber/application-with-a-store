import {Student} from '../../common/student.model';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import * as fromSchoolApp from '../../store/school-app-state';

export const STUDENTS_KEY = 'students';

export interface State extends EntityState<Student> {
  // additional state properties
  selectedStudentId: number | null;
  averageGrade: number;
}

/* functions for the EntityAdapter */
export function sortByName(a: Student, b: Student): number {
  return a.entityId - b.entityId;
}

export const adapter: EntityAdapter<Student> = createEntityAdapter<Student>({
  selectId: a => a.entityId,
  sortComparer: sortByName, // (optional)
});


export interface StudentsState extends fromSchoolApp.SchoolAppState {
  // (Optional - Modules)
  // Note: using [] in interface definition ables to using variable name.
  [STUDENTS_KEY]: State;
}

export const simulationsInitialState: State = adapter.getInitialState({
  entities: /*demo-data*/ [{entityId: 1, field1: 1, field2: 'a'}, {entityId: 1, field1: 1, field2: 'a'}],
  selectedStudentId: 1,
  averageGrade: 82
});
