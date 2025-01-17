import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const selectedPlatformId = useGameQueryStore((x) => x.gameQuery.platformId);
  const selectedGenreId = useGameQueryStore((x) => x.gameQuery.genreId);
  const platform = usePlatform(selectedPlatformId ?? null);
  const genre = useGenre(selectedGenreId ?? null);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as={"h1"} marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
