import { Flex, Rate } from 'antd';
import React from 'react';
const desc =["terrible", "bad", "normal", "good", "wonderful"];

const Rating = ({rating,setRating}) => {
    const handleChange=(value)=>{
        setRating(value);
    }
  return (
    <Flex gap='middle' vertical>
        <Rate tooltips={desc} onChange={handleChange} value={rating} />
        </Flex>
  )
}

export default Rating;