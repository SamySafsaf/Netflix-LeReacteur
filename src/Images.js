import Image from "./Image";
const Images = (props) => {
  console.log(props);
  return (
    <div className="images">
      {props.images.map((element, index) => {
        return <Image key={index} images={element.images} />;
      })}
    </div>
  );
};

export default Images;
