import { useCallback, useEffect, useRef, useState } from "react";
import ImageGallery from "react-image-gallery";
import { LIST_GALLERY } from "../../utils/data/list-gallery";
import "./Gallery.scss";

export default function Gallery() {
  const galleryRef = useRef<ImageGallery>(null);
  const galleryRef2 = useRef<ImageGallery>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleToggle = useCallback(() => {
    if (openDialog) {
      setOpenDialog(false);
      dialogRef.current!.close();
      if (dialogRef.current) {
        dialogRef.current.open = false;
      }
    } else {
      setOpenDialog(true);
      dialogRef.current!.showModal();
      if (dialogRef.current) {
        dialogRef.current.open = true;
      }
    }
  }, [openDialog]);

  const handleCancel = useCallback(() => {
    setOpenDialog(false);
    dialogRef.current!.close();
    if (dialogRef.current) {
      dialogRef.current.open = false;
    }
  }, []);

  useEffect(() => {
    const dialogElement = dialogRef.current;
    if (dialogElement) {
      dialogElement.addEventListener("cancel", handleCancel);
    }
    return () => {
      if (dialogElement) {
        dialogElement.removeEventListener("cancel", handleCancel);
      }
    };
  }, [handleCancel]);

  return (
    <div
      className="gallery item-list"
      id="galeria"
    >
      <h2>Galeria</h2>
      <p className="p-alt">
        Mais de 20 anos de carreira profissional caracterizada por diversos momentos marcantes. Confira alguns desses
        momentos:
      </p>
      <ul className="gallery-items">
        {LIST_GALLERY.map((item: { original: string | undefined; alt: string | undefined }, index: number) => (
          <li
            className="gallery-item"
            key={index}
            onClick={() => {
              handleToggle();
              galleryRef.current!.slideToIndex(index);
              galleryRef2.current!.slideToIndex(index);
            }}
          >
            <img
              src={item.original}
              alt={item.alt}
              className="gallery-card-img"
            />
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="dialog-container"
      >
        <div className="dialog-content">
          <ImageGallery
            autoPlay={false}
            showIndex={true}
            showFullscreenButton={false}
            showPlayButton={false}
            useBrowserFullscreen={false}
            showNav={false}
            ref={galleryRef}
            items={LIST_GALLERY}
            showThumbnails={false}
            slideDuration={0}
          />
        </div>
        <div className="thumbnail-bottom">
          <ImageGallery
            autoPlay={false}
            showIndex={false}
            showFullscreenButton={false}
            showPlayButton={false}
            useBrowserFullscreen={false}
            showNav={false}
            slideDuration={0}
            ref={galleryRef2}
            items={LIST_GALLERY}
            additionalClass="teste-image"
            onThumbnailClick={() => {
              setTimeout(() => {
                galleryRef.current!.slideToIndex(galleryRef2.current!.getCurrentIndex());
              }, 100);
            }}
          />
          <button
            className="dialog-close"
            onClick={handleToggle}
          >
            <i className="material-symbols-rounded">close</i>
          </button>
        </div>
      </dialog>
    </div>
  );
}
