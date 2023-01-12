import Layout from '../../common/Layout';
import Button from '../../ui/Button/Button';
import Counters from '../../ui/Counters/Counters';
import bgImg from '../../../images/home-bg.jpg';
import styles from './Home.module.scss';

const Home = () => {
	return (
		<Layout height='100%' bgImg={bgImg}>
			<Button text='New' callback={()=>{}} style='main' />
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
			<Counters />
		</Layout>
	)
};

export default Home;