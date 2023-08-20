import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../styles/AppStyle';
import { HomeContainer } from './HomeStyle';
import Rules from '../../components/Rules';

function Home() {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleClose = async () => {
    await setOpen(false);
    history.push('/challenger');
  };

  return (
    <HomeContainer className="container" data-aos="fade-up">
      {open && <Rules open={ open } setOpen={ setOpen } handleClose={ handleClose } />}
      <section>
        <img src="/images/pallete.png" alt="" />
        <div>
          <Button
            type="button"
            onClick={ () => history.push('/game') }
          >
            Desenho Livre
            <span>🖌️</span>
          </Button>
          <Button
            type="button"
            color="#63ba00"
            onClick={ () => setOpen(true) }
          >
            Desafios
            <span>⚡️</span>
          </Button>
        </div>
      </section>
    </HomeContainer>
  );
}

export default Home;
