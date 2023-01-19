import Layout from '../../common/Layout';
import Button from '../../ui/Button/Button';
import Counters from '../../ui/Counters/Counters';
import bgImg from '../../../images/home-bg.jpg';
import styles from './Home.module.scss';
import { useNavigate } from "react-router-dom";

const Home = () => {
	const history = useNavigate();
	return (
    <Layout bgImg={bgImg}>
      <Button text="New" callback={() => history('/new-workout')} style="main" />
      <h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
      <Counters />
    </Layout>
  );
};

export default Home;