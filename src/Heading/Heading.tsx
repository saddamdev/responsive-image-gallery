import { BsCheckSquareFill } from 'react-icons/bs';
import './Heading.css';

interface Props {
  countSelectedItem: () => number;
  deleteSelectedItem: () => void;
}

const Heading = ({ countSelectedItem, deleteSelectedItem }: Props) => {
  const totalSelectedItem = countSelectedItem();
  let heading = 'Gallery';
  let buttonText = 'Delete File';

  if (totalSelectedItem == 1) {
    heading = totalSelectedItem + ' File Selected';
  } else if (totalSelectedItem > 1) {
    heading = totalSelectedItem + ' Files Selected';
    buttonText = 'Delete Files';
  }

  return (
    <div className='my-heading'>
      {totalSelectedItem < 1 ? (
        <h1>{heading}</h1>
      ) : (
        <h1>
          <BsCheckSquareFill color='#2196f3' size='24' /> {heading}
        </h1>
      )}
      {totalSelectedItem > 0 && (
        <button
          type='button'
          className='btn btn-outline-danger'
          onClick={deleteSelectedItem}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Heading;
