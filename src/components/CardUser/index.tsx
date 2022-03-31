import React, {useState, useEffect} from 'react';

import 'antd/dist/antd.min.css';

import { Avatar } from 'antd';

import * as  C from '../../Global.styled'
import { User } from '../../types/user'
import { Img } from '../../types/imageUsers'
import ImgUsers from '../../constats/index';

import { ContainerUser } from './styled';

type Props = {
    users: User;
}

const CardUser = ({users}: Props) => {
    const [img, setImg] = useState<Img[]>([])

    useEffect(()=> {
        setImg(ImgUsers)
        
    },[])
    return (
        <>
            {img
                .filter((res) => res.id === users.id)
                .map((user) => (
                    <>
                        <ContainerUser>
                            <div style={{border: '3px solid #FFFFFF', borderRadius: '50%', padding: 5}}>
                                <Avatar
                                    src={user.url}
                                    size={{
                                        xs: 150,
                                        sm: 120,
                                        md: 100,
                                        lg: 150,
                                        xl: 120,
                                        xxl: 150
                                    }}
                                />
                            </div>
                            <p>{users.name}</p>
                            <p>{users.email}</p>
                        </ContainerUser>
                    </>
                ))}
        </>
    );
};

export default CardUser