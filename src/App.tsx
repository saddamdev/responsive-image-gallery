import { useState } from 'react';
import Heading from './Heading/Heading';
import Gallery from './Gallery/Gallery';
import './App.css';

interface Image {
  id: number;
  pic: string;
  isSelected: boolean;
}

const App = () => {
  const imageList: Image[] = [
    { id: 1, pic: '/assets/image-1.webp', isSelected: false },
    { id: 2, pic: '/assets/image-2.webp', isSelected: false },
    { id: 3, pic: '/assets/image-3.webp', isSelected: false },
    { id: 4, pic: '/assets/image-4.webp', isSelected: false },
    { id: 5, pic: '/assets/image-5.webp', isSelected: false },
    { id: 6, pic: '/assets/image-6.webp', isSelected: false },
    { id: 7, pic: '/assets/image-7.webp', isSelected: false },
    { id: 8, pic: '/assets/image-8.webp', isSelected: false },
    { id: 9, pic: '/assets/image-9.webp', isSelected: false },
    { id: 10, pic: '/assets/image-10.jpeg', isSelected: false },
    { id: 11, pic: '/assets/image-11.jpeg', isSelected: false },
  ];

  const [list, setList] = useState(imageList);

  // This function returns the total number of selected image
  function countSelectedItem() {
    return list.filter((item) => item.isSelected).length;
  }

  // This function makes image selected or not selected
  function selectItem(id: number) {
    const updatedList = list.map((item) => {
      if (item.id == id) {
        item.isSelected = !item.isSelected;
      }
      return item;
    });

    setList(updatedList);
  }

  // This function deletes the selected images
  function deleteSelectedItem() {
    const updatedList = list.filter((item) => !item.isSelected);
    setList(updatedList);
  }

  return (
    <div className='container my-container'>
      <Heading
        countSelectedItem={countSelectedItem}
        deleteSelectedItem={deleteSelectedItem}
      />
      <hr />
      <Gallery imageList={list} setList={setList} selectItem={selectItem} />
    </div>
  );
};

export default App;
