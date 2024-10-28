import "./ContainerImage.scss";

export default function ContainerImage({
  image,
  children,
  image_side = "left",
  id,
}: {
  image: string;
  id: string;
  children: React.ReactNode;
  image_side?: "left" | "right";
}) {
  return (
    <section
      className="container-image item-list"
      id={id}
    >
      {image_side === "left" && (
        <img
          src={image}
          alt="Herleson Pontes"
          className="container-image-img"
        />
      )}
      <div className="container-image-content">{children}</div>
      {image_side === "right" && (
        <img
          src={image}
          alt="Herleson Pontes"
          className="container-image-img"
        />
      )}
    </section>
  );
}
