import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import Genre from "../entities/Genre";
import APIClient, { Response } from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () => useQuery<Response<Genre>, Error>({
  queryKey: ["genres"],
  queryFn: () =>
    apiClient.getAll(),
    staleTime: ms("24h"),
    initialData: genres
})

export default useGenres;
