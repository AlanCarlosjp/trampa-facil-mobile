import * as R from 'react';
import * as N from 'react-native';
import { Avatar } from 'react-native-paper';
import styles from './styles';
import { Surface, TextInput, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Divider } from "@react-native-material/core";


const Header = () => {
    return (
        <N.SafeAreaView style={styles.container}>
            <N.View style={styles.profileContainer}>
                <Avatar.Image size={70} source={{}} style={styles.avatar} />

                <TextInput
                    label="jobs"
                    variant="outlined"
                    trailing={props => (
                        <IconButton icon={props => <Icon name="magnify" {...props} />} {...props} />
                    )} style={styles.input}
                />
                 <Icon name="dots-vertical" size={40} color="black" style={styles.pontos}/>
            </N.View>
            <Divider style={styles.divider}/>
        </N.SafeAreaView>
    )
}


export default Header;