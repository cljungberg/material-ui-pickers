import { ComponentClass, ReactNode } from 'react';

export interface DayProps {
    children: ReactNode;
}

declare const Day: ComponentClass<DayProps>;

export default Day;
