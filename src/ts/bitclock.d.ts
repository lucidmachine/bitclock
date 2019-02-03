export type Bit = 0 | 1;
export type BitDigit = Bit[4];
export type BitTime = BitDigit[4|6];

export interface UpdateFn {
    (bitTime: BitTime): void;
}