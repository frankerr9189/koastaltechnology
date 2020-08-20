import {useState} from 'react';

export function useFeatList(){
    const [featList, setFeatList] = useState();
    return { featList, setFeatList}
}