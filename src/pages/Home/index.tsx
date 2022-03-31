import React, {useState, useEffect} from 'react'
import { AxiosResponse } from 'axios';
import 'antd/dist/antd.min.css';
import api from '../../services/api'

import * as C from './styled'
import { List } from 'antd';
import Card from '../../components/CardUser'

import { User } from '../../types/user'

const Home: React.FC = () => {
  const [list, setList] = useState<User[]>([])

  useEffect(()=> {
    api.get('users').then((response: AxiosResponse) => {
        setList(response.data);
        console.log(response.data)
    });
  },[])
  return (
      <>
          <C.Header>Lista de Usuários</C.Header>
          <C.ContainerCard>
            <List
            grid={{ gutter: 0, column: 4, xs: 1, sm: 2, md: 4, lg: 4, xl: 6,xxl: 4}}
            dataSource={list}
            renderItem={users => (
              <Card key={users.id}  
              users={users} 
              />
            )}
          >
          </List>  
          </C.ContainerCard>
          
      </>
  );
}

export default Home;