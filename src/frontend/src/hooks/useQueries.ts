import { useQuery } from "@tanstack/react-query";
import { type Exercise, SAMPLE_EXERCISES } from "../data/exercises";
import { useActor } from "./useActor";

export function useAllExercises() {
  const { actor, isFetching } = useActor();

  return useQuery<Exercise[]>({
    queryKey: ["exercises"],
    queryFn: async () => {
      try {
        if (!actor) return SAMPLE_EXERCISES;
        const result = await actor.getAllExercises();
        if (result && result.length > 0) {
          return result as Exercise[];
        }
        return SAMPLE_EXERCISES;
      } catch {
        return SAMPLE_EXERCISES;
      }
    },
    enabled: !isFetching,
    staleTime: 5 * 60 * 1000,
  });
}
