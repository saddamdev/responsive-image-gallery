import { ReactSortable } from 'react-sortablejs';
import { LuImagePlus } from 'react-icons/lu';
import { useState } from 'react';
import './Gallery.css';

interface Image {
  id: number;
  pic: string;
  isSelected: boolean;
}

interface Props {
  imageList: Image[];
  setList: React.Dispatch<React.SetStateAction<Image[]>>;
  selectItem: (id: number) => void;
}

const Gallery = ({ imageList, setList, selectItem }: Props) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <ReactSortable
      list={imageList}
      setList={setList}
      ghostClass='dropArea'
      handle='.dragIt'
      filter='.noDrag'
      preventOnFilter={true}
      className='grid-container'
    >
      <>
        {imageList.map(({ id, pic, isSelected }) => (
          <div
            key={id}
            className='box dragIt'
            onDragStart={() => {
              setIsDragging(true);
            }}
            onDragEnd={() => {
              setIsDragging(false);
            }}
          >
            <img className='img-thumbnail' src={pic} alt='' />
            <div
              className={!isSelected ? 'overlay' : 'overlay show'}
              style={
                isDragging
                  ? { visibility: 'hidden' }
                  : { visibility: 'visible' }
              }
            >
              <input
                className='form-check-input'
                type='checkbox'
                value=''
                id='flexCheckDefault'
                onChange={() => {
                  selectItem(id);
                }}
              />
            </div>
          </div>
        ))}
        <div className='add-image noDrag'>
          <LuImagePlus size='24' />
          <p>Add Images</p>
        </div>
      </>
    </ReactSortable>
  );
};

export default Gallery;
