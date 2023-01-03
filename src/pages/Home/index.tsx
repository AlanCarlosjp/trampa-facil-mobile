import * as R from 'react';
import * as N from 'react-native';
import Header from '../../components/Header';
import styles from './styles';

const Home = () => {
    return(
        <N.SafeAreaView style={styles.container}>
            <Header />
        </N.SafeAreaView>
    )
}



export default Home;