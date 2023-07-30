import { PhotosViewToggleState } from '../../types';

export type PhotosViewToggleProps = {
  photosViewState: PhotosViewToggleState;
  setPhotosViewState: React.Dispatch<
    React.SetStateAction<PhotosViewToggleState>
  >;
};
