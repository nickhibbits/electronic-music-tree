type Genre = {
  id: string;
  name: string;
  startYear: string;
  artists: Artist[];
};

type Artist = {
  id: string;
  name: string;
  genre: Genre;
  genreFamily: GenreFamily;
  releases: Release[];
};

type GenreFamily = {
  id: string;
  name: string;
};

type Release = {
  id: string;
  name: string;
  year: string;
};
