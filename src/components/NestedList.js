import React, { useState } from 'react';
import folderimg from "../foldericon/folder-svgrepo-com.svg"
const NestedList = () => {

  const [data, setData] = useState([
    {
      id: 1,
      name: 'Root 1',
      expanded: false,
      children: [
        {
          id: 11,
          name: 'Child 1.1',
          expanded: false,
          children: [
            {
              id: 111,
              name: 'Sub Child 1.1.1',
              expanded: false,
              children: [
                { id: 1111, name: 'Sub Sub Child 1.1.1.1' },
                { id: 1112, name: 'Sub Sub Child 1.1.1.2' },
              ],
            }
          ],
        },
      ],
    },
    {
        id: 2,
        name: 'Root 2',
        expanded: false,
        children: [
          {
            id: 12,
            name: 'Child 2.1',
            expanded: false,
            children: [
              {
                id: 112,
                name: 'Sub Child 2.1.1',
                expanded: false,
                children: [
                  { id: 1111, name: 'Sub Sub Child 2.1.1.1' },
                  { id: 1112, name: 'Sub Sub Child 2.1.1.2' },
                ],
              }
            ],
          },
        ],
      },
      {
        id: 3,
        name: 'Root 3',
        expanded: false,
        children: [
          {
            id: 13,
            name: 'Child 3.1',
            expanded: false,
            children: [
              {
                id: 113,
                name: 'Sub Child 3.1.1',
                expanded: false,
                children: [
                  { id: 1111, name: 'Sub Sub Child 3.1.1.1' },
                  { id: 1112, name: 'Sub Sub Child 3.1.1.2' },
                ],
              }
            ],
          },
        ],
      },
      {
        id: 4,
        name: 'Root 4',
        expanded: false,
        children: [
          {
            id: 14,
            name: 'Child 4.1',
            expanded: false,
            children: [
              {
                id: 114,
                name: 'Sub Child 4.1.1',
                expanded: false,
                children: [
                  { id: 1111, name: 'Sub Sub Child 4.1.1.1' },
                  { id: 1112, name: 'Sub Sub Child 4.1.1.2' },
                ],
              }
            ],
          },
        ],
      },{
        id: 5,
        name: 'Root 5',
        expanded: false,
        children: [
          {
            id: 15,
            name: 'Child 5.1',
            expanded: false,
            children: [
              {
                id: 112,
                name: 'Sub Child 5.1.1',
                expanded: false,
                children: [
                  { id: 1111, name: 'Sub Sub Child 5.1.1.1' },
                  { id: 1112, name: 'Sub Sub Child 5.1.1.2' },
                ],
              }
            ],
          },
        ],
      },
  ]);


  const handleClick = (itemId) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === itemId) {
          return { ...item, expanded: !item.expanded };
        } else if (item.children) {
          return {
            ...item,
            children: item.children.map((child) =>
              child.id === itemId ? { ...child, expanded: !child.expanded } : child
            ),
          };
        }
        return item;
      })
    );
  };

  const renderNestedList = (items) => {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>

<div className='folderandname'>
            <img  className='folder-icon'  src={folderimg} alt="Folder Icon" />
            <button onClick={() => handleClick(item.id)}> {item.name}</button>
            {/* Recursively render children if item is expanded */}
            </div>
            {item.expanded && item.children && renderNestedList(item.children)}
          </li>
        ))}
      </ul>
    ); 
  };

  return (
    <div className='hole-container'>
    <div className="nested-list-container">
      {/* Render the initial nested list */}
      {renderNestedList(data)}
    </div>
    </div>
  );
};


export default NestedList;
