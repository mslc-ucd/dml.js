interface Layer {
    forwardPass: (input: number[]): number[];
    backwardPass: (back: number[]): number[];
}