import { useState } from 'react';

import Card from 'react-bootstrap/Card';
import Button from '../../components/common/button';

const AdoptCard = ({ pet }: any) => {
  const [first, setFirst] = useState();

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={pet.img} />
      <Card.Body>
        <Card.Title>{pet.name}</Card.Title>
        <Card.Text>
          {pet.descr}
        </Card.Text>
        <Button color='#DF2F44' className='bg-white'>Adopta</Button>
      </Card.Body>
    </Card>
  );
};

export default AdoptCard;
