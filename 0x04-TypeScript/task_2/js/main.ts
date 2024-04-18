export interface DirectorInterface {
    workFromHome(): string;
    getToWork(): string;
    workDirectorTasks(): string;
    }

export interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
    }

export class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }
    getToWork(): string {
        return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

export class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

export function createEmployee(salary: number | string) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

export function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
}

export function executeWork(employee: Director | Teacher) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

export type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else {
        return 'Teaching History';
    }
}