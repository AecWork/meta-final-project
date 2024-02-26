export type ValueTypes = number | string | null;

export interface InputProps<T extends ValueTypes> {
    label?: string
    value?: T
    caption?: string
    error?: string
    onChange?: (value: T) => void
}