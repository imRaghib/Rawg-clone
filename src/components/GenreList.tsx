import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <>
      {data.map((data) => (
        <li>{data.name}</li>
      ))}
    </>
  );
};

export default GenreList;
