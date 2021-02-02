import Image from "./Image";
const Images = (props) => {
  return (
    <div className="images">
      {props.images.map((element, index) => {
        return <Image key={index} pic={element} />;
      })}
    </div>
  );
};

export default Images;
