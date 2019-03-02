export type Bit = 0 | 1;
export type BitDigit = [Bit, Bit, Bit, Bit];
export type BitTime = BitDigit[];


export interface UpdateFn {
    (bitTime: BitTime): void;
}