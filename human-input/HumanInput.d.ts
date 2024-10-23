import { InputProps } from '../ui/input';

export interface HumanInputProps extends React.InputHTMLAttributes<HTMLInputElement>, InputProps {
    input: string;
}
export declare function HumanInput({ input, className, ...props }: HumanInputProps): JSX.Element;
