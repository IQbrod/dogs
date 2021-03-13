export type Supplier<T> = () => T;
export type Consumer<T> = (t:T, err?: Error) => void;