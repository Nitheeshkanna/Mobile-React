
import img3 from './img3.png';
import img4 from './img4.png';
import img5 from './img5.png';
import tab from './tab.png';
import tab2 from './tab2.png';
import tab3 from './tab3.png';
import laptop from './laptop.png';
import laptop2 from './laptop2.png';
import laptop3 from './laptop3.png';
import Images from './Images.js';
import Images1 from './Images2.js';

export const EXAMPLE ={
    mobile:{
        title:'Mobiles',
        image:<Images
                img ={img3}
                />,
        description:'OPPO F27Pro',
        price:'Rs.42,000',
    },
    tablets:{
        title:'Tablets',
        image:<Images
                img ={tab}
                />,
        description:'SAMSUNG GALAXY',
        price:'Rs.55,000',
    },
    laptop:{
        title:'Laptops',
        image:<Images
                img ={laptop}
                />,
        description:'Hp Laptop Intel i5',
        price:'Rs.67,000',
    }
}


export const EXAMPLES ={
    mobile:{
        titles:'Mobiles',
        images:<Images1
                img ={img4}
                />,
        description:'OnePlus 12',
        price:'Rs.62,000',
    },
    tablets:{
        titles:'Tablets',
        images:<Images1
                img ={tab2}
                />,
        description:'SAMSUNG GALAXY',
        price:'Rs.55,000',
    },
    laptop:{
        titles:'Laptops',
        images:<Images1
                img ={laptop2}
                />,
        description:'Hp Laptop Intel i5',
        price:'Rs.67,000',
    }
}
export const EXAMPLES3 ={
    mobile:{
        titles:'Mobiles',
        photo:<Images1
                img ={img5}
                />,
        description:'RedMi 13Pro',
        price:'Rs.29,000',
    },
    tablets:{
        titles:'Tablets',
        photo:<Images1
                img ={tab3}
                />,
        description:'SAMSUNG GALAXY',
        price:'Rs.55,000',
    },
    laptop:{
        titles:'Laptops',
        photo:<Images1
                img ={laptop3}
                />,
        description:'Hp Laptop Intel i5',
        price:'Rs.67,000',
    }
}