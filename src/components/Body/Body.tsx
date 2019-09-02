import React from 'react';
import Contents from '../Contents/Contents';
import Main from '../Main/Main';
import Detailed from '../Detailed/Detailed';

/*
let JSONinfo = {
  "fast":{},
  "children":[
    {
      "type":"folder",
      "name":"default name",
      "description":"default description",
      "isOpen":false,
      "children":[
        {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            }  
      ]
    }
  ]
}
*/


let JSONinfo =  {
  "fast":{},
  "children":[
    {
      "type":"folder",
      "name":"default name",
      "description":"default description",
      "isOpen":false,
      "children":[
        {
          "type":"folder",
          "name":"default name",
          "description":"default description",
          "isOpen":false,
          "children":[
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            }
          ]
        },
        {
          "type":"folder",
          "name":"default name",
          "description":"default description",
          "isOpen":false,
          "children":[
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            }
          ]
        },
        {
          "type":"folder",
          "name":"default name",
          "description":"default description",
          "isOpen":false,
          "children":[
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            }
          ]
        }  
      ]
    },
    {
          "type":"folder",
          "name":"default name",
          "description":"default description",
          "isOpen":false,
          "children":[
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            }
          ]
        },
    {
          "type":"folder",
          "name":"default name",
          "description":"default description",
          "isOpen":false,
          "children":[
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            }
          ]
        },
    {
      "type":"folder",
      "name":"default name",
      "description":"default description",
      "isOpen":false,
      "children":[
        {
          "type":"folder",
          "name":"default name",
          "description":"default description",
          "isOpen":false,
          "children":[
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            }
          ]
        },
        {
          "type":"folder",
          "name":"default name",
          "description":"default description",
          "isOpen":false,
          "children":[
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            }
          ]
        },
        {
          "type":"folder",
          "name":"default name",
          "description":"default description",
          "isOpen":false,
          "children":[
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            },
            {
              "type":"link",
              "name":"default name",
              "name-edited":"default name",
              "description-edited":"default description",
              "image":"image src"
            }
          ]
        }  
      ]
    }
  ]
}


const Body: React.FC = () => {

  let foldersData = JSONinfo;



  return (
    <div className='flex items-stretch px-12 min-h-full min-w-full'>
      <Contents folders={foldersData}/>
      <Main folders={foldersData}/>
      <Detailed/>
    </div>
  );
}

export default Body;

