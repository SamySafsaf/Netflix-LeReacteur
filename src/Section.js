import movies from "./movies.json";
import Category from "./Category";
import Images from "./Images";

const Section = () => {
  return (
    <div className="section">
      {movies.map((elem, index) => {
        return (
          <div>
            <Category key={index} title={elem.category} />
            <Images images={elem.images} />
          </div>
        );
      })}
    </div>
  );
};

export default Section;
