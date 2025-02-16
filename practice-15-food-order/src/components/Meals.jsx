import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

export default function Meals() {
  const {
    data: meals,
    loading,
    error,
  } = useHttp("http://localhost:3000/meals");

  return (
    <ul id="meals">
      {error && (
        <Error
          title="Failed to fetch meals"
          message={error.message || "Something went wrong."}
        />
      )}
      {loading && <p className="center">Fetching meals...</p>}
      {meals?.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
