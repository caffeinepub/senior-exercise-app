import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Exercise {
    id: bigint;
    title: string;
    repsOrDuration: string;
    difficulty: string;
    description: string;
    steps: Array<string>;
    category: string;
    safetyTips: Array<string>;
    bodyPart: string;
}
export interface backendInterface {
    getAllExercises(): Promise<Array<Exercise>>;
    getExerciseById(id: bigint): Promise<Exercise>;
    getExercisesByCategory(category: string): Promise<Array<Exercise>>;
}
