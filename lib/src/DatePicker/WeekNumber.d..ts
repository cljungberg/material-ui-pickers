import { ComponentClass, ReactNode } from 'react';

export interface DayProps {
    children: ReactNode;
    hidden?: boolean;
}

declare const Day: ComponentClass<DayProps>;

export default Day;
